import Image from "next/image";
import {
  ArrowUpRight,
  Truck,
  Layers,
  Cpu,
} from "lucide-react";
import GlobeBackground from "./components/GlobeBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <Hero />
      <TrustStrip />
      <POVBlock />
      <Services />
      <FeaturedSolutions />
      <Process />
      <Outcomes />
      <Founder />
      <Industries />
      <CTABand />
      <Footer />
    </main>
  );
}

/* --------------------------------------------------------------- NAV */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink/80 border-b border-[var(--hairline)]">
      <div className="max-w-[1240px] mx-auto px-6 h-64 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="KenteK"
            width={1200}
            height={320}
            priority
            className="h-56 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 font-heading uppercase tracking-widest text-sm text-ktext/80">
          <a href="#services" className="hover:text-kcyan transition-colors">
            Services
          </a>
          <a href="#solutions" className="hover:text-kcyan transition-colors">
            Solutions
          </a>
          <a href="#process" className="hover:text-kcyan transition-colors">
            Process
          </a>
          <a href="#founder" className="hover:text-kcyan transition-colors">
            About
          </a>
        </nav>
        <a
          href="#contact"
          className="clip-shard bg-kyellow text-ink px-5 py-2.5 font-heading uppercase tracking-wider text-sm font-semibold hover:shadow-[0_0_24px_rgba(252,238,10,0.45)] transition-shadow"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

