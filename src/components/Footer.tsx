import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const path = 'subscribers';
      await addDoc(collection(db, path), {
        email,
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'subscribers');
      setStatus('error');
    }
  };

  const sections = [
    {
      title: "About",
      links: [
        { name: "President Tinubu", path: "/about-president-tinubu" },
        { name: "Vice President Shettima", path: "/vice-president-shettima" },
        { name: "Leadership Philosophy", path: "/about-president-tinubu#philosophy" },
        { name: "Campaign Team", path: "/contact-us" }
      ]
    },
    {
      title: "Issues",
      links: [
        { name: "Economic Reform", path: "/renewed-hope-agenda#economy" },
        { name: "Infrastructure", path: "/renewed-hope-agenda#infrastructure" },
        { name: "Education", path: "/renewed-hope-agenda#education" },
        { name: "Security", path: "/renewed-hope-agenda#security" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { name: "Volunteer", path: "/get-involved" },
        { name: "Events", path: "/get-involved#events" },
        { name: "Mobile App", path: "/mobile-app" },
        { name: "Merchandise", path: "/get-involved#store" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "News & Media", path: "/news-center" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Diaspora Portal", path: "/vision-2027" },
        { name: "Transparency", path: "/vision-2027" }
      ]
    }
  ];

  return (
    <footer className="bg-navy-blue text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 ankara-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-6">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <img 
                  src="https://renewedhopeglobalconference.com/wp-content/uploads/2025/08/logo.png" 
                  alt="Renewed Hope Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="border-l border-white/20 pl-4">
                <span className="block text-lg font-bold leading-tight">RENEWED HOPE</span>
                <span className="block text-sm text-apc-red font-bold">TINUBU 2027</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Building on the foundations of progress. A vision for a trillion-dollar economy, inclusive growth, and a secured Nigeria.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nigeria-green transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section, i) => (
            <div key={i} className="col-span-1">
              <h4 className="font-display text-sm mb-6 text-gold-accent tracking-widest">{section.title.toUpperCase()}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vice President Profile Section */}
        <div className="mb-8 bg-white/5 p-6 rounded-3xl border border-white/10 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gold-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-gold-accent/30 flex-shrink-0">
              <img 
                src="https://nigeriabrussels.org/wp-content/uploads/2024/02/Vice-President-of-Nigeria.jpg" 
                alt="Vice President Kashim Shettima" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h4 className="text-xl font-display text-white mb-1 uppercase tracking-tight">Kashim Shettima GCON</h4>
              <p className="text-xs font-bold text-gold-accent uppercase tracking-widest mb-2">Vice President of the Federal Republic of Nigeria</p>
              <p className="text-sm text-gray-400 max-w-2xl">
                Serving alongside President Bola Tinubu to deliver the Renewed Hope Agenda for all Nigerians.
              </p>
            </div>
            <Link 
              to="/vice-president-shettima" 
              className="bg-white/10 hover:bg-gold-accent hover:text-navy-blue text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border border-white/10 hover:border-gold-accent"
            >
              View VP Profile
            </Link>
          </div>
        </div>

        <div className="mb-16 bg-white/5 p-8 rounded-3xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-display text-gold-accent mb-2 uppercase tracking-tight">Join the Movement</h4>
              <p className="text-sm text-gray-400">Get the latest updates on campaign progress and policy results.</p>
            </div>
            
            {status === 'success' ? (
              <div className="flex items-center gap-3 text-nigeria-green bg-nigeria-green/10 p-4 rounded-xl border border-nigeria-green/20">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">Subscription Successful!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-4">
                <input 
                  required
                  type="email" 
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-nigeria-green"
                />
                <button 
                  disabled={status === 'loading'}
                  className="bg-nigeria-green text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? '...' : <><Send className="w-4 h-4" /> JOIN</>}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <Link to="/transparency" className="hover:text-white">Privacy Policy</Link>
              <Link to="/transparency" className="hover:text-white">Terms of Service</Link>
              <Link to="/transparency" className="hover:text-white">INEC Compliance</Link>
              <span>© 2026 BOLA AHMED TINUBU CAMPAIGN ORGANIZATION</span>
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                PAID FOR BY BOLA AHMED TINUBU CAMPAIGN ORGANIZATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
