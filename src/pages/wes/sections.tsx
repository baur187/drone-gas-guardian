import { ReactNode } from "react";
import { useLang } from "./useLang";

export const SectionHead = ({
  num,
  kicker,
  title,
  subtitle,
}: {
  num: string;
  kicker: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="max-w-4xl" data-reveal>
    <div className="flex items-center gap-4 mb-5">
      <span className="wes-num">{num} /</span>
      <span className="wes-kicker">{kicker}</span>
    </div>
    <h2 className="wes-h2">{title}</h2>
    {subtitle && <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: "var(--wes-muted)" }}>{subtitle}</p>}
  </div>
);

export const Section = ({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`relative px-5 md:px-10 lg:px-16 py-20 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

/* ============ 02 · PROBLEM ============ */

const SpiderDiagram = () => {
  const { t } = useLang();
  const cx = 320;
  const cy = 270;
  const R = 200;
  return (
    <svg viewBox="0 0 640 540" className="w-full max-w-[640px] mx-auto" role="img" aria-label={t.problem.diagramLabel}>
      {t.problem.contractors.map((name, i) => {
        const a = (i / t.problem.contractors.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * R;
        const y = cy + Math.sin(a) * R * 0.92;
        const mx = cx + Math.cos(a) * R * 0.52;
        const my = cy + Math.sin(a) * R * 0.92 * 0.52;
        return (
          <g key={name}>
            {/* broken interface: two segments with a red loss point in the gap */}
            <line x1={cx} y1={cy} x2={cx + (mx - cx) * 0.82} y2={cy + (my - cy) * 0.82} stroke="var(--wes-line-strong)" strokeWidth="1" className="wes-dash-line" />
            <line x1={cx + (mx - cx) * 1.22} y1={cy + (my - cy) * 1.22} x2={x} y2={y} stroke="var(--wes-line-strong)" strokeWidth="1" className="wes-dash-line" />
            <circle cx={mx} cy={my} r="4.5" fill="var(--wes-red)" className={i % 2 ? "wes-blink" : undefined} />
            <circle cx={x} cy={y} r="5" fill="none" stroke="var(--wes-muted)" strokeWidth="1.2" />
            <text x={x} y={y + (Math.sin(a) > 0.3 ? 24 : Math.sin(a) < -0.3 ? -16 : 5)} dx={Math.cos(a) > 0.3 ? 14 : Math.cos(a) < -0.3 ? -14 : 0} textAnchor={Math.abs(Math.cos(a)) < 0.3 ? "middle" : Math.cos(a) > 0 ? "start" : "end"} fontSize="11.5" className="wes-svg-label">
              {name}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="46" fill="var(--wes-panel)" stroke="var(--wes-line-strong)" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="13" fill="var(--wes-text)" className="wes-svg-label" style={{ fill: "var(--wes-text)" }}>
        {t.problem.diagramCenter}
      </text>
      <g>
        <circle cx={88} cy={502} r="4.5" fill="var(--wes-red)" />
        <text x={102} y={506} fontSize="11" className="wes-svg-label">NPT / ILT</text>
      </g>
    </svg>
  );
};

export const ProblemSection = () => {
  const { t } = useLang();
  return (
    <Section id="problem">
      <SectionHead {...t.problem} />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-14 items-center">
        <div className="grid sm:grid-cols-2 gap-4" data-reveal-group>
          {t.problem.items.map((it, i) => (
            <article key={i} className="wes-card p-5">
              <div className="wes-num mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-semibold text-[15px] mb-2">{it.title}</h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>{it.text}</p>
            </article>
          ))}
        </div>
        <div data-reveal>
          <SpiderDiagram />
          <p className="wes-mono text-[11px] mt-4 text-center" style={{ color: "var(--wes-muted)" }}>{t.problem.diagramLabel}</p>
        </div>
      </div>
    </Section>
  );
};

/* ============ 03 · MARKET MAP ============ */

const MarketMatrix = () => {
  const { t } = useLang();
  const m = t.market.matrix;
  return (
    <div data-reveal>
      <div className="relative aspect-square max-w-[520px] mx-auto border" style={{ borderColor: "var(--wes-line-strong)" }}>
        {/* quadrant lines */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: "var(--wes-line)" }} />
        <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: "var(--wes-line)" }} />

        {/* axis labels */}
        <span className="wes-mono absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase whitespace-nowrap" style={{ color: "var(--wes-muted)" }}>{m.xLabel} →</span>
        <span className="wes-mono absolute top-1/2 -left-8 text-[10px] tracking-widest uppercase whitespace-nowrap" style={{ color: "var(--wes-muted)", transform: "rotate(-90deg) translateX(50%)", transformOrigin: "left center" }}>{m.yLabel} →</span>
        <span className="wes-mono absolute bottom-1 left-2 text-[9.5px]" style={{ color: "var(--wes-muted)" }}>{m.xMin} · {m.yMin}</span>
        <span className="wes-mono absolute top-1 right-2 text-[9.5px]" style={{ color: "var(--wes-muted)" }}>{m.xMax} · {m.yMax}</span>

        {/* layer 1: software — bottom left */}
        <div className="absolute" style={{ left: "8%", bottom: "12%" }}>
          <div className="flex gap-1.5 mb-2">
            {[0, 1, 2, 3].map((i) => <span key={i} className="w-2 h-2 rounded-full" style={{ background: "var(--wes-muted)" }} />)}
          </div>
          <span className="wes-mono text-[10px]" style={{ color: "var(--wes-muted)" }}>{m.softwareGroup}</span>
        </div>

        {/* layer 2: rig automation — center-left */}
        <div className="absolute" style={{ left: "20%", bottom: "40%" }}>
          <div className="flex gap-1.5 mb-2">
            {[0, 1, 2].map((i) => <span key={i} className="w-2 h-2 rounded-full" style={{ background: "var(--wes-cyan)", opacity: 0.7 }} />)}
          </div>
          <span className="wes-mono text-[10px]" style={{ color: "var(--wes-muted)" }}>{m.rigGroup}</span>
        </div>

        {/* layer 3: majors — top right, far */}
        <div className="absolute text-right" style={{ right: "5%", top: "7%" }}>
          <div className="flex gap-1.5 mb-2 justify-end">
            {[0, 1, 2].map((i) => <span key={i} className="w-2.5 h-2.5 rounded-full border" style={{ borderColor: "var(--wes-muted)" }} />)}
          </div>
          <span className="wes-mono text-[10px]" style={{ color: "var(--wes-muted)" }}>{m.majorsGroup}</span>
        </div>

        {/* WES — top right, mid-segment */}
        <div className="absolute" style={{ right: "22%", top: "26%" }}>
          <span className="relative flex w-4 h-4">
            <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ background: "var(--wes-amber)", opacity: 0.4 }} />
            <span className="relative inline-flex rounded-full h-4 w-4" style={{ background: "var(--wes-amber)" }} />
          </span>
          <div className="mt-2">
            <span className="wes-mono text-[12px] font-semibold" style={{ color: "var(--wes-amber)" }}>{m.wes}</span>
            <p className="wes-mono text-[9.5px] max-w-[150px] mt-1" style={{ color: "var(--wes-muted)" }}>{m.wesNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MarketSection = () => {
  const { t } = useLang();
  return (
    <Section id="market" className="wes-grid-bg">
      <SectionHead {...t.market} />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-14 items-start">
        <div className="space-y-4" data-reveal-group>
          {t.market.layers.map((l) => (
            <article key={l.tag} className="wes-card p-6">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span className="wes-kicker" style={{ color: "var(--wes-cyan)" }}>{l.tag}</span>
              </div>
              <h3 className="font-semibold mb-2">{l.title}</h3>
              <p className="wes-mono text-[11px] leading-relaxed mb-3" style={{ color: "var(--wes-muted)" }}>{l.names}</p>
              <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>{l.text}</p>
            </article>
          ))}
          <article className="p-6 border" style={{ borderColor: "var(--wes-amber)", background: "var(--wes-amber-dim)" }}>
            <h3 className="wes-display font-medium mb-2" style={{ color: "var(--wes-amber)" }}>{t.market.wesCard.title}</h3>
            <p className="text-[13.5px] leading-relaxed">{t.market.wesCard.text}</p>
          </article>
        </div>
        <div className="lg:sticky lg:top-32 pt-2 pb-10 pl-8">
          <MarketMatrix />
        </div>
      </div>
    </Section>
  );
};

/* ============ 04 · MODEL ============ */

const HubDiagram = ({ mode }: { mode: "before" | "after" }) => {
  const { t } = useLang();
  const n = 7;
  const cx = 150;
  const cy = 120;
  const R = 95;
  const nodes = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R * 0.85 };
  });
  return (
    <svg viewBox="0 0 300 240" className="w-full" aria-hidden="true">
      {mode === "before"
        ? nodes.map((p, i) =>
            nodes.slice(i + 1).map((q, j) => (
              <line key={`${i}-${j}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="var(--wes-red)" strokeOpacity="0.28" strokeWidth="0.8" />
            ))
          )
        : nodes.map((p, i) => (
            <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--wes-amber)" strokeOpacity="0.75" strokeWidth="1.2" />
          ))}
      {nodes.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="6" fill="var(--wes-panel)" stroke={mode === "before" ? "var(--wes-red)" : "var(--wes-amber)"} strokeWidth="1.2" />
      ))}
      {mode === "after" && (
        <>
          <circle cx={cx} cy={cy} r="26" fill="var(--wes-amber)" />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#131008" className="wes-mono">WES</text>
        </>
      )}
      {mode === "before" && (
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" className="wes-svg-label">{t.problem.diagramCenter}</text>
      )}
    </svg>
  );
};

