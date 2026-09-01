import React from 'react';
import { Shield, Cpu, AlertTriangle, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto py-2">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>Smart India Hackathon 2026 Prototype</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">About NER-Sarthi</h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          AI-Powered Logistics & Accessibility Intelligence for India's North Eastern Region (NER).
          Developed for the Ministry of Development of North Eastern Region (DoNER) under Problem Statement 26002.
        </p>
      </div>

      {/* Mission Card */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3">
        <h2 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center space-x-2">
          <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Core Operational Mission</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          NER-Sarthi is a command-platform prototype designed to demonstrate how meteorological conditions, terrain landslide probability, road surface reports, logistics data, and field officer observations can be unified into a single operational interface.
        </p>
        <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">
          Key Objective: "Know the route before you move." To ensure critical healthcare, food, and development supplies reach mountain communities without unpredictable weather or landslide delays.
        </p>
      </div>

      {/* Tech Architecture Stack */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Technology Architecture</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="font-bold text-cyan-800 dark:text-cyan-300">Frontend Stack</span>
            <p className="text-slate-600 dark:text-slate-300">React 18, Vite 5, TypeScript 5, Tailwind CSS 3 with Liquid Glass Theme.</p>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="font-bold text-cyan-800 dark:text-cyan-300">GIS & Mapping</span>
            <p className="text-slate-600 dark:text-slate-300">Leaflet.js + React-Leaflet with CARTO vector tile styling.</p>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="font-bold text-cyan-800 dark:text-cyan-300">Data Analytics</span>
            <p className="text-slate-600 dark:text-slate-300">Recharts data visualization engine & Client-side CSV Exporter.</p>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="font-bold text-cyan-800 dark:text-cyan-300">Offline Simulation Engine</span>
            <p className="text-slate-600 dark:text-slate-300">Deterministic local state engines, timers, and client-side scoring formulas.</p>
          </div>
        </div>
      </div>

      {/* Mandatory Prototype Disclaimer */}
      <div className="glass-panel p-6 rounded-2xl border border-amber-400/40 bg-amber-50 dark:bg-amber-950/20 text-center space-y-2">
        <div className="inline-flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4" />
          <span>Important Prototype Disclaimer</span>
        </div>
        <p className="text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed max-w-xl mx-auto font-medium">
          This prototype is for demonstration purposes only and does not represent live government infrastructure or real-world operational intelligence. All weather metrics, vehicle coordinates, officer identities (+91-00000-00000), and disruption alerts are locally mocked for SIH 2026 evaluation.
        </p>
      </div>

    </div>
  );
};
