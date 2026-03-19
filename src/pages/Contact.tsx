import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const path = 'contacts';
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'contacts');
      setStatus('error');
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-gray-50 dark:bg-navy-blue/50 py-24 ankara-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-display text-navy-blue dark:text-white mb-6">CONTACT & CONNECT</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">We are here to listen, engage, and work together. Reach out to the campaign headquarters or your regional office.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white dark:bg-navy-blue p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/10">
                <h3 className="text-xl font-display text-navy-blue dark:text-white mb-6">CAMPAIGN HQ</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-nigeria-green flex-shrink-0" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">Plot 123, Renewed Hope Plaza, Central Business District, Abuja, Nigeria</p>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 text-nigeria-green flex-shrink-0" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">+234 800 TINUBU 2027</p>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-nigeria-green flex-shrink-0" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">info@renewedhope2027.ng</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-blue p-8 rounded-3xl text-white">
                <h3 className="text-xl font-display mb-4">REGIONAL OFFICES</h3>
                <ul className="space-y-4 text-sm text-gray-400 dark:text-gray-500">
                  <li><span className="text-gold-accent font-bold">LAGOS:</span> Ikeja Campaign Center</li>
                  <li><span className="text-gold-accent font-bold">KANO:</span> Northern Mobilization Hub</li>
                  <li><span className="text-gold-accent font-bold">ENUGU:</span> South East Liaison Office</li>
                  <li><span className="text-gold-accent font-bold">PORT HARCOURT:</span> South South Base</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-navy-blue p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 dark:border-white/10">
                <h2 className="text-3xl font-display text-navy-blue dark:text-white mb-8">SEND US A MESSAGE</h2>
                
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-20 h-20 text-nigeria-green mx-auto mb-6" />
                    <h3 className="text-3xl font-display text-navy-blue dark:text-white mb-4">MESSAGE RECEIVED!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">Thank you for reaching out. A member of the Renewed Hope team will respond to your inquiry within 24-48 hours.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="bg-navy-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-navy-blue/50 dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-navy-blue/50 dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none" 
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">Subject</label>
                      <select 
                        required
                        value={formData.subject}
                        onChange={e => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-navy-blue/50 dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                        <option value="Media & Press">Media & Press</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">Message</label>
                      <textarea 
                        required
                        rows={5} 
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-navy-blue/50 dark:text-white focus:ring-2 focus:ring-nigeria-green outline-none resize-none"
                      ></textarea>
                    </div>
                    <button 
                      disabled={status === 'loading'}
                      className="col-span-2 bg-apc-red text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {status === 'loading' ? 'SENDING...' : (
                        <>
                          SEND MESSAGE <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="col-span-2 text-center text-apc-red text-sm font-bold">Failed to send message. Please try again.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-navy-blue border-t dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-nigeria-green" />
              <span className="text-xs font-bold text-navy-blue dark:text-white uppercase tracking-widest">INEC COMPLIANT</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-navy-blue dark:text-white" />
              <span className="text-xs font-bold text-navy-blue dark:text-white uppercase tracking-widest">GLOBAL REACH</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-apc-red" />
              <span className="text-xs font-bold text-navy-blue dark:text-white uppercase tracking-widest">24/7 SUPPORT</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