export const ModelSection = () => {
  const { t } = useLang();
  return (
    <Section id="model">
      <SectionHead {...t.model} />
      <div className="grid md:grid-cols-2 gap-5 mt-14" data-reveal-group>
        <article className="wes-card p-7 md:p-9">
          <span className="wes-kicker" style={{ color: "var(--wes-red)" }}>{t.model.before.tag}</span>
          <div className="my-6 opacity-90"><HubDiagram mode="before" /></div>
          <p className="wes-mono text-[11px] mb-5 text-center" style={{ color: "var(--wes-muted)" }}>{t.model.beforeLabel}</p>
          <ul className="space-y-3">
            {t.model.before.items.map((x, i) => (
              <li key={i} className="flex gap-3 text-[14px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>
                <span style={{ color: "var(--wes-red)" }}>✕</span>{x}
              </li>
            ))}
          </ul>
        </article>
        <article className="wes-card p-7 md:p-9" style={{ borderColor: "rgba(255,166,69,0.4)" }}>
          <span className="wes-kicker">{t.model.after.tag}</span>
          <div className="my-6"><HubDiagram mode="after" /></div>
          <p className="wes-mono text-[11px] mb-5 text-center" style={{ color: "var(--wes-muted)" }}>{t.model.afterLabel}</p>
          <p className="text-[14px] mb-4 font-medium">{t.model.after.lead}</p>
          <ul className="space-y-3">
            {t.model.after.items.map((x, i) => (
              <li key={i} className="flex gap-3 text-[14px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>
                <span style={{ color: "var(--wes-amber)" }}>—</span>{x}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
};

/* ============ 05 · DIGITAL ARCHITECTURE ============ */

export const DigitalSection = () => {
  const { t } = useLang();
  return (
    <Section id="digital" className="wes-grid-bg">
      <SectionHead {...t.digital} />
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 mt-14 items-start">
        <div className="space-y-0" data-reveal-group>
          {t.digital.layers.map((l, i) => (
            <div key={l.tag}>
              <article className="wes-card p-6 md:p-7">
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 mb-3">
                  <span className="wes-mono text-[12px] font-semibold" style={{ color: "var(--wes-cyan)" }}>{l.tag}</span>
                </div>
                <p className="text-[14px] leading-relaxed mb-4" style={{ color: "var(--wes-muted)" }}>{l.text}</p>
                <div className="flex flex-wrap gap-2">
                  {l.chips.map((c) => <span key={c} className="wes-chip">{c}</span>)}
                </div>
              </article>
              {i < t.digital.layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <span className="wes-mono text-[12px]" style={{ color: "var(--wes-amber)" }}>↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <aside className="lg:sticky lg:top-32" data-reveal>
          <h3 className="wes-kicker mb-6">{t.digital.analogyTitle}</h3>
          <div className="space-y-px">
            {t.digital.analogies.map((a) => (
              <div
                key={a.tool}
                className="flex items-center justify-between gap-4 px-5 py-4 border"
                style={
                  a.highlight
                    ? { borderColor: "var(--wes-amber)", background: "var(--wes-amber-dim)" }
                    : { borderColor: "var(--wes-line)" }
                }
              >
                <span className="wes-mono text-[13px]" style={{ color: a.highlight ? "var(--wes-amber)" : "var(--wes-text)" }}>{a.tool}</span>
                <span className="wes-mono text-[11px]" style={{ color: "var(--wes-muted)" }}>⟶ {a.service}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13.5px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>{t.digital.analogyNote}</p>
        </aside>
      </div>
    </Section>
  );
};

/* ============ 06 · RTOC ============ */

const trendGlyph: Record<string, { sym: string; color: string }> = {
  up: { sym: "▲", color: "var(--wes-cyan)" },
  down: { sym: "▼", color: "var(--wes-cyan)" },
  flat: { sym: "—", color: "var(--wes-muted)" },
  warn: { sym: "●", color: "var(--wes-amber)" },
};

const RtocDash = () => {
  const { t } = useLang();
  const d = t.rtoc.dash;
  return (
    <div className="wes-dash p-4 md:p-6" data-reveal>
      <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b" style={{ borderColor: "var(--wes-line)" }}>
        <span className="wes-mono text-[11px] truncate" style={{ color: "var(--wes-muted)" }}>{d.title}</span>
        <span className="flex items-center gap-2 wes-mono text-[10px] shrink-0" style={{ color: "var(--wes-cyan)" }}>
          <i className="w-1.5 h-1.5 rounded-full wes-blink inline-block" style={{ background: "var(--wes-cyan)" }} />
          LIVE · 1 {`Hz`}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {d.params.map((p) => {
          const g = trendGlyph[p.trend] ?? trendGlyph.flat;
          return (
            <div key={p.name} className="wes-dash-param p-3">
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="wes-mono text-[10px]" style={{ color: "var(--wes-muted)" }}>{p.name}</span>
                <span className="text-[9px]" style={{ color: g.color }}>{g.sym}</span>
              </div>
              <div className="wes-mono text-lg leading-none mb-2">
                {p.value} <span className="text-[10px]" style={{ color: "var(--wes-muted)" }}>{p.unit}</span>
              </div>
              <div className={`wes-spark ${p.trend === "warn" ? "wes-spark--warn" : ""}`} aria-hidden="true">
                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.5, 1].map((h, i) => (
                  <i key={i} style={{ height: `${h * 100}%`, animationDelay: `${i * 0.18}s` }} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 p-3.5 border flex gap-3 items-start" style={{ borderColor: "rgba(255,166,69,0.5)", background: "var(--wes-amber-dim)" }}>
        <span className="wes-mono text-[10px] uppercase tracking-widest shrink-0 mt-0.5" style={{ color: "var(--wes-amber)" }}>{d.alertTag}</span>
        <p className="text-[12.5px] leading-relaxed">{d.alert}</p>
      </div>
      <div className="mt-2.5 p-3.5 border flex gap-3 items-start" style={{ borderColor: "var(--wes-line)" }}>
        <span className="wes-mono text-[10px] uppercase tracking-widest shrink-0 mt-0.5" style={{ color: "var(--wes-cyan)" }}>{d.decisionTag}</span>
        <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>{d.decision}</p>
      </div>
    </div>
  );
};

export const RtocSection = () => {
  const { t } = useLang();
  return (
    <Section id="rtoc">
      <SectionHead num={t.rtoc.num} kicker={t.rtoc.kicker} title={t.rtoc.title} />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-14 items-start">
        <div>
          <ul className="space-y-5" data-reveal-group>
            {t.rtoc.items.map((x, i) => (
              <li key={i} className="flex gap-4 text-[14.5px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>
                <span className="wes-num mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {x}
              </li>
            ))}
          </ul>
          <div className="mt-10 p-6 border" style={{ borderColor: "var(--wes-line-strong)" }} data-reveal>
            <span className="wes-kicker" style={{ color: "var(--wes-cyan)" }}>{t.rtoc.caseTag}</span>
            <p className="mt-2 mb-5 font-medium">{t.rtoc.caseTitle}</p>
            <div className="grid grid-cols-3 gap-4">
              {t.rtoc.caseStats.map((s) => (
                <div key={s.label}>
                  <div className="wes-display text-xl md:text-2xl" style={{ color: "var(--wes-amber)" }}>{s.value}</div>
                  <div className="text-[11.5px] mt-1.5 leading-snug" style={{ color: "var(--wes-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:sticky lg:top-28">
          <RtocDash />
        </div>
      </div>
    </Section>
  );
};

/* ============ 07 · PREDICTIVE / DIGITAL TWIN ============ */

const TwinChart = () => {
  const { t } = useLang();
  const c = t.predictive.chart;
  return (
    <figure className="wes-card p-5 md:p-7" data-reveal>
      <svg viewBox="0 0 560 320" className="w-full" role="img" aria-label={`${c.plan} / ${c.fact} / ${c.forecast}`}>
        {/* axes */}
        <line x1="50" y1="20" x2="50" y2="280" stroke="var(--wes-line-strong)" />
        <line x1="50" y1="280" x2="540" y2="280" stroke="var(--wes-line-strong)" />
        <text x="56" y="32" fontSize="10" className="wes-svg-label">{c.yLabel}</text>
        <text x="538" y="298" fontSize="10" textAnchor="end" className="wes-svg-label">{c.xLabel}</text>
        {[68, 116, 164, 212].map((y, i) => (
          <g key={y}>
            <line x1="50" y1={y} x2="540" y2={y} stroke="var(--wes-line)" strokeWidth="0.6" />
            <text x="44" y={y + 3} fontSize="9" textAnchor="end" className="wes-svg-label">{(i + 1) * 800}</text>
          </g>
        ))}
        {/* offset wells envelope */}
        <path d="M50,20 C170,60 260,150 380,230 C440,262 500,272 540,276 L540,236 C490,228 420,200 340,140 C260,84 150,40 50,20 Z" fill="var(--wes-cyan)" opacity="0.08" />
        <path d="M50,20 C160,55 250,130 360,200 C440,248 500,262 540,268" fill="none" stroke="var(--wes-cyan)" strokeOpacity="0.35" strokeWidth="1" />
        {/* plan */}
        <path d="M50,20 C180,70 280,170 400,245 C460,272 510,278 540,280" fill="none" stroke="var(--wes-muted)" strokeWidth="1.4" strokeDasharray="6 5" />
        {/* actual: ahead of plan */}
        <path d="M50,20 C160,75 240,180 330,250" fill="none" stroke="var(--wes-amber)" strokeWidth="2.4" />
        {/* forecast continuation */}
        <path d="M330,250 C380,278 440,287 500,290" fill="none" stroke="var(--wes-amber)" strokeWidth="1.6" strokeDasharray="3 5" />
        <circle cx="330" cy="250" r="5" fill="var(--wes-amber)" />
        <circle cx="330" cy="250" r="9" fill="none" stroke="var(--wes-amber)" strokeOpacity="0.4">
          <animate attributeName="r" values="6;12;6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        {/* now line */}
        <line x1="330" y1="20" x2="330" y2="280" stroke="var(--wes-amber)" strokeOpacity="0.25" strokeDasharray="2 4" />
      </svg>
      <figcaption className="flex flex-wrap gap-x-6 gap-y-2 mt-4 wes-mono text-[10.5px]" style={{ color: "var(--wes-muted)" }}>
        <span className="flex items-center gap-2"><i className="inline-block w-5 border-t-2 border-dashed" style={{ borderColor: "var(--wes-muted)" }} />{c.plan}</span>
        <span className="flex items-center gap-2"><i className="inline-block w-5 border-t-2" style={{ borderColor: "var(--wes-amber)" }} />{c.fact}</span>
        <span className="flex items-center gap-2"><i className="inline-block w-5 border-t border-dashed" style={{ borderColor: "var(--wes-amber)" }} />{c.forecast}</span>
        <span className="flex items-center gap-2"><i className="inline-block w-5 h-2.5" style={{ background: "rgba(83,216,232,0.15)" }} />{c.offset}</span>
      </figcaption>
    </figure>
  );
};

export const PredictiveSection = () => {
  const { t } = useLang();
  return (
    <Section id="twin">
      <SectionHead num={t.predictive.num} kicker={t.predictive.kicker} title={t.predictive.title} />
      <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4" data-reveal-group>
          {t.predictive.items.map((it, i) => (
            <article key={i} className="wes-card p-5">
              <h3 className="wes-mono text-[12.5px] font-semibold mb-2" style={{ color: "var(--wes-cyan)" }}>{it.title}</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>{it.text}</p>
            </article>
          ))}
        </div>
        <div className="lg:sticky lg:top-28">
          <TwinChart />
        </div>
      </div>
    </Section>
  );
};
