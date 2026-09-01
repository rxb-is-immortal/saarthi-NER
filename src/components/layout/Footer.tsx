import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="w-full glass-panel border-t border-white/10 mt-12 py-8 px-6 text-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Col */}
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">NER-Sarthi</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md">
            AI-Powered Logistics & Route Accessibility Intelligence Platform for India's North Eastern Region.
            Combining terrain sensors, field officer network, driver reports, and weather analytics into one command desk.
          </p>
          <div className="pt-2 flex items-center space-x-2 text-[11px] text-amber-400 font-medium">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
            <span>DEMO DATA ONLY — Smart India Hackathon 2026 Prototype • Problem Statement 26002</span>
          </div>
        </div>

        {/* Quick Nav */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-3">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => setActiveTab('dashboard')} className="hover:text-cyan-300">Command Dashboard</button></li>
            <li><button onClick={() => setActiveTab('routes')} className="hover:text-cyan-300">Route Intelligence</button></li>
            <li><button onClick={() => setActiveTab('logistics')} className="hover:text-cyan-300">AI Logistics Planner</button></li>
            <li><button onClick={() => setActiveTab('analytics')} className="hover:text-cyan-300">Analytics & Reports</button></li>
          </ul>
        </div>

        {/* Info & Organization */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-3">Ministry Info</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>Ministry of Development of North Eastern Region (DoNER)</li>
            <li>Government of India</li>
            <li><button onClick={() => setActiveTab('explore')} className="hover:text-cyan-300 text-slate-300">Explore Northeast</button></li>
            <li><button onClick={() => setActiveTab('about')} className="hover:text-cyan-300 text-slate-300">About NER-Sarthi</button></li>
            <li><button onClick={() => setActiveTab('login')} className="hover:text-cyan-300 text-slate-300">Portal Login</button></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
        <p>© 2026 NER-Sarthi • Ministry of DoNER • SIH 2026 Prototype</p>
        <p>Built for offline operational command demonstration</p>
      </div>
    </footer>
  );
};
