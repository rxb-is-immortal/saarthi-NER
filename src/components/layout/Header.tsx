import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Shield, 
  Bell, 
  Clock, 
  Compass,
  LayoutDashboard,
  MapPin,
  Truck,
  ShieldCheck,
  BarChart3,
  Info,
  LogIn
} from 'lucide-react';

export const Header: React.FC = () => {
  const { simulatedTime, activeTab, setActiveTab } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'routes', label: 'Route Intelligence', icon: MapPin },
    { id: 'logistics', label: 'AI Logistics Planner', icon: Truck },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
    { id: 'explore', label: 'Explore Northeast', icon: Compass },
    { id: 'about', label: 'About', icon: Info },
    { id: 'login', label: 'Login', icon: LogIn },
  ];

  return (
    <header className="sticky top-0 z-[2000] w-full glass-panel border-b border-white/10 px-4 py-2.5 sm:px-6 shadow-glass">
      <div className="max-w-[1600px] mx-auto space-y-2.5">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          
          {/* Brand & Subtitle */}
          <div className="flex items-center space-x-3">
            <div 
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                    NER-Sarthi
                  </h1>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    DoNER
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium hidden md:block">
                  AI-Powered Logistics & Accessibility Intelligence • North East India
                </p>
              </div>
            </div>
          </div>

          {/* Center System Status & Clock */}
          <div className="hidden lg:flex items-center space-x-3 glass-panel-light px-3 py-1 rounded-full border border-white/10">
            <div className="flex items-center space-x-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                System Operational
              </span>
            </div>

            <span className="text-slate-600">|</span>

            <div className="flex items-center space-x-1 text-[11px] text-slate-300 font-mono">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>{simulatedTime}</span>
            </div>

            <span className="text-slate-600">|</span>

            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              DEMO MODE
            </span>
          </div>

          {/* Right Action Icons & Profile */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => setActiveTab('routes')}
              className="relative p-2 rounded-xl glass-panel-light text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Live Alert Ticker"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            </button>

            <div className="flex items-center space-x-2 glass-panel-light pl-2 pr-3 py-1 rounded-xl border border-white/10">
              <div className="w-6 h-6 rounded-lg bg-blue-600/80 flex items-center justify-center text-cyan-200">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[11px] font-bold text-slate-200 leading-tight">Control Room</p>
                <p className="text-[9px] text-slate-400">DoNER Ops</p>
              </div>
            </div>
          </div>

        </div>

        {/* Operational Modules Horizontal Navbar Row */}
        <div className="overflow-x-auto no-scrollbar pt-0.5">
          <nav className="flex items-center space-x-1.5 min-w-max">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl font-medium text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/30 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="whitespace-nowrap">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

      </div>
    </header>
  );
};
