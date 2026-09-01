import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  LayoutDashboard, 
  MapPin, 
  Truck, 
  Bell, 
  Compass, 
  Menu, 
  X,
  ShieldCheck,
  BarChart3,
  Info,
  LogIn
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const bottomNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'routes', label: 'Routes', icon: MapPin },
    { id: 'logistics', label: 'Logistics', icon: Truck },
    { id: 'login', label: 'Login', icon: LogIn },
  ];

  const fullNavItems = [
    { id: 'dashboard', label: 'Command Dashboard', icon: LayoutDashboard },
    { id: 'routes', label: 'Route Intelligence', icon: MapPin },
    { id: 'logistics', label: 'AI Logistics Planner', icon: Truck },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
    { id: 'explore', label: 'Explore Northeast', icon: Compass },
    { id: 'about', label: 'About NER-Sarthi', icon: Info },
    { id: 'login', label: 'Portal Login', icon: LogIn },
  ];

  return (
    <>
      {/* Mobile Top Header Bar with Hamburger Menu */}
      <div className="lg:hidden flex items-center justify-between glass-panel px-4 py-2 border-b border-white/10 sticky top-[65px] z-[1900]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-cyan-400">NER-Sarthi Ops</span>
        </div>
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="p-1.5 rounded-lg glass-panel-light text-slate-200 hover:text-cyan-400"
        >
          {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Slide-out Navigation Drawer Overlay */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-[2500] bg-slate-950/80 backdrop-blur-md flex flex-col justify-between p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-lg font-bold text-cyan-300">Operational Navigation</h2>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-lg bg-white/10 text-slate-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {fullNavItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setDrawerOpen(false);
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-center text-xs text-slate-400 border-t border-white/10 pt-4">
            <p>DoNER • SIH 2026 Problem Statement 26002</p>
          </div>
        </div>
      )}

      {/* Bottom Sticky Navigation for Smartphones */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[1900] glass-panel border-t border-white/10 px-2 py-1.5 flex items-center justify-around">
        {bottomNavItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
                isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
