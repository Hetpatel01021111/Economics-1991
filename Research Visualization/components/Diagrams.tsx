
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Globe, Lock, Unlock, DollarSign, Activity } from 'lucide-react';

// --- FOREX CRISIS CHART ---
export const ForexChart: React.FC<{ mode?: 'mini' | 'full' }> = ({ mode = 'full' }) => {
  // Data points for Forex Reserves (in Billion USD) - approximate for visualization
  const data = [
    { year: 1980, val: 5.8 },
    { year: 1985, val: 5.9 },
    { year: 1989, val: 3.2 },
    { year: 1990, val: 2.1 },
    { year: 1991, val: 1.2 }, // The crisis
    { year: 1992, val: 5.3 }, // Reform effect
    { year: 1995, val: 17.0 }
  ];

  return (
    <div className={`flex flex-col items-center ${mode === 'full' ? 'p-8' : 'p-2'} w-full`}>
      <h3 className={`font-serif text-stone-800 mb-6 ${mode === 'full' ? 'text-2xl' : 'text-lg'}`}>Forex Reserves Timeline</h3>
      
      <div className="flex items-end justify-between w-full h-48 gap-2 relative">
         {/* Baseline */}
         <div className="absolute bottom-0 w-full h-[1px] bg-stone-300"></div>
         <div className="absolute top-0 w-full h-[1px] bg-stone-100 border-t border-dashed border-stone-300"></div>
         
         {data.map((item, idx) => (
             <div key={item.year} className="flex flex-col items-center justify-end h-full flex-1 group">
                 <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-stone-600">${item.val}B</div>
                 <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(item.val / 18) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className={`w-full max-w-[40px] rounded-t-sm transition-all duration-300 ${item.year === 1991 ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' : item.year > 1991 ? 'bg-india-green' : 'bg-stone-400'}`}
                 />
                 <div className={`mt-2 text-xs font-mono ${item.year === 1991 ? 'font-bold text-red-600' : 'text-stone-500'}`}>{item.year}</div>
             </div>
         ))}
      </div>
      {mode === 'full' && (
          <p className="mt-6 text-sm text-stone-500 text-center max-w-lg">
             Notice the sharp decline leading up to 1991, where reserves dropped to barely enough for 3 weeks of imports, followed by a rapid recovery post-reforms.
          </p>
      )}
    </div>
  );
};

// --- IMPACT INDICATORS ---
export const ImpactIndicators: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {[
                { label: "Inflation Rate", val: "16.7%", icon: <TrendingUp className="text-red-500" />, desc: "Peaked in Aug 1991" },
                { label: "GDP Growth", val: "1.1%", icon: <TrendingDown className="text-red-500" />, desc: "Lowest in decade" },
                { label: "Fiscal Deficit", val: "8.4%", icon: <Activity className="text-orange-500" />, desc: "Of GDP" },
                { label: "Credit Rating", val: "Junk", icon: <Lock className="text-stone-500" />, desc: "Downgraded by agencies" }
            ].map((stat, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow text-center"
                >
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <div className="text-3xl font-serif font-bold text-stone-800 mb-1">{stat.val}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{stat.label}</div>
                    <div className="text-xs text-stone-400 leading-tight">{stat.desc}</div>
                </motion.div>
            ))}
        </div>
    )
}

// --- LPG REFORM CARDS ---
export const ReformCards: React.FC = () => {
  const [active, setActive] = useState<string | null>('lib');

  const reforms = {
      lib: {
          title: "Liberalisation",
          icon: <Unlock size={32} />,
          desc: "Removing the 'License Raj'. Abolishing industrial licensing for all but 18 industries. Removing restrictions on expansion and production.",
          color: "bg-blue-50 border-blue-200 text-blue-900"
      },
      priv: {
          title: "Privatisation",
          icon: <DollarSign size={32} />,
          desc: "Reducing the role of the public sector. Disinvestment in PSUs to increase efficiency and competition.",
          color: "bg-orange-50 border-orange-200 text-orange-900"
      },
      glob: {
          title: "Globalisation",
          icon: <Globe size={32} />,
          desc: "Integrating India with the world economy. Reducing tariffs, allowing Foreign Direct Investment (FDI), and currency devaluation.",
          color: "bg-green-50 border-green-200 text-green-900"
      }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 my-8">
        <div className="flex-1 flex flex-col gap-4">
             {Object.entries(reforms).map(([key, data]) => (
                 <button 
                    key={key}
                    onClick={() => setActive(key)}
                    className={`p-6 text-left rounded-xl transition-all duration-300 border ${active === key ? 'bg-white shadow-md border-india-saffron scale-[1.02]' : 'bg-white/50 border-stone-200 hover:bg-white'}`}
                 >
                    <h4 className="font-serif text-xl font-bold text-stone-800 flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${key === 'lib' ? 'bg-blue-500' : key === 'priv' ? 'bg-orange-500' : 'bg-green-500'}`}>
                           {key.charAt(0).toUpperCase()}
                        </span>
                        {data.title}
                    </h4>
                 </button>
             ))}
        </div>
        
        <div className="flex-1">
             <div className={`h-full p-8 rounded-xl border flex flex-col justify-center items-center text-center transition-colors duration-500 ${active ? reforms[active as keyof typeof reforms].color : 'bg-white'}`}>
                {active && (
                    <motion.div 
                        key={active}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mb-6 inline-block p-4 bg-white rounded-full shadow-sm">
                           {reforms[active as keyof typeof reforms].icon}
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4">{reforms[active as keyof typeof reforms].title}</h3>
                        <p className="text-lg leading-relaxed opacity-90">
                            {reforms[active as keyof typeof reforms].desc}
                        </p>
                    </motion.div>
                )}
             </div>
        </div>
    </div>
  );
};

// --- COMPARISON CHART (PRE vs POST) ---
export const ComparisonChart: React.FC = () => {
    return (
        <div className="bg-stone-900 p-8 rounded-xl text-white border border-stone-800">
            <h3 className="font-serif text-2xl mb-6 text-india-saffron">Pre-1991 vs Post-2000s</h3>
            
            <div className="space-y-6">
                {[
                    { label: "GDP Growth Rate", pre: "3.5% (Hindu Rate)", post: "7-8% (Fastest Growing)" },
                    { label: "Foreign Reserves", pre: "$1.2 Billion", post: "$600+ Billion" },
                    { label: "Poverty Rate", pre: "~45%", post: "~16%" },
                    { label: "Economy Type", pre: "Closed / Protectionist", post: "Open / Market Driven" },
                ].map((item, i) => (
                    <div key={i} className="relative">
                        <div className="flex justify-between text-xs text-stone-500 mb-1 uppercase tracking-widest font-bold">
                            <span>Before</span>
                            <span>After</span>
                        </div>
                        <div className="h-12 bg-stone-800 rounded-lg flex items-center relative overflow-hidden">
                             <div className="w-1/2 h-full border-r border-stone-700 flex items-center justify-start px-4 text-sm text-stone-400">
                                {item.pre}
                             </div>
                             <div className="w-1/2 h-full flex items-center justify-end px-4 text-sm font-bold text-india-green">
                                {item.post}
                             </div>
                             {/* Central Divider Label */}
                             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-700 px-2 py-0.5 rounded text-[10px] text-white">
                                {item.label}
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
