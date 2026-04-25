/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import TopBar from './components/layout/TopBar';
import Sidebar from './components/layout/Sidebar';
import BottomNav from './components/layout/BottomNav';
import Dashboard from './components/screens/Dashboard';
import Finance from './components/screens/Finance';
import CRM from './components/screens/CRM';
import Insights from './components/screens/Insights';
import Fleet from './components/screens/Fleet';
import Legal from './components/screens/Legal';
import Booking from './components/screens/Booking';
import Setup from './components/screens/Setup';
import Settings from './components/screens/Settings';
import Property from './components/screens/Property';
import { useSettings } from './context/SettingsContext';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const { profile } = useSettings();

  if (!profile.setupComplete) {
    return <Setup />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'finance':
        return <Finance />;
      case 'crm':
        return <CRM />;
      case 'insights':
        return <Insights />;
      case 'fleet':
        return <Fleet />;
      case 'property':
        return <Property />;
      case 'legal':
        return <Legal />;
      case 'booking':
        return <Booking />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <TopBar />
      <div className="flex">
        <Sidebar currentScreen={currentScreen} setScreen={setCurrentScreen} />
        <main className="flex-1 md:ml-72 p-4 md:p-8 lg:p-12 pb-24 md:pb-12">
          <div className="max-w-7xl mx-auto">
            {renderScreen()}
          </div>
        </main>
      </div>
      <BottomNav currentScreen={currentScreen} setScreen={setCurrentScreen} />
    </div>
  );
}

