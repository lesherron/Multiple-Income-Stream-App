import { 
  Star, 
  BadgeCheck, 
  CheckCircle2, 
  MapPin, 
  Receipt,
  Calendar
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Booking() {
  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto space-y-10 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Worker Profile Card */}
        <section className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_12px_40px_rgba(0,74,173,0.06)] flex flex-col items-center text-center border border-outline-variant/10">
          <div className="relative mb-6">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 group">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 primary-gradient text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg select-none">
              Verified
            </div>
          </div>
          
          <h2 className="text-3xl font-black font-headline text-primary mb-2 tracking-tight">Sarah Jenkins</h2>
          <p className="text-secondary font-bold text-md mb-6 uppercase tracking-wider font-label">Senior Project Specialist</p>
          
          <div className="flex gap-3 mb-8">
            <Tag label="Strategy" />
            <Tag label="Operations" />
          </div>

          <p className="text-on-surface-variant text-sm leading-relaxed mb-10 max-w-[280px]">
            Helping independent professionals scale their operations with data-driven workflows and strategic oversight.
          </p>

          <div className="w-full pt-8 border-t border-slate-50 flex justify-around">
            <div className="text-center">
              <p className="text-2xl font-black text-primary font-headline">124</p>
              <p className="text-[10px] uppercase font-bold font-label text-on-surface-variant tracking-widest mt-1">Projects</p>
            </div>
            <div className="text-center border-l border-slate-50 pl-10">
              <p className="text-2xl font-black text-primary font-headline">4.9</p>
              <p className="text-[10px] uppercase font-bold font-label text-on-surface-variant tracking-widest mt-1">Rating</p>
            </div>
          </div>
        </section>

        {/* Booking Form Area */}
        <section className="lg:col-span-8 space-y-8">
          {/* Availability */}
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 shadow-sm">
            <h3 className="text-[10px] font-black font-label uppercase tracking-[0.3em] text-primary mb-8 px-1">Select Availability</h3>
            
            <div className="grid grid-cols-7 gap-3 mb-12">
              <DayButton day="14" label="Mon" />
              <DayButton day="15" label="Tue" active />
              <DayButton day="16" label="Wed" />
              <DayButton day="17" label="Thu" />
              <DayButton day="18" label="Fri" />
              <DayButton day="19" label="Sat" disabled />
              <DayButton day="20" label="Sun" disabled />
            </div>

            <div className="flex flex-wrap gap-4">
              <TimeButton label="09:00 AM" />
              <TimeButton label="11:30 AM" active />
              <TimeButton label="02:00 PM" />
              <TimeButton label="04:30 PM" />
            </div>
          </div>

          {/* Project Briefing */}
          <div className="bg-surface-container-lowest rounded-2xl p-10 shadow-[0_12px_40px_rgba(0,10,50,0.08)] border border-outline-variant/10">
            <h3 className="text-[10px] font-black font-label uppercase tracking-[0.3em] text-primary mb-10 px-1">Project Briefing</h3>
            <div className="space-y-10">
              <div className="relative group">
                <label className="absolute -top-3 left-0 text-[10px] font-black uppercase tracking-widest text-primary bg-surface-container-lowest px-2 ml-1 z-10 transition-colors">Project Title</label>
                <input 
                  className="w-full pt-5 pb-3 border-b-2 border-outline-variant/30 focus:border-primary outline-none text-on-surface bg-transparent transition-all font-bold text-lg placeholder:text-on-surface-variant/20" 
                  placeholder="e.g. Q4 Financial Audit Prep" 
                  type="text"
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-3 left-0 text-[10px] font-black uppercase tracking-widest text-primary bg-surface-container-lowest px-2 ml-1 z-10 transition-colors">Detailed Requirements</label>
                <textarea 
                  className="w-full pt-5 pb-3 border-b-2 border-outline-variant/30 focus:border-primary outline-none text-on-surface bg-transparent transition-all resize-none placeholder:text-on-surface-variant/20" 
                  placeholder="Describe the scope of work..." 
                  rows={3}
                ></textarea>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Booking Summary Floating Panel */}
      <div className="bg-surface-container-high rounded-2xl p-10 border border-outline-variant/10 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 animate-in slide-in-from-bottom-10 duration-700">
        <div className="flex items-center gap-8">
          <div className="p-6 bg-primary text-white rounded-2xl shadow-inner-xl flex items-center justify-center">
            <Receipt size={36} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xl font-black font-headline text-primary mb-1 tracking-tight">Booking Summary</h4>
            <div className="flex items-center gap-2 text-on-surface-variant font-medium">
              <Calendar size={14} className="text-primary" />
              <span>Tuesday, Oct 15 • 11:30 AM • 2 Hours</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-10">
          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase font-black font-label tracking-[0.2em] text-on-surface-variant mb-2">Total Investment</p>
            <p className="text-5xl font-black font-headline text-primary tracking-tighter">$180.00</p>
          </div>
          <button className="primary-gradient text-white px-12 py-5 rounded-xl font-black shadow-2xl shadow-blue-900/30 transform active:scale-95 transition-all hover:scale-105 uppercase tracking-widest text-xs font-label">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

function Tag({ label }: any) {
  return (
    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest font-label shadow-sm">
      {label}
    </span>
  );
}

function DayButton({ day, label, active = false, disabled = false }: any) {
  return (
    <button className={cn(
      "flex flex-col items-center p-4 rounded-xl transition-all duration-300 transform",
      active ? "bg-primary text-on-primary shadow-xl scale-110 z-10" : 
      disabled ? "bg-surface-container-highest/20 opacity-20 cursor-not-allowed text-on-surface-variant" : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest border border-outline-variant/10"
    )}>
      <span className={cn("text-[10px] font-black uppercase font-label tracking-tighter mb-1", active ? "text-on-primary-container/80" : "text-on-surface-variant/60")}>{label}</span>
      <span className="text-2xl font-black font-headline tracking-tighter">{day}</span>
    </button>
  );
}

function TimeButton({ label, active = false }: any) {
  return (
    <button className={cn(
      "px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest font-label transition-all shadow-sm",
      active ? "bg-primary text-on-primary shadow-lg" : "bg-surface-container-high border border-outline-variant/10 text-primary hover:bg-surface-container-highest"
    )}>
      {label}
    </button>
  );
}
