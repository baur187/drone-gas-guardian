import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LangProvider, useLang } from "./useLang";
import { initHeroScene } from "./threeHero";
import { ProblemSection, MarketSection, ModelSection, DigitalSection, RtocSection, PredictiveSection } from "./sections";
import { KpiSection, TeamSection, RoadmapSection } from "./sections2";
import "./wes.css";

gsap.registerPlugin(ScrollTrigger);

const LangSwitch = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="wes-lang flex gap-1" role="group" aria-label="Language">
      <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")} aria-pressed={lang === "ru"}>RU</button>
      <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
    </div>
  );
};

const Nav = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="wes-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 h-16 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-2.5 shrink-0">
          <span className="wes-display text-lg font-semibold tracking-wide">WES</span>
          <span className="wes-mono text-[9px] tracking-[0.2em] hidden sm:inline" style={{ color: "var(--wes-muted)" }}>IPM / IDS</span>
        </a>
        <nav className="hidden xl:flex items-center gap-7" aria-label="Sections">
          {t.nav.items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="wes-mono text-[11px] tracking-wider uppercase transition-colors hover:text-[var(--wes-amber)]" style={{ color: "var(--wes-muted)" }}>
              {it.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LangSwitch />
          <a href="#contact" className="wes-btn !py-2 !px-4 !text-[11px] hidden md:inline-flex">{t.nav.cta}</a>
          <button
            className="xl:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="w-5 h-px bg-current transition-transform" style={{ transform: open ? "translateY(3px) rotate(45deg)" : "" }} />
            <span className="w-5 h-px bg-current transition-transform" style={{ transform: open ? "translateY(-3px) rotate(-45deg)" : "" }} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="xl:hidden border-t px-5 py-6 flex flex-col gap-5" style={{ borderColor: "var(--wes-line)", background: "var(--wes-bg)" }} aria-label="Sections">
          {t.nav.items.map((it) => (
            <a key={it.id} href={`#${it.id}`} onClick={() => setOpen(false)} className="wes-mono text-[13px] tracking-wider uppercase" style={{ color: "var(--wes-muted)" }}>
              {it.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="wes-btn self-start">{t.nav.cta}</a>
        </nav>
      )}
    </header>
  );
};

const Hero = () => {
  const { t } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    return initHeroScene(canvasRef.current);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(5,8,15,0.25) 0%, rgba(5,8,15,0.05) 45%, rgba(5,8,15,0.9) 100%)" }} />

      <div className="relative max-w-7xl mx-auto w-full px-5 md:px-10 lg:px-16 pt-32 pb-16 md:pb-20">
        <p className="wes-kicker mb-7" data-hero-fade>{t.hero.kicker}</p>
        <h1 className="wes-display font-medium leading-[1.05] text-[clamp(2rem,6.2vw,4.6rem)] max-w-5xl">
          {t.hero.titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span className="block" data-hero-line>{line}</span>
            </span>
          ))}
        </h1>
        <p className="mt-7 text-base md:text-xl max-w-2xl leading-relaxed" data-hero-fade>{t.hero.subtitle}</p>
        <p className="mt-5 text-[13.5px] md:text-[14.5px] max-w-3xl leading-relaxed" style={{ color: "var(--wes-muted)" }} data-hero-fade>
          {t.hero.executive}
        </p>
        <div className="mt-9 flex flex-wrap gap-4" data-hero-fade>
          <a href="#contact" className="wes-btn">{t.hero.ctaPrimary} →</a>
          <a href="#market" className="wes-btn wes-btn--ghost">{t.hero.ctaSecondary}</a>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t pt-8" style={{ borderColor: "var(--wes-line)" }} data-hero-fade>
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <div className="wes-display text-2xl md:text-3xl" style={{ color: "var(--wes-amber)" }}>{s.value}</div>
              <div className="text-[12px] mt-2 leading-snug" style={{ color: "var(--wes-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 hidden md:flex flex-col items-center gap-3" data-hero-fade>
        <span className="wes-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--wes-muted)", writingMode: "vertical-rl" }}>{t.hero.scroll}</span>
        <span className="wes-scroll-hint" />
      </div>
    </section>
  );
};

const Positioning = () => {
  const { t } = useLang();
  return (
    <section className="px-5 md:px-10 lg:px-16 py-16 md:py-24" aria-label="Positioning">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-px border" style={{ borderColor: "var(--wes-line)", background: "var(--wes-line)" }} data-reveal-group>
        {t.hero.positioning.map((p, i) => (
          <div key={p.name} className="p-7 md:p-9" style={{ background: i === 2 ? "var(--wes-amber-dim)" : "var(--wes-bg)" }}>
            <span className="wes-display text-xl md:text-2xl block mb-4" style={{ color: i === 2 ? "var(--wes-amber)" : "var(--wes-text)" }}>{p.name}</span>
            <p className="text-[14px] leading-relaxed" style={{ color: i === 2 ? "var(--wes-text)" : "var(--wes-muted)" }}>{p.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Marquee = () => {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div className="wes-marquee" aria-hidden="true">
      <div className="wes-marquee-track">
        {items.map((x, i) => (
          <span key={i} className="wes-mono text-[12px] tracking-[0.15em] uppercase whitespace-nowrap flex items-center gap-12" style={{ color: "var(--wes-muted)" }}>
            {x} <i className="w-1 h-1 rounded-full inline-block" style={{ background: "var(--wes-amber)" }} />
          </span>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="px-5 md:px-10 lg:px-16 py-12 border-t" style={{ borderColor: "var(--wes-line)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <span className="wes-display text-2xl font-semibold block mb-4">WES</span>
          <p className="text-[13.5px] leading-relaxed mb-3" style={{ color: "var(--wes-muted)" }}>{t.footer.line}</p>
          <p className="wes-mono text-[10.5px]" style={{ color: "var(--wes-muted)", opacity: 0.7 }}>{t.footer.note}</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="wes-mono text-[10.5px]" style={{ color: "var(--wes-muted)" }}>{t.footer.lang}:</span>
          <LangSwitch />
          <span className="wes-mono text-[10.5px]" style={{ color: "var(--wes-muted)" }}>© 2026 WES</span>
        </div>
      </div>
    </footer>
  );
};

const PageInner = () => {
  const { lang } = useLang();
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      gsap.to(".wes-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: pageRef.current, start: "top top", end: "bottom bottom", scrub: 0.4 },
      });

      if (reduced) return;

      gsap.from("[data-hero-line]", {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from("[data-hero-fade]", {
        y: 26,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.09,
        delay: 0.55,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        gsap.from(group.children, {
          y: 32,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 86%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".wes-bar-fill").forEach((bar) => {
        gsap.to(bar, {
          width: `${bar.dataset.pct}%`,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: { trigger: bar, start: "top 92%" },
        });
      });
    }, pageRef);

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [lang]);

  return (
    <div ref={pageRef} className="wes wes-noise min-h-screen">
      <div className="wes-progress" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Positioning />
        <ProblemSection />
        <MarketSection />
        <ModelSection />
        <DigitalSection />
        <RtocSection />
        <PredictiveSection />
        <KpiSection />
        <TeamSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
};

const WesLanding = () => (
  <LangProvider>
    <PageInner />
  </LangProvider>
);

export default WesLanding;
