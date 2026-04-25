import { 
  Car, 
  ShoppingBag, 
  Home, 
  Key, 
  Briefcase, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useSettings, BusinessType } from '@/src/context/SettingsContext';
import { cn } from '@/src/lib/utils';

export default function Setup() {
  const { profile, updateProfile } = useSettings();

  const businessTypes: { id: BusinessType; icon: any; title: string; desc: string }[] = [
    { 
      id: 'rideshare', 
      icon: <Car />, 
      title: 'Rideshare', 
      desc: 'Uber, Lyft, etc.' 
    },
    { 
      id: 'delivery', 
      icon: <ShoppingBag />, 
      title: 'Food Delivery', 
      desc: 'Uber Eats, GrubHub, DoorDash' 
    },
    { 
      id: 'vehicle_rental', 
      icon: <Key />, 
      title: 'Vehicle Rental', 
      desc: 'Turo, Getaround, etc.' 
    },
    { 
      id: 'home_rental', 
      icon: <Home />, 
      title: 'Home Rental', 
      desc: 'Airbnb, VRBO, etc.' 
    },
    { 
      id: 'consulting', 
      icon: <Briefcase />, 
      title: 'Professional Service', 
      desc: 'Consulting, Freelance, etc.' 
    }
  ];

  const toggleType = (id: BusinessType) => {
    const currentTypes = [...profile.types];
    if (currentTypes.includes(id)) {
      updateProfile({ types: currentTypes.filter(t => t !== id) });
    } else {
      updateProfile({ types: [...currentTypes, id] });
    }
  };

  const completeSetup = () => {
    if (profile.types.length > 0) {
      updateProfile({ setupComplete: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-surface">
      <div className="max-w-2xl w-full space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight">Tailor Your Experience</h1>
          <p className="text-on-surface-variant text-lg max-w-md mx-auto">
            Select the businesses you run. We'll customize your dashboard to match your work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {businessTypes.map((type) => {
            const isSelected = profile.types.includes(type.id);
            return (
              <button
                key={type.id}
                onClick={() => toggleType(type.id)}
                className={cn(
                  "bento-card !p-8 text-left transition-all duration-300 flex items-start gap-5 group border",
                  isSelected 
                    ? "border-primary bg-primary/10 shadow-2xl shadow-primary/20" 
                    : "border-outline-variant/30 hover:border-primary/40"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm shrink-0",
                  isSelected ? "bg-primary text-white" : "bg-surface-container-highest/50 text-on-surface-variant"
                )}>
                  {type.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-headline text-on-surface tracking-tight group-hover:text-primary transition-colors">{type.title}</h3>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed font-medium opacity-80">{type.desc}</p>
                </div>
                {isSelected && <CheckCircle2 size={20} className="text-primary mt-1" />}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-6 pt-4">
          <button 
            disabled={profile.types.length === 0}
            onClick={completeSetup}
            className={cn(
              "w-full md:w-auto px-12 py-4 rounded-xl font-bold font-headline transition-all shadow-xl flex items-center justify-center gap-3",
              profile.types.length > 0
                ? "primary-gradient text-white hover:scale-105 active:scale-95"
                : "bg-surface-container-highest text-on-surface-variant cursor-not-allowed"
            )}
          >
            Get Started <ArrowRight size={20} />
          </button>
          
          <p className="text-xs text-on-surface-variant/60 font-body">
            You can modify these settings anytime in your profile.
          </p>
        </div>
      </div>
    </div>
  );
}
