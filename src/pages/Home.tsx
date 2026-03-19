import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ArrowRight, Play, CheckCircle2, Users, Building2, GraduationCap, ShieldCheck, Landmark, Calendar, MapPin } from 'lucide-react';
import EconomicDashboard from '../components/EconomicDashboard';
import NigeriaMap from '../components/NigeriaMap';
import { AnimatePresence } from 'motion/react';

import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Home() {
  const { t } = useLanguage();
  const [volunteerData, setVolunteerData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedState, setSelectedState] = useState('Lagos');

  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "https://www.tinubusupportgroup.com/assets/img/tinubu2.jpg",
    "https://cdn.guardian.ng/wp-content/uploads/2025/03/Tinubu-Praying.jpeg",
    "https://cdn.punchng.com/wp-content/uploads/2023/05/26045513/Tinubu-and-Shettima.jpg"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const path = 'volunteers';
      await addDoc(collection(db, path), {
        ...volunteerData,
        status: 'pending',
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setVolunteerData({ name: '', email: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'volunteers');
      setStatus('error');
    }
  };

  const slides = [
    {
      image: "https://picsum.photos/seed/tinubu1/1920/1080",
      title: t('hero_title_1'),
      subtitle: "BUILDING ON PROGRESS FOR A GREATER NIGERIA",
      cta: t('cta_join')
    }
  ];

  const pillars = [
    {
      title: "Economic Revival",
      desc: "From subsidy removal to surplus: How reforms are working for you.",
      icon: Building2,
      color: "bg-nigeria-green"
    },
    {
      title: "Infrastructure Revolution",
      desc: "Roads, rails, power, ports: Building the foundation of our future.",
      icon: Zap,
      color: "bg-navy-blue"
    },
    {
      title: "Human Capital",
      desc: "Education, health, youth empowerment: Investing in our greatest asset.",
      icon: GraduationCap,
      color: "bg-gold-accent"
    },
    {
      title: "Security & Unity",
      desc: "Protecting lives, preserving Nigeria: A safer nation for all.",
      icon: ShieldCheck,
      color: "bg-apc-red"
    }
  ];

  const latestNews = [
    {
      title: "President Tinubu Commissions Lagos-Calabar Coastal Highway Phase 1",
      date: "March 15, 2026",
      image: "https://cdn.guardian.ng/wp-content/uploads/2025/06/20250601_183701-1536x1024.jpg",
    },
    {
      title: "Economic Outlook: Nigeria's GDP Growth Hits 3.84% in Q4 2024",
      date: "March 10, 2026",
      image: "https://www.agusto.com/wp-content/uploads/2020/08/Nigeria-Economy-Image-1.png",
    },
    {
      title: "NELFUND Surpasses ₦206B in Student Loans to 1.16M Beneficiaries",
      date: "March 18, 2026",
      image: "https://edutimesafrica.com/wp-content/uploads/2024/07/NELFUND-Untitled-3-1140x570.jpg",
    }
  ];

  const marqueeItems = [
    "50% reduction in petrol imports",
    "₦9.1T revenue doubled in H1 2024",
    "Fitch & S&P upgraded Nigeria to Stable B",
    "South East Development Commission established",
    "CREDICORP: N200B for consumer credit",
    "3.84% GDP growth Q4 2024"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen py-20 flex items-center bg-navy-blue overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-block bg-apc-red px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest">
              RENEWED HOPE
            </span>
            <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
              NIGERIA IS WORKING AGAIN
            </h1>
            <p className="text-xl md:text-2xl font-serif italic mb-10 text-gray-200">
              Inflation down to 15.06%. Reserves at $45.4B. GDP growing at 3.84%. The reforms are working.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/achievements-dashboard#economic-indicators" className="bg-nigeria-green hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl">
                SEE THE DATA <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/get-involved" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                JOIN THE MOVEMENT
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900 group"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={heroImages[currentSlide]}
                alt={`President Tinubu - Slide ${currentSlide + 1}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 to-transparent pointer-events-none" />

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === i ? 'w-8 bg-nigeria-green' : 'bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Achievements */}
      <div className="bg-navy-blue py-4 overflow-hidden border-y border-white/10">
        <div className="marquee">
          <div className="marquee-content">
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-white font-display text-sm whitespace-nowrap px-8">
                <CheckCircle2 className="w-4 h-4 text-nigeria-green" />
                {item.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Economic Dashboard Section */}
      <section className="py-32 bg-gray-50 dark:bg-navy-blue/50 ankara-pattern transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-apc-red font-bold text-sm tracking-widest uppercase mb-4 block">Measurable Results</span>
              <h2 className="text-4xl md:text-5xl font-display text-navy-blue dark:text-white mb-6">
                THE NUMBERS DON'T LIE. <br/>
                <span className="text-nigeria-green">NIGERIA IS RISING.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Our reforms are tough, but they are working. We have stabilized the naira, doubled our national revenue, and set the foundation for a trillion-dollar economy.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Revenue doubled to ₦27.8T in 2025",
                  "Foreign Direct Investment up 700%",
                  "Trade surplus of ₦3.42T achieved"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy-blue dark:text-gray-200 font-bold">
                    <div className="w-6 h-6 rounded-full bg-nigeria-green/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-nigeria-green" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/achievements-dashboard" className="text-nigeria-green font-bold flex items-center gap-2 hover:gap-4 transition-all">
                EXPLORE THE FULL DATA REPORT <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <EconomicDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Pillars */}
      <section className="py-32 bg-white dark:bg-navy-blue transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display text-navy-blue dark:text-white mb-4">THE RENEWED HOPE AGENDA</h2>
            <p className="text-gray-600 dark:text-gray-400">A comprehensive blueprint for national transformation, delivering results across every sector of our society.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display text-navy-blue dark:text-white mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{p.desc}</p>
                <Link to="/renewed-hope-agenda" className="text-xs font-bold text-apc-red flex items-center gap-2 group-hover:gap-3 transition-all">
                  LEARN MORE <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Map Section */}
      <section className="py-32 bg-white dark:bg-navy-blue transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-apc-red font-bold text-sm tracking-widest uppercase mb-4 block">National Footprint</span>
              <h2 className="text-4xl md:text-6xl font-display text-navy-blue dark:text-white mb-8 leading-tight">
                EVERY STATE. <br/>
                <span className="text-nigeria-green">EVERY COMMUNITY.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                The Renewed Hope Agenda is not just a policy—it's a physical transformation. From the coastal highways of the South to the irrigation projects of the North, we are building a Nigeria where progress is visible everywhere.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { label: "Active Projects", value: "260+", color: "text-nigeria-green" },
                  { label: "States Covered", value: "36 + FCT", color: "text-navy-blue dark:text-white" },
                  { label: "Jobs Created", value: "2.5M+", color: "text-apc-red" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
                    <span className={`text-2xl font-display ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>

              <Link to="/state-impact" className="inline-flex items-center gap-3 bg-navy-blue text-white px-10 py-5 rounded-full font-bold hover:bg-black transition-all shadow-xl shadow-navy-blue/20">
                EXPLORE STATE-BY-STATE IMPACT
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
              <NigeriaMap 
                selectedState={selectedState}
                onStateClick={(name) => setSelectedState(name)}
              />
              
              {/* Floating State Info Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedState}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-64 bg-white dark:bg-navy-blue p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-white/10 hidden md:block"
                >
                  <div className="w-12 h-12 rounded-2xl bg-nigeria-green/10 flex items-center justify-center text-nigeria-green mb-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Impact in</p>
                  <h4 className="text-2xl font-display text-navy-blue dark:text-white mb-4 uppercase">{selectedState}</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Projects</span>
                      <span className="text-sm font-bold text-nigeria-green">12 Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Status</span>
                      <span className="text-[10px] font-bold text-apc-red bg-apc-red/10 px-2 py-0.5 rounded-full">ON TRACK</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-32 bg-gray-50 dark:bg-navy-blue/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl font-display text-navy-blue dark:text-white">LATEST UPDATES</h2>
            <Link to="/news-center" className="text-nigeria-green font-bold flex items-center gap-2 hover:gap-4 transition-all">
              VIEW ALL NEWS <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news, i) => (
              <div key={i} className="bg-white dark:bg-navy-blue/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-transparent dark:border-white/10">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase mb-3">
                    <Calendar className="w-3.5 h-3.5" /> {news.date}
                  </div>
                  <h3 className="font-display text-navy-blue dark:text-white mb-4 leading-tight">{news.title}</h3>
                  <Link to="/news-center" className="text-xs font-bold text-apc-red flex items-center gap-2">
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-32 bg-nigeria-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white dark:bg-navy-blue rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl border border-transparent dark:border-white/10">
            <div className="max-w-xl">
              <h2 className="text-4xl font-display text-navy-blue dark:text-white mb-6">BE PART OF HISTORY. <br/>JOIN THE MOVEMENT.</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We are building a Nigeria that works for everyone. Your voice, your time, and your energy are the fuel for this progress. Register as a volunteer today.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-nigeria-green" />
                  <span className="text-sm font-bold text-navy-blue dark:text-white">500K+ VOLUNTEERS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-apc-red" />
                  <span className="text-sm font-bold text-navy-blue dark:text-white">774 LGAs COVERED</span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-nigeria-green/20 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-nigeria-green mx-auto mb-4" />
                  <h3 className="text-xl font-display text-navy-blue dark:text-white mb-2 uppercase tracking-tight">WELCOME!</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">You've successfully joined the movement. Check your email for next steps.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-nigeria-green font-bold uppercase tracking-widest text-[10px] hover:underline"
                  >
                    REGISTER ANOTHER
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name" 
                    value={volunteerData.name}
                    onChange={e => setVolunteerData({...volunteerData, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 dark:bg-navy-blue dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none"
                  />
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address" 
                    value={volunteerData.email}
                    onChange={e => setVolunteerData({...volunteerData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 dark:bg-navy-blue dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none"
                  />
                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-apc-red text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-red-700 transition-all disabled:opacity-50"
                  >
                    {status === 'loading' ? 'PROCESSING...' : 'REGISTER NOW'}
                  </button>
                  {status === 'error' && (
                    <p className="text-[10px] text-center text-apc-red font-bold uppercase tracking-widest">An error occurred. Try again.</p>
                  )}
                  <p className="text-[10px] text-center text-gray-400 uppercase font-bold">
                    By signing up, you agree to our privacy policy and INEC compliance terms.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
