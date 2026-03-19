import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, Construction, Zap, GraduationCap, ChevronRight, Info } from 'lucide-react';
import NigeriaMap from '../components/NigeriaMap';

const regions = [
  { 
    name: "North Central", 
    states: ["Benue", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau", "FCT"],
    projects: 45,
    color: "bg-blue-500",
    highlights: [
      { title: "Lokoja-Abuja Road Expansion", type: "Infrastructure", icon: Construction },
      { title: "Gurara Dam Phase II", type: "Energy", icon: Zap },
      { title: "Renewed Hope City (Abuja)", type: "Housing", icon: Building2 }
    ]
  },
  { 
    name: "North East", 
    states: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
    projects: 38,
    color: "bg-green-500",
    highlights: [
      { title: "Maiduguri Gas Plant", type: "Energy", icon: Zap },
      { title: "North East Development Commission Projects", type: "Reconstruction", icon: Building2 },
      { title: "Federal University Gashua Expansion", type: "Education", icon: GraduationCap }
    ]
  },
  { 
    name: "North West", 
    states: ["Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara"],
    projects: 52,
    color: "bg-purple-500",
    highlights: [
      { title: "Kano-Maradi Rail Link", type: "Infrastructure", icon: Construction },
      { title: "Zaria Water Supply Project", type: "Utilities", icon: Zap },
      { title: "Kaduna ICT Hub", type: "Technology", icon: Building2 }
    ]
  },
  { 
    name: "South East", 
    states: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
    projects: 31,
    color: "bg-red-500",
    highlights: [
      { title: "Second Niger Bridge Access Roads", type: "Infrastructure", icon: Construction },
      { title: "Enugu-Onitsha Expressway", type: "Infrastructure", icon: Construction },
      { title: "Ariaria Market Power Plant", type: "Energy", icon: Zap }
    ]
  },
  { 
    name: "South South", 
    states: ["Akwa Ibom", "Bayelsa", "Cross River", "Delta", "Edo", "Rivers"],
    projects: 42,
    color: "bg-orange-500",
    highlights: [
      { title: "East-West Road Completion", type: "Infrastructure", icon: Construction },
      { title: "Port Harcourt Refinery Rehabilitation", type: "Energy", icon: Zap },
      { title: "Calabar Export Processing Zone", type: "Economy", icon: Building2 }
    ]
  },
  { 
    name: "South West", 
    states: ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"],
    projects: 52,
    color: "bg-yellow-500",
    highlights: [
      { title: "Lagos-Calabar Coastal Highway", type: "Infrastructure", icon: Construction },
      { title: "Renewed Hope City (Ikorodu)", type: "Housing", icon: Building2 },
      { title: "Ibadan-Kano Rail Modernization", type: "Transport", icon: Zap },
      { title: "Federal University of Agriculture", type: "Education", icon: GraduationCap }
    ]
  }
];

export default function StateImpact() {
  const [selectedRegion, setSelectedRegion] = useState(regions[5]); // Default to South West

  return (
    <div className="pt-20">
      <section className="bg-navy-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">STATE-BY-STATE <span className="text-nigeria-green">IMPACT</span></h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">Explore how the Renewed Hope Agenda is transforming lives in every corner of Nigeria. No state is left behind in our journey to progress.</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                  <p className="text-3xl font-display text-nigeria-green">36+1</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">STATES & FCT COVERED</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                  <p className="text-3xl font-display text-apc-red">260+</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ACTIVE MEGA PROJECTS</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 h-[400px] md:h-[500px]">
              <NigeriaMap 
                selectedState={selectedRegion.states[0]} 
                onStateClick={(name) => {
                  const region = regions.find(r => r.states.includes(name));
                  if (region) setSelectedRegion(region);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl font-display text-navy-blue mb-8 flex items-center gap-3">
                <MapPin className="text-nigeria-green" />
                SELECT A REGION
              </h2>
              {regions.map((r, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedRegion(r)}
                  className={`w-full p-6 rounded-2xl border transition-all flex items-center justify-between group ${
                    selectedRegion.name === r.name 
                    ? 'border-nigeria-green bg-nigeria-green/5 shadow-lg shadow-nigeria-green/5' 
                    : 'border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white'
                  }`}
                >
                  <div className="text-left">
                    <p className={`text-sm font-bold ${selectedRegion.name === r.name ? 'text-nigeria-green' : 'text-navy-blue'}`}>{r.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">{r.states.length} STATES • {r.projects} PROJECTS</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    selectedRegion.name === r.name ? 'text-nigeria-green translate-x-1' : 'text-gray-300 group-hover:text-gray-400'
                  }`} />
                </button>
              ))}
              
              <div className="mt-8 p-6 bg-apc-red/5 rounded-3xl border border-apc-red/10">
                <div className="flex gap-3 mb-4">
                  <Info className="w-5 h-5 text-apc-red shrink-0" />
                  <p className="text-xs font-bold text-navy-blue uppercase tracking-wider">Project Transparency</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">All projects listed are verified and tracked through the Presidential Delivery Unit (PDU) for accountability.</p>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedRegion.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 min-h-[600px] flex flex-col"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                      <h3 className="text-4xl font-display text-navy-blue uppercase tracking-tight">{selectedRegion.name} IMPACT</h3>
                      <p className="text-xs text-gray-500 font-bold tracking-[0.2em] mt-2 uppercase">
                        {selectedRegion.states.join(' • ')}
                      </p>
                    </div>
                    <div className="bg-white px-8 py-4 rounded-3xl shadow-sm border border-gray-100 text-center">
                      <p className="text-4xl font-display text-nigeria-green leading-none">{selectedRegion.projects}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">ACTIVE PROJECTS</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 flex-1">
                    {selectedRegion.highlights.map((p, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-xl hover:shadow-navy-blue/5 transition-all"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-navy-blue mb-6 group-hover:bg-nigeria-green group-hover:text-white transition-colors">
                          <p.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-apc-red uppercase tracking-widest mb-2">{p.type}</p>
                          <h4 className="font-display text-xl text-navy-blue leading-snug">{p.title}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <button className="mt-12 w-full bg-navy-blue text-white py-5 rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-navy-blue/20 flex items-center justify-center gap-3">
                    VIEW ALL {selectedRegion.name} PROJECTS
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
