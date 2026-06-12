import { useLang } from "./useLang";
import { Section, SectionHead } from "./sections";

/* ============ 08 · KPI & ECONOMICS ============ */

export const KpiSection = () => {
  const { t } = useLang();
  return (
    <Section id="kpi" className="wes-grid-bg">
      <SectionHead {...t.kpi} />
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 mt-14 items-start">
        <div className="space-y-7" data-reveal-group>
          {t.kpi.bars.map((b) => (
            <div key={b.label}>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <div>
                  <span className="text-[14px] font-medium">{b.label}</span>
                  <span className="block text-[11.5px] mt-0.5" style={{ color: "var(--wes-muted)" }}>
                    {b.note}{b.before ? ` · ${b.before}` : ""}
                  </span>
                </div>
                <span className="wes-display text-lg md:text-xl shrink-0" style={{ color: "var(--wes-amber)" }}>{b.delta}</span>
              </div>
              <div className="wes-bar-track">
                <div className="wes-bar-fill" data-pct={b.pct} />
              </div>
            </div>
          ))}
          <ul className="pt-2 space-y-2.5">
            {t.kpi.extras.map((x, i) => (
              <li key={i} className="flex gap-3 text-[13.5px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>
                <span style={{ color: "var(--wes-cyan)" }}>+</span>{x}
              </li>
            ))}
          </ul>
        </div>

        <aside className="wes-card p-7 md:p-8 lg:sticky lg:top-32" data-reveal>
          <h3 className="wes-kicker mb-6">{t.kpi.formulaTitle}</h3>
          <div className="space-y-4 wes-mono text-[12.5px] leading-relaxed">
            {t.kpi.formula.map((f, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-4 shrink-0 text-right" style={{ color: "var(--wes-amber)" }}>{f.sign}</span>
                <span style={{ color: "var(--wes-muted)" }}>{f.term}</span>
              </div>
            ))}
            <div className="pt-4 mt-2 border-t flex gap-3" style={{ borderColor: "var(--wes-line-strong)" }}>
              <span className="wes-display text-[15px]" style={{ color: "var(--wes-amber)" }}>{t.kpi.formulaResult}</span>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
};

/* ============ 09 · TEAM & OPERATING MODEL ============ */

export const TeamSection = () => {
  const { t } = useLang();
  return (
    <Section id="team">
      <SectionHead {...t.team} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-14 border" style={{ borderColor: "var(--wes-line)", background: "var(--wes-line)" }} data-reveal-group>
        {t.team.roles.map((r, i) => (
          <article key={r.name} className="p-6" style={{ background: "var(--wes-bg)" }}>
            <div className="wes-num mb-4">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="wes-mono text-[13px] font-semibold mb-2" style={{ color: "var(--wes-cyan)" }}>{r.name}</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>{r.text}</p>
          </article>
        ))}
      </div>

      <h3 className="wes-kicker mt-20 mb-8" data-reveal>{t.team.modesTitle}</h3>
      <div className="grid md:grid-cols-3 gap-5 items-end" data-reveal-group>
        {t.team.modes.map((m, i) => (
          <article
            key={m.name}
            className="wes-card p-7 flex flex-col"
            style={{
              minHeight: `${230 + i * 46}px`,
              ...(i === 2 ? { borderColor: "var(--wes-amber)", background: "var(--wes-amber-dim)" } : {}),
            }}
          >
            <span className="wes-display text-2xl mb-4" style={{ color: i === 2 ? "var(--wes-amber)" : "var(--wes-muted)" }}>{m.step}</span>
            <h4 className="font-semibold mb-3">{m.name}</h4>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>{m.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

/* ============ 10 · ROADMAP & CTA ============ */

export const RoadmapSection = () => {
  const { t } = useLang();
  return (
    <Section id="roadmap">
      <SectionHead num={t.roadmap.num} kicker={t.roadmap.kicker} title={t.roadmap.title} />
      <div className="mt-14 space-y-0" data-reveal-group>
        {t.roadmap.phases.map((p) => (
          <div key={p.phase} className="wes-phase pl-8 pb-10 last:pb-2 ml-1">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-2">
              <span className="wes-mono text-[12px] font-semibold" style={{ color: "var(--wes-amber)" }}>{p.phase}</span>
              <span className="wes-mono text-[11px]" style={{ color: "var(--wes-muted)" }}>{p.time}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
            <p className="text-[14px] leading-relaxed max-w-2xl" style={{ color: "var(--wes-muted)" }}>{p.text}</p>
          </div>
        ))}
      </div>

      <div id="contact" className="mt-20 p-8 md:p-14 border relative overflow-hidden" style={{ borderColor: "var(--wes-amber)" }} data-reveal>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(255,166,69,0.12), transparent 60%)" }} />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="wes-display text-2xl md:text-4xl font-medium mb-7" style={{ color: "var(--wes-amber)" }}>{t.roadmap.cta.title}</h3>
            <ul className="space-y-3">
              {t.roadmap.cta.points.map((x, i) => (
                <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed" style={{ color: "var(--wes-muted)" }}>
                  <span style={{ color: "var(--wes-amber)" }}>—</span>{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-5">
            <a href={`mailto:${t.roadmap.cta.email}`} className="wes-btn">{t.roadmap.cta.button} →</a>
            <span className="wes-mono text-[12px]" style={{ color: "var(--wes-muted)" }}>{t.roadmap.cta.email}</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
