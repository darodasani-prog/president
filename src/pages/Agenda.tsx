import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Map as MapIcon, Download, ChevronRight, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import NigeriaMap from '../components/NigeriaMap';

export default function Agenda() {
  const [selectedState, setSelectedState] = useState<string | undefined>();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const policies = [
    {
      title: "Economic Reforms",
      items: [
        "Fuel subsidy removal: Rationale and results (50% import reduction)",
        "Forex unification: Market stability, investor confidence",
        "Tax reform: 70+ taxes consolidated",
        "Debt management: Debt-to-GDP 38.8%"
      ],
      details: [
        {
          subtitle: "Fuel Subsidy Removal",
          content: "The removal of the fuel subsidy was a necessary step to redirect trillions of Naira into critical infrastructure and social welfare. This has resulted in a 50% reduction in petrol imports, saving billions in foreign exchange."
        },
        {
          subtitle: "Forex Unification",
          content: "By unifying the exchange rate, the administration has restored market stability and boosted investor confidence, leading to increased foreign direct investment and a more transparent financial system."
        },
        {
          subtitle: "Tax Consolidation",
          content: "The Presidential Committee on Fiscal Policy and Tax Reforms has consolidated over 70 taxes into a single-digit system, significantly reducing the burden on small businesses and improving ease of doing business."
        }
      ]
    },
    {
      title: "Infrastructure Development",
      items: [
        "Lagos-Calabar Coastal Highway (progress tracker)",
        "Sokoto-Badagry Highway",
        "260+ road projects (N208B value)",
        "Renewed Hope Cities: 100,000 housing units"
      ],
      details: [
        {
          subtitle: "Lagos-Calabar Coastal Highway",
          content: "A 700km project connecting the commercial hub of Lagos to the coastal city of Calabar. This highway will unlock economic potential across 9 states and create thousands of jobs."
        },
        {
          subtitle: "Renewed Hope Cities",
          content: "An ambitious housing program aimed at delivering 100,000 housing units across the country, providing affordable homes for low and middle-income earners."
        },
        {
          subtitle: "Road Infrastructure",
          content: "Over 260 road projects are currently active nationwide, with a total value exceeding N208B, ensuring better connectivity and reduced travel times for Nigerians."
        }
      ]
    },
    {
      title: "Agriculture & Food Security",
      items: [
        "State of emergency on food production (2023)",
        "₦100B fertilizer support",
        "Mechanized farming investments",
        "Food price reductions: Rice, maize down 25%+"
      ],
      details: [
        {
          subtitle: "Food Production Emergency",
          content: "Declared in 2023, this state of emergency has prioritized food security, leading to the cultivation of over 500,000 hectares of land for essential crops."
        },
        {
          subtitle: "Fertilizer Support",
          content: "The administration has distributed N100B worth of fertilizers to farmers nationwide, significantly lowering input costs and increasing crop yields."
        },
        {
          subtitle: "Mechanized Farming",
          content: "Strategic investments in tractors and modern farming equipment are transforming Nigeria's agricultural sector from subsistence to commercial scale."
        }
      ]
    },
    {
      title: "Education & Youth Empowerment",
      items: [
        "NELFUND: ₦206B+ disbursed to 1.16M students",
        "270+ tertiary institutions covered",
        "₦50B EFCC funding injection",
        "Interest-free loans for tuition & upkeep"
      ],
      details: [
        {
          subtitle: "NELFUND Student Loans",
          content: "The Nigerian Education Loan Fund (NELFUND) has revolutionized access to higher education, with over ₦206 billion disbursed to 1.16 million students across 270 institutions as of March 2026. For example, the University of Lagos (UNILAG) received ₦1.33 billion to cover 6,308 students in early 2026."
        },
        {
          subtitle: "EFCC Funding Support",
          content: "The initiative was bolstered by a ₦50 billion injection from recovered assets by the EFCC, as directed by President Tinubu to empower Nigerian youth."
        },
        {
          subtitle: "Institutional Impact",
          content: "Funds are paid directly to institutions for tuition (₦128.84B) and to students for upkeep (₦77.45B), ensuring transparent and direct impact on the educational journey."
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gray-50 dark:bg-navy-blue/20 py-24 ankara-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-apc-red font-bold text-sm tracking-widest uppercase mb-4 block">Our Blueprint</span>
            <h1 className="text-5xl md:text-6xl font-display text-navy-blue dark:text-white mb-6">RENEWED HOPE AGENDA</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">A comprehensive blueprint for national transformation, delivering measurable results across every sector of Nigeria.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {policies.map((policy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-navy-blue/50 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/10 h-fit"
              >
                <h3 className="text-2xl font-display text-navy-blue dark:text-white mb-6 pb-4 border-b border-gray-50 dark:border-white/10">{policy.title}</h3>
                <ul className="space-y-4 mb-8">
                  {policy.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-nigeria-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-gray-50 dark:border-white/10 space-y-6">
                        {policy.details.map((detail, k) => (
                          <div key={k}>
                            <h4 className="text-xs font-bold text-apc-red uppercase tracking-widest mb-2">{detail.subtitle}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{detail.content}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className={`mt-8 w-full py-4 rounded-xl border font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    expandedIndex === i 
                      ? 'bg-navy-blue dark:bg-nigeria-green text-white border-navy-blue dark:border-nigeria-green' 
                      : 'border-gray-100 dark:border-white/10 text-navy-blue dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {expandedIndex === i ? (
                    <>HIDE DETAILS <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>VIEW DETAILED POLICY <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <h2 className="text-5xl font-display mb-8 leading-tight">INTERACTIVE <span className="text-nigeria-green">PROJECT MAP</span></h2>
              <p className="text-xl text-gray-400 mb-12">Explore the Renewed Hope projects across all 36 states and the FCT. From roads and bridges to power plants and schools.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-nigeria-green flex items-center justify-center">
                    <MapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-display text-white">260+</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ACTIVE ROAD PROJECTS</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-apc-red flex items-center justify-center">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-display text-white">100K</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">HOUSING UNITS UNDERWAY</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link to="/state-impact" className="bg-nigeria-green text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-nigeria-green/20 hover:bg-green-600 transition-all">
                  <MapIcon className="w-5 h-5" /> EXPLORE ALL PROJECTS
                </Link>
                <button className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 border border-white/10 hover:bg-white/20 transition-all">
                  <Download className="w-5 h-5" /> DOWNLOAD BLUEPRINT
                </button>
              </div>
            </div>

            <div className="relative h-[600px] w-full">
              <div className="absolute inset-0 bg-nigeria-green/5 rounded-[3rem] blur-3xl"></div>
              <div className="relative z-10 h-full">
                <NigeriaMap 
                  selectedState={selectedState}
                  onStateClick={(name) => setSelectedState(name)}
                />
                {selectedState && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute bottom-8 left-8 right-8 bg-white dark:bg-navy-blue p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/10 text-navy-blue dark:text-white transition-colors duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] font-bold text-nigeria-green uppercase tracking-widest mb-1">SELECTED STATE</p>
                        <h4 className="text-2xl font-display">{selectedState}</h4>
                      </div>
                      <Link to="/state-impact" className="bg-navy-blue dark:bg-nigeria-green text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-black dark:hover:bg-green-700 transition-all">
                        VIEW PROJECTS
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
