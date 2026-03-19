import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function VicePresident() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const timeline = [
    { year: '1966', title: 'Birth', desc: 'Born on September 2, 1966, in Maiduguri, Borno State.' },
    { year: '2011', title: 'Governor of Borno', desc: 'Elected as the Executive Governor of Borno State, serving two terms until 2019.' },
    { year: '2019', title: 'Senator of the Federal Republic', desc: 'Represented Borno Central Senatorial District in the 9th National Assembly.' },
    { year: '2023', title: 'Vice President of Nigeria', desc: 'Assumed office as the 15th Vice President of Nigeria on May 29, 2023.' }
  ];

  const details = [
    { label: 'Role', value: 'Vice President of the Federal Republic of Nigeria' },
    { label: 'Administration', value: 'Bola Tinubu Administration (2023–Present)' },
    { label: 'Political Party', value: 'All Progressives Congress (APC)' },
    { label: 'Council', value: 'Chairman, National Economic Council (NEC)' }
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
              <h1 className="text-5xl md:text-7xl font-display mb-6 uppercase">KASHIM SHETTIMA</h1>
              <p className="text-xl font-serif italic text-gold-accent mb-8">"Our commitment is to the Nigerian people, ensuring economic stability and national security."</p>
              <p className="text-gray-300 leading-relaxed mb-8">
                GCON is the current Vice President of Nigeria. A member of the All Progressives Congress (APC), he previously served as a Senator and Governor of Borno State. He currently serves as the Chairman of the National Economic Council.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {details.map((detail, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-accent mb-1">{detail.label}</p>
                    <p className="text-sm font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>

              <button className="bg-nigeria-green text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                VIEW FULL PROFILE
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
                  src="https://nigeriabrussels.org/wp-content/uploads/2024/02/Vice-President-of-Nigeria.jpg" 
                  alt="Vice President Kashim Shettima" 
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
                <p className="text-4xl font-display">GCON</p>
                <p className="text-xs font-bold uppercase tracking-widest">Grand Commander of the Order of the Niger</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24 bg-gray-50 dark:bg-navy-blue/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2 className="text-4xl font-display text-navy-blue dark:text-white mb-8 text-center">BIOGRAPHICAL BACKGROUND</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Born on September 2, 1966, Kashim Shettima is a distinguished academic, banker, and statesman. Before his entry into politics, he had a successful career in the banking sector and served as a lecturer at the University of Maiduguri.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              His tenure as Governor of Borno State (2011–2019) was marked by resilience and extensive reconstruction efforts amidst security challenges. As Vice President, he plays a pivotal role in the administration's economic reforms and national development strategies.
            </p>
          </motion.div>
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
            <h2 className="text-5xl md:text-6xl font-display text-navy-blue dark:text-white mb-4">A LEGACY OF SERVICE</h2>
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
