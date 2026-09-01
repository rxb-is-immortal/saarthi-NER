import React, { createContext, useContext, useState, useEffect } from 'react';
import { RouteSegment, Vehicle, FieldOfficer, DisruptionAlert } from '../types';
import routesData from '../data/routes.json';
import vehiclesData from '../data/vehicles.json';
import officersData from '../data/officers.json';

interface AppContextType {
  routes: RouteSegment[];
  vehicles: Vehicle[];
  officers: FieldOfficer[];
  disruptions: DisruptionAlert[];
  selectedRoute: RouteSegment | null;
  selectedVehicle: Vehicle | null;
  selectedOfficer: FieldOfficer | null;
  activeTab: string;
  simulatedTime: string;
  toastMessage: string | null;
  
  // Selection handlers
  setSelectedRoute: (route: RouteSegment | null) => void;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
  setSelectedOfficer: (officer: FieldOfficer | null) => void;
  setActiveTab: (tab: string) => void;
  
  // Simulation methods
  simulateLandslide: (routeId?: string) => void;
  simulateHeavyRain: (routeId?: string) => void;
  simulateVehicleDelay: (vehicleId?: string) => void;
  clearRoute: (routeId?: string) => void;
  showToast: (msg: string) => void;
  
  // Computed KPI Stats
  kpiStats: {
    activeShipments: number;
    delayedShipments: number;
    highRiskRoutes: number;
    avgTimeSaved: string;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_DISRUPTIONS: DisruptionAlert[] = [
  {
    id: 'ALERT-001',
    routeId: 'R-003',
    routeName: 'Shillong – Silchar Highway',
    title: 'Active Landslide & Mudslide Debris',
    severity: 'critical',
    timestamp: '11:28 AM',
    type: 'Landslide',
    description: 'Debris falling at Sonapur tunnel stretch. Route blocked.'
  },
  {
    id: 'ALERT-002',
    routeId: 'R-006',
    routeName: 'Dimapur – Kohima Highway',
    title: 'Road Surface Subsidence',
    severity: 'high',
    timestamp: '11:15 AM',
    type: 'Road Damage',
    description: 'Heavy cargo traffic restricted near Pagla Pahar.'
  },
  {
    id: 'ALERT-003',
    routeId: 'R-001',
    routeName: 'Guwahati – Shillong Corridor',
    title: 'Reduced Fog Visibility & Rain',
    severity: 'medium',
    timestamp: '11:10 AM',
    type: 'Heavy Rainfall',
    description: 'Visibility down to 4.2 km near Nongpoh.'
  },
  {
    id: 'ALERT-004',
    routeId: 'R-009',
    routeName: 'Silchar – Aizawl Highway',
    title: 'Rockfall Clearing Operations',
    severity: 'high',
    timestamp: '10:50 AM',
    type: 'Landslide',
    description: 'Single lane traffic moving under PWD supervision.'
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [routes, setRoutes] = useState<RouteSegment[]>(routesData as RouteSegment[]);
  const [vehicles, setVehicles] = useState<Vehicle[]>(vehiclesData as Vehicle[]);
  const [officers, setOfficers] = useState<FieldOfficer[]>(officersData as FieldOfficer[]);
  const [disruptions, setDisruptions] = useState<DisruptionAlert[]>(INITIAL_DISRUPTIONS);
  
  const [selectedRoute, setSelectedRoute] = useState<RouteSegment | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedOfficer, setSelectedOfficer] = useState<FieldOfficer | null>(null);
  
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [simulatedTime, setSimulatedTime] = useState<string>('11:35 AM');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Clock ticker & Update Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setSimulatedTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

      // Decrement next update minutes
      setRoutes(prev => prev.map(r => ({
        ...r,
        nextUpdateMinutes: r.nextUpdateMinutes > 1 ? r.nextUpdateMinutes - 1 : 180
      })));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Vehicle position simulation (every 4 seconds)
  useEffect(() => {
    const vehicleInterval = setInterval(() => {
      setVehicles(prev => prev.map(v => {
        if (v.status !== 'On Route' && v.status !== 'Delayed') return v;
        // Deterministic tiny coordinate shift
        const deltaLat = (Math.random() - 0.48) * 0.003;
        const deltaLng = (Math.random() - 0.48) * 0.003;
        return {
          ...v,
          lat: Number((v.lat + deltaLat).toFixed(4)),
          lng: Number((v.lng + deltaLng).toFixed(4)),
        };
      }));
    }, 4000);

    return () => clearInterval(vehicleInterval);
  }, []);

  // Automatic Alert generator ticker (every 25 seconds)
  useEffect(() => {
    const alertInterval = setInterval(() => {
      const randomRoute = routes[Math.floor(Math.random() * routes.length)];
      const types: ('Landslide' | 'Heavy Rainfall' | 'Vehicle Delay' | 'Road Damage')[] = [
        'Heavy Rainfall', 'Landslide', 'Road Damage', 'Vehicle Delay'
      ];
      const selectedType = types[Math.floor(Math.random() * types.length)];
      const newAlert: DisruptionAlert = {
        id: `ALERT-${Date.now().toString().slice(-4)}`,
        routeId: randomRoute.id,
        routeName: randomRoute.name,
        title: `Auto-Detected ${selectedType} Warning`,
        severity: selectedType === 'Landslide' ? 'high' : 'medium',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: selectedType,
        description: `Field sensor reported sudden ${selectedType.toLowerCase()} fluctuation along ${randomRoute.sector}.`
      };
      setDisruptions(prev => [newAlert, ...prev.slice(0, 15)]);
    }, 25000);

    return () => clearInterval(alertInterval);
  }, [routes]);

  // Dynamic KPI Computation
  const activeShipments = vehicles.filter(v => v.status === 'On Route').length;
  const delayedShipments = vehicles.filter(v => v.status === 'Delayed').length;
  const highRiskRoutes = routes.filter(r => r.risk >= 50).length;
  const avgTimeSaved = '2h 18m';

  // Demo Simulation Actions
  const simulateLandslide = (targetId?: string) => {
    const targetRouteId = targetId || 'R-001'; // Default to Guwahati-Shillong Corridor
    setRoutes(prev => prev.map(r => {
      if (r.id === targetRouteId) {
        const updated = {
          ...r,
          status: 'blocked' as const,
          risk: 94,
          landslideRisk: 'BLOCKED' as const,
          landslideProbability: 95,
          rainRisk: 88,
          visibility: 1.5,
          lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        if (selectedRoute?.id === r.id) setSelectedRoute(updated);
        return updated;
      }
      return r;
    }));

    // Delay vehicles on this route
    setVehicles(prev => prev.map(v => {
      if (v.routeId === targetRouteId) {
        return { ...v, status: 'Delayed' as const, risk: 90, eta: '6h 45m (Delayed)' };
      }
      return v;
    }));

    const alertRoute = routes.find(r => r.id === targetRouteId);
    const newAlert: DisruptionAlert = {
      id: `SIM-LS-${Date.now().toString().slice(-4)}`,
      routeId: targetRouteId,
      routeName: alertRoute ? alertRoute.name : 'Target Route',
      title: '🔴 SIMULATION: Major Landslide Reported',
      severity: 'critical',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'Landslide',
      description: 'Simulated massive slope collapse. Polyline turned RED. Rerouting recommended!'
    };
    setDisruptions(prev => [newAlert, ...prev]);
    showToast(`⚠️ Simulated Landslide on ${alertRoute ? alertRoute.name : targetRouteId}! Polyline blocked.`);
  };

  const simulateHeavyRain = (targetId?: string) => {
    const targetRouteId = targetId || 'R-002'; // Default to Tezpur Highway
    setRoutes(prev => prev.map(r => {
      if (r.id === targetRouteId) {
        const updated = {
          ...r,
          status: 'at-risk' as const,
          risk: 68,
          rainRisk: 85,
          landslideRisk: 'MONITOR' as const,
          landslideProbability: 58,
          visibility: 2.8,
          lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        if (selectedRoute?.id === r.id) setSelectedRoute(updated);
        return updated;
      }
      return r;
    }));

    const alertRoute = routes.find(r => r.id === targetRouteId);
    const newAlert: DisruptionAlert = {
      id: `SIM-RAIN-${Date.now().toString().slice(-4)}`,
      routeId: targetRouteId,
      routeName: alertRoute ? alertRoute.name : 'Target Route',
      title: '🟡 SIMULATION: Heavy Monsoon Downpour',
      severity: 'medium',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'Heavy Rainfall',
      description: 'Simulated 90mm rainfall outburst. Visibility reduced to 2.8km.'
    };
    setDisruptions(prev => [newAlert, ...prev]);
    showToast(`🌧️ Simulated Heavy Rain on ${alertRoute ? alertRoute.name : targetRouteId}! Risk score elevated.`);
  };

  const simulateVehicleDelay = (targetVId?: string) => {
    const targetVehicleId = targetVId || 'V-001';
    setVehicles(prev => prev.map(v => {
      if (v.id === targetVehicleId) {
        const updated = {
          ...v,
          status: 'Delayed' as const,
          eta: '4h 30m (+1h 45m)',
          risk: 72
        };
        if (selectedVehicle?.id === v.id) setSelectedVehicle(updated);
        return updated;
      }
      return v;
    }));

    const newAlert: DisruptionAlert = {
      id: `SIM-VD-${Date.now().toString().slice(-4)}`,
      routeId: 'R-001',
      routeName: 'Guwahati – Shillong Corridor',
      title: '🟡 SIMULATION: Vehicle Delivery Bottleneck',
      severity: 'medium',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'Vehicle Delay',
      description: `Vehicle ${targetVehicleId} encountered heavy gradient slowdown. ETA pushed back.`
    };
    setDisruptions(prev => [newAlert, ...prev]);
    showToast(`🚚 Vehicle ${targetVehicleId} marked DELAYED! KPIs updated.`);
  };

  const clearRoute = (targetId?: string) => {
    const targetRouteId = targetId || 'R-001';
    setRoutes(prev => prev.map(r => {
      if (r.id === targetRouteId) {
        const updated = {
          ...r,
          status: 'clear' as const,
          risk: 15,
          rainRisk: 18,
          landslideRisk: 'CLEAR' as const,
          landslideProbability: 8,
          visibility: 9.0,
          lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        if (selectedRoute?.id === r.id) setSelectedRoute(updated);
        return updated;
      }
      return r;
    }));

    // Restore vehicles on this route
    setVehicles(prev => prev.map(v => {
      if (v.routeId === targetRouteId) {
        return { ...v, status: 'On Route' as const, risk: 20, eta: '2h 15m' };
      }
      return v;
    }));

    const alertRoute = routes.find(r => r.id === targetRouteId);
    const newAlert: DisruptionAlert = {
      id: `SIM-CLR-${Date.now().toString().slice(-4)}`,
      routeId: targetRouteId,
      routeName: alertRoute ? alertRoute.name : 'Target Route',
      title: '🟢 SIMULATION: Corridor Debris Cleared',
      severity: 'low',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'Cleared',
      description: 'PWD clearance operations completed. Route restored to CLEAR status.'
    };
    setDisruptions(prev => [newAlert, ...prev]);
    showToast(`✅ Route ${alertRoute ? alertRoute.name : targetRouteId} restored to CLEAR status!`);
  };

  return (
    <AppContext.Provider
      value={{
        routes,
        vehicles,
        officers,
        disruptions,
        selectedRoute,
        selectedVehicle,
        selectedOfficer,
        activeTab,
        simulatedTime,
        toastMessage,
        setSelectedRoute,
        setSelectedVehicle,
        setSelectedOfficer,
        setActiveTab,
        simulateLandslide,
        simulateHeavyRain,
        simulateVehicleDelay,
        clearRoute,
        showToast,
        kpiStats: {
          activeShipments,
          delayedShipments,
          highRiskRoutes,
          avgTimeSaved
        }
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
