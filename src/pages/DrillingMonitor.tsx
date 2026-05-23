import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gauge, Layers, RotateCcw, Zap, Anchor } from 'lucide-react';
import { useDrillingData } from '@/hooks/useDrillingData';
import { MetricCard } from '@/components/drilling/MetricCard';
import { GasPanel } from '@/components/drilling/GasPanel';
import { AlertPanel } from '@/components/drilling/AlertPanel';
import { LiveChart } from '@/components/drilling/LiveChart';
import { MudHydraulics } from '@/components/drilling/MudHydraulics';
import { StatusBar } from '@/components/drilling/StatusBar';

function trendOf(history: { rop: number }[], key: 'rop' | 'wob' | 'rpm' | 'torque' | 'spp'): 'up' | 'down' | 'flat' {
  if (history.length < 5) return 'flat';
  const vals = history.slice(-5).map(h => (h as any)[key] as number);
  const first = vals[0];
  const last  = vals[vals.length - 1];
  const diff  = last - first;
  if (Math.abs(diff) < first * 0.01) return 'flat';
  return diff > 0 ? 'up' : 'down';
}

export default function DrillingMonitor() {
  const { params, history, alerts, paused, connected, setPaused, setStatus, dismissAlert } = useDrillingData();

  const ropStatus  = params.rop < 10 ? 'warning' : 'normal';
  const sppStatus  = params.spp > 4000 ? 'critical' : params.spp > 3500 ? 'warning' : 'normal';
  const wobStatus  = params.wob > 55 ? 'warning' : 'normal';
  const gasStatus  = params.gas.h2s >= 20 || params.gas.ch4 >= 50 ? 'critical'
                   : params.gas.h2s >= 10 || params.gas.ch4 >= 25 ? 'warning'
                   : 'normal';

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top header bar */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="h-4 w-px bg-slate-700" />
          <span className="font-display font-bold text-brand-400 text-lg">DroneGas Guardian</span>
          <span className="text-slate-600 text-sm hidden sm:block">·</span>
          <span className="text-slate-300 text-sm hidden sm:block">Real-Time Drilling Monitor</span>
          <div className="ml-auto flex items-center gap-2">
            {alerts.some(a => a.severity === 'critical') && (
              <span className="flex items-center gap-1.5 bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
                ⚠ CRITICAL ALERT
              </span>
            )}
            <span className="text-slate-500 text-xs hidden lg:block">
              {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-[1400px]">

        {/* Status / control bar */}
        <StatusBar
          status={params.status}
          connected={connected}
          paused={paused}
          onPause={() => setPaused(p => !p)}
          onStatusChange={setStatus}
        />

        {/* KPI cards row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <MetricCard
            label="Depth"
            value={params.depth.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            unit="ft"
            icon={<Layers className="w-4 h-4" />}
            trend="down"
            sub={`${(params.depth * 0.3048).toFixed(0)} m`}
          />
          <MetricCard
            label="ROP"
            value={params.rop.toFixed(1)}
            unit="ft/hr"
            icon={<Zap className="w-4 h-4" />}
            status={ropStatus}
            trend={trendOf(history as any, 'rop')}
          />
          <MetricCard
            label="WOB"
            value={params.wob.toFixed(1)}
            unit="klbs"
            icon={<Anchor className="w-4 h-4" />}
            status={wobStatus}
            trend={trendOf(history as any, 'wob')}
          />
          <MetricCard
            label="RPM"
            value={params.rpm.toString()}
            unit="rpm"
            icon={<RotateCcw className="w-4 h-4" />}
            trend={trendOf(history as any, 'rpm')}
          />
          <MetricCard
            label="Torque"
            value={params.torque.toFixed(1)}
            unit="kft-lb"
            icon={<Gauge className="w-4 h-4" />}
            trend={trendOf(history as any, 'torque')}
          />
          <MetricCard
            label="Standpipe Pressure"
            value={params.spp.toLocaleString()}
            unit="psi"
            icon={<Gauge className="w-4 h-4" />}
            status={sppStatus}
            trend={trendOf(history as any, 'spp')}
          />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          {/* Left col: chart + mud */}
          <div className="xl:col-span-2 space-y-4">
            <LiveChart history={history} />
            <MudHydraulics params={params} />
          </div>

          {/* Right col: gas + alerts */}
          <div className="space-y-4">
            <GasPanel gas={params.gas} />
            <AlertPanel alerts={alerts} onDismiss={dismissAlert} />

            {/* Quick stats */}
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 space-y-3">
              <h3 className="text-white font-semibold text-sm">Session Stats</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { label: 'Alerts fired', value: alerts.length.toString() },
                  { label: 'Data points', value: history.length.toString() },
                  { label: 'Avg ROP', value: history.length ? (history.reduce((s, h) => s + h.rop, 0) / history.length).toFixed(1) + ' ft/hr' : '—' },
                  { label: 'Max SPP', value: history.length ? Math.max(...history.map(h => h.spp)).toLocaleString() + ' psi' : '—' },
                ].map(stat => (
                  <div key={stat.label} className="bg-slate-900/60 rounded-lg p-3">
                    <div className="text-slate-500 mb-0.5">{stat.label}</div>
                    <div className="text-white font-mono font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-slate-600 text-xs pb-4">
          Simulated live data · DroneGas Guardian Drilling Monitor · 1 Hz refresh
        </footer>
      </main>
    </div>
  );
}
