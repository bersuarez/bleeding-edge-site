import React from 'react';
import { Icons } from './Icons';
import { useNavigate } from 'react-router-dom';

export const ManufacturingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const advantages = [
    {
      title: 'Battle-Tested Designs',
      desc: 'Proven power and cooling topologies replicated at global scale. We don\'t reinvent the wheel; we optimize the rotation.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Proprietary Components',
      desc: 'Custom switchgear and cooling manifolds built specifically for high-density AI workloads, ensuring precise engineering tolerances.',
      icon: 'Cpu'
    },
    {
      title: 'Smart By Design',
      desc: 'DCIM sensors and automation logic are embedded natively during fabrication, not bolted on after deployment.',
      icon: 'Brain'
    },
    {
      title: 'Dedicated Manufacturing',
      desc: 'In-house assembly lines and strategic partner factories focused exclusively on producing Bleeding Edge modules.',
      icon: 'HardDrive'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Abstract Background - Industrial/Assembly theme */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 mb-6">
              <Icons.Cpu className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">Vertical Integration</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              The Manufacturing <br/>
              <span className="text-brand-500">Advantage.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Controlled manufacturing gives speed, consistency, and smart systems built in from day one. 
              We moved the complexity from the construction site to the factory floor.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(158,28,32,0.3)]"
              >
                Schedule Factory Tour
                <Icons.ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Diagram Section - Mirroring the Slide */}
      <section className="py-24 px-6 relative border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Prefabricated Precision</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              By productizing the data center, we eliminate the variables of traditional construction.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative">
            
            {/* Center Visual (The Skid/Module) */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] group">
              <div className="absolute inset-0 bg-brand-500/10 rounded-2xl blur-3xl group-hover:bg-brand-500/20 transition-all duration-700"></div>
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img 
                   src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                   alt="Prefabricated Data Center Module" 
                   className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                
                {/* Hotspot: Smart By Design */}
                <div className="absolute bottom-1/4 right-1/4 group/hotspot">
                   <div className="relative">
                     <span className="flex h-4 w-4">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-500 border-2 border-slate-900"></span>
                     </span>
                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 bg-slate-950/90 border border-brand-500/50 p-3 rounded-lg opacity-0 group-hover/hotspot:opacity-100 transition-opacity pointer-events-none backdrop-blur-md">
                        <div className="text-xs font-bold text-white mb-1">SMART BY DESIGN</div>
                        <div className="text-[10px] text-slate-400">Embedded DCIM & Sensors</div>
                     </div>
                   </div>
                </div>

                {/* Hotspot: Proprietary Components */}
                <div className="absolute top-1/3 left-1/3 group/hotspot">
                   <div className="relative">
                     <span className="flex h-4 w-4">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-4 w-4 bg-slate-200 border-2 border-slate-900"></span>
                     </span>
                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 bg-slate-950/90 border border-white/20 p-3 rounded-lg opacity-0 group-hover/hotspot:opacity-100 transition-opacity pointer-events-none backdrop-blur-md">
                        <div className="text-xs font-bold text-white mb-1">CUSTOM COMPONENTS</div>
                        <div className="text-[10px] text-slate-400">High-density switchgear</div>
                     </div>
                   </div>
                </div>

              </div>
            </div>

            {/* Right Side: The "Speed" Highlight */}
            <div className="lg:w-1/3 relative">
               <div className="absolute -left-12 top-1/2 w-12 h-px bg-brand-500/50 hidden lg:block"></div>
               
               <div className="relative pl-8 border-l-2 border-brand-500">
                  <div className="text-6xl font-display font-bold text-white mb-2">120</div>
                  <div className="text-brand-500 font-bold uppercase tracking-widest mb-4">Day Delivery</div>
                  <p className="text-slate-400 leading-relaxed">
                    Thanks to prefabrication, we cut deployment timelines by 60%. While others are pouring concrete, we are shipping tested modules.
                  </p>
               </div>
            </div>
          </div>

          {/* Feature Grid Below */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
             {advantages.map((adv, idx) => {
               const Icon = Icons[adv.icon as keyof typeof Icons];
               return (
                 <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-brand-500/30 transition-colors group">
                   <div className="flex items-center space-x-4 mb-4">
                     <div className="p-2 bg-slate-800 rounded-lg text-brand-500 group-hover:bg-brand-900/50 transition-colors">
                       {/* @ts-ignore */}
                       <Icon className="w-5 h-5" />
                     </div>
                     <h3 className="font-bold text-white">{adv.title}</h3>
                   </div>
                   <p className="text-sm text-slate-400 leading-relaxed">
                     {adv.desc}
                   </p>
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Process/Logistics */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-display font-bold text-white mb-6">Supply Chain Sovereignty</h2>
               <p className="text-slate-400 mb-6">
                 We control the critical path. By owning the manufacturing of key electrical and mechanical modules, we insulate our projects from global supply chain volatility.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-center text-slate-300">
                   <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                   Just-in-Time (JIT) delivery to site
                 </li>
                 <li className="flex items-center text-slate-300">
                   <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                   Factory Acceptance Testing (FAT) reduces site errors
                 </li>
                 <li className="flex items-center text-slate-300">
                   <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                   Standardized SKUs for rapid replacement
                 </li>
               </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="p-6 bg-slate-950 border border-white/10 rounded-xl text-center">
                 <div className="text-4xl font-bold text-white mb-2">3</div>
                 <div className="text-xs text-slate-500 uppercase">Global Factories</div>
               </div>
               <div className="p-6 bg-slate-950 border border-white/10 rounded-xl text-center">
                 <div className="text-4xl font-bold text-white mb-2">500+</div>
                 <div className="text-xs text-slate-500 uppercase">Modules Shipped</div>
               </div>
               <div className="p-6 bg-slate-950 border border-white/10 rounded-xl text-center">
                 <div className="text-4xl font-bold text-white mb-2">0%</div>
                 <div className="text-xs text-slate-500 uppercase">Defect Rate</div>
               </div>
               <div className="p-6 bg-slate-950 border border-white/10 rounded-xl text-center">
                 <div className="text-4xl font-bold text-white mb-2">24/7</div>
                 <div className="text-xs text-slate-500 uppercase">Production Lines</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 rounded-3xl relative overflow-hidden">
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] pointer-events-none"></div>
          <h2 className="text-3xl font-display font-bold text-white mb-6">See it in action</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Witness the future of infrastructure construction. Request a virtual or physical tour of our manufacturing facilities.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-lg"
          >
            Request Tour
          </button>
        </div>
      </section>
    </div>
  );
};