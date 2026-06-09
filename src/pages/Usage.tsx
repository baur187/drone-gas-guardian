
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drone,
  Activity,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Gauge,
  Radio,
  Map,
  FileText,
  Shield,
  Zap,
  BarChart2,
  Settings,
  BookOpen,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const steps = [
  {
    number: '01',
    title: 'Schedule & Deploy',
    description:
      'Request a mission via the portal. Our team programs the drone with your pipeline GPS coordinates and confirms the flight window. The drone autonomously launches and follows the pre-set inspection route.',
    icon: Map,
    color: 'brand',
  },
  {
    number: '02',
    title: 'Real-Time Monitoring',
    description:
      'Open the Live Monitor dashboard to track the drone in real time. Gas sensor readings, thermal imagery, and drill telemetry stream directly to your screen at 1 Hz refresh rate.',
    icon: Activity,
    color: 'brand',
  },
  {
    number: '03',
    title: 'Alerts & Response',
    description:
      'The system automatically classifies anomalies as Warning or Critical. Operators receive instant push notifications and the alert panel logs every event with timestamp and GPS location.',
    icon: AlertTriangle,
    color: 'industry',
  },
  {
    number: '04',
    title: 'Reports & Compliance',
    description:
      'After each mission, a full inspection report is generated in PDF/CSV. Includes sensor readings, annotated thermal images, alert history, and a compliance summary for regulatory filing.',
    icon: FileText,
    color: 'brand',
  },
];

const features = [
  {
    icon: Gauge,
    title: 'Gas Detection Panel',
    description:
      'Monitors CH₄, H₂S, CO₂, and O₂ levels simultaneously. Color-coded gauge bars turn yellow at warning thresholds and red at critical levels so operators can assess risk at a glance.',
  },
  {
    icon: BarChart2,
    title: 'Live Trend Charts',
    description:
      'Recharts-powered graphs display a 60-second rolling history of drilling parameters and gas readings. Spot trends and anomalies before they become incidents.',
  },
  {
    icon: Radio,
    title: 'Drill Status Control',
    description:
      'Switch between Drilling, Tripping, Circulating, and Standby modes. Each mode adjusts baseline thresholds so alerts remain relevant to current operations.',
  },
  {
    icon: Shield,
    title: 'Alert Severity System',
    description:
      'Three-tier alert system: Normal (green), Warning (yellow), Critical (red). Each tier triggers a different response protocol, ensuring proportional action.',
  },
  {
    icon: Zap,
    title: 'Instant Notifications',
    description:
      'Critical events trigger toast notifications with vibration on mobile. Alerts are queued in the Alert Panel with full context so nothing is missed during busy operations.',
  },
  {
    icon: Settings,
    title: 'Pause & Resume',
    description:
      'Pause the live data stream to investigate a specific moment without losing continuity. Resume resumes the live feed and backfills the time gap automatically.',
  },
];

const thresholds = [
  { gas: 'Methane (CH₄)', warning: '25% LEL', critical: '50% LEL', unit: '% LEL', color: 'bg-yellow-400' },
  { gas: 'Hydrogen Sulfide (H₂S)', warning: '10 ppm', critical: '20 ppm', unit: 'ppm', color: 'bg-orange-400' },
  { gas: 'Carbon Dioxide (CO₂)', warning: '0.5%', critical: '1.5%', unit: '%', color: 'bg-blue-400' },
  { gas: 'Oxygen (O₂)', warning: '< 19.5%', critical: '< 16%', unit: '%', color: 'bg-green-400' },
];

