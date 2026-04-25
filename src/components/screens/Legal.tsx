import { 
  Building2, 
  MapPin, 
  ArrowRight,
  Edit,
  ExternalLink,
  ShieldAlert,
  FileText,
  Download,
  Gavel,
  ShieldCheck,
  BadgeCheck,
  HeadphonesIcon
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Legal() {
  return (
    <div className="space-y-5 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <header className="mb-10 max-w-4xl">
        <h2 className="text-4xl font-extrabold tracking-tight text-primary mb-2 font-headline">Legal & Policies</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed font-secondary">
          Centralize your compliance, track platform changes, and manage your professional identity across the gig ecosystem.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 auto-rows-auto">
        {/* Compliance Hero Card */}
        <section className="lg:col-span-2 primary-gradient rounded-[2.5rem] p-12 text-white flex flex-col justify-between min-h-[340px] relative overflow-hidden shadow-2xl shadow-primary/20 group">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase font-label text-white/70">Compliance Protocol</span>
            </div>
            <h3 className="text-7xl font-black tracking-tighter font-headline mb-4">98.2%</h3>
            <p className="max-w-md text-white/80 text-base leading-relaxed font-medium">
              Professional documentation is synchronized. 2 minor insurance audits pending for vehicle fleet.
            </p>
          </div>
          <div className="relative z-10 mt-12 flex gap-12">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/50 mb-1">Next Review</span>
              <span className="font-bold text-xl font-headline">OCT 14, 2023</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/50 mb-1">Identity Sync</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="font-bold text-xl font-headline uppercase">Active</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
        </section>

        {/* Platform Status */}
        <section className="bento-card border-none bg-surface-container-highest/20 flex flex-col">
          <h3 className="bento-label uppercase tracking-widest !mb-8">Connected Platforms</h3>
          <div className="space-y-8 flex-1">
            <PlatformItem name="Uber" sync="2h ago" status="ACTIVE" logo="https://picsum.photos/seed/uber/40/40" />
            <PlatformItem name="Lyft" sync="1d ago" status="ACTIVE" logo="https://picsum.photos/seed/lyft/40/40" />
            <PlatformItem name="Turo" sync="Audit Reqd" status="ACTION" logo="https://picsum.photos/seed/turo/40/40" statusColor="red" />
          </div>
          <button className="mt-10 w-full py-4 bg-on-surface text-surface font-black text-[10px] uppercase tracking-widest rounded-2xl hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-on-surface/10">
            Manage Connections
          </button>
        </section>

        {/* Recent Policy Changes */}
        <section className="lg:col-span-2 bento-card space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="bento-label">Policy Log</h3>
            <button className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:underline group">
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PolicyCard 
              label="UBER GLOBAL" 
              date="SEPT 28, 2023" 
              title="Arbitration Update" 
              text="New dispute resolution frameworks for UK region. Requires manual verification."
              action="REVIEW & SIGN"
              highlight
            />
            <PolicyCard 
              label="TAX REG" 
              date="SEPT 24, 2023" 
              title="Form 1099-K Thresholds" 
              text="New earning limits for digital marketplace participants for the current cycle."
              action="VIEW SUMMARY"
            />
          </div>
        </section>

        {/* Legal Vault */}
        <section className="bento-card space-y-8">
          <h3 className="bento-label uppercase tracking-widest">Legal Vault</h3>
          <div className="space-y-1">
            <VaultItem icon={<FileText />} name="Terms of Service" meta="v4.2 • AUG 2023" />
            <VaultItem icon={<ShieldCheck />} name="Privacy Policy" meta="v3.1 • JULY 2023" />
            <VaultItem icon={<BadgeCheck />} name="Status Certificate" meta="VERIFIED" />
          </div>
        </section>

        {/* Help Block */}
        <section className="lg:col-span-3 bg-primary/5 rounded-[32px] p-10 flex flex-col md:flex-row items-center gap-10 border border-primary/10">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-surface group">
              <img 
                src="https://picsum.photos/seed/legal/800/600" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-4xl font-black tracking-tighter font-headline text-on-surface mb-6">Expert Legal Access</h3>
            <p className="text-on-surface-variant mb-10 text-lg leading-relaxed font-medium opacity-80 max-w-2xl">
              As a Pro user, you hold privileged access to our network of gig-economy legal specialists. Secure discounted consultations for mission-critical issues.
            </p>
            <button className="px-10 py-5 bg-primary text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 shadow-2xl shadow-primary/30">
              <HeadphonesIcon size={20} />
              Request Expert Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function PlatformItem({ name, sync, status, logo, statusColor = 'blue' }: any) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-surface-container-highest/30 flex items-center justify-center overflow-hidden border border-outline-variant/10">
          <img src={logo} className="w-8 h-8 rounded-sm opacity-60 grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
        </div>
        <div>
          <p className="font-bold text-sm text-on-surface tracking-tight">{name}</p>
          <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-40 mt-0.5">{sync}</p>
        </div>
      </div>
      <span className={cn(
        "px-2 py-0.5 rounded-lg text-[8px] font-black tracking-widest uppercase leading-none",
        statusColor === 'red' ? "bg-error/10 text-error" : "bg-primary/10 text-primary"
      )}>
        {status}
      </span>
    </div>
  );
}

function PolicyCard({ label, date, title, text, action, highlight = false }: any) {
  return (
    <div className={cn(
      "bg-surface-container-highest/10 p-8 rounded-2xl border transition-all hover:bg-surface-container-low border-outline-variant/10",
      highlight && "border-primary/40 shadow-lg shadow-primary/5"
    )}>
      <div className="flex justify-between items-start mb-6">
        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[8px] font-black tracking-widest uppercase">{label}</span>
        <span className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">{date}</span>
      </div>
      <h4 className="font-bold text-lg mb-2 tracking-tighter font-headline text-on-surface leading-tight">{title}</h4>
      <p className="text-[11px] text-on-surface-variant leading-relaxed mb-6 font-medium opacity-70">{text}</p>
      <div className="flex items-center gap-2 text-primary font-black text-[9px] cursor-pointer hover:opacity-70 transition-opacity uppercase tracking-[0.2em]">
        <Edit size={12} /> {action}
      </div>
    </div>
  );
}

function VaultItem({ icon, name, meta }: any) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-white dark:hover:bg-slate-900 rounded-xl transition-all group cursor-pointer border border-transparent hover:border-outline-variant/10">
      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-bold text-on-surface tracking-tight">{name}</p>
        <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest mt-0.5 opacity-40">{meta}</p>
      </div>
      <Download size={16} className="text-on-surface-variant opacity-20 group-hover:opacity-60 transition-opacity" />
    </div>
  );
}
