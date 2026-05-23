import { useState, useEffect, useCallback, useRef } from 'react';

export type DrillStatus = 'drilling' | 'tripping' | 'circulating' | 'standby';
export type AlertSeverity = 'critical' | 'warning' | 'info';

export interface DrillingAlert {
  id: string;
  timestamp: Date;
  severity: AlertSeverity;
  parameter: string;
  message: string;
  value: number;
  unit: string;
}

export interface GasReading {
  ch4: number;   // Methane %LEL
  h2s: number;   // Hydrogen Sulfide ppm
  co2: number;   // Carbon Dioxide ppm
  o2: number;    // Oxygen %
  total: number; // Total combustible %LEL
}

export interface DrillingParams {
  depth: number;        // ft
  rop: number;          // ft/hr
  wob: number;          // klbs
  rpm: number;          // rpm
  torque: number;       // kft-lbs
  spp: number;          // psi - Standpipe Pressure
  mudFlowIn: number;    // gpm
  mudFlowOut: number;   // gpm
  hookLoad: number;     // klbs
  mwIn: number;         // ppg - Mud Weight In
  mwOut: number;        // ppg - Mud Weight Out
  temperature: number;  // °F
  status: DrillStatus;
  gas: GasReading;
}

export interface TimeSeriesPoint {
  time: string;
  rop: number;
  wob: number;
  rpm: number;
  torque: number;
  spp: number;
  ch4: number;
  h2s: number;
  depth: number;
}

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val));

const jitter = (base: number, pct: number) =>
  base + base * pct * (Math.random() * 2 - 1);

let _depth = 8420;
let _rop = 42;
let _wob = 28;
let _rpm = 95;
let _torque = 14.2;
let _spp = 2840;
let _ch4 = 2.1;
let _h2s = 0.4;
let _alertCounter = 0;

function nextParams(prev: DrillingParams): DrillingParams {
  _depth += _rop / 3600;                        // depth accrual per second
  _rop    = clamp(jitter(_rop,    0.03), 5, 120);
  _wob    = clamp(jitter(_wob,    0.02), 10, 60);
  _rpm    = clamp(jitter(_rpm,    0.02), 40, 180);
  _torque = clamp(jitter(_torque, 0.03), 4, 35);
  _spp    = clamp(jitter(_spp,    0.01), 1500, 4500);
  _ch4    = clamp(jitter(_ch4,    0.08), 0, 60);
  _h2s    = clamp(jitter(_h2s,    0.06), 0, 30);

  const mudFlowIn  = clamp(jitter(720, 0.01), 650, 800);
  const mudFlowOut = clamp(mudFlowIn + (Math.random() - 0.5) * 30, 620, 830);
  const mwIn       = clamp(jitter(10.2, 0.005), 9.5, 11.5);
  const mwOut      = clamp(mwIn + (Math.random() - 0.5) * 0.3, 9.2, 11.8);

  return {
    depth:       Math.round(_depth * 10) / 10,
    rop:         Math.round(_rop   * 10) / 10,
    wob:         Math.round(_wob   * 10) / 10,
    rpm:         Math.round(_rpm),
    torque:      Math.round(_torque * 10) / 10,
    spp:         Math.round(_spp),
    mudFlowIn:   Math.round(mudFlowIn),
    mudFlowOut:  Math.round(mudFlowOut),
    hookLoad:    Math.round(jitter(185, 0.01) * 10) / 10,
    mwIn:        Math.round(mwIn  * 100) / 100,
    mwOut:       Math.round(mwOut * 100) / 100,
    temperature: Math.round(jitter(148, 0.005) * 10) / 10,
    status:      prev.status,
    gas: {
      ch4:   Math.round(_ch4  * 10) / 10,
      h2s:   Math.round(_h2s  * 10) / 10,
      co2:   Math.round(jitter(380, 0.03) * 10) / 10,
      o2:    Math.round(jitter(20.8, 0.002) * 10) / 10,
      total: Math.round((_ch4 * 1.1) * 10) / 10,
    },
  };
}

