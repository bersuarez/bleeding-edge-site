'use client';

import React from 'react';
import { Icons } from './Icons';
import { useRouter } from 'next/navigation';

export const AboutUsPage: React.FC = () => {
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const values = [
    {
      title: 'Radical Speed',
      desc: 'We believe infrastructure should move as fast as code. We deploy capacity in weeks, not years.',
      icon: 'Zap'
    },
    {
      title: 'First Principles',
      desc: 'We don’t copy legacy data center designs. We engineer from the silicon up for high density.',
      icon: 'Brain'
    },
    {
      title: 'Sovereignty',
      desc: 'Your data, your weights, your infrastructure. We provide bare metal control without the lock-in.',
      icon: 'ShieldCheck'
    }
  ];

  const milestones = [
    { year: '2023', title: 'Founded', desc: 'Bleeding Edge established in Silicon Valley to solve the AI compute shortage.' },
    { year: '2024', title: 'Seed Round', desc: 'Raised $50M to secure our first 10MW power capacity and H100 supply chain.' },
    { year: '2025', title: 'Global Expansion', desc: 'Launched Ashburn and London zones. Reached 500MW pipeline capacity.' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 mb-6">
              <Icons.Globe className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">Our Mission</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Building the <br />
              <span className="text-brand-500">Backbone of AI.</span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We exist to remove the physical bottlenecks of Artificial Intelligence.
              While others talk about software agents, we pour the concrete and rack the silicon that makes them possible.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((val, idx) => {
              const Icon = Icons[val.icon as keyof typeof Icons];
              return (
                <div key={idx} className="group">
                  <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-brand-500/50 transition-colors">
                    {/* @ts-ignore */}
                    <Icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
              alt="Data Center Interior"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <div className="text-3xl font-display font-bold text-white">Ashburn Prime</div>
              <div className="text-brand-500 font-mono text-sm uppercase">US-EAST-1</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">Our Trajectory</h2>
          <div className="space-y-12 border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center gap-6 relative">
                <div className="hidden md:block w-1/2 text-right pr-12">
                  <div className="text-4xl font-bold text-brand-800">{item.year}</div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-[-37px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-brand-500 z-10"></div>

                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="md:hidden text-2xl font-bold text-brand-800 mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Join the Revolution</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We are always looking for world-class engineers, architects, and problem solvers.
          </p>
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all"
          >
            View Careers
          </button>
        </div>
      </section>
    </div>
  );
};