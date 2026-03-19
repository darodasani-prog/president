import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Bell, Users, MapPin, DollarSign, Share2, QrCode } from 'lucide-react';

export default function MobileApp() {
  const features = [
    { title: "Real-time News", desc: "Get instant notifications on policy updates and campaign news.", icon: Bell },
    { title: "Volunteer Hub", desc: "Manage your tasks and track your impact from your phone.", icon: Users },
    { title: "Polling Unit Locator", desc: "Find your voting center and get directions easily.", icon: MapPin },
    { title: "Digital Assets", desc: "Download and share campaign materials directly from the app.", icon: Share2 }
  ];

  return (
    <div className="pt-20">
      <section className="bg-apc-red text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-display mb-6">RENEWED HOPE MOBILE</h1>
              <p className="text-xl font-serif italic text-red-100 mb-8">"The campaign in your pocket. Stay connected, stay informed, stay involved."</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-apc-red px-8 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-2">
                  <Smartphone className="w-5 h-5" /> APP STORE
                </button>
                <button className="bg-navy-blue text-white px-8 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-2">
                  <Smartphone className="w-5 h-5" /> GOOGLE PLAY
                </button>
              </div>
            </motion.div>
            <div className="relative flex justify-center">
              <div className="w-64 h-[500px] bg-navy-blue rounded-[3rem] border-[8px] border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 w-full h-6 bg-navy-blue flex justify-center items-center">
                  <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                </div>
                <img 
                  src="https://picsum.photos/seed/app_preview/400/800" 
                  alt="App Preview" 
                  className="w-full h-full object-cover pt-6"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-navy-blue p-6 rounded-3xl shadow-xl hidden lg:block border border-gray-100 dark:border-white/10">
                <QrCode className="w-24 h-24 text-navy-blue dark:text-white" />
                <p className="text-[10px] font-bold text-center text-gray-400 dark:text-gray-500 mt-2 uppercase tracking-widest">SCAN TO DOWNLOAD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-navy-blue dark:text-white text-center mb-16">APP FEATURES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-center group hover:border-apc-red transition-all">
                <div className="w-16 h-16 bg-white dark:bg-navy-blue rounded-2xl shadow-sm flex items-center justify-center text-apc-red mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display text-navy-blue dark:text-white mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
