import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Globe, Award, CheckCircle2 } from 'lucide-react';
import EconomicDashboard from '../components/EconomicDashboard';

export default function Achievements() {
  return (
    <div className="pt-20">
      <section className="bg-white dark:bg-navy-blue py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-apc-red font-bold text-sm tracking-widest uppercase mb-4 block">The Scorecard</span>
            <h1 className="text-5xl md:text-6xl font-display text-navy-blue dark:text-white mb-6">FACTS. FIGURES. PROGRESS.</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Verifiable results from the Renewed Hope Agenda. We are delivering on our promises.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-8">
              <EconomicDashboard />
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-navy-blue p-8 rounded-3xl text-white border border-white/10 shadow-xl">
                <Award className="w-10 h-10 text-gold-accent mb-6" />
                <h3 className="text-2xl font-display mb-4">INTERNATIONAL VALIDATION</h3>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-white/10">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Fitch Ratings</p>
                    <p className="text-xl font-display text-gold-accent">UPGRADED TO 'B' STABLE</p>
                  </div>
                  <div className="pb-6 border-b border-white/10">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Moody's</p>
                    <p className="text-xl font-display text-gold-accent">UPGRADED TO 'B3' STABLE</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Eurobond</p>
                    <p className="text-xl font-display text-gold-accent">4X OVERSUBSCRIBED</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-nigeria-green p-8 rounded-3xl text-white shadow-xl">
                <Globe className="w-10 h-10 text-white/50 mb-6" />
                <h3 className="text-2xl font-display mb-4">FDI GROWTH</h3>
                <p className="text-4xl font-display mb-2">700%+</p>
                <p className="text-sm text-green-100">Increase in Foreign Direct Investment since Q1 2024.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Infrastructure", value: "260+", sub: "Road Projects Completed" },
              { label: "Education", value: "1.16M+", sub: "Students Funded by NELFUND" },
              { label: "Housing", value: "100K", sub: "Renewed Hope Units Delivered" }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-center transition-all hover:shadow-lg">
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{stat.label}</p>
                <p className="text-5xl font-display text-navy-blue dark:text-white mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
