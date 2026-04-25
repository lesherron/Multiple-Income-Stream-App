import { 
  Plus, 
  Truck, 
  Fuel, 
  TrendingUp, 
  Gauge, 
  Zap, 
  ShieldCheck, 
  History,
  Wrench,
  AlertTriangle,
  ArrowRight,
  TrendingDown,
  Navigation
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useSettings } from '@/src/context/SettingsContext';
import { useCurrency } from '@/src/context/CurrencyContext';

export default function Fleet() {
  const { profile } = useSettings();
  const { formatCurrency } = useCurrency();
  const isVehicleRental = profile.types.includes('vehicle_rental');

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">Fleet Hub</h1>
          <p className="text-on-surface-variant text-lg font-body max-w-xl">Performance analytics and rigorous maintenance tracking for your high-performance assets.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-2xl font-black font-headline shadow-xl hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest">
          <Plus size={20} /> Register Asset
        </button>
      </header>

      {/* Tonal Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[160px]">
        <MetricCard label="Rental Income (MTD)" value={formatCurrency(3120)} trend="+5% / wk" color="primary" />
        <MetricCard label="Rideshare Earnings" value={formatCurrency(1240)} trend="+15% / wk" color="primary" />
        <MetricCard label="Delivery Velocity" value={formatCurrency(460)} trend="+2% / wk" color="primary" />
        <MetricCard label="Asset Utilization" value="88%" trend="Optimal" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h3 className="bento-title">Active Operation Deck</h3>
              <div className="flex bg-surface-container-high p-1 rounded-xl text-[9px] font-black uppercase tracking-widest border border-outline-variant/10">
                 <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg shadow-sm">All Streams</button>
                 <button className="px-3 py-1.5 text-on-surface-variant hover:bg-surface-container-highest transition-colors">Rideshare</button>
                 <button className="px-3 py-1.5 text-on-surface-variant hover:bg-surface-container-highest transition-colors">Rental</button>
                 <button className="px-3 py-1.5 text-on-surface-variant hover:bg-surface-container-highest transition-colors">Delivery</button>
              </div>
            </div>
            <div className="space-y-5">
              <AssetCard 
                name="2023 Tesla Model S Plaid" 
                status="Online" 
                stream="Rideshare + Rental"
                earning={`${formatCurrency(1200)} / wk`} 
                util="92%" 
                fuel="78%" 
                fuelLabel="Charge"
                img="https://picsum.photos/seed/tesla/800/400"
                mileage="12,450 mi"
              />
              {isVehicleRental && (
                <AssetCard 
                  name="2024 Range Rover Sport" 
                  status="Offline (Service)" 
                  stream="Priv. Rental"
                  earning={`${formatCurrency(2400)} / wk`} 
                  util="0%" 
                  fuel="90%" 
                  fuelLabel="Fuel"
                  img="https://picsum.photos/seed/rover/800/400"
                  mileage="4,120 mi"
                />
              )}
               <AssetCard 
                name="2022 Toyota Prius" 
                status="Online" 
                stream="Food Delivery"
                earning={`${formatCurrency(480)} / wk`} 
                util="98%" 
                fuel="65%" 
                fuelLabel="Fuel"
                img="https://picsum.photos/seed/prius/800/400"
                mileage="24,120 mi"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Maintenance Log */}
            <div className="bento-card border-none bg-surface-container-low shadow-sm space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                <Wrench size={100} className="text-primary" />
              </div>
              <div className="flex justify-between items-center relative z-10">
                <h3 className="bento-label flex items-center gap-3">
                  <Wrench size={18} /> Service Desk
                </h3>
                <button className="text-[10px] font-black uppercase text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-1 tracking-widest leading-none">Full Log</button>
              </div>
              <div className="space-y-3 relative z-10">
                <MaintenanceItem title="Tire Rotation" vehicle="Tesla Model S" date="Today" status="done" />
                <MaintenanceItem title="Brake Fluid Check" vehicle="Range Rover" date="In 2d" status="pending" priority="high" />
                <MaintenanceItem title="Detailing Routine" vehicle="Tesla Model S" date="Nov 02" status="scheduled" />
              </div>
            </div>

            {/* Odometer Tracking */}
            <div className="bento-card border-none bg-surface-container-low shadow-sm space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="bento-label flex items-center gap-3">
                  <TrendingUp size={18} /> Odometer Pulse
                </h3>
              </div>
              <div className="space-y-8">
                <MileageProgress vehicle="Tesla Model S" current={420} limit={600} color="primary" />
                <MileageProgress vehicle="Range Rover Admin" current={180} limit={300} color="secondary" />
                <button className="w-full py-4 bg-surface text-on-surface border border-outline-variant rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:border-primary transition-all shadow-sm">Audit Odometer Sync</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bento-card space-y-10 relative overflow-hidden group">
             <div className="absolute -top-10 -right-10 p-4 opacity-[0.03] group-hover:scale-110 transition-transform">
              <ShieldCheck size={240} className="text-primary" />
            </div>
            <h3 className="bento-title relative z-10">Insurance Vault</h3>
            <div className="space-y-6 relative z-10">
              <SafetyItem title="Commercial Umbrella" policy="#COM-9912" expiry="Dec 2024" />
              <SafetyItem title="Turo Hybrid Prot." policy="#TUR-4421" expiry="Jan 2025" />
              <SafetyItem title="Excess Liability" policy="#PAE-1120" expiry="Aug 2024" />
            </div>
            <div className="pt-8 border-t border-outline-variant/10 relative z-10">
              <div className="flex items-center gap-4 bg-primary/5 p-5 rounded-3xl border border-primary/10">
                 <AlertTriangle size={24} className="text-amber-500 shrink-0" />
                 <p className="text-[11px] font-bold text-on-surface leading-relaxed uppercase tracking-tighter">Increase <span className="underline decoration-2 text-primary">Collision Damage</span> coverage for Q4 snow season.</p>
              </div>
            </div>
          </div>

          <div className="primary-gradient rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl group flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="text-3xl font-black font-headline mb-4 leading-none tracking-tighter">Fleet Strategy AI</h3>
              <p className="text-blue-100 text-sm opacity-80 mb-10 font-medium leading-relaxed">Your current fleet idle time is <span className="font-bold text-white text-lg">12.4%</span>. Smart rerouting assets could yield <span className="text-white font-bold">{formatCurrency(420)}/wk</span>.</p>
            </div>
            <button className="w-full mt-6 py-5 bg-white text-primary rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-primary-container hover:text-on-primary-container transition-all">Review Plan</button>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, trend }: any) {
  return (
    <div className="bento-card flex flex-col justify-between group hover:border-primary/30 transition-all cursor-pointer">
      <div>
        <p className="bento-label group-hover:text-primary transition-colors">{label}</p>
        <p className="text-4xl font-bold font-headline text-on-surface tracking-tighter group-hover:scale-105 transition-transform origin-left">{value}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="px-2 py-0.5 bg-success/10 text-success rounded-lg text-[10px] font-bold flex items-center gap-1">
           <TrendingUp size={12} /> {trend}
        </div>
      </div>
    </div>
  );
}

