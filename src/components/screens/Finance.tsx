import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  ShieldCheck, 
  Cloud, 
  TrendingUp,
  Search,
  Filter,
  Calculator,
  PieChart as PieChartIcon,
  Globe,
  Plus,
  RefreshCcw,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '@/src/lib/utils';
import { useSettings } from '@/src/context/SettingsContext';
import { useCurrency } from '@/src/context/CurrencyContext';
import { useState } from 'react';

const expenseCategories = [
  { name: 'Fuel', value: 1200, color: '#0047AB' },
  { name: 'Maintenance', value: 800, color: '#000080' },
  { name: 'Insurance', value: 450, color: '#003366' },
  { name: 'Taxes', value: 3200, color: '#001A4D' },
  { name: 'Software', value: 150, color: '#4d94ff' },
];

const incomeData = [
  { month: 'May', income: 4500 },
  { month: 'Jun', income: 5200 },
  { month: 'Jul', income: 4800 },
  { month: 'Aug', income: 6100 },
  { month: 'Sep', income: 5900 },
  { month: 'Oct', income: 7200 },
];

export default function Finance() {
  const { profile } = useSettings();
  const { targetCurrency, setTargetCurrency, availableCurrencies, formatCurrency } = useCurrency();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [taxIncome, setTaxIncome] = useState('85000');
  
  const calculateTax = () => {
    const income = parseFloat(taxIncome);
    if (isNaN(income)) return 0;
    const fed = income * 0.15;
    const state = income * 0.05;
    const ssn = income * 0.12; 
    return fed + state + ssn;
  };

  const estimatedTax = calculateTax();

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">Finance & Taxes</h1>
          <p className="text-on-surface-variant text-lg font-body max-w-xl">Liquid stability tracking with automated tax provisioning and expense categorization.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="flex-1 md:flex-none p-1 bg-surface-container-high rounded-xl flex items-center pr-4">
            <Globe size={16} className="ml-3 text-primary" />
            <select 
              value={targetCurrency} 
              onChange={(e) => setTargetCurrency(e.target.value)}
              className="bg-transparent text-primary rounded-lg font-black text-xs uppercase tracking-widest px-2 py-2 outline-none cursor-pointer"
            >
              {availableCurrencies.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-bold font-headline shadow-lg hover:scale-105 active:scale-95 transition-all">
            <Plus size={20} /> Add Entry
          </button>
        </div>
      </header>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[160px]">
        <MetricCard label="Projected Balance" value={formatCurrency(42850)} trend="+12.4%" positive />
        <MetricCard label="Next Tax Deadline" value="Jan 15" trend="Q4 Estimated" />
        <MetricCard label="Tax Provision" value={formatCurrency(12340)} trend="84%" />
        <MetricCard label="Daily Run-rate" value={formatCurrency(420)} trend="-2.1%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Income Chart - spans 3 cols */}
        <div className="bento-card lg:col-span-3 space-y-8 min-h-[450px] flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="bento-label flex items-center gap-2">
              <TrendingUp size={16} /> Income Velocity ({targetCurrency})
            </h3>
            <div className="flex bg-surface-container-highest/50 p-1 rounded-xl text-[10px] font-black uppercase tracking-widest">
              <button className="px-3 py-1.5 bg-surface-container-lowest shadow-sm rounded-lg text-primary">6M</button>
              <button className="px-3 py-1.5 text-on-surface-variant">Max</button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={incomeData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0047AB" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#0047AB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#000033" opacity={0.1} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#333366', fontSize: 10, fontWeight: 600}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: '1px solid var(--outline-variant)', background: 'var(--surface-container-low)', color: 'var(--on-surface)' }}
                  itemStyle={{ fontWeight: '800', color: 'var(--primary)', fontSize: '14px' }}
                  formatter={(value: number) => [formatCurrency(value), 'Income']}
                />
                <Area type="monotone" dataKey="income" stroke="#0047AB" strokeWidth={4} fillOpacity={1} fill="url(#colorIncome)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bento-card flex flex-col justify-between">
          <h3 className="bento-label flex items-center gap-2">
            <PieChartIcon size={16} /> Burn Dist.
          </h3>
          <div className="h-40 relative my-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseCategories} innerRadius={45} outerRadius={60} paddingAngle={5} dataKey="value" stroke="none">
                  {expenseCategories.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xl font-bold font-headline">{formatCurrency(5800).split('.')[0]}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {expenseCategories.slice(0, 4).map((cat, i) => (
              <div key={i} className="p-2 rounded-xl bg-surface-container-highest/20">
                <p className="text-[9px] font-bold text-on-surface-variant uppercase truncate">{cat.name}</p>
                <p className="text-sm font-black text-primary">{Math.round(cat.value / 5800 * 100)}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ledger & Search */}
        <div className="bento-card lg:col-span-3 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h3 className="bento-label flex items-center gap-2">
              <Clock size={16} /> Ledger
            </h3>
            <div className="flex bg-surface-container-high p-1 rounded-xl text-[10px] font-black uppercase tracking-widest border border-outline-variant/10">
              <button onClick={() => setFilterType('all')} className={cn("px-3 py-1.5 rounded-lg transition-all", filterType === 'all' ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container-highest")}>All</button>
              <button onClick={() => setFilterType('rideshare')} className={cn("px-3 py-1.5 rounded-lg transition-all", filterType === 'rideshare' ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container-highest")}>Rideshare</button>
              <button onClick={() => setFilterType('rental')} className={cn("px-3 py-1.5 rounded-lg transition-all", filterType === 'rental' ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container-highest")}>Rental</button>
              <button onClick={() => setFilterType('delivery')} className={cn("px-3 py-1.5 rounded-lg transition-all", filterType === 'delivery' ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container-highest")}>Delivery</button>
            </div>
            <div className="relative w-full md:w-auto">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 bg-surface-container-highest/50 rounded-xl text-xs outline-none focus:ring-1 focus:ring-primary w-full md:w-40" 
              />
            </div>
          </div>
          <div className="divide-y divide-outline-variant/10">
            <LedgerItem 
              label="Uber Payout - Dec 02" 
              amount={formatCurrency(1240)} 
              status="processed" 
              time="2h ago" 
              mode="in" 
              source="Rideshare"
            />
            <LedgerItem 
              label="Chevron - Station 04" 
              amount={formatCurrency(65)} 
              status="processed" 
              time="4h ago" 
              mode="out" 
              source="Ops"
            />
            <LedgerItem 
              label="Airbnb - Canyon Retreat" 
              amount={formatCurrency(3120)} 
              status="pending" 
              time="8:12 AM" 
              mode="in" 
              source="Home Rental"
            />
            <LedgerItem 
              label="DoorDash - Weekly" 
              amount={formatCurrency(460)} 
              status="processed" 
              time="Yesterday" 
              mode="in" 
              source="Delivery"
            />
          </div>
        </div>

        {/* Tax Tool */}
        <div className="bento-card border-primary/30 space-y-6">
          <div className="flex justify-between">
            <h3 className="bento-label">Tax Provision</h3>
            <Calculator size={16} className="text-primary" />
          </div>
          <div className="space-y-4">
             <div className="p-5 bg-primary rounded-2xl text-white shadow-xl shadow-primary/20">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-80 mb-1">Provision Required</p>
                <p className="text-3xl font-black font-headline tracking-tighter">{formatCurrency(estimatedTax)}</p>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-bold">
                  <span>CA-COMPLIANT</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded">AUTO-SYNC</span>
                </div>
             </div>
             <button className="w-full py-4 text-primary bg-primary/10 rounded-2xl text-[10px] font-black uppercase tracking-widest">Audit Full Statement</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, trend, positive }: any) {
  return (
    <div className="bento-card flex flex-col justify-between group">
      <div>
        <p className="bento-label group-hover:text-primary transition-colors">{label}</p>
        <p className="text-3xl font-bold font-headline text-on-surface tracking-tighter">{value}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className={cn(
          "px-2 py-0.5 rounded-lg text-[10px] font-bold flex items-center gap-1",
          positive ? "bg-success/10 text-success" : "bg-surface-container-highest text-on-surface-variant"
        )}>
          {positive ? <TrendingUp size={12} /> : <ArrowDownRight size={12} />}
          {trend}
        </div>
      </div>
    </div>
  );
}

function LedgerItem({ label, amount, status, time, mode, source }: any) {
  return (
    <div className="flex items-center justify-between py-4 px-4 -mx-4 group cursor-pointer hover:bg-surface-container-low transition-all rounded-xl">
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center",
          mode === 'in' ? "bg-success/10 text-success" : "bg-error/10 text-error"
        )}>
          {mode === 'in' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm text-on-surface truncate tracking-tight">{label}</h4>
            {source && (
              <span className="px-1.5 py-0.5 bg-surface-container-highest text-[8px] font-black uppercase rounded text-on-surface-variant tracking-widest">
                {source}
              </span>
            )}
          </div>
          <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-tight">{time} • <span className={status === 'pending' ? 'text-primary' : ''}>{status}</span></p>
        </div>
      </div>
      <div className="text-right">
        <p className={cn(
          "font-bold font-headline text-lg tracking-tight",
          mode === 'in' ? "text-success" : "text-on-surface"
        )}>
          {mode === 'in' ? '+' : '-'}{amount}
        </p>
      </div>
    </div>
  );
}

function TaxPill({ label }: { label: string }) {
  return (
    <span className="whitespace-nowrap px-3 py-1 bg-white/20 text-white border border-white/20 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm">
      {label}
    </span>
  );
}
