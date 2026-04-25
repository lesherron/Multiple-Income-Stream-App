import { 
  Home, 
  Wallet, 
  Users, 
  TrendingUp, 
  Truck,
  Building2,
  Settings,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useSettings } from '@/src/context/SettingsContext';

interface BottomNavProps {
  currentScreen: string;
  setScreen: (screen: string) => void;
}

export default function BottomNav({ currentScreen, setScreen }: BottomNavProps) {
  const { profile } = useSettings();
  
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'finance', label: 'Finance', icon: Wallet },
    { id: 'fleet', label: 'Fleet', icon: Truck, show: profile.types.some(t => ['rideshare', 'delivery', 'vehicle_rental'].includes(t)) },
    { id: 'property', label: 'Prop', icon: Building2, show: profile.types.includes('home_rental') },
    { id: 'settings', label: 'Setup', icon: Settings },
  ];

  return (
    <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex justify-around items-center p-2 bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/10 shadow-2xl rounded-3xl">
      {navItems.filter(item => item.show !== false).map((item) => (
        <button
          key={item.id}
          onClick={() => setScreen(item.id)}
          className={cn(
            "flex flex-col items-center justify-center py-2 px-4 transition-all duration-300 rounded-2xl",
            currentScreen === item.id
              ? "text-primary bg-primary/10 shadow-sm"
              : "text-on-surface-variant opacity-60"
          )}
        >
          <item.icon size={22} className={cn("transition-transform", currentScreen === item.id ? "scale-110" : "")} />
          <span className="text-[8px] font-black uppercase tracking-widest mt-1.5">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