function AssetCard({ name, status, earning, util, fuel, fuelLabel, img, mileage, stream }: any) {
  return (
    <div className="bg-surface-container-low rounded-[2.5rem] overflow-hidden shadow-sm border border-outline-variant/10 group hover:border-primary/30 transition-all duration-700">
      <div className="grid grid-cols-1 md:grid-cols-5 h-full">
        <div className="md:col-span-2 relative h-56 md:h-full overflow-hidden">
          <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className={cn(
              "px-4 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-full shadow-2xl backdrop-blur-md border border-white/20",
              status.includes('Online') ? "bg-success/80 text-white" : "bg-error/80 text-white"
            )}>{status}</span>
            {stream && (
              <span className="px-4 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-full shadow-2xl backdrop-blur-md border border-white/20 bg-primary/80 text-white">
                {stream}
              </span>
            )}
          </div>
        </div>
        <div className="md:col-span-3 p-10 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-3xl font-black font-headline text-on-surface tracking-tight group-hover:text-primary transition-colors">{name}</h4>
              <p className="text-sm font-bold text-on-surface-variant mt-1.5 flex items-center gap-2 opacity-60">
                <Navigation size={14} /> {mileage} TOTAL DRIVE
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black font-headline text-primary tracking-tighter leading-none">{earning}</p>
              <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-[0.2em] mt-1.5">Net Velocity</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                <span>Deployment</span>
                <span className="text-primary">{util}</span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden shadow-inner p-[1.5px]">
                <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: util }}></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                <span>{fuelLabel}</span>
                <span className="text-primary">{fuel}</span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden shadow-inner p-[1.5px]">
                <div className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out" style={{ width: fuel }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaintenanceItem({ title, vehicle, date, status, priority }: any) {
  return (
    <div className="flex items-center justify-between group p-3 rounded-xl bg-surface-container-highest/20 border border-outline-variant/10 hover:bg-surface-container-low transition-all cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-transform",
          status === 'done' ? "bg-success/10 text-success" :
          status === 'pending' ? "bg-error/10 text-error" : "bg-primary/10 text-primary"
        )}>
          <Wrench size={18} />
        </div>
        <div>
          <h4 className="font-bold text-sm text-on-surface flex items-center gap-2 tracking-tight">
            {title} {priority === 'high' && <div className="w-1.5 h-1.5 bg-error rounded-full animate-ping"></div>}
          </h4>
          <p className="text-[10px] font-medium text-on-surface-variant uppercase mt-0.5 opacity-60 truncate max-w-[120px]">{vehicle} • {date}</p>
        </div>
      </div>
      <span className={cn(
        "px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest leading-none",
        status === 'done' ? "bg-success/10 text-success" :
        status === 'pending' ? "bg-error/10 text-error" : "bg-primary/10 text-primary"
      )}>
        {status}
      </span>
    </div>
  );
}

function MileageProgress({ vehicle, current, limit, color }: any) {
  const perc = Math.round((current / limit) * 100);
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm font-bold text-on-surface tracking-tight">{vehicle}</p>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1 opacity-60">{current} mi / {limit} mi</p>
        </div>
        <span className={cn("text-xs font-bold font-headline", color === 'primary' ? "text-primary" : "text-secondary")}>{perc}%</span>
      </div>
      <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
        <div className={cn("h-full rounded-full transition-all duration-1000", color === 'primary' ? "bg-primary" : "bg-secondary")} style={{ width: `${perc}%` }}></div>
      </div>
    </div>
  );
}

function SafetyItem({ title, policy, expiry }: any) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-highest/10 border border-outline-variant/10 group cursor-pointer hover:bg-surface-container-low transition-all">
      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
        <ShieldCheck size={20} />
      </div>
      <div className="min-w-0">
        <p className="font-bold text-sm text-on-surface truncate tracking-tight">{title}</p>
        <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-[0.1em] mt-0.5">{policy}</p>
        <div className="flex items-center gap-1.5 mt-1.5">
           <div className="w-1 h-1 bg-success rounded-full"></div>
           <p className="text-[9px] text-primary font-black uppercase tracking-widest">{expiry}</p>
        </div>
      </div>
    </div>
  );
}
