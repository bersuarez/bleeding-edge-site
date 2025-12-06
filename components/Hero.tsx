import React from 'react';
import { Icons } from './Icons';
import { Link, useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      {/* Background Elements - Simplified for Spline visibility */}
      <div className="absolute inset-0 z-0">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-950 border border-brand-800 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">H100 Clusters Available Now</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-bold text-gray-900 leading-tight mb-8">
          Infrastructure for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-gray-900">
            Intelligence Age
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-light">
          We build the physical and digital foundations for Artificial Intelligence.
          From megawatt-scale builds to applied neural agents.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link
            to="/ai-cloud"
            className="group px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-all flex items-center shadow-[0_0_20px_rgba(158,28,32,0.3)] hover:shadow-[0_0_30px_rgba(158,28,32,0.5)]"
          >
            Deploy GPU Cloud
            <Icons.ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#build"
            onClick={(e) => handleScroll(e, 'build')}
            className="px-8 py-4 bg-transparent border border-gray-900/20 text-gray-900 font-bold rounded-lg hover:bg-gray-900/5 transition-all cursor-pointer"
          >
            View Build Specs
          </a>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-900/10 pt-12">
          {[
            { label: 'Uptime SLA', value: '100%' },
            { label: 'Power Capacity', value: '500MW+' },
            { label: 'Latency', value: '<1ms' },
            { label: 'Global Zones', value: '12' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-4xl font-display font-bold text-gray-900 mb-2">{stat.value}</span>
              <span className="text-sm font-mono text-brand-500 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};