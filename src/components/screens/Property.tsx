import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Wrench, 
  FileText, 
  Calendar, 
  Users, 
  ArrowRight,
  Plus,
  History,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useCurrency } from '@/src/context/CurrencyContext';

export default function Property() {
  const { formatCurrency } = useCurrency();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">Property Management</h1>
          <p className="text-on-surface-variant text-lg font-body">Manage your home rentals, maintenance, and guests.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
          <Plus size={20} /> Add Property
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Main Property Card - spans 3 cols */}
        <section className="lg:col-span-3 space-y-6">
          <div className="bento-card !p-0 overflow-hidden group">
            <div className="h-72 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/house/1200/600" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="px-4 py-1.5 bg-success text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl backdrop-blur-md border border-white/20">Active</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                <h2 className="text-3xl font-black font-headline tracking-tight">Modern Canyon Retreat</h2>
                <div className="flex items-center gap-2 opacity-80 text-sm mt-1.5 font-medium">
                  <MapPin size={16} className="text-primary" /> Topanga Canyon, CA
                </div>
              </div>
            </div>
            
            <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              <PropertyStat label="Monthly Revenue" value={formatCurrency(12450)} trend="+8% / mo" color="primary" />
              <PropertyStat label="Occupancy" value="94%" trend="Optimal" />
              <PropertyStat label="Guest Avg" value="4.98" trend="Superhost" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Maintenance Log */}
            <div className="bento-card space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="bento-label flex items-center gap-2">
                  <Wrench size={16} /> Maintenance
                </h3>
              </div>
              <div className="space-y-4">
                <MaintenanceItem title="Pool Cleaning" date="Today" status="done" />
                <MaintenanceItem title="HVAC Filter" date="Oct 24" status="pending" priority="high" />
                <MaintenanceItem title="Deck Staining" date="Nov 12" status="scheduled" />
              </div>
            </div>

            {/* Insurance & Docs */}
            <div className="bento-card space-y-6">
              <h3 className="bento-label flex items-center gap-2">
                <ShieldCheck size={16} /> Compliance
              </h3>
              <div className="space-y-3">
                <DocItem title="STR Permit" expiry="Expires Dec 2024" />
                <DocItem title="Liability Policy" expiry="Active" />
                <DocItem title="Safety Cert" expiry="Verified" />
              </div>
            </div>
          </div>
        </section>

        {/* Side Column: Booking & Guests */}
        <section className="lg:col-span-1 space-y-5">
          <div className="bento-card space-y-6 min-h-[400px]">
            <div className="flex justify-between items-center">
              <h3 className="bento-label">Upcoming</h3>
              <Calendar size={16} className="text-on-surface-variant" />
            </div>
            <div className="space-y-4">
              <BookingItem guest="Miller Fam" dates="Oct 21-25" guests={4} />
              <BookingItem guest="David & Sarah" dates="Oct 28-02" guests={2} />
            </div>
            <button className="w-full mt-4 py-4 rounded-2xl border border-outline-variant text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary transition-all">Full Calendar</button>
          </div>

          <div className="primary-gradient rounded-[24px] p-8 text-white relative overflow-hidden shadow-2xl min-h-[220px] flex flex-col justify-between">
            <h3 className="text-xl font-black font-headline">Bills Pulse</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold opacity-80">
                <span>Electricity</span>
                <span>{formatCurrency(214)}</span>
              </div>
              <div className="flex justify-between text-xs font-bold opacity-80">
                <span>Water</span>
                <span>{formatCurrency(89)}</span>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

function PropertyStat({ label, value, trend, color }: any) {
  return (
    <div className="space-y-1">
      <span className="bento-label !text-[10px]">{label}</span>
      <p className={cn("text-4xl font-black font-headline tracking-tighter", color === 'primary' ? 'text-primary' : 'text-on-surface')}>{value}</p>
      <div className="flex items-center gap-1.5 mt-2">
        <div className="px-2 py-0.5 bg-success/10 text-success rounded-lg text-[10px] font-bold">
          {trend}
        </div>
      </div>
    </div>
  );
}

function MaintenanceItem({ title, date, status, priority }: any) {
  return (
    <div className="flex items-center justify-between group p-3 rounded-xl bg-surface-container-highest/20 border border-outline-variant/10">
      <div>
        <h4 className="font-bold text-sm text-on-surface flex items-center gap-2 tracking-tight">
          {title} {priority === 'high' && <div className="w-2 h-2 bg-error rounded-full animate-ping"></div>}
        </h4>
        <p className="text-[10px] text-on-surface-variant font-medium uppercase mt-1">{date}</p>
      </div>
      <span className={cn(
        "px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest",
        status === 'done' ? "bg-success/10 text-success" :
        status === 'pending' ? "bg-error/10 text-error" : "bg-primary/10 text-primary"
      )}>
        {status}
      </span>
    </div>
  );
}

function DocItem({ title, expiry }: any) {
  return (
    <div className="flex items-center gap-4 p-3 hover:bg-surface-container-low rounded-xl transition-all border border-transparent hover:border-outline-variant/10 cursor-pointer">
      <div className="p-2 bg-primary/10 text-primary rounded-lg">
        <FileText size={18} />
      </div>
      <div>
        <p className="font-bold text-sm text-on-surface">{title}</p>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">{expiry}</p>
      </div>
    </div>
  );
}

function BookingItem({ guest, dates, guests, platform }: any) {
  return (
    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/5 hover:border-primary/20 transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Users size={16} className="text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-on-surface">{guest}</h4>
            <p className="text-[10px] text-on-surface-variant uppercase font-label">{platform}</p>
          </div>
        </div>
        <ArrowRight size={14} className="text-on-surface-variant" />
      </div>
      <div className="flex justify-between items-center text-xs mt-3 pt-3 border-t border-slate-50">
        <span className="font-semibold text-on-surface opacity-60">{dates}</span>
        <span className="font-bold text-primary">{guests} Guests</span>
      </div>
    </div>
  );
}

function BillItem({ label, amount }: any) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
      <span className="text-sm font-medium">{label}</span>
      <span className="font-bold">{amount}</span>
    </div>
  );
}
