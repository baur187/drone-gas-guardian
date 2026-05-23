import React from 'react';
import { cn } from '@/lib/utils';
import { X, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import type { DrillingAlert } from '@/hooks/useDrillingData';

interface AlertPanelProps {
  alerts: DrillingAlert[];
  onDismiss: (id: string) => void;
}

const icons = {
  critical: <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />,
  warning:  <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />,
  info:     <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />,
};

const rowColors = {
  critical: 'bg-red-900/20 border-red-500/40',
  warning:  'bg-yellow-900/20 border-yellow-500/40',
  info:     'bg-sky-900/20  border-sky-500/40',
};

const badgeColors = {
  critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  warning:  'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  info:     'bg-sky-500/20 text-sky-400 border-sky-500/30',
};

export function AlertPanel({ alerts, onDismiss }: AlertPanelProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-yellow-400" />
          Active Alerts
        </h3>
        {alerts.length > 0 && (
          <span className="text-xs text-slate-400">{alerts.length} active</span>
        )}
      </div>

      {alerts.length === 0 ? (
        <div className="flex items-center gap-2 text-green-400 text-sm py-3">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          All parameters within normal operating range
        </div>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto pr-1 scrollbar-thin">
          {alerts.map(alert => (
            <div
              key={alert.id}
              className={cn(
                'flex items-start gap-3 rounded-lg border p-3 text-sm',
                rowColors[alert.severity]
              )}
            >
              {icons[alert.severity]}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={cn('text-xs font-bold px-1.5 py-0.5 rounded border', badgeColors[alert.severity])}>
                    {alert.severity.toUpperCase()}
                  </span>
                  <span className="text-slate-300 font-medium">{alert.parameter}</span>
                  <span className="text-slate-500 text-xs">
                    {alert.timestamp.toLocaleTimeString('en-US', { hour12: false })}
                  </span>
                </div>
                <p className="text-slate-400 mt-0.5 text-xs">{alert.message}</p>
                <p className="text-slate-300 text-xs font-mono mt-0.5">
                  Value: <span className="text-white">{alert.value.toFixed(1)} {alert.unit}</span>
                </p>
              </div>
              <button
                onClick={() => onDismiss(alert.id)}
                className="text-slate-500 hover:text-slate-300 transition-colors shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
