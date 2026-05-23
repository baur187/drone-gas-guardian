import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, ReferenceLine,
} from 'recharts';
import { cn } from '@/lib/utils';
import type { TimeSeriesPoint } from '@/hooks/useDrillingData';

type ChartMode = 'drilling' | 'gas';

interface LiveChartProps {
  history: TimeSeriesPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs shadow-xl">
      <p className="text-slate-400 mb-2 font-medium">{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
          <span className="text-slate-300">{entry.name}:</span>
          <span className="text-white font-mono font-bold">
            {typeof entry.value === 'number' ? entry.value.toFixed(1) : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export function LiveChart({ history }: LiveChartProps) {
  const [mode, setMode] = useState<ChartMode>('drilling');

  const thinHistory = history.filter((_, i) => i % 2 === 0 || i === history.length - 1);

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h3 className="text-white font-semibold">Real-Time Trend</h3>
        <div className="flex rounded-lg border border-slate-600 overflow-hidden text-xs">
          {(['drilling', 'gas'] as ChartMode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                'px-3 py-1.5 font-medium transition-colors',
                mode === m
                  ? 'bg-brand-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              )}
            >
              {m === 'drilling' ? 'Drilling Params' : 'Gas Detection'}
            </button>
          ))}
        </div>
      </div>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          {mode === 'drilling' ? (
            <LineChart data={thinHistory} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="time"
                tick={{ fill: '#64748b', fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd"
              />
              <YAxis yAxisId="rop" orientation="left" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} domain={[0, 140]} />
              <YAxis yAxisId="rpm" orientation="right" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} domain={[0, 200]} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '11px', color: '#94a3b8' }} />
              <Line yAxisId="rop" type="monotone" dataKey="rop" name="ROP (ft/hr)" stroke="#1eaedb" strokeWidth={2} dot={false} isAnimationActive={false} />
              <Line yAxisId="rop" type="monotone" dataKey="wob" name="WOB (klbs)" stroke="#f59e0b" strokeWidth={2} dot={false} isAnimationActive={false} />
              <Line yAxisId="rpm" type="monotone" dataKey="rpm" name="RPM" stroke="#a78bfa" strokeWidth={2} dot={false} isAnimationActive={false} />
              <Line yAxisId="rop" type="monotone" dataKey="torque" name="Torque (kft-lb)" stroke="#34d399" strokeWidth={1.5} dot={false} isAnimationActive={false} />
            </LineChart>
          ) : (
            <LineChart data={thinHistory} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="time"
                tick={{ fill: '#64748b', fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd"
              />
              <YAxis yAxisId="ch4" orientation="left" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} domain={[0, 80]} />
              <YAxis yAxisId="h2s" orientation="right" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} domain={[0, 50]} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '11px', color: '#94a3b8' }} />
              <ReferenceLine yAxisId="ch4" y={25} stroke="#f59e0b" strokeDasharray="4 4" label={{ value: 'CH₄ Warn', fill: '#f59e0b', fontSize: 9 }} />
              <ReferenceLine yAxisId="h2s" y={10} stroke="#ef4444" strokeDasharray="4 4" label={{ value: 'H₂S Warn', fill: '#ef4444', fontSize: 9 }} />
              <Line yAxisId="ch4" type="monotone" dataKey="ch4" name="CH₄ % LEL" stroke="#f97316" strokeWidth={2} dot={false} isAnimationActive={false} />
              <Line yAxisId="h2s" type="monotone" dataKey="h2s" name="H₂S ppm" stroke="#ef4444" strokeWidth={2} dot={false} isAnimationActive={false} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
