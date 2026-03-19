import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Calendar, User, ArrowRight, Share2, X } from 'lucide-react';

export default function News() {
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const news = [
    {
      title: "President Tinubu Commissions Lagos-Calabar Coastal Highway Phase 1",
      date: "March 15, 2026",
      category: "Infrastructure",
      image: "https://cdn.guardian.ng/wp-content/uploads/2025/06/20250601_183701-1536x1024.jpg",
      excerpt: "President Bola Tinubu has officially commissioned the completed 30-kilometre portion of the Lagos-Calabar Coastal Highway, marking two years in office with bold infrastructure strides.",
      content: `
        <p>President Bola Tinubu has officially commissioned the completed 30-kilometre portion of the Lagos-Calabar Coastal Highway, several others, as well as the construction of new roads in the Southern region to mark two years in office.</p>
        <p>Speaking at the event in Lagos, Tinubu reflected on the bold strides taken two years under the Renewed Hope Agenda, identifying the Coastal Highway as a flagship project that encapsulates the commitment to infrastructure development as a driver of economic transformation.</p>
        <p>Despite initial skepticism, Tinubu continued, the project has become a beacon of progress, connecting nine coastal states of Lagos, Ogun, Ondo, Delta, Edo, Bayelsa, Rivers, Akwa Ibom, and Cross River. It is projected to contribute up to $12 billion annually to Nigeria’s Gross Domestic Product within its first decade.</p>
        <p>He emphasised that the project will ease transportation, reduce costs of travel and vehicle maintenance, as well as travel time, and drive growth across agriculture, industry, tourism, marine, and commerce while creating thousands of jobs and expanding opportunities for Nigerians.</p>
        <p>Also, Minister of Works, David Umahi, praised the scope and significance of the project, describing the highway as a game-changer that not only connects nine littoral states but also unlocks vital trade and industrial corridors.</p>
      `
    },
    {
      title: "Economic Outlook: Nigeria's GDP Growth Hits 3.84% in Q4 2024",
      date: "March 10, 2026",
      category: "Policy",
      image: "https://www.agusto.com/wp-content/uploads/2020/08/Nigeria-Economy-Image-1.png",
      excerpt: "Nigeria's economy grew by 3.84% in Q4 2024, marking its fastest pace in three years and reflecting a steady post-reform recovery.",
      content: `
        <div class="space-y-8">
          <p class="text-xl font-serif italic text-navy-blue dark:text-gold-accent leading-relaxed">
            "Nigeria's economy grew by 3.84% in Q4 2024, marking its fastest pace in three years and reflecting a steady post-reform recovery."
          </p>
          
          <p>Key growth drivers include improved performance in finance, IT, agriculture, and manufacturing, with strong optimism that reforms under President Tinubu will boost 2026 growth, with forecasts ranging from 4.5% to 5.2%.</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div class="bg-nigeria-green/5 p-4 rounded-2xl border border-nigeria-green/10">
              <p class="text-xs font-bold text-nigeria-green uppercase mb-1">GDP Growth</p>
              <p class="text-2xl font-display text-navy-blue dark:text-white">3.84%</p>
              <p class="text-[10px] text-gray-500 uppercase">Q4 2024</p>
            </div>
            <div class="bg-gold-accent/5 p-4 rounded-2xl border border-gold-accent/10">
              <p class="text-xs font-bold text-gold-accent uppercase mb-1">2026 Projection</p>
              <p class="text-2xl font-display text-navy-blue dark:text-white">4.5% - 5.2%</p>
              <p class="text-[10px] text-gray-500 uppercase">Forecast</p>
            </div>
            <div class="bg-apc-red/5 p-4 rounded-2xl border border-apc-red/10">
              <p class="text-xs font-bold text-apc-red uppercase mb-1">Oil Sector</p>
              <p class="text-2xl font-display text-navy-blue dark:text-white">2.1%</p>
              <p class="text-[10px] text-gray-500 uppercase">Q4 2024</p>
            </div>
          </div>

          <h3 class="text-2xl font-display text-navy-blue dark:text-white">Key Economic Highlights for Q4 2024 and 2026 Outlook:</h3>
          <ul class="space-y-4">
            <li class="flex gap-4">
              <div class="w-1.5 h-1.5 rounded-full bg-nigeria-green mt-2 shrink-0"></div>
              <p><strong class="text-navy-blue dark:text-white">Q4 2024 Growth:</strong> The 3.84% GDP growth in Q4 2024 was driven by the services sector and increased non-oil activity, according to the National Bureau of Statistics (NBS).</p>
            </li>
            <li class="flex gap-4">
              <div class="w-1.5 h-1.5 rounded-full bg-gold-accent mt-2 shrink-0"></div>
              <p><strong class="text-navy-blue dark:text-white">2026 Growth Projections:</strong> Major institutions and analysts project a stronger 2026 growth rate of 4.5% – 5.2%, driven by rising investor confidence and sustained structural reforms.</p>
            </li>
            <li class="flex gap-4">
              <div class="w-1.5 h-1.5 rounded-full bg-apc-red mt-2 shrink-0"></div>
              <p><strong class="text-navy-blue dark:text-white">Sector Performance:</strong> While service sectors thrived, the oil sector grew by 2.1% in Q4 2024, showing lower performance compared to previous quarters, notes MarketForces Africa.</p>
            </li>
            <li class="flex gap-4">
              <div class="w-1.5 h-1.5 rounded-full bg-navy-blue dark:bg-white mt-2 shrink-0"></div>
              <p><strong class="text-navy-blue dark:text-white">Key Drivers & Risk Factors:</strong> Growth is expected to be fueled by enhanced foreign exchange liquidity and continued infrastructure investment, though high energy costs and potential fiscal pressures remain risks.</p>
            </li>
          </ul>
        </div>
      `
    },
    {
      title: "NELFUND Surpasses ₦206B in Student Loans to 1.16M Beneficiaries",
      date: "March 18, 2026",
      category: "Education",
      image: "https://edutimesafrica.com/wp-content/uploads/2024/07/NELFUND-Untitled-3-1140x570.jpg",
      excerpt: "With over ₦206 billion disbursed to 1.16 million students across 270 institutions, NELFUND is transforming access to higher education in Nigeria.",
      content: `
        <div class="space-y-8">
          <p class="text-xl font-serif italic text-navy-blue dark:text-gold-accent leading-relaxed">
            "The student loan program, aimed at empowering students through interest-free loans, is part of the Federal Government's efforts to enhance access to higher education."
          </p>
          
          <p>As of early 2026, the Nigerian Education Loan Fund (NELFUND) has significantly surpassed initial disbursement milestones, with the latest reports indicating over ₦206 billion has been disbursed to more than 1.16 million beneficiaries across 270 tertiary institutions nationwide.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
              <h4 class="text-xs font-bold text-nigeria-green uppercase tracking-widest mb-4">Disbursement Breakdown</h4>
              <div class="space-y-4">
                <div>
                  <p class="text-2xl font-display text-navy-blue dark:text-white">₦128.84B</p>
                  <p class="text-[10px] font-bold text-gray-400 uppercase">Direct Tuition Payments</p>
                </div>
                <div>
                  <p class="text-2xl font-display text-navy-blue dark:text-white">₦77.45B</p>
                  <p class="text-[10px] font-bold text-gray-400 uppercase">Student Upkeep Allowances</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
              <h4 class="text-xs font-bold text-apc-red uppercase tracking-widest mb-4">Application Volume</h4>
              <p class="text-4xl font-display text-navy-blue dark:text-white mb-2">1.75M+</p>
              <p class="text-xs text-gray-500">Applications received since the portal launched in May 2024, reflecting massive demand for educational support.</p>
            </div>
          </div>

          <h3 class="text-2xl font-display text-navy-blue dark:text-white">Contextual Milestones</h3>
          <p>The initiative was significantly bolstered by a ₦50 billion injection from the Economic and Financial Crimes Commission (EFCC) as directed by President Tinubu in August 2024. This strategic use of recovered assets has directly fueled the dreams of millions of young Nigerians.</p>
          
          <p>Earlier in 2025, NELFUND surpassed a ₦116 billion disbursement mark and continued growing to ₦140 billion by November 2025 before reaching the current record-breaking figures in early 2026.</p>

          <div class="bg-navy-blue text-white p-8 rounded-3xl relative overflow-hidden">
            <div class="absolute inset-0 opacity-10 ankara-pattern"></div>
            <div class="relative z-10">
              <h4 class="text-gold-accent font-bold text-xs uppercase tracking-widest mb-4">University Impact Spotlight</h4>
              <p class="text-lg mb-4">The University of Lagos (UNILAG) has received substantial funds, including ₦1.33 billion to cover 6,308 students in early 2026 alone.</p>
              <p class="text-sm text-gray-300">This model of direct institutional payment ensures that students remain in the classroom without the burden of unpaid fees.</p>
            </div>
          </div>
        </div>
      `
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gray-50 dark:bg-navy-blue/50 py-16 border-b dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-display text-navy-blue dark:text-white mb-4">NEWS & MEDIA CENTER</h1>
              <p className="text-gray-600 dark:text-gray-400">Stay updated with the latest policy announcements, project updates, and campaign activities.</p>
            </div>
            <div className="w-full md:w-auto flex gap-4">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search news..." 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-navy-blue dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none text-sm"
                />
              </div>
              <button className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy-blue hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {news.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-navy-blue/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-navy-blue dark:text-white uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> ADMIN</span>
                </div>
                <h3 className="text-xl font-display text-navy-blue dark:text-white mb-3 group-hover:text-nigeria-green transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-white/10">
                  <button 
                    onClick={() => setSelectedNews(item)}
                    className="text-xs font-bold text-apc-red flex items-center gap-2"
                  >
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-12 py-4 rounded-full border-2 border-navy-blue dark:border-white text-navy-blue dark:text-white font-bold hover:bg-navy-blue dark:hover:bg-white hover:text-white dark:hover:text-navy-blue transition-all">
              LOAD MORE ARTICLES
            </button>
          </div>
        </div>
      </section>

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-navy-blue w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col border border-gray-100 dark:border-white/10"
            >
              <div className="relative h-64 md:h-96 shrink-0">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-navy-blue/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-navy-blue dark:text-white uppercase tracking-widest">
                  {selectedNews.category}
                </div>
              </div>
              
              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedNews.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> ADMIN</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display text-navy-blue dark:text-white mb-8 leading-tight">
                  {selectedNews.title}
                </h2>
                <div 
                  className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                />
                
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/10 flex justify-between items-center">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-xs font-bold text-navy-blue dark:text-white uppercase tracking-widest hover:text-apc-red transition-colors">
                      <Share2 className="w-4 h-4" /> SHARE ARTICLE
                    </button>
                  </div>
                  <button 
                    onClick={() => setSelectedNews(null)}
                    className="bg-navy-blue dark:bg-white text-white dark:text-navy-blue px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
