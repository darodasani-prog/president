import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const timeline = [
    { year: '1952', title: 'Birth', desc: 'Born in Lagos, Nigeria.' },
    { year: '1999', title: 'Governor of Lagos', desc: 'Elected Executive Governor of Lagos State, laying the foundation for modern Lagos.' },
    { year: '2023', title: 'President of Nigeria', desc: 'Elected as the 16th President of the Federal Republic of Nigeria.' },
    { year: '2027', title: 'Renewed Hope 2.0', desc: 'Seeking re-election to consolidate gains and accelerate national progress.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-display mb-6 uppercase">BOLA AHMED TINUBU</h1>
              <p className="text-xl font-serif italic text-gold-accent mb-8">"I took the difficult decisions so Nigeria could prosper. The results speak for themselves."</p>
              <p className="text-gray-300 leading-relaxed mb-8">
                A visionary leader, economic strategist, and the architect of modern Lagos. President Tinubu has dedicated his life to the service of Nigeria, championing democracy and economic reform.
              </p>
              <button className="bg-nigeria-green text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                DOWNLOAD FULL BIOGRAPHY (PDF)
              </button>
            </motion.div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/77/Bola_Tinubu_portrait.jpg" 
                  alt="President Tinubu" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-apc-red p-8 rounded-3xl shadow-xl"
              >
                <p className="text-4xl font-display">25+</p>
                <p className="text-xs font-bold uppercase tracking-widest">Years of Leadership</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white dark:bg-navy-blue transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-display text-navy-blue dark:text-white mb-4">THE JOURNEY OF A LEADER</h2>
            <div className="w-24 h-1.5 bg-nigeria-green mx-auto rounded-full"></div>
          </motion.div>

          <div ref={containerRef} className="relative">
            {/* Progress Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-100 dark:bg-white/5 hidden md:block">
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute top-0 left-0 w-full h-full bg-nigeria-green"
              />
            </div>

            <div className="space-y-24">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 w-full"
                  >
                    <div className={`group p-10 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-nigeria-green/30 transition-all duration-500 hover:shadow-2xl hover:shadow-nigeria-green/5 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                      <span className="text-apc-red font-display text-4xl mb-4 block group-hover:scale-110 transition-transform duration-500">{item.year}</span>
                      <h3 className="text-2xl font-display text-navy-blue dark:text-white mb-4">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>

                  {/* Center Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="relative w-16 h-16 flex items-center justify-center z-10 hidden md:flex"
                  >
                    <div className="absolute inset-0 bg-nigeria-green/20 rounded-full animate-ping"></div>
                    <div className="w-8 h-8 rounded-full bg-nigeria-green border-4 border-white dark:border-navy-blue shadow-xl"></div>
                  </motion.div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