/* --------------------------------------------------------------- HERO */
function Hero() {
  return (
    <section
      id="top"
      className="relative bg-deeper bg-crosshatch overflow-hidden"
    >
      <GlobeBackground />
      <div className="max-w-[1240px] mx-auto px-6 pt-24 pb-28 md:pt-36 md:pb-40 relative z-10">
        <div className="font-mono text-kcyan text-xs tracking-widest mb-5 fade-rise">
          <span className="text-kmagenta">●</span>&nbsp; KENTEK // GIS CONSULTANCY // BRISBANE AU
        </div>
        <h1
          className="hero-title glitch headline-reveal"
          data-text="KENTEK systems dialled in."
        >
          KENTEK systems dialled in.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-ktext/85 max-w-3xl fade-rise font-light leading-relaxed">
          A GIS consultancy for organisations running serious spatial
          infrastructure — and wanting more out of it. We modernise stacks, ship
          custom solutions, and turn maps into operational edge.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center gap-4 fade-rise"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="#contact"
            className="clip-shard bg-kyellow text-ink px-8 py-3.5 font-heading uppercase tracking-wider text-sm font-bold hover:shadow-[0_0_32px_rgba(252,238,10,0.5)] transition-shadow"
          >
            Book a discovery call
          </a>
          <a
            href="#solutions"
            className="px-6 py-3.5 border border-kcyan/40 font-heading uppercase tracking-wider text-sm text-kcyan hover:border-kcyan hover:shadow-cyan-hot transition-all flex items-center gap-2"
          >
            See what we build
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div
          className="mt-16 font-mono text-xs text-kmuted tracking-wider fade-rise"
          style={{ animationDelay: "400ms" }}
        >
          LAT −27.4705 &nbsp;//&nbsp; LON 153.0260 &nbsp;//&nbsp; STATUS{" "}
          <span className="text-kmagenta">● LIVE</span>
        </div>
      </div>

      {/* Wing motif SVG bleeding off right edge */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-[780px] opacity-10"
        viewBox="0 0 800 400"
        fill="none"
      >
        <path
          d="M20 220 Q 200 40 400 180 Q 560 260 780 120"
          stroke="#00f0ff"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M60 280 Q 240 120 440 240 Q 620 320 780 200"
          stroke="#fcee0a"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </section>
  );
}

/* --------------------------------------------------------------- TRUST */
function TrustStrip() {
  const items = [
    "Esri",
    "PostGIS",
    "FastAPI",
    "OR-Tools",
    "OSRM",
    "HERE",
    "Google Maps",
    "AWS",
  ];
  return (
    <section className="border-y border-[var(--hairline)] bg-panel/50">
      <div className="max-w-[1240px] mx-auto px-6 py-8">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="font-mono text-[10px] text-kcyan tracking-widest">
            01 // OUR TECHNOLOGY
          </div>
          <div className="flex-1 flex items-center gap-8 flex-wrap text-kmuted font-heading uppercase tracking-wider text-sm">
            {items.map((i) => (
              <span
                key={i}
                className="hover:text-ktext transition-colors cursor-default"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- POV */
function POVBlock() {
  return (
    <section className="bg-dotgrid">
      <div className="max-w-[1240px] mx-auto px-6 py-28 md:py-36">
        <div className="font-mono text-xs text-kcyan tracking-widest mb-6">
          02 // WHY KENTEK
        </div>
        <h2 className="font-display font-black uppercase text-3xl md:text-5xl leading-[1.05] tracking-wider max-w-4xl">
          Most spatial stacks<br />
          <span className="text-kcyan glow-cyan">are underused.</span>
        </h2>
        <p className="mt-8 text-lg text-ktext/80 max-w-3xl leading-relaxed">
          Organisations pay for sophisticated GIS platforms and then use a
          fraction of what they offer. Data sits unlinked. Routing runs on gut
          feel. Field teams work on paper. We fix that — by modernising what
          you have, replacing what&apos;s holding you back, and building the
          missing pieces.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- SERVICES */
function Services() {
  const services = [
    {
      n: "01",
      icon: Layers,
      title: "Spatial Enablement",
      body: "We audit your stack, find the gaps, and upskill your team so GIS becomes a shared capability — not a shelved tool. Faster decisions, less licensing waste, data that connects.",
    },
    {
      n: "02",
      icon: Cpu,
      title: "Custom Solutions",
      body: "When off-the-shelf falls short, we build. APIs, web apps, workers, dashboards — designed around your operations, not the other way around.",
    },
    {
      n: "03",
      icon: Truck,
      title: "Operations & Routing",
      body: "We optimise how your field teams move. Route planning, dispatch, mobile workflows, and live tracking — built on proven open-source and commercial engines.",
    },
  ];
  return (
    <section id="services" className="bg-ink border-t border-[var(--hairline)]">
      <div className="max-w-[1240px] mx-auto px-6 py-28 md:py-36">
        <div className="font-mono text-xs text-kcyan tracking-widest mb-4">
          03 // WHAT WE DO
        </div>
        <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-wider mb-14">
          Three pillars.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="clip-notch bg-panel border border-[var(--hairline)] p-8 hover:border-[var(--hairline-hot)] hover:shadow-cyan-hot transition-all group"
              >
                <div className="flex items-start justify-between mb-8">
                  <Icon size={28} className="text-kcyan" strokeWidth={1.25} />
                  <span className="font-mono text-[10px] text-kmuted tracking-widest">
                    SERVICE / {s.n}
                  </span>
                </div>
                <h3 className="font-heading uppercase tracking-wider text-xl font-bold mb-3 group-hover:text-kcyan transition-colors">
                  {s.title}
                </h3>
                <p className="text-ktext/75 text-[15px] leading-relaxed">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- SOLUTIONS */
function FeaturedSolutions() {
  return (
    <section
      id="solutions"
      className="bg-deeper bg-crosshatch border-y border-[var(--hairline)]"
    >
      <div className="max-w-[1240px] mx-auto px-6 py-28 md:py-36">
        <div className="font-mono text-xs text-kcyan tracking-widest mb-4">
          04 // SOLUTIONS WE&apos;VE BUILT
        </div>
        <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-wider mb-14">
          Working product,<br />
          <span className="text-kyellow glow-yellow">not slides.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <SolutionCard
            tag="SOLUTION / 01"
            title="Route Command"
            body="Multi-tenant route optimisation for field service teams. Unlimited orders, open-source engines, mobile-ready field app. Built to replace legacy VRP systems without the licensing tax."
            href="https://route-command.com/"
          />
          <SolutionCard
            tag="SOLUTION / 02"
            title="Darkserver"
            body="An ArcGIS Enterprise-compatible API — drop-in integration with the Esri ecosystem, without the Esri infrastructure footprint. Lean, standards-based, deployable anywhere."
            href="https://darkservergis.com/arcgis/home/"
          />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  tag,
  title,
  body,
  href,
}: {
  tag: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="clip-notch relative bg-panel border border-[var(--hairline)] p-10 hover:border-[var(--hairline-hot)] hover:shadow-cyan-hot transition-all group flex flex-col"
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-kyellow" />
      <div className="flex items-start justify-between mb-10">
        <span className="font-mono text-[10px] text-kyellow tracking-widest">
          {tag}
        </span>
        <ArrowUpRight
          size={20}
          className="text-kcyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
        />
      </div>
      <h3 className="font-display font-black uppercase text-3xl md:text-4xl text-kyellow mb-5 tracking-wider group-hover:glow-yellow">
        {title}
      </h3>
      <p className="text-ktext/80 leading-relaxed max-w-xl">{body}</p>
      <div className="mt-8 font-heading uppercase tracking-widest text-xs text-kcyan flex items-center gap-2">
        Explore → <div className="h-[1px] flex-1 bg-kcyan/30 max-w-[120px]" />
      </div>
    </a>
  );
}

/* --------------------------------------------------------------- PROCESS */
function Process() {
  const steps = [
    { n: "1", t: "Discover", b: "Listen, audit, map the terrain." },
    { n: "2", t: "Design", b: "Architecture and pilots that de-risk the build." },
    { n: "3", t: "Build", b: "Ship working software against real operations." },
    { n: "4", t: "Enable", b: "Handover, training, and ongoing uplift." },
  ];
  return (
    <section id="process" className="bg-ink">
      <div className="max-w-[1240px] mx-auto px-6 py-28 md:py-36">
        <div className="font-mono text-xs text-kcyan tracking-widest mb-4">
          05 // HOW WE WORK
        </div>
        <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-wider mb-14">
          Four steps.
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-14 right-[-24px] h-[1px] bg-gradient-to-r from-kcyan/40 to-transparent" />
              )}
              <div className="flex items-center gap-4 mb-4">
                <div className="clip-shard bg-kyellow text-ink w-12 h-12 flex items-center justify-center font-display text-xl font-bold">
                  {s.n}
                </div>
                <h3 className="font-heading uppercase tracking-wider text-xl font-bold">
                  {s.t}
                </h3>
              </div>
              <p className="text-ktext/75 text-[15px] leading-relaxed">
                {s.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- OUTCOMES */
function Outcomes() {
  const metrics = [
    { v: "15%", l: "saving on time & energy", s: "across field operations" },
    { v: "30%", l: "faster dispatch", s: "across live customer runs" },
    { v: "0", l: "licensing lock-in", s: "on our open-source stacks" },
  ];
  return (
    <section className="bg-panel/40 border-y border-[var(--hairline)] bg-dotgrid">
      <div className="max-w-[1240px] mx-auto px-6 py-28 md:py-36">
        <div className="font-mono text-xs text-kcyan tracking-widest mb-4">
          06 // OUTCOMES
        </div>
        <h2 className="font-display font-black uppercase text-3xl md:text-5xl tracking-wider mb-14">
          What changes,<br />
          <span className="text-kcyan glow-cyan">measurably.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {metrics.map((m) => (
            <div key={m.l}>
              <div className="font-display font-black text-kcyan glow-cyan text-7xl md:text-8xl leading-none mb-4">
                {m.v}
              </div>
              <div className="font-heading uppercase tracking-widest text-sm text-ktext mb-1">
                {m.l}
              </div>
              <div className="font-mono text-xs text-kmuted">{m.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- FOUNDER */
function Founder() {
  return (
    <section id="founder" className="bg-ink">
      <div className="max-w-[1240px] mx-auto px-6 py-28 md:py-36 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <div className="clip-notch bg-panel border border-[var(--hairline)] aspect-[4/5] relative overflow-hidden">
            <video
              src="/headshot.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-kcyan/10 via-transparent to-kmagenta/10 pointer-events-none" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-kcyan tracking-widest">
              FOUNDER // 01
            </div>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center">
          <div className="font-mono text-xs text-kcyan tracking-widest mb-4">
            07 // WHO&apos;S BEHIND IT
          </div>
          <div className="mb-6">
            <div className="font-display font-black uppercase text-3xl md:text-4xl tracking-wider text-ktext">
              Tristan Kent
            </div>
            <div className="font-heading uppercase tracking-widest text-sm text-kcyan mt-1">
              Founder &amp; CEO
            </div>
          </div>
          <blockquote className="font-display font-black uppercase text-2xl md:text-4xl leading-tight tracking-wider text-kyellow glow-yellow mb-8">
            &ldquo;GIS is only valuable when it changes how the work actually
            gets done.&rdquo;
          </blockquote>
          <p className="text-ktext/85 text-lg leading-relaxed mb-4">
            KenteK is founded and led by Tristan Kent, a spatial engineer with
            years of experience building production GIS, routing, and field
            operations systems for government and enterprise clients across
            Australia.
          </p>
          <p className="text-kmuted text-[15px] leading-relaxed">
            Previously delivered spatial infrastructure for Brisbane City
            Council, utilities, and field service operations — the same systems
            that underpin Route Command and Darkserver today.
          </p>
          <a
            href="https://www.linkedin.com/in/tristandkent/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-heading uppercase tracking-widest text-sm text-kcyan hover:glow-cyan"
          >
            Connect on LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- INDUSTRIES */
function Industries() {
  const chips = [
    "Government",
    "Utilities",
    "Infrastructure",
    "Field Services",
    "Emergency Management",
    "Logistics",
  ];
  return (
    <section className="bg-panel/30 border-y border-[var(--hairline)]">
      <div className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="font-mono text-xs text-kcyan tracking-widest mb-6">
          08 // WHERE WE WORK
        </div>
        <div className="flex flex-wrap gap-3">
          {chips.map((c) => (
            <span
              key={c}
              className="clip-notch px-5 py-2.5 border border-[var(--hairline)] font-heading uppercase tracking-wider text-sm text-ktext/85 hover:border-kcyan hover:text-kcyan transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- CTA */
function CTABand() {
  return (
    <section
      id="contact"
      className="bg-deeper bg-crosshatch relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 py-32 md:py-40 text-center relative z-10">
        <div className="font-mono text-xs text-kcyan tracking-widest mb-6">
          09 // GET IN TOUCH
        </div>
        <h2 className="font-display font-black uppercase text-kyellow glow-yellow text-4xl md:text-6xl leading-tight tracking-wider mb-6 max-w-4xl mx-auto">
          Let&apos;s put your spatial<br />stack to work.
        </h2>
        <p className="text-lg text-ktext/80 max-w-2xl mx-auto mb-10">
          A 30-minute discovery call. No slides. We listen, you leave with one
          concrete idea.
        </p>
        <a
          href="mailto:sales@kentspatialservices.com.au?subject=KenteK%20discovery%20call"
          className="clip-shard inline-block bg-kyellow text-ink px-10 py-4 font-heading uppercase tracking-widest text-sm font-bold hover:shadow-[0_0_40px_rgba(252,238,10,0.5)] transition-shadow"
        >
          Book the call →
        </a>
        <div className="mt-10 font-mono text-xs text-kmuted tracking-widest">
          INFO@KENTSPATIALSERVICES.COM.AU &nbsp;//&nbsp; BRISBANE AU &nbsp;//&nbsp;{" "}
          <span className="text-kmagenta">● ACCEPTING CLIENTS</span>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- FOOTER */
function Footer() {
  return (
    <footer className="bg-ink border-t border-[var(--hairline)]">
      <div className="max-w-[1240px] mx-auto px-6 py-12">
        <hr className="hr-cyan mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/logo.png"
            alt="KenteK"
            width={200}
            height={50}
            className="h-12 w-auto opacity-90"
          />
          <div className="font-mono text-xs text-kmuted tracking-widest text-center">
            KENTEK // BRISBANE AU // INFO@KENTSPATIALSERVICES.COM.AU // LAT
            −27.47 LON 153.02
          </div>
          <div className="font-mono text-xs text-kmuted tracking-widest">
            © 2026 KENTEK PTY LTD
          </div>
        </div>
      </div>
    </footer>
  );
}
