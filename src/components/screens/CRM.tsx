import { 
  Building2, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Edit3, 
  CheckCircle2, 
  Mail, 
  Eye, 
  TrendingUp, 
  DollarSign,
  ChevronRight,
  User
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function CRM() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2 font-headline">Client Portal</h1>
        <p className="text-on-surface-variant font-body">Manage your professional presence and upcoming engagements.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-3 space-y-6">
          {/* Profile Strength */}
          <div className="bento-card relative overflow-hidden group min-h-[180px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="bento-label !mb-2 flex items-center gap-2">
                  <TrendingUp size={16} /> Velocity Strength: Exceptional
                </h3>
                <p className="text-xs text-on-surface-variant font-medium opacity-80 leading-relaxed max-w-sm">Your market positioning is in the top 5% of active contractors this cycle.</p>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest leading-none">Verified</span>
            </div>
            <div className="space-y-4">
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-primary rounded-full"></div>
              </div>
              <div className="flex gap-10">
                <Stat label="Reviews" value="24" />
                <Stat label="Rating" value="4.9" />
                <Stat label="Response" value="98%" />
              </div>
            </div>
          </div>

          {/* Public Profile Preview */}
          <div className="bento-card !p-0 overflow-hidden group">
            <div className="h-40 relative">
              <img 
                src="https://picsum.photos/seed/office/1200/400" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8 -mt-16 relative z-10">
              <div className="flex items-end justify-between mb-8">
                <div className="w-24 h-24 rounded-2xl border-4 border-surface shadow-2xl overflow-hidden bg-surface">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcN_Eu3chL9VzH7CdOSB4IcHMJe2iPL3FWakm_ymp7ic7TcuZ1YRNrS9nSHT3MY_1_DGCMMQNiseVPj3lMmH8pdCpsmgv5dCMnnXdXKF_QhR1M56pidzYUMKQb86VtWMU3n5utDxTtkdOWSkhhOzeD-FRzpuvt2YHFTihawYxeqSHhPcXIy7Tq2JUdcYkp11GAO6Fy6_1pBKcv2oxYtdtpHOiNbSdmjq5lo9FvnnRPlxfIOvSmZe4U28SS0LCs3idwOdadVD6SX14" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="primary-gradient text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Edit Public Profile
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-3xl font-black font-headline text-on-surface tracking-tighter">Alex Morgan</h2>
                  <p className="text-on-surface-variant font-medium mt-2 leading-relaxed">Specialist Electrical Contractor & Project Director focused on renewable infrastructure.</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Tag label="M-Automation" />
                    <Tag label="Renewables" />
                    <Tag label="Audit" />
                  </div>
                </div>
                <div className="bg-surface-container-highest/20 p-6 rounded-2xl border border-outline-variant/10">
                  <h4 className="bento-label !mb-4">Deployment Status</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-primary" />
                      <span className="text-xs font-bold leading-none">Booking for Q4 Open</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-xs font-bold leading-none">Greater London Region</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {/* Booking Schedule */}
          <div className="bento-card space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="bento-label">Schedule</h3>
              <Calendar className="text-on-surface-variant" size={16} />
            </div>
            <div className="space-y-2">
              <ScheduleItem day="12" month="Oct" title="Solar Install" sub="09:00 - 17:00" active />
              <ScheduleItem day="14" month="Oct" title="Consult" sub="11:30 - Virtual" />
              <ScheduleItem day="15" month="Oct" title="Tentative" sub="Pending Confirm" tentative />
            </div>
            <button className="w-full mt-2 py-3 text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 hover:bg-primary/5 rounded-xl transition-all">Audit Calendar</button>
          </div>

          {/* Pending Inquiries */}
          <div className="bento-card space-y-6">
            <h3 className="bento-label">Inquiries</h3>
            <div className="space-y-4">
              <InquiryItem name="Julianne V." time="2h ago" />
              <InquiryItem name="Mark Steiner" time="Yesterday" />
            </div>
          </div>

          {/* Quick Insights */}
          <div className="primary-gradient text-white rounded-3xl p-6 space-y-4 shadow-xl shadow-primary/20 relative overflow-hidden group">
             <div className="relative z-10">
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                  <span>Daily Pulse</span>
                  <span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-white border border-white/10">Today</span>
               </div>
               <p className="text-4xl font-black font-headline tracking-tighter mt-4 leading-none">1,240</p>
               <div className="flex items-center gap-2 text-xs font-bold text-white/90 mt-4">
                  <TrendingUp size={14} className="text-white" />
                  <span>+12.4% VOLUME</span>
               </div>
             </div>
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InsightCard icon={<Eye />} label="Profile Views" value="1,240" trend="+12%" />
        <InsightCard icon={<Mail />} label="New Messages" value="8" trend="Direct" />
        <InsightCard icon={<DollarSign />} label="Proj. Pipeline" value="£14,200" trend="Est. Q4" />
      </section>
    </div>
  );
}

function Stat({ label, value }: any) {
  return (
    <div className="text-left">
      <span className="block text-2xl font-black text-on-surface font-headline leading-none tracking-tighter">{value}</span>
      <span className="text-[9px] uppercase tracking-[0.2em] font-black text-on-surface-variant opacity-60 mt-1 block leading-none">{label}</span>
    </div>
  );
}

function Tag({ label }: any) {
  return (
    <span className="px-3 py-1 bg-primary/10 rounded-lg text-[9px] font-black text-primary uppercase tracking-widest border border-primary/20">
      {label}
    </span>
  );
}

function ScheduleItem({ day, month, title, sub, active = false, tentative = false }: any) {
  return (
    <div className={cn(
      "flex gap-4 p-3 rounded-xl transition-all border",
      active ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : 
      tentative ? "bg-surface-container-highest/20 border-outline-variant/10 opacity-60" : 
      "bg-surface-container-highest/10 border-outline-variant/10"
    )}>
      <div className="text-center min-w-[36px] flex flex-col justify-center border-r border-current/10 pr-3">
        <span className={cn("block text-[9px] font-black uppercase tracking-widest", active ? "text-white/80" : "text-on-surface-variant")}>{month}</span>
        <span className="block text-lg font-black font-headline leading-none">{day}</span>
      </div>
      <div className="min-w-0">
        <h4 className="text-xs font-bold truncate tracking-tight">{title}</h4>
        <p className={cn("text-[9px] font-medium uppercase tracking-widest mt-0.5", active ? "text-white/60" : "text-on-surface-variant opacity-60")}>{sub}</p>
      </div>
    </div>
  );
}

function InquiryItem({ name, time }: any) {
  return (
    <div className="bg-surface-container-highest/10 p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-surface-container-low border border-outline-variant/10 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/5">
          <User size={16} className="text-primary" />
        </div>
        <div>
          <p className="text-xs font-bold text-on-surface tracking-tight">{name}</p>
          <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 mt-0.5">{time}</p>
        </div>
      </div>
      <ChevronRight size={14} className="text-on-surface-variant group-hover:text-primary transition-colors" />
    </div>
  );
}

function InsightCard({ icon, label, value, trend }: any) {
  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-primary group-hover:scale-110 transition-transform">{icon}</div>
        <h4 className="text-[10px] font-bold uppercase tracking-widest font-label text-on-surface-variant">{label}</h4>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold font-headline text-primary tracking-tighter">{value}</span>
        <span className="text-xs font-bold text-on-surface-variant opacity-60">{trend}</span>
      </div>
    </div>
  );
}