function checkAlerts(params: DrillingParams): DrillingAlert[] {
  const alerts: DrillingAlert[] = [];
  const ts = new Date();

  if (params.gas.h2s > 10) {
    alerts.push({
      id: `alert-${++_alertCounter}`,
      timestamp: ts,
      severity: params.gas.h2s > 20 ? 'critical' : 'warning',
      parameter: 'H₂S',
      message: params.gas.h2s > 20 ? 'DANGER: H₂S exceeds safe threshold' : 'H₂S elevated — monitor closely',
      value: params.gas.h2s,
      unit: 'ppm',
    });
  }
  if (params.gas.ch4 > 25) {
    alerts.push({
      id: `alert-${++_alertCounter}`,
      timestamp: ts,
      severity: params.gas.ch4 > 40 ? 'critical' : 'warning',
      parameter: 'CH₄',
      message: params.gas.ch4 > 40 ? 'DANGER: Methane at explosive range' : 'Methane above 25% LEL',
      value: params.gas.ch4,
      unit: '% LEL',
    });
  }
  if (params.spp > 4200) {
    alerts.push({
      id: `alert-${++_alertCounter}`,
      timestamp: ts,
      severity: 'warning',
      parameter: 'SPP',
      message: 'Standpipe pressure nearing limit',
      value: params.spp,
      unit: 'psi',
    });
  }
  if (Math.abs(params.mudFlowIn - params.mudFlowOut) > 40) {
    alerts.push({
      id: `alert-${++_alertCounter}`,
      timestamp: ts,
      severity: 'warning',
      parameter: 'Flow Delta',
      message: 'Flow-in / flow-out imbalance detected',
      value: Math.abs(params.mudFlowIn - params.mudFlowOut),
      unit: 'gpm',
    });
  }

  return alerts;
}

const INITIAL_PARAMS: DrillingParams = {
  depth: 8420,
  rop: 42,
  wob: 28,
  rpm: 95,
  torque: 14.2,
  spp: 2840,
  mudFlowIn: 720,
  mudFlowOut: 718,
  hookLoad: 185,
  mwIn: 10.2,
  mwOut: 10.18,
  temperature: 148,
  status: 'drilling',
  gas: { ch4: 2.1, h2s: 0.4, co2: 380, o2: 20.8, total: 2.3 },
};

const MAX_HISTORY = 60;

function fmtTime(d: Date) {
  return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function useDrillingData() {
  const [params, setParams]     = useState<DrillingParams>(INITIAL_PARAMS);
  const [history, setHistory]   = useState<TimeSeriesPoint[]>([]);
  const [alerts, setAlerts]     = useState<DrillingAlert[]>([]);
  const [paused, setPaused]     = useState(false);
  const [connected, setConnected] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const tick = useCallback(() => {
    setParams(prev => {
      const next = nextParams(prev);
      const newAlerts = checkAlerts(next);

      if (newAlerts.length > 0) {
        setAlerts(a => [...newAlerts, ...a].slice(0, 50));
      }

      const point: TimeSeriesPoint = {
        time:   fmtTime(new Date()),
        rop:    next.rop,
        wob:    next.wob,
        rpm:    next.rpm,
        torque: next.torque,
        spp:    next.spp,
        ch4:    next.gas.ch4,
        h2s:    next.gas.h2s,
        depth:  next.depth,
      };

      setHistory(h => [...h.slice(-(MAX_HISTORY - 1)), point]);
      return next;
    });
  }, []);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(tick, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, tick]);

  const dismissAlert = useCallback((id: string) => {
    setAlerts(a => a.filter(x => x.id !== id));
  }, []);

  const setStatus = useCallback((status: DrillStatus) => {
    setParams(p => ({ ...p, status }));
  }, []);

  return { params, history, alerts, paused, connected, setPaused, setStatus, dismissAlert };
}
