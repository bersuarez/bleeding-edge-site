import React from 'react';
import { Icons } from './Icons';
import { useNavigate } from 'react-router-dom';

export const EnergyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const powerStrategies = [
    {
      title: 'Fast PPA Execution',
      desc: 'Special partnerships in Low-Cost Power Markets allowing for expedited power contracts. We cut negotiation times by 60%.',
      icon: 'Zap'
    },
    {
      title: 'Stranded Power Access',
      desc: 'Tap into underutilized energy pockets and behind-the-meter opportunities that standard brokers miss.',
      icon: 'HardDrive'
    },
    {
      title: 'Permitting Velocity',
      desc: 'Local expertise to navigate zoning and interconnection studies. We know the AHJs (Authorities Having Jurisdiction) by name.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Mapped Suppliers',
      desc: 'Real-time database of qualified substations, transformer inventory, and available capacity across 12 global markets.',
      icon: 'Database'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Abstract Background - Grid/Power Lines theme */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 mb-6">
              <Icons.Zap className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">Energy & Site Selection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Unmatched <br/>
              <span className="text-brand-500">Time to Power.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              In the AI race, power availability is the only metric that matters. 
              We leverage proprietary GIS intelligence and deep utility relationships to secure gigawatt-scale capacity.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(158,28,32,0.3)]"
              >
                Find Power Now
                <Icons.ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Site Selection (GIS) */}
      <section className="py-24 px-6 relative border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Strategic Site Selection: <br/>
                <span className="text-brand-500">Your Land or Ours.</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Leverage our network and GIS-powered intelligence to select optimal sites for performance, connectivity, and power availability.
              </p>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-brand-500/30">
                  <h3 className="text-xl font-bold text-white mb-2">Proprietary GIS Intelligence</h3>
                  <p className="text-sm text-slate-400">
                    Multi-factor mapping of utilities, dark fiber routes, environmental constraints, and permitting latency. We identify "hidden gem" sites before they hit the market.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Our Sites (Shovel-Ready)</h3>
                  <p className="text-sm text-slate-400">
                    Deploy faster on our pre-vetted land bank. Sites with completed environmental studies, zoning approvals, and load letters in hand.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Your Land</h3>
                  <p className="text-sm text-slate-400">
                    We perform rapid feasibility studies on your existing property assets to determine viability for hyperscale development.
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract Map Visualization */}
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-square md:aspect-video bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
                {/* Map Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] transform perspective-1000 rotate-x-12 scale-110"></div>
                
                {/* Data Points */}
                <div className="absolute top-1/4 left-1/4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-brand-500 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-brand-500 rounded-full relative z-10 border border-white"></div>
                    <div className="absolute left-4 -top-8 bg-slate-950/90 border border-brand-500/50 p-2 rounded-lg text-xs w-32 backdrop-blur-md">
                      <div className="font-bold text-white">Site A: 200MW</div>
                      <div className="text-brand-500">Permit Approved</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/3 right-1/3">
                  <div className="relative">
                     <div className="w-3 h-3 bg-slate-500 rounded-full absolute"></div>
                     <div className="absolute right-4 -top-2 text-xs text-slate-500 font-mono">Substation B (At Capacity)</div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-1/4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse absolute"></div>
                    <div className="absolute left-4 -top-8 bg-slate-950/90 border border-green-500/50 p-2 rounded-lg text-xs w-32 backdrop-blur-md">
                      <div className="font-bold text-white">Site C: 50MW</div>
                      <div className="text-green-500">Fiber Dark</div>
                    </div>
                  </div>
                </div>

                {/* Interface Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 border-t border-white/10 p-4 backdrop-blur-md">
                   <div className="flex justify-between items-center">
                      <div className="flex space-x-4 text-xs font-mono text-slate-400">
                         <div className="flex items-center"><div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>HIGH VOLTAGE</div>
                         <div className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>FIBER</div>
                      </div>
                      <div className="text-xs font-mono text-brand-500">GIS LAYER: ACTIVE</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time to Power Grid */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Accelerated Energy Strategy</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We treat power procurement as an engineering problem, not just a financial transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerStrategies.map((item, idx) => {
              const Icon = Icons[item.icon as keyof typeof Icons];
              return (
                <div key={idx} className="bg-slate-950 p-8 rounded-xl border border-white/10 hover:border-brand-500/50 transition-colors group">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-900/30 transition-colors">
                    {/* @ts-ignore */}
                    <Icon className="w-6 h-6 text-white group-hover:text-brand-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 rounded-3xl relative overflow-hidden">
           <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-500/10 blur-[80px] pointer-events-none"></div>
          <h2 className="text-3xl font-display font-bold text-white mb-6">Need a Site Assessment?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Our team can perform a preliminary GIS analysis of your target region or property within 48 hours.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-lg"
          >
            Request GIS Analysis
          </button>
        </div>
      </section>
    </div>
  );
};