import { 
  TrendingUp, 
  Calendar, 
  PieChart, 
  ArrowRight,
  Shield,
  BadgeCheck,
  Lock,
  Lightbulb,
  PiggyBank,
  Star,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Insights() {
  return (
    <div className="space-y-5 animate-in fade-in duration-500">
      <section>
        <div className="bento-card overflow-hidden relative min-h-[400px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <p className="bento-label !mb-2 uppercase tracking-[0.2em] opacity-60">Revenue Analytics</p>
              <h2 className="text-5xl font-black text-on-surface font-headline tracking-tighter">$8,420.00</h2>
              <div className="flex items-center gap-2 mt-4 text-success bg-success/10 w-fit px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">
                <TrendingUp size={14} /> +12.4% VOLUME
              </div>
            </div>
            <div className="flex bg-surface-container-high p-1 rounded-2xl border border-outline-variant/10">
              <button className="px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-highest transition-all">6 MONTHS</button>
              <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20">ANNUAL</button>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-6 pt-4">
            <ChartBar height="40%" label="Jan" />
            <ChartBar height="55%" label="Feb" />
            <ChartBar height="48%" label="Mar" />
            <ChartBar height="72%" label="Apr" />
            <ChartBar height="85%" label="May" active />
            <ChartBar height="65%" label="Jun" />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2 space-y-5">
          {/* Milestones */}
          <div className="bento-card flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-center">
              <h3 className="bento-label uppercase tracking-widest">Career Milestones</h3>
              <BadgeCheck className="text-primary" size={20} />
            </div>
            <div className="grid grid-cols-3 gap-5 mt-8">
              <Milestone icon={<Shield />} title="50 JOBS" subtitle="DEPLOYED" active />
              <Milestone icon={<BadgeCheck />} title="VELOCITY" subtitle="TOP 5%" active />
              <Milestone icon={<Lock />} title="CENTURY" subtitle="LOCKED" />
            </div>
          </div>

          {/* Growth Tips */}
          <div className="bento-card space-y-6">
            <h3 className="bento-label uppercase tracking-widest">Optimization Intelligence</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <Tip 
                icon={<Lightbulb />} 
                title="Peak Hour Signal" 
                text="Tuesday afternoons correlate with 40% higher conversion rates in your region." 
              />
              <Tip 
                icon={<PiggyBank />} 
                title="Fiscal Offset" 
                text="Equipment amortization peaks this month. Finalize your supply audits now." 
              />
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="bento-card border-none bg-surface-container-highest/20 flex flex-col min-h-[460px]">
          <div className="flex justify-between items-center mb-10">
            <h3 className="bento-label">Global Feedback</h3>
            <div className="flex items-center gap-1.5 text-primary bg-primary/10 px-3 py-1 rounded-full">
              <span className="text-xs font-black">4.9</span>
              <Star size={12} className="fill-current" />
            </div>
          </div>
          <div className="flex-1 space-y-10">
            <FeedbackItem name="Sarah J." text='"Alex delivered ahead of schedule with industrial-grade precision."' />
            <FeedbackItem name="Michael Chen" text='"Exceptional attention to fleet logistics and operational efficiency."' />
            <FeedbackItem name="TechFlow Inc." text='"Highly recommended for high-stakes mission critical projects."' />
          </div>
          <button className="mt-10 py-5 rounded-2xl bg-on-surface text-surface font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary active:scale-95 transition-all shadow-xl shadow-on-surface/10">
            Public Profile Archive
          </button>
        </div>
      </div>
    </div>
  );
}

function ChartBar({ height, label, active = false }: any) {
  return (
    <div className="flex flex-col items-center flex-1 gap-3 h-full justify-end group">
      <div 
        className={cn(
          "w-full rounded-xl transition-all duration-500", 
          active ? "bg-primary shadow-lg shadow-primary/20" : "bg-surface-container-highest/50 group-hover:bg-primary/20"
        )} 
        style={{ height }}
      />
      <span className={cn(
        "text-[9px] font-black uppercase tracking-[0.2em] leading-none",
        active ? "text-primary" : "text-on-surface-variant opacity-40"
      )}>{label}</span>
    </div>
  );
}

function Milestone({ icon, title, subtitle, active = false }: any) {
  return (
    <div className={cn(
      "p-5 rounded-2xl flex flex-col items-center text-center transition-all border",
      active ? "bg-surface-container-lowest border-primary/20 shadow-sm" : "bg-transparent border-transparent opacity-20 grayscale"
    )}>
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
        active ? "bg-primary/10 text-primary" : "bg-surface-container-highest"
      )}>
        {icon}
      </div>
      <p className="text-[10px] font-black text-on-surface uppercase tracking-widest">{title}</p>
      <p className="text-[8px] text-on-surface-variant uppercase tracking-widest mt-1 font-bold opacity-60">{subtitle}</p>
    </div>
  );
}

function Tip({ icon, title, text }: any) {
  return (
    <div className="flex gap-4 p-5 bg-surface-container-high/50 rounded-2xl border border-outline-variant/10">
      <div className="text-primary mt-1 shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-on-surface text-sm tracking-tight">{title}</h4>
        <p className="text-[11px] text-on-surface-variant leading-relaxed font-medium mt-1 opacity-70">{text}</p>
      </div>
    </div>
  );
}

function FeedbackItem({ name, text }: any) {
  return (
    <div className="relative pl-6 border-l border-primary/20 group">
      <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-primary ring-4 ring-primary/20"></div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-black text-on-surface font-headline tracking-tight">{name}</span>
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => <Star key={i} size={8} className="fill-primary text-primary" />)}
        </div>
      </div>
      <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed opacity-80">{text}</p>
    </div>
  );
}
