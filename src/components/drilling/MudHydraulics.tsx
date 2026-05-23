import React from 'react';
import { Droplets, Thermometer, Weight } from 'lucide-react';
import type { DrillingParams } from '@/hooks/useDrillingData';

interface MudHydraulicsProps {
  params: DrillingParams;
}

function Row({ label, value, unit, warn }: { label: string; value: string; unit: string; warn?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-700/60 last:border-0">
      <span className="text-slate-400 text-sm">{label}</span>
      <div className="flex items-center gap-1.5">
        <span className={`font-mono font-semibold text-sm ${warn ? 'text-yellow-400' : 'text-white'}`}>{value}</span>
        <span className="text-slate-500 text-xs">{unit}</span>
      </div>
    </div>
  );
}

export function MudHydraulics({ params }: MudHydraulicsProps) {
  const flowDelta = Math.abs(params.mudFlowIn - params.mudFlowOut);
  const flowWarn = flowDelta > 30;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5 space-y-3">
      <h3 className="text-white font-semibold flex items-center gap-2">
        <Droplets className="w-4 h-4 text-cyan-400" />
        Mud & Hydraulics
      </h3>

      <div>
        <Row label="Flow Rate In"  value={params.mudFlowIn.toString()}  unit="gpm" />
        <Row label="Flow Rate Out" value={params.mudFlowOut.toString()} unit="gpm" warn={flowWarn} />
        <Row
          label="Flow Delta"
          value={flowDelta.toFixed(0)}
          unit="gpm"
          warn={flowWarn}
        />
        <Row label="MW In"  value={params.mwIn.toFixed(2)}  unit="ppg" />
        <Row label="MW Out" value={params.mwOut.toFixed(2)} unit="ppg" warn={Math.abs(params.mwIn - params.mwOut) > 0.3} />
      </div>

      <div className="border-t border-slate-700 pt-3 space-y-2">
        <div className="flex items-center gap-2 text-slate-300 text-sm">
          <Thermometer className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-slate-400">Mud Temp:</span>
          <span className="font-mono font-semibold ml-auto">{params.temperature.toFixed(1)}</span>
          <span className="text-slate-500 text-xs">°F</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300 text-sm">
          <Weight className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-slate-400">Hook Load:</span>
          <span className="font-mono font-semibold ml-auto">{params.hookLoad.toFixed(1)}</span>
          <span className="text-slate-500 text-xs">klbs</span>
        </div>
      </div>

      {flowWarn && (
        <p className="text-yellow-400/80 text-xs bg-yellow-900/20 border border-yellow-500/30 rounded-lg px-3 py-2">
          Flow imbalance detected. Possible kick or lost-circulation indicator.
        </p>
      )}
    </div>
  );
}
