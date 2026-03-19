import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Share2, Calendar, MapPin, DollarSign, CheckCircle2 } from 'lucide-react';

import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    interests: [] as string[]
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const path = 'volunteers';
      await addDoc(collection(db, path), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', state: '', interests: [] });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'volunteers');
      setStatus('error');
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="pt-20">
      <section className="bg-navy-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-display mb-6">THIS IS YOUR CAMPAIGN.</h1>
            <p className="text-xl font-serif italic text-gold-accent max-w-2xl mx-auto">"The progress we seek is a collective effort. Join us in building the Nigeria of our dreams."</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Volunteer Form */}
            <div className="bg-gray-50 dark:bg-navy-blue/50 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-nigeria-green rounded-2xl flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display text-navy-blue dark:text-white">VOLUNTEER REGISTRATION</h2>
              </div>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-navy-blue p-12 rounded-3xl border border-nigeria-green/20 dark:border-white/10 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-nigeria-green mx-auto mb-6" />
                  <h3 className="text-2xl font-display text-navy-blue dark:text-white mb-4">REGISTRATION SUCCESSFUL!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">Thank you for joining the movement. Our regional coordinator will contact you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-nigeria-green font-bold uppercase tracking-widest text-xs hover:underline"
                  >
                    REGISTER ANOTHER VOLUNTEER
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 dark:bg-navy-blue dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none" 
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 dark:bg-navy-blue dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">State</label>
                    <select 
                      required
                      value={formData.state}
                      onChange={e => setFormData({...formData, state: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 dark:bg-navy-blue dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none"
                    >
                      <option value="">Select State</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja (FCT)</option>
                      <option value="Kano">Kano</option>
                      <option value="Rivers">Rivers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 dark:bg-navy-blue dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none" 
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">Skills / Interests</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Canvassing', 'Social Media', 'Events', 'Digital Skills', 'Medical', 'Security'].map((skill) => (
                        <label key={skill} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.interests.includes(skill) 
                            ? 'border-nigeria-green bg-nigeria-green/5 dark:bg-nigeria-green/10' 
                            : 'bg-white dark:bg-navy-blue border-gray-100 dark:border-white/10 hover:border-gray-200'
                        }`}>
                          <input 
                            type="checkbox" 
                            checked={formData.interests.includes(skill)}
                            onChange={() => toggleInterest(skill)}
                            className="w-4 h-4 text-nigeria-green rounded" 
                          />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button 
                    disabled={status === 'loading'}
                    className="col-span-2 bg-nigeria-green text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-green-700 transition-all disabled:opacity-50"
                  >
                    {status === 'loading' ? 'PROCESSING...' : 'SUBMIT REGISTRATION'}
                  </button>
                  {status === 'error' && (
                    <p className="col-span-2 text-center text-apc-red text-sm font-bold">An error occurred. Please try again.</p>
                  )}
                </form>
              )}
            </div>

            {/* Other CTAs */}
            <div className="space-y-8">
              <div className="bg-navy-blue dark:bg-navy-blue/80 p-8 md:p-12 rounded-[3rem] text-white shadow-xl shadow-blue-100 dark:shadow-none relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Share2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-display">JOIN THE MOVEMENT</h2>
                  </div>
                  <p className="text-blue-100 mb-8 leading-relaxed">Beyond volunteering, you can help by spreading the word, attending our events, and engaging with our digital community.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                      <Calendar className="w-10 h-10 text-gold-accent mx-auto mb-4" />
                      <h3 className="font-display text-white mb-2 uppercase tracking-tight">EVENTS</h3>
                      <p className="text-xs text-blue-200">Find rallies and town halls near you.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                      <Share2 className="w-10 h-10 text-nigeria-green mx-auto mb-4" />
                      <h3 className="font-display text-white mb-2 uppercase tracking-tight">SPREAD WORD</h3>
                      <p className="text-xs text-blue-200">Download campaign assets to share.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gold-accent/10 dark:bg-gold-accent/5 p-8 rounded-[3rem] border border-gold-accent/20">
                <h3 className="text-xl font-display text-navy-blue dark:text-white mb-4">WHY VOLUNTEER?</h3>
                <ul className="space-y-3">
                  {[
                    "Be part of a historic movement for Nigeria's future",
                    "Gain valuable experience in community organizing",
                    "Connect with like-minded patriots across the nation",
                    "Directly contribute to the Renewed Hope agenda"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-nigeria-green mt-1 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
