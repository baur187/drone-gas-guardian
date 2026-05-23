import React from 'react';
import { cn } from '@/lib/utils';
import { Wifi, WifiOff, Pause, Play, RotateCcw, ChevronDown } from 'lucide-react';
import type { DrillStatus } from '@/hooks/useDrillingData';

const STATUS_OPTIONS: { value: DrillStatus; label: string; color: string }[] = [
  { value: 'drilling',    label: 'Drilling',    color: 'bg-green-500' },
  { value: 'tripping',   label: 'Tripping',    color: 'bg-blue-500' },
  { value: 'circulating', label: 'Circulating', color: 'bg-purple-500' },
  { value: 'standby',    label: 'Standby',     color: 'bg-slate-500' },
];

interface StatusBarProps {
  status: DrillStatus;
  connected: boolean;
  paused: boolean;
  wellName?: string;
  onPause: () => void;
  onStatusChange: (s: DrillStatus) => void;
}

export function StatusBar({ status, connected, paused, wellName = 'Well #DGG-047', onPause, onStatusChange }: StatusBarProps) {
  const currentStatus = STATUS_OPTIONS.find(s => s.value === status) ?? STATUS_OPTIONS[0];
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3 bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3">
      {/* Well name */}
      <div className="flex items-center gap-2">
        <div className={cn('w-2 h-2 rounded-full', connected ? 'bg-green-400 animate-ping-slow' : 'bg-red-400')} />
        <span className="text-white font-semibold text-sm">{wellName}</span>
      </div>

      <div className="h-4 w-px bg-slate-700" />

      {/* Connection */}
      <div className={cn('flex items-center gap-1.5 text-xs font-medium', connected ? 'text-green-400' : 'text-red-400')}>
        {connected ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
        {connected ? 'Live' : 'Offline'}
      </div>

      <div className="h-4 w-px bg-slate-700" />

      {/* Drill status selector */}
      <div className="relative">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-xs hover:border-slate-500 transition-colors"
        >
          <span className={cn('w-2 h-2 rounded-full', currentStatus.color)} />
          <span className="text-slate-200 font-medium">{currentStatus.label}</span>
          <ChevronDown className="w-3 h-3 text-slate-500" />
        </button>
        {open && (
          <div className="absolute top-full left-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg overflow-hidden z-20 min-w-full shadow-xl">
            {STATUS_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => { onStatusChange(opt.value); setOpen(false); }}
                className={cn(
                  'flex items-center gap-2 w-full text-left px-3 py-2 text-xs hover:bg-slate-700 transition-colors',
                  opt.value === status ? 'text-white bg-slate-700' : 'text-slate-300'
                )}
              >
                <span className={cn('w-2 h-2 rounded-full', opt.color)} />
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-4 w-px bg-slate-700" />

      {/* Play/Pause */}
      <button
        onClick={onPause}
        className={cn(
          'flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors',
          paused
            ? 'bg-green-500/20 border-green-500/50 text-green-400 hover:bg-green-500/30'
            : 'bg-slate-800 border-slate-600 text-slate-300 hover:text-white hover:border-slate-500'
        )}
      >
        {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        {paused ? 'Resume' : 'Pause'}
      </button>

      <div className="ml-auto text-slate-500 text-xs hidden sm:block">
        Update rate: 1 s · Data retention: 60 s
      </div>
    </div>
  );
}
