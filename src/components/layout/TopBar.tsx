import { Bell, Sun, Moon } from 'lucide-react';
import { useSettings } from '@/src/context/SettingsContext';

export default function TopBar() {
  const { theme, setTheme } = useSettings();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 md:h-20 z-50 px-8 flex items-center justify-between border-b border-outline-variant/10 bg-surface-container-low/90 backdrop-blur-2xl">
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-10 h-10 rounded-full border border-primary/20 p-[2px] shadow-sm transform group-active:scale-95 transition-transform overflow-hidden">
          <img 
            alt="User profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc7uMeHTAmCpWEVkVClUHwN3fanLbtDUbvPeWmAvPrFnnmRBkTELhK_WXwzGbWIlCzxJAsqkFtZVqfnodYBUmYvxeGg3MaKw_PSnhWk5TrkZU2Yc7Zpvk3hQTS68-4bBEhFwiKoiNuLboVuit6onm3UOm0ULYt15nWMw3Afc1nLJnArpZYdW0gWac6IhioCIg7_FkIjV7qrrzExivZOkCwHZu-XRJyoFZqdtCBhjPo-cNLUGpATXM9PcTZOcbUQ_42nIV-L26z7bM" 
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-xl font-black tracking-tighter text-on-surface font-headline leading-none">2DAY <span className="text-primary italic">I</span> WORKED</span>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="w-10 h-10 rounded-xl bg-surface-container-highest/50 text-on-surface flex items-center justify-center hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm border border-outline-variant/5"
          title="Toggle Theme"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center relative hover:scale-105 active:scale-95 transition-all group border border-primary/10">
          <Bell size={18} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-error rounded-full border border-surface shadow-[0_0_5px_rgba(220,38,38,0.5)]"></span>
        </button>
      </div>
    </header>
  );
}
