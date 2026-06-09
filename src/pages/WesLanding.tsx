
import React, { useState, useEffect } from 'react';
import {
  Flame, Zap, Building2, TrendingUp, Shield, Settings,
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Menu, X,
  Factory, Cpu, Users, Award, DollarSign, FileText,
  Wrench, Droplets, Globe, Gauge
} from 'lucide-react';

// ─── Smooth scroll hook ──────────────────────────────────────────────────────
function useSmoothAnchorScroll() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();
      const el = document.getElementById(href.substring(1));
      if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
const WesNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { label: 'EPCF Model', href: '#epcf' },
    { label: 'Technology', href: '#technology' },
    { label: 'Projects', href: '#projects' },
    { label: 'Digital Mining', href: '#digital-mining' },
    { label: 'Why WES', href: '#advantages' },
  ];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#05080f]/95 backdrop-blur-md border-b border-white/10 shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-400/15 border border-amber-400/40 flex items-center justify-center">
            <span className="text-amber-400 text-sm font-black font-display">W</span>
          </div>
          <div>
            <span className="font-display font-bold text-white text-sm tracking-wide">WES</span>
            <span className="hidden sm:inline text-gray-500 text-xs ml-2">Engineering & Solutions</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-3 px-5 py-2 bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold rounded transition-colors">
            Contact Us
          </a>
        </div>
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0f1a]/98 border-t border-white/5 px-6 py-5 space-y-1">
          {links.map(l => (
            <a key={l.label} href={l.href} className="block text-sm text-gray-300 hover:text-white py-2.5 border-b border-white/5" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="block text-center mt-3 py-2.5 bg-amber-400 text-black text-sm font-semibold rounded" onClick={() => setOpen(false)}>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

// ─── Hero ────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center bg-[#05080f] overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute inset-0"
        style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)',backgroundSize:'72px 72px'}} />
    </div>
    <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-8">
          <Flame size={11} />
          EPCF Model — Zero CAPEX for You · Kazakhstan
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
          Your Gas Is{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">an Asset.</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">Let Us Monetize It.</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
          WES Engineering &amp; Solutions is the only company in the region delivering full-cycle EPCF
          projects — from associated petroleum gas processing to electricity generation, digital mining
          infrastructure, and 100% revenue monetization.{' '}
          <strong className="text-white font-semibold">At zero cost to you.</strong>
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <a href="#epcf" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded text-sm transition-colors">
            Explore EPCF Model <ArrowRight size={15} />
          </a>
          <a href="#digital-mining" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-medium rounded text-sm transition-colors">
            Digital Mining Services
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/40 hover:border-cyan-400/70 text-cyan-400 font-medium rounded text-sm transition-colors">
            <Phone size={13} /> Talk to Us
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/10">
          {[
            { v: '>98%', l: 'Guaranteed Uptime', c: 'text-cyan-400' },
            { v: '0₸', l: 'Client CAPEX / OPEX', c: 'text-amber-400' },
            { v: '500K', l: 'Nm³/day Capacity', c: 'text-cyan-400' },
            { v: '37 MW', l: 'Delivered Power', c: 'text-amber-400' },
          ].map(s => (
            <div key={s.l}>
              <p className={`font-display text-3xl sm:text-4xl font-black ${s.c}`}>{s.v}</p>
              <p className="text-gray-500 text-xs mt-1 leading-tight">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Problem ─────────────────────────────────────────────────────────────────
const ProblemSection = () => (
  <section className="py-24 bg-[#080c16]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-xl mb-14">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">The Challenge</p>
        <h2 className="font-display text-4xl font-bold mb-4">The Status Quo Is Costing You</h2>
        <p className="text-gray-400 text-sm leading-relaxed">Every flare represents lost revenue, mounting fines, and capped oil production. WES eliminates all three — at zero cost to you.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center"><Flame className="text-red-400" size={18} /></div>
            <h3 className="font-display font-bold text-red-300">Status Quo: Gas Flaring</h3>
          </div>
          <div className="space-y-3">
            {['APG burned at flares — 100% waste','Critical environmental fines & penalties','Strict oil production quota limitations','Direct financial losses every day','Full ESG liability exposure'].map(t => (
              <div key={t} className="flex items-start gap-3"><X className="text-red-400 flex-shrink-0 mt-0.5" size={13} /><span className="text-gray-300 text-sm">{t}</span></div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center"><TrendingUp className="text-amber-400" size={18} /></div>
            <h3 className="font-display font-bold text-amber-300">WES Partnership (EPCF)</h3>
          </div>
          <div className="space-y-3">
            {['Deep APG processing & full monetization','Zero environmental fines — full compliance','Guaranteed oil production uptime >98%','Net profit from day one','Complete ESG compliance documentation'].map(t => (
              <div key={t} className="flex items-start gap-3"><CheckCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={13} /><span className="text-gray-300 text-sm">{t}</span></div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-[#0d1a2e] to-[#0a1220] border border-white/10 p-6 text-center">
        <p className="text-white text-base font-medium">
          "You produce oil at maximum capacity.{' '}
          <span className="text-amber-400 font-semibold">We pay you for the APG.</span>{' '}
          All capital and operational costs are on us."
        </p>
      </div>
      <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="text-left py-4 px-6 text-gray-500 font-medium">Criterion</th>
              <th className="text-center py-4 px-4 text-gray-500 font-medium">Gas Flaring</th>
              <th className="text-center py-4 px-4 text-gray-500 font-medium">Traditional Service</th>
              <th className="text-center py-4 px-6 text-amber-400 font-semibold">WES Partnership</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['CAPEX / OPEX','Low / Regular fines','High client costs','0₸ — Full financing'],
              ['ESG Risks','Critical threats','Medium risks','None'],
              ['Oil Production Impact','Direct quota limitation','Contractor-dependent','>98% uptime guarantee'],
              ['Financial Result','Direct losses','Long payback period','Net profit from Day 1'],
            ].map(([c,...v]) => (
              <tr key={c} className="border-b border-white/5 last:border-0">
                <td className="py-4 px-6 text-gray-300 font-medium">{c}</td>
                <td className="py-4 px-4 text-center text-gray-500">{v[0]}</td>
                <td className="py-4 px-4 text-center text-gray-500">{v[1]}</td>
                <td className="py-4 px-6 text-center text-amber-300 font-semibold">{v[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// ─── EPCF Model ───────────────────────────────────────────────────────────────
const EpcfSection = () => (
  <section id="epcf" className="py-24 bg-[#05080f]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Our Model</p>
        <h2 className="font-display text-4xl font-bold mb-4">The EPCF Model</h2>
        <p className="text-gray-400 text-sm leading-relaxed">We assume complete project ownership across all four dimensions. Engineering, Procurement, Construction, Finance — all on us.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {[
          { letter:'E', title:'Engineering', desc:'Own engineering centre. We design the entire complex as a single optimised system — maximising throughput, efficiency, and uptime.', color:'cyan', Icon:Settings },
          { letter:'P', title:'Procurement', desc:'Full responsibility for equipment selection, procurement, and performance guarantees across all components and suppliers.', color:'amber', Icon:Factory },
          { letter:'C', title:'Construction', desc:'We manage the entire build from groundbreaking to commissioning — including all civil works and installation — at our expense.', color:'cyan', Icon:Building2 },
          { letter:'F', title:'Finance', desc:'WES acts as the sole investor, covering 100% of CAPEX and OPEX. No capital expenditure is required from the client.', color:'amber', Icon:DollarSign },
        ].map(({ letter, title, desc, color, Icon }) => {
          const c = color === 'cyan';
          return (
            <div key={letter} className={`rounded-2xl border p-7 ${c ? 'border-cyan-500/25 bg-cyan-500/5' : 'border-amber-500/25 bg-amber-500/5'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${c ? 'bg-cyan-500/15' : 'bg-amber-500/15'}`}>
                <span className={`font-display text-3xl font-black ${c ? 'text-cyan-400' : 'text-amber-400'}`}>{letter}</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <div className="inline-block rounded-3xl border border-white/15 bg-white/5 px-14 py-8">
          <p className="text-gray-500 text-sm mb-2">Your Total Investment</p>
          <p className="font-display text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-amber-500">0₸</p>
          <p className="text-gray-500 text-xs mt-2">All CAPEX and OPEX borne exclusively by WES</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── Technology Chain ─────────────────────────────────────────────────────────
const TechChainSection = () => (
  <section id="technology" className="py-24 bg-[#080c16]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-xl mb-14">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Technology</p>
        <h2 className="font-display text-4xl font-bold mb-4">Monetisation Architecture</h2>
        <p className="text-gray-400 text-sm leading-relaxed">A fully integrated processing chain converts unstable APG into valuable hydrocarbon fractions and electricity — simultaneously, with zero waste.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {[
          { label:'APG Field', sub:'Unstable associated gas input', Icon:Flame, color:'amber' },
          { label:'Preparation Block', sub:'Cleaning · Drying · Demercurization', Icon:Settings, color:'cyan' },
          { label:'GFPU', sub:'Valuable hydrocarbon fractions', Icon:Droplets, color:'amber' },
          { label:'GPP', sub:'Electricity generation', Icon:Zap, color:'cyan' },
        ].map(({ label, sub, Icon, color }, i) => {
          const c = color === 'cyan';
          return (
            <div key={label} className={`rounded-2xl border p-6 text-center relative ${c ? 'border-cyan-500/25 bg-cyan-500/5' : 'border-amber-500/25 bg-amber-500/5'}`}>
              {i < 3 && <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-gray-700 hidden lg:block z-10" size={18} />}
              <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3 ${c ? 'bg-cyan-500/15' : 'bg-amber-500/15'}`}>
                <Icon className={c ? 'text-cyan-400' : 'text-amber-400'} size={20} />
              </div>
              <p className="font-display font-bold text-sm">{label}</p>
              <p className="text-gray-500 text-xs mt-1 leading-tight">{sub}</p>
            </div>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 gap-5 mb-14">
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
          <h4 className="font-display font-semibold text-amber-300 mb-2 flex items-center gap-2"><Droplets size={15}/> Hydrocarbon Output</h4>
          <p className="text-gray-400 text-sm leading-relaxed">GFPU delivers LNG, CNG, or NGL fractions directly to the client — revenue from the gas itself, on top of the electricity income.</p>
        </div>
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h4 className="font-display font-semibold text-cyan-300 mb-2 flex items-center gap-2"><Zap size={15}/> Electricity → Compute</h4>
          <p className="text-gray-400 text-sm leading-relaxed">GPP-generated power feeds field operations and external consumers — data centres, ASIC mining farms, or grid-connected offtakers.</p>
        </div>
      </div>
      <h3 className="font-display font-bold text-lg mb-5 text-gray-200">Specialised Engineering Solutions</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label:'H₂S Absorbers', desc:'Hydrogen sulphide removal to pipeline-grade specification' },
          { label:'Membrane N₂ Generators', desc:'On-site nitrogen generation for inert blanketing and purging' },
          { label:'C5+ HC Removal', desc:'Heavy fraction extraction to prevent condensate damage to equipment' },
          { label:'Deep Drying & Demercurization', desc:'Molecular sieve drying and mercury removal for LNG-grade gas quality' },
        ].map(item => (
          <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <Wrench className="text-cyan-400 mb-3" size={15} />
            <p className="font-semibold text-sm text-white mb-1.5">{item.label}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Stats ────────────────────────────────────────────────────────────────────
const StatsSection = () => (
  <section className="py-20 bg-[#05080f] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {[
          { v:'98', u:' sets', l:'Gas-piston generation units', c:'text-amber-400' },
          { v:'95', u:' sets', l:'Crypto mining equipment sets', c:'text-cyan-400' },
          { v:'36', u:'', l:'Modular APG deep-processing plants', c:'text-amber-400' },
          { v:'20+', u:'', l:'On-site engineers per project', c:'text-cyan-400' },
        ].map(s => (
          <div key={s.l}>
            <p className={`font-display text-5xl sm:text-6xl font-black ${s.c}`}>{s.v}<span className="text-3xl">{s.u}</span></p>
            <p className="text-gray-500 text-xs mt-2 leading-snug max-w-[140px] mx-auto">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Uptime ───────────────────────────────────────────────────────────────────
const UptimeSection = () => (
  <section className="py-24 bg-[#080c16]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">Interest Alignment</p>
          <h2 className="font-display text-4xl font-bold mb-6">Why We Guarantee <span className="text-cyan-400">&gt;98% Uptime</span></h2>
          <p className="text-gray-400 mb-10 leading-relaxed text-sm">Our business model is the best possible insurance for your production. We vitally need continuous, affordable energy generation — which means your gas must never stop flowing.</p>
          <div className="space-y-6">
            {[
              { title:'We carry the risk', desc:'We convert your APG into compute revenue. If gas supply stops, our revenue stops. Our incentives are perfectly aligned with yours.', Icon:Shield },
              { title:'Up to 20 engineers on-site', desc:'Qualified engineers work around the clock monitoring unstable APG composition and responding instantly to any operational change.', Icon:Users },
              { title:'Capacity reserve strategy', desc:'Equipment installed with a significant capacity buffer — so unplanned volume spikes never cause emergency shutdowns or production curtailment.', Icon:Gauge },
            ].map(({ title, desc, Icon }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="text-cyan-400" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl scale-110" />
            <div className="relative rounded-full border-2 border-cyan-500/40 p-14 sm:p-20 text-center">
              <p className="font-display text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600">&gt;98%</p>
              <p className="text-cyan-400 text-sm font-semibold mt-2">Guaranteed Uptime</p>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-6 text-center max-w-xs">Contractually guaranteed. No production shutdowns. No emergency stops. No quota limitations.</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── Projects ─────────────────────────────────────────────────────────────────
const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-[#05080f]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Proven Track Record</p>
        <h2 className="font-display text-4xl font-bold mb-4">Delivered Projects</h2>
        <p className="text-gray-400 text-sm">From Kazakhstan to China — operational facilities, not case studies.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { name:'Karakol Energy Complex', location:'Kazakhstan', stat:'37 MW', statLabel:'Power Output', tag:'Data Centre Power', desc:'Two-stage modular deployment. APG utilisation with electricity generation powering data centre operations.', color:'cyan' },
          { name:'YueMan 801', location:'Xinjiang, China', stat:'500,000', statLabel:'Nm³/day capacity', tag:'LNG + CNG', desc:'Mega-project for deep APG processing in extreme climatic conditions. Delivered on schedule.', color:'amber' },
          { name:'Ha-I Lyan Project', location:'China', stat:'450,000', statLabel:'Nm³/day', tag:'CNG Production', desc:'High-throughput CNG production facility serving regional gas distribution networks at scale.', color:'cyan' },
          { name:'Fuyuan 3 / Heshen-4', location:'China', stat:'300,000', statLabel:'Nm³/day max', tag:'Deep Processing', desc:'Modular deep-processing complex. Fractions extraction and LNG production across two sites.', color:'amber' },
        ].map(p => {
          const c = p.color === 'cyan';
          return (
            <div key={p.name} className={`rounded-2xl border p-6 flex flex-col ${c ? 'border-cyan-500/20 bg-cyan-500/5' : 'border-amber-500/20 bg-amber-500/5'}`}>
              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-5 ${c ? 'bg-cyan-500/20 text-cyan-300' : 'bg-amber-500/20 text-amber-300'}`}>{p.tag}</span>
              <p className={`font-display text-4xl font-black ${c ? 'text-cyan-400' : 'text-amber-400'}`}>{p.stat}</p>
              <p className="text-gray-600 text-xs mb-4">{p.statLabel}</p>
              <h3 className="font-display font-bold text-sm mb-1">{p.name}</h3>
              <p className="text-gray-500 text-xs mb-3 flex items-center gap-1"><MapPin size={9} />{p.location}</p>
              <p className="text-gray-400 text-xs leading-relaxed flex-1">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── Digital Mining ───────────────────────────────────────────────────────────
const DigitalMiningSection = () => (
  <section id="digital-mining" className="py-24 bg-[#080c16]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">Document Services</p>
          <h2 className="font-display text-4xl font-bold mb-6">End-to-End Digital Mining Project Development</h2>
          <p className="text-gray-400 mb-5 leading-relaxed text-sm">Beyond gas processing, WES delivers complete turnkey digital mining infrastructure — from the initial feasibility study and gas rights acquisition through to construction, licensing, and operational management.</p>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">Unlike consultancies that offer isolated advisory services, we assume full project responsibility under a single contract with fixed-price, milestone-based payments.</p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-display font-semibold text-white mb-5 text-sm">Equipment Procurement Savings</h4>
            <div className="space-y-3">
              {[
                ['ASIC miners (new, top-tier)','10–15% below list price'],
                ['ASIC miners (refurbished)','15–20% below market'],
                ['Container enclosures','10–12% below market'],
                ['Transformer equipment','Direct from manufacturer'],
                ['PDUs, cabling, cooling','8–12% below market'],
              ].map(([item, saving]) => (
                <div key={item} className="flex justify-between items-center text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-400 text-xs">{item}</span>
                  <span className="text-amber-400 font-semibold text-xs whitespace-nowrap ml-4">{saving}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold text-xl mb-8 text-white">Five-Phase Delivery</h3>
          <div className="space-y-0">
            {[
              { n:'01', title:'Feasibility Study', dur:'1.5 months', desc:'Financial model, project economics, investment conclusion — rigorous analysis before a single tenge is committed.' },
              { n:'02', title:'Technical Design', dur:'4 months', desc:'Complete engineering documentation, State Expert Review, all government approvals, and Building Permit.' },
              { n:'03', title:'Digital Mining Licence', dur:'1.5 months*', desc:'LLP registration, mining licence application, MAIDD accompaniment — first-attempt submission guaranteed.' },
              { n:'04', title:'Construction', dur:'3 months', desc:'Construction and installation per approved technical design, commissioning, and State Acceptance.' },
              { n:'05', title:'Procurement & Operations', dur:'Concurrent', desc:'Below-market ASIC procurement and full trust management of the mining data centre post-launch.' },
            ].map((p, i, arr) => (
              <div key={p.n} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-xs font-bold">{p.n}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-full min-h-[3rem] bg-white/10 mt-1 mb-0" />}
                </div>
                <div className={`flex-1 ${i < arr.length - 1 ? 'pb-7' : ''}`}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <p className="font-display font-semibold text-white">{p.title}</p>
                    <span className="text-[10px] text-cyan-400 border border-cyan-500/30 rounded px-2 py-0.5 whitespace-nowrap">{p.dur}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-4 ml-15">* AInDD licensing review duration not within our control; Phases 2 & 3 may run concurrently.</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── Advantages ───────────────────────────────────────────────────────────────
const AdvantagesSection = () => (
  <section id="advantages" className="py-24 bg-[#05080f]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Why WES</p>
        <h2 className="font-display text-4xl font-bold mb-4">Six Key Differentiators</h2>
        <p className="text-gray-400 text-sm">What sets WES apart from every other provider in the region.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { Icon:Award, title:'Full-Cycle Project Delivery', desc:'The only company in the region with a documented track record from gas rights registration through to commercial mining operations. Competence built on verifiable results.', color:'amber' },
          { Icon:Users, title:'Single Team. Single Contract.', desc:'One integrated team of engineers, regulatory specialists, surveyors, and legal experts. One agreement. One point of contact. Zero contractor coordination overhead.', color:'cyan' },
          { Icon:DollarSign, title:'Below-Market Equipment', desc:'Direct supplier agreements deliver 10–20% savings on all ASIC and infrastructure equipment. On large projects, the resulting savings are material to overall economics.', color:'amber' },
          { Icon:Settings, title:'Turnkey Operations Management', desc:'Post-commissioning trust management: continuous uptime monitoring, AMCS/APCS systems, scheduled preventive maintenance, and rapid fault resolution by our team.', color:'cyan' },
          { Icon:Shield, title:'Deep Regulatory Expertise', desc:'Direct working experience with KEGOC, the Ministry of Energy RK, Committee for Emergency Situations, State Expert Review body, and all local executive authorities.', color:'amber' },
          { Icon:FileText, title:'Fixed-Price Milestones', desc:'Each phase is contractually fixed — no unilateral price revisions. Payment is made only upon delivery of agreed, documented deliverables. No surprises.', color:'cyan' },
        ].map(({ Icon, title, desc, color }) => {
          const c = color === 'cyan';
          return (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-white/20 transition-colors">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${c ? 'bg-cyan-500/10' : 'bg-amber-500/10'}`}>
                <Icon className={c ? 'text-cyan-400' : 'text-amber-400'} size={18} />
              </div>
              <h3 className="font-display font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── Contact ──────────────────────────────────────────────────────────────────
const ContactSection = () => (
  <section id="contact" className="py-24 bg-[#080c16]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="font-display text-4xl font-bold mb-6">Let's Build Your<br /><span className="text-amber-400">EPCF Solution Today.</span></h2>
          <p className="text-gray-400 mb-10 leading-relaxed text-sm">Whether you're flaring APG and want to monetise it, or planning a digital mining project that needs end-to-end turnkey delivery — WES has the team, the technology, and the track record.</p>
          <div className="space-y-5">
            {[
              { Icon:Phone, label:'Phone', val:'+7 701 910 11 33' },
              { Icon:Mail, label:'Email (Projects)', val:'Baurzhan@wes.kz' },
              { Icon:Mail, label:'Email (General)', val:'Info@wes.kz' },
              { Icon:MapPin, label:'Office', val:'Almaty, Basenova 27a, Office 20' },
              { Icon:Globe, label:'Website', val:'wes-platforms.com' },
            ].map(({ Icon, label, val }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-cyan-400" size={15} />
                </div>
                <div>
                  <p className="text-gray-600 text-xs">{label}</p>
                  <p className="text-white font-medium text-sm">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-7">
            <Flame className="text-amber-400 mb-4" size={26} />
            <h3 className="font-display font-bold text-xl mb-3">Gas Processing (EPCF)</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">You have APG you're flaring. Let WES process it, extract fractions, generate electricity, and pay you — at zero cost to your organisation.</p>
            <div className="space-y-2">
              {['Zero CAPEX / OPEX','Net profit from Day 1','>98% uptime guarantee','Full ESG & regulatory compliance'].map(b => (
                <div key={b} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="text-amber-400 flex-shrink-0" size={13} />{b}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-500/25 bg-cyan-500/5 p-7">
            <Cpu className="text-cyan-400 mb-4" size={26} />
            <h3 className="font-display font-bold text-xl mb-3">Digital Mining Projects</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">Full 5-phase project delivery — from feasibility study to licensed, operational mining data centre. Single contract, fixed price, full transparency.</p>
            <div className="space-y-2">
              {['Full regulatory support & licensing','10–20% below-market equipment','Turnkey operations management','Fixed-price milestone payments'].map(b => (
                <div key={b} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={13} />{b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const WesFooter = () => (
  <footer className="border-t border-white/5 bg-[#05080f] py-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-amber-400/15 border border-amber-400/40 flex items-center justify-center">
          <span className="text-amber-400 text-xs font-black">W</span>
        </div>
        <div>
          <p className="font-display font-bold text-white text-sm">WES Engineering & Solutions</p>
          <p className="text-gray-600 text-xs">Well Equipment & Services LLP · BIN 170340028487</p>
        </div>
      </div>
      <p className="text-gray-700 text-xs text-center sm:text-right">Kazakhstan, Almaty · wes-platforms.com<br />HalykBank · KZ606017131000020923</p>
    </div>
  </footer>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const WesLanding = () => {
  useSmoothAnchorScroll();
  return (
    <div className="min-h-screen bg-[#05080f] text-white font-sans">
      <WesNav />
      <Hero />
      <ProblemSection />
      <EpcfSection />
      <TechChainSection />
      <StatsSection />
      <UptimeSection />
      <ProjectsSection />
      <DigitalMiningSection />
      <AdvantagesSection />
      <ContactSection />
      <WesFooter />
    </div>
  );
};

export default WesLanding;
