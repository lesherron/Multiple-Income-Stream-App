import { 
  Plus, 
  Receipt, 
  Fuel, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Timer, 
  Navigation, 
  Info, 
  Map as MapIcon, 
  Zap,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useSettings } from '@/src/context/SettingsContext';
import { useCurrency } from '@/src/context/CurrencyContext';

export default function Dashboard() {
  const { profile } = useSettings();
  const { formatCurrency } = useCurrency();
  const isDriver = profile.types.some(t => ['rideshare', 'delivery'].includes(t));

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2 italic">Welcome back, Alex.</h1>
          <p className="text-on-surface-variant text-lg font-body">Efficiency is your edge today.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-success/10 text-success text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse shadow-sm shadow-success/10">
          <div className="w-1.5 h-1.5 bg-success rounded-full"></div> All Systems Nominal
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[220px]">
        {/* Active Shift Card - spans 2x2 */}
        <div className="md:col-span-2 md:row-span-2 primary-gradient rounded-[24px] p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl group">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot"></div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-label text-on-primary-container/80">Live Operation Tracker</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black font-headline tracking-tighter mb-4 tabular-nums">04:22:18</h2>
            <p className="text-on-primary-container text-lg font-medium opacity-90">Morning Flow: Unified Platform Multi-stream</p>
          </div>
          <div className="relative z-10 flex gap-4 pt-10">
            <button className="bg-on-primary text-primary font-black px-10 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest leading-none">Pause Stream</button>
            <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-on-primary font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-primary active:scale-95 transition-all text-xs uppercase tracking-widest leading-none">End Session</button>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
        </div>

        {/* specialized driver tools - Route Scout */}
        {isDriver && (
          <div className="bento-card md:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h3 className="bento-label flex items-center gap-2">
                <Navigation size={16} /> Pro Route Scout
              </h3>
              <span className="text-[9px] font-black uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded text-primary">AI Pred</span>
            </div>
            <div className="space-y-2 mt-4">
              <RouteItem name="PCH Scenic" time="22 min" status="optimal" />
              <RouteItem name="I-405 Hwy" time="48 min" status="congested" />
            </div>
          </div>
        )}

        {/* specialized driver tools - Supply Intel */}
        {isDriver && (
          <div className="bento-card flex flex-col justify-between">
            <h3 className="bento-label flex items-center gap-2">
              <Fuel size={16} /> Supply Intel
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-black font-headline text-primary tracking-tighter">{formatCurrency(4.85, { precision: 2 })}</p>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tight">Lowest Gas - 1.2mi</p>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[70%]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Progress */}
        <div className="bento-card flex flex-col items-center justify-center text-center">
          <div className="relative w-32 h-32 mb-4">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-primary" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeDasharray="351.8" strokeDashoffset="88" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <span className="text-lg font-black font-headline text-on-surface truncate w-full">{formatCurrency(420)}</span>
              <span className="text-[9px] font-bold text-on-surface-variant uppercase truncate w-full">Goal {formatCurrency(560)}</span>
            </div>
          </div>
          <h3 className="bento-label !mb-0 mt-2">Daily Revenue</h3>
        </div>

        {/* Activity Pulse - spans 1x2 or similar */}
        <div className="bento-card md:col-span-2 md:row-span-1 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="bento-label uppercase">Activity Pulse</h3>
            <button className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">Full Log</button>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto no-scrollbar">
            <ActivityRow icon={<Zap size={16} />} title="Platform Payout" meta="Uber Rideshare" val={`+${formatCurrency(185)}`} type="pos" />
            <ActivityRow icon={<Fuel size={16} />} title="Fuel Expense" meta="Standard Ops" val={`-${formatCurrency(54)}`} type="neg" />
            <ActivityRow icon={<Zap size={16} />} title="Delivery Bonus" meta="DoorDash Flow" val={`+${formatCurrency(25)}`} type="pos" />
            <ActivityRow icon={<ArrowUpRight size={16} />} title="Daily Rental" meta="Tesla Model S" val={`+${formatCurrency(110)}`} type="pos" />
          </div>
        </div>

        {/* Regional Compliance */}
        <div className="bento-card md:col-span-2 space-y-4">
          <h3 className="bento-label">Compliance Status</h3>
          <div className="space-y-3">
            <ComplianceItem label="Self-Employment" perc={65} val={formatCurrency(2145)} />
            <ComplianceItem label="Regional Insurance" perc={92} val={formatCurrency(450)} />
          </div>
        </div>
      </div>

    </div>
  );
}

function RouteItem({ name, time, status }: any) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-highest/20 border border-outline-variant/10 group cursor-pointer hover:bg-surface-container-low transition-all">
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-1.5 h-1.5 rounded-full",
          status === 'optimal' ? "bg-success shadow-[0_0_8px_rgba(var(--color-success),0.5)]" : "bg-error shadow-[0_0_8px_rgba(var(--color-error),0.5)]"
        )}></div>
        <span className="text-sm font-bold text-on-surface tracking-tight">{name}</span>
      </div>
      <span className={cn(
        "text-sm font-black font-headline",
        status === 'optimal' ? "text-success" : "text-error"
      )}>{time}</span>
    </div>
  );
}

function ActivityRow({ icon, title, meta, val, type }: any) {
  return (
    <div className="bg-surface-container-highest/10 p-4 rounded-2xl flex items-center gap-4 group hover:bg-surface-container-low transition-all border border-transparent hover:border-outline-variant/10 cursor-pointer">
      <div className={cn(
        "p-3 rounded-xl transition-all",
        type === 'pos' ? "bg-success/10 text-success" : type === 'neg' ? "bg-error/10 text-error" : "bg-secondary/10 text-secondary"
      )}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm text-on-surface truncate tracking-tight">{title}</h4>
        <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-tight">{meta || "Verified Flow"}</p>
      </div>
      <div className="text-right shrink-0">
        <p className={cn(
          "font-black font-headline text-sm",
          type === 'pos' ? "text-primary dark:text-primary" : type === 'neg' ? "text-error" : "text-on-surface"
        )}>{val}</p>
      </div>
    </div>
  );
}

function ComplianceItem({ label, perc, val }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <div>
          <p className="bento-label !mb-1">{label}</p>
          <p className="text-xl font-bold font-headline text-on-surface leading-none">{val}</p>
        </div>
        <span className="text-xs font-bold text-primary">{perc}%</span>
      </div>
      <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${perc}%` }}></div>
      </div>
    </div>
  );
}
