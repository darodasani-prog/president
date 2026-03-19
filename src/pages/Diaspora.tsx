import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, Plane, Landmark, Users, ArrowRight, ExternalLink } from 'lucide-react';

export default function Diaspora() {
  const chapters = [
    { name: "North America", cities: "New York, Houston, Toronto", count: "4.2M" },
    { name: "United Kingdom", cities: "London, Manchester, Birmingham", count: "3.5M" },
    { name: "Europe", cities: "Berlin, Paris, Rome", count: "2.8M" },
    { name: "Middle East", cities: "Dubai, Doha, Riyadh", count: "1.5M" }
  ];

  return (
    <div className="pt-20">
      <section className="bg-navy-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-display mb-6">DIASPORA ENGAGEMENT</h1>
              <p className="text-xl font-serif italic text-gold-accent mb-8">"15 Million Strong. One Voice. One Nigeria. You are the bridge to our global future."</p>
              <div className="flex gap-4">
                <Link to="/get-involved" className="bg-nigeria-green text-white px-8 py-4 rounded-full font-bold shadow-lg inline-block">
                  REGISTER AS DIASPORA SUPPORTER
                </Link>
              </div>
            </motion.div>
            <div className="relative hidden md:block">
              <div className="w-full aspect-square rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                  <Globe className="w-64 h-64 text-white/5" />
                </div>
                <div className="glass-morphism p-8 rounded-3xl text-center relative z-10">
                  <p className="text-5xl font-display text-gold-accent">$20B+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white">Annual Remittances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { title: "Remittance Impact", desc: "Strengthening the naira through structured diaspora inflows.", icon: Landmark },
              { title: "Investment Portal", desc: "Exclusive opportunities in Nigeria's growth sectors.", icon: TrendingUp },
              { title: "Dual Citizenship", desc: "Protecting your rights and heritage globally.", icon: Shield },
              { title: "Consular Services", desc: "Modernizing our embassies for better service.", icon: Plane }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                <item.icon className="w-10 h-10 text-nigeria-green mb-6" />
                <h3 className="text-xl font-display text-navy-blue dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-display text-navy-blue dark:text-white text-center mb-16">GLOBAL CHAPTERS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {chapters.map((c, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 flex items-center justify-between group hover:border-apc-red transition-all">
                <div>
                  <h3 className="text-2xl font-display text-navy-blue dark:text-white mb-2">{c.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{c.cities}</p>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-apc-red" />
                    <span className="text-xs font-bold text-navy-blue dark:text-white">{c.count} NIGERIANS</span>
                  </div>
                </div>
                <button className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-apc-red group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
