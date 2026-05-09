import { createFileRoute } from "@tanstack/react-router";
import { RavenMark } from "@/components/RavenMark";
import { Sparks } from "@/components/Sparks";
import heroImg from "@/assets/raven-hero.jpg";
import discoveryTex from "@/assets/discovery-texture.jpg";
import alchemyImg from "@/assets/alchemy.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Raven Studio — Stories Forged in Code & Ink" },
      {
        name: "description",
        content:
          "A high-fidelity storytelling agency. Writer, storyteller, programmer — crafting narratives where mystery meets craft.",
      },
      { property: "og:title", content: "The Raven Studio" },
      { property: "og:description", content: "Stories forged in code & ink. A high-fidelity storytelling agency." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between glass rounded-b-2xl">
        <a href="#top" className="flex items-center gap-3 group">
          <RavenMark className="h-8 w-8 transition-transform duration-500 group-hover:-rotate-6" />
          <span className="serif text-lg tracking-wide">
            The <span className="text-gradient-gold">Raven</span> Studio
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#discovery" className="hover:text-foreground transition-colors">Discovery</a>
          <a href="#alchemy" className="hover:text-foreground transition-colors">Alchemy</a>
          <a href="#revelation" className="hover:text-foreground transition-colors">Revelation</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] ring-gold-glow hover:translate-y-[-1px] transition-transform"
        >
          Commission
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-aurora)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <Sparks count={26} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-32 lg:pt-56">
        <div className="max-w-2xl">
          <p className="reveal text-xs uppercase tracking-[0.4em] text-[color:var(--color-silver)] mb-6">
            Writer · Storyteller · Programmer
          </p>
          <h1 className="reveal reveal-delay-1 serif text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Stories forged
            <br />
            in <span className="text-gradient-gold italic">code</span> &amp; ink.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            The Raven Studio is a high-fidelity storytelling atelier. We craft narratives the way
            jewelers cut stones — patient, exact, luminous in the dark.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#alchemy"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] ring-gold-glow hover:translate-y-[-1px] transition-transform"
            >
              Enter the Studio
              <span aria-hidden>↗</span>
            </a>
            <a
              href="#revelation"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium border border-[color:var(--color-silver)]/30 hover:border-[color:var(--color-gold)]/60 transition-colors"
            >
              See the work
            </a>
          </div>

          <div className="reveal reveal-delay-3 mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              ["12", "Years writing"],
              ["80+", "Stories shipped"],
              ["3", "Languages, one craft"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="serif text-3xl text-gradient-gold">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[color:var(--color-silver)]">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-[color:var(--color-gold)] to-transparent" />
      </div>
    </section>
  );
}

function Discovery() {
  const items = [
    { k: "I", t: "Listen", d: "Every commission begins in silence. We map your world before we name it." },
    { k: "II", t: "Excavate", d: "We dig until the story's bones glint — themes, tensions, the unsaid thing." },
    { k: "III", t: "Frame", d: "A north star sentence. The promise the rest of the work must keep." },
  ];
  return (
    <section id="discovery" className="relative py-32 overflow-hidden">
      <img src={discoveryTex} alt="" width={1280} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--color-gold)] mb-4">
              I — Discovery
            </p>
            <h2 className="serif text-4xl md:text-6xl max-w-2xl">
              The mystery <span className="italic text-gradient-gold">that illuminates.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Before a single line is written, we descend into the dark — listening for the shape of
            what wants to be said.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[color:var(--color-border)] rounded-2xl overflow-hidden">
          {items.map((it) => (
            <article
              key={it.k}
              className="group relative bg-card p-10 hover:bg-[color:var(--color-secondary)] transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="serif text-[color:var(--color-gold)] text-2xl">{it.k}</span>
                <span className="h-px w-12 bg-[color:var(--color-silver)]/40 group-hover:w-20 group-hover:bg-[color:var(--color-gold)] transition-all duration-500" />
              </div>
              <h3 className="serif text-3xl mb-4">{it.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Alchemy() {
  const steps = [
    { t: "Concept", d: "Mythic structures meet contemporary voice." },
    { t: "Draft", d: "Long-form prose, screenplays, brand epics." },
    { t: "Build", d: "TypeScript, React, custom narrative engines." },
    { t: "Polish", d: "Line-by-line, pixel-by-pixel — until it sings." },
  ];
  return (
    <section id="alchemy" className="relative py-32 overflow-hidden">
      <Sparks count={14} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-aurora)] blur-2xl opacity-70" />
          <div className="relative rounded-3xl overflow-hidden border border-[color:var(--color-gold)]/20 ring-gold-glow">
            <img src={alchemyImg} alt="A vessel of glowing gold liquid amid silver sparks" width={1280} height={1280} loading="lazy" className="w-full h-full object-cover float-slow" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--color-gold)] mb-4">II — Alchemy</p>
          <h2 className="serif text-4xl md:text-6xl mb-8 leading-tight">
            Where words meet <span className="italic text-gradient-gold">circuitry.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
            I write like a programmer and code like a writer. Every paragraph compiles. Every
            interface tells a story. The seam between them is where the gold appears.
          </p>

          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-6 items-start group">
                <span className="serif text-2xl text-[color:var(--color-silver)] group-hover:text-[color:var(--color-gold)] transition-colors w-10 shrink-0">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="serif text-2xl mb-1">{s.t}</h3>
                  <p className="text-muted-foreground">{s.d}</p>
                  <div className="hairline mt-5" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Revelation() {
  const works = [
    { img: g1, t: "Of Pages & Stars", k: "Novella · 2025", d: "An epistolary descent into memory." },
    { img: g2, t: "Featherwork", k: "Brand Identity", d: "Sculpting voice for a Lisbon atelier." },
    { img: g3, t: "Constellations.ts", k: "Interactive · Code", d: "A generative essay on naming things." },
  ];
  return (
    <section id="revelation" className="relative py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--color-gold)] mb-4">III — Revelation</p>
          <h2 className="serif text-4xl md:text-6xl mb-6">
            The <span className="italic text-gradient-gold">gallery.</span>
          </h2>
          <p className="text-muted-foreground">High-resolution artifacts from recent commissions and personal expeditions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {works.map((w, i) => (
            <article
              key={w.t}
              className={`group relative rounded-2xl overflow-hidden border border-[color:var(--color-border)] hover:border-[color:var(--color-gold)]/40 transition-all duration-500 ${i === 1 ? "md:translate-y-10" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={w.img}
                  alt={w.t}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)] mb-2">{w.k}</p>
                <h3 className="serif text-2xl mb-1">{w.t}</h3>
                <p className="text-sm text-muted-foreground">{w.d}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-foreground/80 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  View piece <span aria-hidden>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <RavenMark className="h-14 w-14 mx-auto mb-8 float-slow" />
        <h2 className="serif text-4xl md:text-6xl mb-6 leading-tight">
          Have a story <span className="italic text-gradient-gold">worth telling?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Books, brands, software with soul. I take on a small number of commissions each season.
        </p>
        <a
          href="mailto:hello@theraven.studio"
          className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] ring-gold-glow hover:translate-y-[-1px] transition-transform"
        >
          hello@theraven.studio
          <span aria-hidden>↗</span>
        </a>

        <div className="hairline mt-24 mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} The Raven Studio. All rites reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Substack</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Are.na</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Discovery />
      <Alchemy />
      <Revelation />
      <Contact />
    </main>
  );
}
