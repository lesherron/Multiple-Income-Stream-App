import { 
  LayoutDashboard, 
  Wallet, 
  Users, 
  TrendingUp, 
  Truck, 
  Gavel, 
  Eye, 
  CalendarCheck,
  Building2,
  Settings
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useSettings } from '@/src/context/SettingsContext';

interface SidebarProps {
  currentScreen: string;
  setScreen: (screen: string) => void;
}

export default function Sidebar({ currentScreen, setScreen }: SidebarProps) {
  const { profile } = useSettings();
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'finance', label: 'Finance & Taxes', icon: Wallet },
    { id: 'crm', label: 'Clients & CRM', icon: Users },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
    { id: 'fleet', label: 'Fleet', icon: Truck, show: profile.types.some(t => ['rideshare', 'delivery', 'vehicle_rental'].includes(t)) },
    { id: 'property', label: 'Properties', icon: Building2, show: profile.types.includes('home_rental') },
    { id: 'legal', label: 'Legal', icon: Gavel },
    { id: 'client-view', label: 'Client View', icon: Eye },
    { id: 'booking', label: 'Booking', icon: CalendarCheck },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-72 z-40 p-5 bg-surface-container-low border-r border-outline-variant/10 pt-24">
      <div className="mb-10 px-4">
        <h2 className="font-headline font-black text-2xl text-on-surface tracking-tighter">Alex Morgan</h2>
        <p className="text-[10px] font-black uppercase text-on-surface-variant tracking-[0.2em] opacity-90 mt-1">Strategic Contractor</p>
      </div>
      <nav className="space-y-1 overflow-y-auto pr-2">
        {navItems.filter(item => item.show !== false).map((item) => (
          <button
            key={item.id}
            onClick={() => setScreen(item.id)}
            className={cn(
              "flex items-center gap-4 w-full px-5 py-4 rounded-2xl text-xs font-bold transition-all text-left group uppercase tracking-widest",
              currentScreen === item.id 
                ? "bg-primary text-on-primary shadow-xl shadow-primary/20 scale-[0.98]" 
                : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
            )}
          >
            <item.icon size={18} className={cn("transition-transform group-hover:scale-110", currentScreen === item.id ? "opacity-100" : "opacity-70")} />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
