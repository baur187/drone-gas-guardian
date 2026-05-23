import React from 'react';
import { cn } from '@/lib/utils';
import { Flame, AlertTriangle, Wind, Beaker } from 'lucide-react';
import type { GasReading } from '@/hooks/useDrillingData';

interface GaugeBarProps {
  value: number;
  max: number;
  warnAt: number;
  critAt: number;
  label: string;
  unit: string;
  icon: React.ReactNode;
}

function GaugeBar({ value, max, warnAt, critAt, label, unit, icon }: GaugeBarProps) {
  const pct = Math.min((value / max) * 100, 100);
  const isCrit = value >= critAt;
  const isWarn = !isCrit && value >= warnAt;

  const barColor = isCrit
    ? 'bg-red-500'
    : isWarn
    ? 'bg-yellow-400'
    : 'bg-green-500';

  const textColor = isCrit ? 'text-red-400' : isWarn ? 'text-yellow-400' : 'text-green-400';

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-slate-300 text-sm font-medium">
          <span className={cn(isCrit ? 'text-red-400' : isWarn ? 'text-yellow-400' : 'text-slate-400')}>{icon}</span>
          {label}
        </div>
        <div className="flex items-center gap-1.5">
          <span className={cn('font-mono font-bold text-sm', textColor)}>{value.toFixed(1)}</span>
          <span className="text-slate-500 text-xs">{unit}</span>
          {isCrit && <AlertTriangle className="w-3.5 h-3.5 text-red-400 animate-pulse" />}
        </div>
      </div>
      <div className="relative h-2.5 rounded-full bg-slate-700 overflow-hidden">
        {/* Warn zone marker */}
        <div className="absolute top-0 bottom-0 w-px bg-yellow-500/50" style={{ left: `${(warnAt / max) * 100}%` }} />
        {/* Crit zone marker */}
        <div className="absolute top-0 bottom-0 w-px bg-red-500/50" style={{ left: `${(critAt / max) * 100}%` }} />
        <div
          className={cn('h-full rounded-full transition-all duration-700', barColor, isCrit && 'animate-pulse')}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-slate-600 text-xs">
        <span>0</span>
        <span className="text-yellow-600/70">W:{warnAt}</span>
        <span className="text-red-600/70">A:{critAt}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
}

interface GasPanelProps {
  gas: GasReading;
}

export function GasPanel({ gas }: GasPanelProps) {
  const hasAlarm = gas.h2s >= 10 || gas.ch4 >= 25;

  return (
    <div className={cn(
      'rounded-xl border p-5 space-y-5 transition-colors duration-500',
      hasAlarm ? 'border-red-500/60 bg-red-900/10' : 'border-slate-700 bg-slate-800/50'
    )}>
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-400" />
          Gas Detection
        </h3>
        {hasAlarm ? (
          <span className="flex items-center gap-1.5 bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded-full border border-red-500/40 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            GAS ALARM
          </span>
        ) : (
          <span className="flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-medium px-2 py-1 rounded-full border border-green-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Safe
          </span>
        )}
      </div>

      <GaugeBar
        value={gas.ch4}
        max={100}
        warnAt={25}
        critAt={50}
        label="CH₄ Methane"
        unit="% LEL"
        icon={<Flame className="w-3.5 h-3.5" />}
      />
      <GaugeBar
        value={gas.h2s}
        max={50}
        warnAt={10}
        critAt={20}
        label="H₂S Hydrogen Sulfide"
        unit="ppm"
        icon={<AlertTriangle className="w-3.5 h-3.5" />}
      />
      <GaugeBar
        value={gas.co2}
        max={5000}
        warnAt={1000}
        critAt={3000}
        label="CO₂ Carbon Dioxide"
        unit="ppm"
        icon={<Wind className="w-3.5 h-3.5" />}
      />
      <GaugeBar
        value={gas.o2}
        max={25}
        warnAt={19.5}
        critAt={23}
        label="O₂ Oxygen"
        unit="%"
        icon={<Beaker className="w-3.5 h-3.5" />}
      />

      <div className="pt-1 border-t border-slate-700 flex justify-between text-xs text-slate-500">
        <span>Total Combustible: <span className="text-slate-300 font-mono">{gas.total.toFixed(1)}% LEL</span></span>
        <span>O₂ Deficiency alert at &lt;19.5%</span>
      </div>
    </div>
  );
}
