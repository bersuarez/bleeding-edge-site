import React from 'react';
import { Icons } from './Icons';
import { useNavigate } from 'react-router-dom';

export const GovernmentPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const pillars = [
    {
      title: 'National Security',
      desc: 'AI is the new frontier of defense. Protect state secrets and intelligence within physically isolated, sovereign borders.',
      icon: 'ShieldCheck'
    },
    {
      title: 'AI Sovereignty',
      desc: 'Avoid dependence on foreign tech giants. Own your weights, control your data, and secure your nation\'s cognitive future.',
      icon: 'Globe'
    },
    {
      title: 'Infrastructure Control',
      desc: 'From energy generation to the API endpoint, ensure total jurisdiction over the physical and digital stack.',
      icon: 'Server'
    }
  ];

  const strategicGoals = [
    {
      label: 'Innovation Hub',
      desc: 'Create a gravity well for startups and researchers.',
      icon: 'Zap'
    },
    {
      label: 'Economic Leadership',
      desc: 'Transition from an energy economy to a knowledge economy.',
      icon: 'Database'
    },
    {
      label: 'Future Investment',
      desc: 'Infrastructure that compounds in value over decades.',
      icon: 'HardDrive'
    }
  ];

  const ecosystemModules = [
    {
      title: 'Sovereign AI Hub',
      category: 'Infrastructure',
      desc: 'State-owned Tier IV facilities ensuring 100% data residency. The physical foundation for national intelligence.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop'
    },
    {
      title: 'Digital Citizen Services',
      category: 'Government 2.0',
      desc: '24/7 AI agents for public service. Reduce bureaucracy by digitizing processes and enabling natural language citizen interaction.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    },
    {
      title: 'National Knowledge Network',
      category: 'RAG / Data',
      desc: 'A secure "State Brain" that ingests laws, history, and procedures to answer queries accurately without hallucination.',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Workforce Development',
      category: 'Talent',
      desc: 'Training programs to produce 100,000+ AI specialists. Solving the talent deficit to ensure long-term competitiveness.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Abstract Background - Flag/Sovereignty theme */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-brand-500/30 mb-6">
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">National Strategy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Why Nations Must <br/>
              <span className="text-brand-500">Protect Their AI.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 leading-relaxed border-l-2 border-brand-500 pl-6">
              Artificial Intelligence is the new global economy—and the engine that will define the sovereignty and development of nations.
              <br/><br/>
              <span className="text-white font-medium">AI is the new oil.</span> Sovereignty begins with having control of your data and infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(158,28,32,0.3)]"
              >
                Discuss National Strategy
                <Icons.ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-12 px-6 relative -mt-12 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {pillars.map((pillar, idx) => {
               const Icon = Icons[pillar.icon as keyof typeof Icons];
               return (
                 <div key={idx} className="bg-slate-900 border border-white/10 p-8 rounded-2xl shadow-xl hover:border-brand-500/50 transition-colors group">
                   <div className="flex items-center space-x-4 mb-4">
                     <div className="p-3 bg-brand-900/20 rounded-lg text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                       {/* @ts-ignore */}
                       <Icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-white uppercase tracking-wide">{pillar.title}</h3>
                   </div>
                   <p className="text-slate-400 leading-relaxed">
                     {pillar.desc}
                   </p>
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Strategic Vision Grid */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {strategicGoals.map((goal, idx) => (
              <div key={idx} className="p-8 border border-white/5 rounded-xl bg-slate-950/50 hover:bg-slate-900 transition-colors">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{goal.label}</h3>
                <p className="text-slate-400">{goal.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-900/10 border border-brand-500/20 p-8 rounded-xl flex items-start space-x-4">
              <div className="text-4xl">🚀</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">"AI has a bright future in the region, but the talent deficit limits its advance."</h4>
                <p className="text-sm text-brand-300 font-mono">— Economic Times</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-white/10 p-8 rounded-xl flex items-start space-x-4">
               <div className="text-4xl">⚠️</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">"Without infrastructure, the region risks being left behind in AI."</h4>
                <p className="text-sm text-slate-500 font-mono">— Business News</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Ecosystem */}
      <section className="py-24 px-6 bg-slate-950 relative">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">National Technology Ecosystem</h2>
               <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
               <p className="text-xl text-slate-400 mt-6 uppercase tracking-widest">Mexico in the Innovation Boom</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {ecosystemModules.map((mod, idx) => (
                 <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[3/4] border border-white/10">
                    <img 
                      src={mod.image} 
                      alt={mod.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                       <div className="text-brand-500 font-mono text-xs uppercase tracking-widest mb-2">{mod.category}</div>
                       <h3 className="text-xl font-bold text-white mb-3 leading-tight">{mod.title}</h3>
                       <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                         {mod.desc}
                       </p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* From Energy to Knowledge CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-brand-900 to-slate-950 text-white relative overflow-hidden">
         {/* Decorative Element */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay"></div>

         <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
               <h2 className="text-4xl font-display font-bold mb-6">From Energy to Knowledge</h2>
               <p className="text-xl text-brand-100 font-light mb-8">
                  The new wealth of nations is Artificial Intelligence. We help you convert your energy resources into cognitive capital.
               </p>
               <button 
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-white text-brand-900 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-xl"
               >
                  Build Your Sovereign Hub
               </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
               <div className="w-48 h-48 border-4 border-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Icons.Cpu className="w-24 h-24 text-white/80" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};