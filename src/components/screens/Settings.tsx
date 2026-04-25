import { 
  Settings as SettingsIcon, 
  Sun, 
  Moon, 
  Type, 
  Plus, 
  CheckCircle2, 
  RotateCcw,
  Languages,
  ArrowLeft
} from 'lucide-react';
import { useSettings, BusinessType } from '@/src/context/SettingsContext';
import { useCurrency } from '@/src/context/CurrencyContext';
import { cn } from '@/src/lib/utils';

export default function Settings() {
  const { 
    theme, setTheme, 
    fontType, setFontType, 
    fontSize, setFontSize,
    profile, updateProfile,
  } = useSettings();
  const { targetCurrency, setTargetCurrency, availableCurrencies } = useCurrency();

  const businessTypes: { id: BusinessType; title: string }[] = [
    { id: 'rideshare', title: 'Rideshare' },
    { id: 'delivery', title: 'Food Delivery' },
    { id: 'vehicle_rental', title: 'Vehicle Rental' },
    { id: 'home_rental', title: 'Home Rental' },
    { id: 'consulting', title: 'Professional Service' }
  ];

  const toggleType = (id: BusinessType) => {
    const currentTypes = [...profile.types];
    if (currentTypes.includes(id)) {
      updateProfile({ types: currentTypes.filter(t => t !== id) });
    } else {
      updateProfile({ types: [...currentTypes, id] });
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <header>
        <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">Settings</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Appearance Section */}
        <section className="bento-card border-none space-y-8 min-h-[400px]">
          <div className="flex items-center gap-3">
            <Sun size={20} className="text-primary" />
            <h3 className="bento-label">Interface Style</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-on-surface">Interface Theme</span>
              <div className="flex bg-surface-container-highest/50 p-1 rounded-xl">
                <button 
                  onClick={() => setTheme('light')}
                  className={cn("px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-xs font-bold", theme === 'light' ? "bg-white text-primary shadow-sm" : "text-on-surface-variant")}
                >
                  <Sun size={14} /> Light
                </button>
                <button 
                  onClick={() => setTheme('dark')}
                  className={cn("px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-xs font-bold", theme === 'dark' ? "bg-surface-container-highest text-on-surface shadow-sm" : "text-on-surface-variant")}
                >
                  <Moon size={14} /> Dark
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-outline-variant/10">
              <label className="text-sm font-bold text-on-surface block">Typography Soul</label>
              <div className="grid grid-cols-3 gap-2">
                {(['sans', 'serif', 'mono'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setFontType(type)}
                    className={cn(
                      "py-3 rounded-xl border transition-all text-[10px] font-black uppercase tracking-widest",
                      fontType === type ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-outline-variant/30 text-on-surface-variant"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-outline-variant/10">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-on-surface">Viewport Density</label>
                <span className="text-[10px] font-black font-label bg-primary/10 text-primary px-3 py-1 rounded-full">{fontSize}PX</span>
              </div>
              <input 
                type="range" 
                min="12" 
                max="24" 
                value={fontSize} 
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>
        </section>

        {/* Business Profile Section */}
        <section className="bento-card border-none space-y-8 min-h-[400px]">
          <div className="flex items-center gap-3">
            <Plus size={20} className="text-primary" />
            <h3 className="bento-label">Business Matrix</h3>
          </div>

          <div className="space-y-4">
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
              Activating specific revenue streams will inject specialized toolsets into your dashboard environment.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {businessTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => toggleType(type.id)}
                  className={cn(
                    "w-full p-4 rounded-xl border transition-all flex items-center justify-between group",
                    profile.types.includes(type.id) 
                      ? "border-primary bg-primary/5 text-primary shadow-sm" 
                      : "border-outline-variant/30 text-on-surface-variant hover:border-primary/40 bg-surface-container-highest/20"
                  )}
                >
                  <span className="text-sm font-bold tracking-tight">{type.title}</span>
                  {profile.types.includes(type.id) && <CheckCircle2 size={16} />}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-outline-variant/10">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-on-surface">Fiscal Currency</label>
              <select 
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="bg-surface-container-highest/50 border-none rounded-xl px-4 py-2 font-black text-[10px] uppercase tracking-widest focus:ring-1 focus:ring-primary outline-none cursor-pointer"
              >
                {availableCurrencies.map(code => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-primary/5 p-8 rounded-[24px] border border-primary/10 flex flex-col md:flex-row items-center gap-6">
        <div className="bg-primary text-white p-4 rounded-2xl shadow-lg">
          <RotateCcw size={24} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-black font-headline text-on-surface tracking-tight">System Recalibration</h4>
          <p className="text-xs text-on-surface-variant font-medium mt-1">This will purge all local stream configurations and return you to the onboarding sequence.</p>
        </div>
        <button 
          onClick={() => updateProfile({ setupComplete: false })}
          className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all w-full md:w-auto"
        >
          Restart Onboarding
        </button>
      </div>
    </div>
  );
}
