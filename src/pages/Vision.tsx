import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, Shield, Globe, ArrowRight } from 'lucide-react';

export default function Vision() {
  const priorities = [
    {
      title: "Trillion-Dollar Economy",
      desc: "Path to $1T GDP by 2030 through industrialization, export diversification, and digital economy expansion.",
      icon: TrendingUp,
      color: "text-nigeria-green"
    },
    {
      title: "Poverty Reduction",
      desc: "Targeting to lift 20M Nigerians out of poverty through expanded social safety nets and rural development.",
      icon: Target,
      color: "text-apc-red"
    },
    {
      title: "Security & Stability",
      desc: "Complete elimination of insurgency threats and expansion of community policing for a safer Nigeria.",
      icon: Shield,
      color: "text-navy-blue"
    },
    {
      title: "Global Leadership",
      desc: "Pursuing G20 membership and leading Africa in climate action and regional economic integration.",
      icon: Globe,
      color: "text-gold-accent"
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-navy-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display mb-6">THE NEXT FOUR YEARS</h1>
            <p className="text-xl font-serif italic text-gold-accent mb-8">"Building on foundations, reaching new heights. Our journey to greatness has only just begun."</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-navy-blue transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {priorities.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-6 p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 transition-all hover:shadow-lg"
              >
                <div className={`${p.color} mt-1`}>
                  <p.icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-display text-navy-blue dark:text-white mb-3">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-navy-blue/20 ankara-pattern transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display text-navy-blue dark:text-white mb-8">THE PRESIDENT'S PROMISE</h2>
            <div className="aspect-video bg-navy-blue rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-pointer border border-white/10">
              <img 
                src="https://picsum.photos/seed/tinubu_vision/1280/720" 
                alt="President Message" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-apc-red rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
            <p className="mt-8 text-gray-500 font-medium italic">"I promise to lead with courage, to listen with empathy, and to act with integrity. Together, we will build a Nigeria that works for every citizen."</p>
          </div>
        </div>
      </section>
    </div>
  );
}
