"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Subtle rotating wireframe globe with orbital satellites.
 * Pauses when off-screen or tab hidden. Respects prefers-reduced-motion.
 */
export default function GlobeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Wireframe globe (icosphere for clean lines)
    const geo = new THREE.IcosahedronGeometry(2, 4);
    const wire = new THREE.WireframeGeometry(geo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
    });
    const globe = new THREE.LineSegments(wire, lineMat);
    scene.add(globe);

    // Dotted continent points — fibonacci sphere for even distribution
    const pointsGeo = new THREE.BufferGeometry();
    const N = 600;
    const positions = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      // bias points slightly to land-ish latitudes by randomly dropping ~40%
      if (Math.random() > 0.65) {
        positions[i * 3] = 0;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = 0;
        continue;
      }
      const r = 2.02;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0xfcee0a,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // Satellites — orbiting points at different inclinations
    type Sat = {
      mesh: THREE.Mesh;
      radius: number;
      speed: number;
      angle: number;
      inclination: number;
      node: THREE.Vector3;
    };
    const sats: Sat[] = [];
    const satColors = [0x00f0ff, 0xfcee0a, 0xff2a6d];
    for (let i = 0; i < 6; i++) {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 12, 12),
        new THREE.MeshBasicMaterial({
          color: satColors[i % 3],
          transparent: true,
          opacity: 0.95,
        })
      );
      // glow sphere
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 12, 12),
        new THREE.MeshBasicMaterial({
          color: satColors[i % 3],
          transparent: true,
          opacity: 0.18,
        })
      );
      m.add(glow);
      scene.add(m);
      sats.push({
        mesh: m,
        radius: 2.6 + Math.random() * 0.6,
        speed: 0.12 + Math.random() * 0.18,
        angle: Math.random() * Math.PI * 2,
        inclination: (Math.random() - 0.5) * Math.PI,
        node: new THREE.Vector3(),
      });
    }

    let running = !reduced;
    let raf = 0;
    const clock = new THREE.Clock();

    function render() {
      const dt = clock.getDelta();
      globe.rotation.y += 0.05 * dt;
      globe.rotation.x += 0.01 * dt;
      points.rotation.copy(globe.rotation);

      for (const s of sats) {
        s.angle += s.speed * dt;
        const x = s.radius * Math.cos(s.angle);
        const z = s.radius * Math.sin(s.angle);
        // apply inclination
        s.node.set(x, z * Math.sin(s.inclination), z * Math.cos(s.inclination));
        s.mesh.position.copy(s.node);
      }
      renderer.render(scene, camera);
      if (running) raf = requestAnimationFrame(render);
    }

    render();

    // Pause when off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduced) {
          if (!running) {
            running = true;
            clock.getDelta(); // reset delta
            render();
          }
        } else {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(mount);

    // Pause when tab hidden
    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        clock.getDelta();
        render();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    // Resize
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      renderer.dispose();
      wire.dispose();
      geo.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      lineMat.dispose();
      sats.forEach((s) => {
        (s.mesh.geometry as THREE.BufferGeometry).dispose();
        (s.mesh.material as THREE.Material).dispose();
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
    />
  );
}
