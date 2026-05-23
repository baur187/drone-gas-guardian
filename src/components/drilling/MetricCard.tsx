import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit: string;
  icon: React.ReactNode;
  status?: 'normal' | 'warning' | 'critical';
  trend?: 'up' | 'down' | 'flat';
  sub?: string;
}

export function MetricCard({ label, value, unit, icon, status = 'normal', trend, sub }: MetricCardProps) {
  const statusColors = {
    normal:   'border-slate-700 bg-slate-800/50',
    warning:  'border-yellow-500/60 bg-yellow-900/20',
    critical: 'border-red-500/60 bg-red-900/20',
  };

  const valueColors = {
    normal:   'text-white',
    warning:  'text-yellow-400',
    critical: 'text-red-400',
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const trendColor = trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-sky-400' : 'text-slate-500';

  return (
    <div className={cn('rounded-xl border p-4 transition-colors duration-500', statusColors[status])}>
      <div className="flex items-start justify-between mb-2">
        <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{label}</div>
        <div className={cn('p-1.5 rounded-lg', status === 'critical' ? 'bg-red-500/20 text-red-400' : status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-700 text-brand-400')}>
          {icon}
        </div>
      </div>
      <div className="flex items-end gap-2">
        <span className={cn('text-2xl font-bold font-mono tabular-nums', valueColors[status])}>
          {value}
        </span>
        <span className="text-slate-400 text-sm mb-0.5">{unit}</span>
        {trend && (
          <TrendIcon className={cn('w-4 h-4 mb-1 ml-auto', trendColor)} />
        )}
      </div>
      {sub && <div className="text-slate-500 text-xs mt-1">{sub}</div>}
      {status === 'critical' && (
        <div className="mt-2 flex items-center gap-1.5 text-red-400 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping-slow" />
          ALARM
        </div>
      )}
    </div>
  );
}
