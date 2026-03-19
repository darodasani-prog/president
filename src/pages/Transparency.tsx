import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Lock, Eye, CheckCircle2, Download } from 'lucide-react';

export default function Transparency() {
  const reports = [
    { title: "Q4 2025 Campaign Fundraising Report", date: "Jan 15, 2026", size: "2.4 MB" },
    { title: "Renewed Hope Agenda Impact Audit", date: "Dec 20, 2025", size: "5.1 MB" },
    { title: "Campaign Ethics & Conduct Code", date: "Nov 10, 2025", size: "1.2 MB" },
    { title: "Data Protection & Privacy Policy", date: "Oct 05, 2025", size: "0.8 MB" }
  ];

  return (
    <div className="pt-20">
      <section className="bg-navy-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ankara-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display mb-6">TRANSPARENCY & ACCOUNTABILITY</h1>
            <p className="text-xl text-gray-400">Our commitment to openness, integrity, and the rule of law. A government of the people, for the people.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            {[
              { title: "Financial Integrity", desc: "Quarterly fundraising and expenditure reports published for public review.", icon: Shield },
              { title: "FOI Compliance", desc: "Dedicated portal for Freedom of Information requests with 7-day response target.", icon: FileText },
              { title: "Data Privacy", desc: "Full compliance with NDPR and international data protection standards.", icon: Lock }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                <item.icon className="w-10 h-10 text-nigeria-green mb-6" />
                <h3 className="text-xl font-display text-navy-blue dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-white/5 rounded-[3rem] p-8 md:p-12 border border-gray-100 dark:border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <h2 className="text-3xl font-display text-navy-blue dark:text-white">PUBLISHED REPORTS</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest">LATEST COMPLIANCE DOCUMENTATION</p>
              </div>
              <button className="bg-navy-blue text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2">
                <Eye className="w-4 h-4" /> VIEW ALL DOCUMENTS
              </button>
            </div>

            <div className="space-y-4">
              {reports.map((report, i) => (
                <div key={i} className="bg-white dark:bg-navy-blue/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 flex items-center justify-between group hover:border-nigeria-green transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-navy-blue dark:text-white">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-blue dark:text-white text-sm">{report.title}</h4>
                      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{report.date} • {report.size}</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-nigeria-green group-hover:text-white transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