const faqs = [
  {
    question: 'How often does the live monitor refresh?',
    answer:
      'Sensor readings update once per second (1 Hz). The trend chart maintains a 60-second rolling window so you always see the last minute of data.',
  },
  {
    question: 'What happens when a Critical alert fires?',
    answer:
      'A Critical alert triggers an on-screen toast notification, adds a red entry to the Alert Panel, and can optionally send an SMS/email to the on-call operator (configurable in account settings).',
  },
  {
    question: 'Can I export inspection data?',
    answer:
      'Yes. After every mission, a report is auto-generated. You can also export raw sensor CSV from the Reports tab at any time for further analysis in Excel or your DMS.',
  },
  {
    question: 'What drone hardware is supported?',
    answer:
      'DroneGas Guardian is hardware-agnostic via our telemetry API. Out-of-the-box integrations exist for DJI Matrice series, Autel EVO II, and Freefly Alta X with our certified sensor pod.',
  },
  {
    question: 'Is the platform suitable for offshore operations?',
    answer:
      'Yes. The system supports satellite telemetry relay for offshore and remote locations with a latency of under 3 seconds. Offline mode caches data locally and syncs when connectivity is restored.',
  },
  {
    question: 'How do I schedule my first mission?',
    answer:
      'Click "Schedule Demo" in the navigation, fill in your pipeline coordinates and preferred inspection window, and our operations team will confirm within 24 hours.',
  },
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
};

const Usage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-300 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-industry-400 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 text-brand-300" />
              User Guide
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-5 leading-tight">
              How to Use <span className="text-brand-300">DroneGas Guardian</span>
            </h1>
            <p className="text-lg text-brand-100 leading-relaxed mb-8">
              Everything you need to get from first mission to compliance-ready report — with a guided
              walkthrough of every panel, alert, and dashboard control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/drilling-monitor"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping-slow" />
                Open Live Monitor
              </Link>
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick-start steps */}
      <section id="get-started" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">Quick Start</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Four steps to your first inspection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex gap-5 p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white group"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-brand-50 group-hover:bg-brand-100 transition-colors`}>
                      <Icon className="w-6 h-6 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-400 mb-1 tracking-widest">STEP {step.number}</div>
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">Dashboard Guide</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Understanding every panel
            </h2>
            <p className="text-gray-500 mt-3">
              The Live Monitor dashboard surfaces critical data through six purpose-built panels.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gas thresholds table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">Safety Reference</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Gas detection thresholds
            </h2>
            <p className="text-gray-500 mt-3">
              Alert thresholds are based on OSHA and industry standards. They are pre-configured but adjustable per site.
            </p>
          </div>
          <div className="max-w-3xl mx-auto overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-950 text-white">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Gas</th>
                  <th className="text-center px-6 py-4 font-semibold">Warning</th>
                  <th className="text-center px-6 py-4 font-semibold">Critical</th>
                  <th className="text-center px-6 py-4 font-semibold">Unit</th>
                </tr>
              </thead>
              <tbody>
                {thresholds.map((row, i) => (
                  <tr key={row.gas} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800 flex items-center gap-2">
                      <span className={`inline-block w-2.5 h-2.5 rounded-full ${row.color}`} />
                      {row.gas}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-full text-xs">
                        {row.warning}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-full text-xs">
                        {row.critical}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">{row.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            LEL = Lower Explosive Limit. O₂ thresholds are oxygen-deficient atmosphere indicators.
          </p>
        </div>
      </section>

      {/* Status indicator guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">
            Status indicator legend
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: 'Normal',
                color: 'bg-green-500',
                ring: 'ring-green-200',
                desc: 'All readings within safe operating range. No operator action required.',
              },
              {
                label: 'Warning',
                color: 'bg-yellow-400',
                ring: 'ring-yellow-200',
                desc: 'One or more readings approaching threshold. Increase monitoring frequency.',
              },
              {
                label: 'Critical',
                color: 'bg-red-500',
                ring: 'ring-red-200',
                desc: 'Threshold exceeded. Follow emergency response procedure immediately.',
              },
            ].map((s) => (
              <div
                key={s.label}
                className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm ring-4 ${s.ring}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-3.5 h-3.5 rounded-full ${s.color}`} />
                  <span className="font-bold text-gray-900">{s.label}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Common questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <CheckCircle className="w-12 h-12 text-brand-400 mx-auto mb-5" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to run your first mission?
          </h2>
          <p className="text-brand-200 mb-8">
            Explore the live dashboard now or schedule a guided demo with our operations team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/drilling-monitor"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping-slow" />
              Open Live Monitor
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Usage;
