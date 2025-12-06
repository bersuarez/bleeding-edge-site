'use client';

import React from 'react';
import { Icons } from './Icons';
import { useRouter } from 'next/navigation';

export const AINativePage: React.FC = () => {
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const technicalSpecs = [
    {
      label: 'Fabric Topology',
      value: 'Non-Blocking Rail-Optimized',
      icon: 'Network',
      detail: '3.2Tbps Infiniband per node'
    },
    {
      label: 'Power Density',
      value: 'Up to 120kW / Rack',
      icon: 'Zap',
      detail: 'Rear Door Heat Exchangers (RDHx)'
    },
    {
      label: 'Storage Throughput',
      value: '200 GB/s Read',
      icon: 'Database',
      detail: 'WEKA / VAST parallel filesystems'
    },
    {
      label: 'Orchestration',
      value: 'Bare Metal + Slurm/K8s',
      icon: 'Cpu',
      detail: 'No hypervisor overhead'
    }
  ];

  const hyperscaleSolutions = [
    {
      title: 'Massive Dedicated Builds',
      type: 'Build-to-Suit',
      desc: 'We deliver 50MW+ campuses tailored to your blueprint. From land acquisition to the final cooling loop, we act as your regional execution arm.',
      icon: 'HardDrive'
    },
    {
      title: 'Distributed AI-Ready Colo',
      type: 'Wholesale Capacity',
      desc: 'Expand your availability zones into LatAm and Europe. Our Tier IV facilities are tropicalized and engineered for high-density training clusters.',
      icon: 'Server'
    },
    {
      title: 'GPU Cloud Extension',
      type: 'Infrastructure-as-a-Service',
      desc: 'Burst your training capacity instantly. We provide white-label H100 superpods that seamlessly integrate into your existing scheduler (Slurm/K8s).',
      icon: 'Cloud'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Abstract Background - Matrix/Code theme */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 mb-6">
              <Icons.Globe className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">Regional Partner for Global Players</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Infrastructure for <br />
              <span className="text-brand-500">The Giants.</span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We partner with Hyperscalers and Foundation Model builders to deploy megawatt-scale infrastructure.
              Massive dedicated builds, distributed AI-ready colo, and large-scale cloud capacity.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleContactClick}
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(158,28,32,0.3)]"
              >
                Discuss Capacity
                <Icons.ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Slide Section */}
      <section className="py-24 px-6 relative bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Your regional partner <br />
                <span className="text-brand-500">global players trust.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                With over <span className="text-white font-bold">25 years of experience</span> and more than <span className="text-white font-bold">30 data centers delivered</span>,
                we've built infrastructure across Mexico, Latin America, and Spain.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Our modular systems are tropicalized and permit-ready — designed to meet local conditions while exceeding global standards.
                That's why international cloud, telecom, and enterprise clients trust us to expand with.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-950 border border-white/10 rounded-xl">
                  <h4 className="text-brand-500 font-bold text-xl mb-2">Local Expertise</h4>
                  <p className="text-sm text-slate-400">In-region teams with deep permitting, utility, and construction knowledge.</p>
                </div>
                <div className="p-6 bg-slate-950 border border-white/10 rounded-xl">
                  <h4 className="text-brand-500 font-bold text-xl mb-2">Proven Track Record</h4>
                  <p className="text-sm text-slate-400">Over 30 data centers delivered since 2001 by our team - across 3 continents.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative aspect-square md:aspect-video rounded-full overflow-hidden border border-brand-900/50 shadow-[0_0_50px_rgba(158,28,32,0.1)] bg-slate-950 group">
                {/* Globe / Map Visualization */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen group-hover:scale-110 transition-transform duration-[20s]"></div>

                {/* Highlight Overlays mimicking the red glow on the slide */}
                <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-brand-600/30 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-brand-600/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-brand-600/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-0 right-0 text-center z-10">
                  <div className="inline-block px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-brand-500/30">
                    <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">Active Regions: LATAM • EU • US</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">Hyperscale Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hyperscaleSolutions.map((item, idx) => {
              const Icon = Icons[item.icon as keyof typeof Icons];
              return (
                <div key={idx} className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-brand-500 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-900/20 group-hover:text-brand-500 transition-colors">
                    {/* @ts-ignore */}
                    <Icon className="w-8 h-8 text-white group-hover:text-brand-500" />
                  </div>
                  <div className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">{item.type}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Training-Ready Infrastructure</h2>
            <p className="text-slate-400">Specs designed for the largest foundation models.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, idx) => {
              const Icon = Icons[spec.icon as keyof typeof Icons];
              return (
                <div key={idx} className="p-6 bg-slate-950 border border-white/10 rounded-xl hover:border-brand-500/50 transition-colors group">
                  <div className="flex items-center space-x-3 mb-4">
                    {/* @ts-ignore */}
                    <Icon className="w-5 h-5 text-brand-500" />
                    <span className="text-xs font-mono text-slate-500 uppercase">{spec.label}</span>
                  </div>
                  <div className="text-xl font-bold text-white mb-2">{spec.value}</div>
                  <div className="text-sm text-slate-400">{spec.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto glass-panel p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Expand Your Availability Zones</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with the regional expert to deliver capacity where you need it most.
            </p>
            <button
              onClick={handleContactClick}
              className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-lg"
            >
              Contact Strategic Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};