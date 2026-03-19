import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, ArrowUpRight, Shield, Zap, Landmark } from 'lucide-react';

const gdpData = [
  { year: '2023 Q1', value: 2.31 },
  { year: '2023 Q2', value: 2.51 },
  { year: '2023 Q3', value: 2.54 },
  { year: '2023 Q4', value: 3.46 },
  { year: '2024 Q1', value: 2.98 },
  { year: '2024 Q2', value: 3.19 },
  { year: '2024 Q3', value: 3.52 },
  { year: '2024 Q4', value: 3.84 },
];

const metrics = [
  { label: 'GDP Growth', value: '3.84%', trend: '+0.32%', icon: TrendingUp, color: 'text-nigeria-green' },
  { label: 'External Reserves', value: '$45.2B', trend: '+$12B', icon: Landmark, color: 'text-navy-blue' },
  { label: 'Trade Surplus', value: '₦3.42T', trend: '+15%', icon: ArrowUpRight, color: 'text-gold-accent' },
  { label: 'Stock Market', value: '₦100T+', trend: 'All-time High', icon: Zap, color: 'text-apc-red' },
];

export default function EconomicDashboard() {
  return (
    <div className="bg-white dark:bg-navy-blue/50 rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-display text-navy-blue dark:text-white">Live Economic Dashboard</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">REAL-TIME PROGRESS METRICS • UPDATED MARCH 2026</p>
        </div>
        <div className="flex items-center gap-2 bg-nigeria-green/10 text-nigeria-green px-4 py-2 rounded-full text-xs font-bold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nigeria-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nigeria-green"></span>
          </span>
          LIVE DATA FEED
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-nigeria-green/30 transition-all group">
            <div className={`p-2 rounded-lg bg-white dark:bg-navy-blue w-fit mb-3 shadow-sm group-hover:scale-110 transition-transform`}>
              <m.icon className={`w-5 h-5 ${m.color}`} />
            </div>
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{m.label}</p>
            <p className="text-xl font-display text-navy-blue dark:text-white mt-1">{m.value}</p>
            <p className="text-[10px] font-bold text-nigeria-green mt-1">{m.trend}</p>
          </div>
        ))}
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={gdpData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#008751" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#008751" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" className="dark:opacity-10" />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 10, fontWeight: 600, fill: '#94a3b8'}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 10, fontWeight: 600, fill: '#94a3b8'}}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-navy-blue)'
              }}
              itemStyle={{ color: '#008751' }}
              labelStyle={{fontWeight: 700, color: '#1B365D'}}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#008751" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
              name="GDP Growth %"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-nigeria-green/5 border border-nigeria-green/10">
          <h4 className="text-sm font-bold text-nigeria-green uppercase tracking-widest mb-3">2026 Growth Outlook</h4>
          <p className="text-2xl font-display text-navy-blue dark:text-white mb-2">4.5% – 5.2%</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            Major institutions project accelerated growth driven by rising investor confidence and sustained structural reforms under the Renewed Hope Agenda.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gold-accent/5 border border-gold-accent/10">
          <h4 className="text-sm font-bold text-gold-accent uppercase tracking-widest mb-3">Sector Performance (Q4 2024)</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase">Services & Non-Oil</span>
              <span className="text-xs font-bold text-nigeria-green">+4.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase">Oil Sector</span>
              <span className="text-xs font-bold text-apc-red">+2.1%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-nigeria-green h-full w-[85%]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/10 flex flex-wrap gap-6 justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-nigeria-green"></div>
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Revenue: ₦27.8T (Exceeds Target)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-apc-red"></div>
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Inflation: 15.06% (Down from 34.6%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold-accent"></div>
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Exchange Rate: ₦1,450/$ (Stabilized)</span>
        </div>
      </div>
    </div>
  );
}
