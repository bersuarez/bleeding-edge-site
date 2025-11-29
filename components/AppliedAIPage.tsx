import React from 'react';
import { Icons } from './Icons';
import { useNavigate } from 'react-router-dom';

export const AppliedAIPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const solutions = [
    {
      title: 'Enterprise RAG Pipelines',
      description: 'Connect your proprietary data to Large Language Models without training. Secure, citation-backed answers from your internal documentation.',
      icon: 'Database',
      details: ['Vector Database Implementation', 'Hybrid Search (Keyword + Semantic)', 'Role-Based Access Control']
    },
    {
      title: 'Autonomous Agents',
      description: 'Go beyond chatbots. Deploy agentic workflows that can plan, execute tools, and perform complex multi-step tasks autonomously.',
      icon: 'Brain',
      details: ['Tool Use & Function Calling', 'Multi-Agent Orchestration', 'Human-in-the-loop Workflows']
    },
    {
      title: 'Model Fine-Tuning',
      description: 'Adapt open-weights models (Llama 3, Mistral) to your specific domain language and style using efficient LoRA techniques.',
      icon: 'Cpu',
      details: ['Dataset Preparation', 'RLHF / DPO Alignment', 'Private Model Hosting']
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'We map your high-value use cases and data readiness.' },
    { num: '02', title: 'Prototyping', desc: 'Rapid PoC development using state-of-the-art frameworks.' },
    { num: '03', title: 'Evaluation', desc: 'Rigorous testing for hallucinations, latency, and accuracy.' },
    { num: '04', title: 'Production', desc: 'Scalable deployment with monitoring and guardrails.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 mb-6">
                <Icons.Brain className="w-4 h-4 text-brand-500" />
                <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">Engineering Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-white">Foundation</span> <br/>
                to <span className="text-white">Function.</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Hardware is only the beginning. We help enterprises bridge the gap between raw compute and real-world ROI by building custom AI applications that actually work.
              </p>
              
              <div className="flex space-x-4">
                <button 
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center group"
                >
                  Book Discovery Call
                  <Icons.ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 p-1 bg-gradient-to-br from-brand-500/20 to-transparent rounded-2xl overflow-hidden backdrop-blur-sm">
                  <div className="bg-slate-900 rounded-xl overflow-hidden relative">
                    {/* Code Editor Mockup */}
                    <div className="flex items-center space-x-2 px-4 py-3 bg-slate-950 border-b border-white/5">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       <span className="ml-4 text-xs text-slate-500 font-mono">agent_workflow.py</span>
                    </div>
                    <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                       <div className="text-slate-500"># Define the reasoning engine</div>
                       <div className="text-purple-400">class <span className="text-yellow-300">EnterpriseAgent</span>:</div>
                       <div className="pl-4 text-white">
                         def <span className="text-blue-400">__init__</span>(self, tools):<br/>
                         <span className="text-slate-500 ml-4"># Initialize secure memory</span><br/>
                         <span className="ml-4">self.memory = <span className="text-green-400">VectorStore</span>(encrypt=True)</span><br/>
                         <span className="ml-4">self.tools = tools</span>
                       </div>
                       <div className="pl-4 mt-4 text-white">
                         async def <span className="text-blue-400">run</span>(self, query):<br/>
                         <span className="ml-4">plan = await self.planner.create(query)</span><br/>
                         <span className="ml-4 text-brand-500">return await self.execute(plan)</span>
                       </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  </div>
               </div>
               
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center space-x-3 animate-float z-20 border-brand-500/20">
                 <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center">
                   <Icons.ShieldCheck className="w-6 h-6 text-brand-500" />
                 </div>
                 <div>
                   <div className="text-white font-bold text-sm">Enterprise Secure</div>
                   <div className="text-xs text-slate-400">SOC 2 Compliant Pipelines</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Applied Intelligence Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't just provide API keys. We architect the middleware, data pipes, and evaluation frameworks needed for reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => {
              const Icon = Icons[sol.icon as keyof typeof Icons];
              return (
                <div key={idx} className="bg-slate-900 border border-white/5 rounded-2xl p-8 hover:border-brand-500/50 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
                    {/* @ts-ignore */}
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{sol.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{sol.description}</p>
                  <ul className="space-y-3">
                    {sol.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Methodology</h2>
               <p className="text-slate-400">A rigorous engineering approach to probabilistic software.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-6 border-l border-white/10 hover:border-brand-500 transition-colors group">
                <div className="text-6xl font-display font-bold text-slate-800 absolute -top-4 -left-4 z-0 opacity-50 select-none group-hover:text-brand-900/50 transition-colors">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 mt-4">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto glass-panel p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-500/5"></div>
          <div className="relative z-10">
             <h2 className="text-3xl font-display font-bold text-white mb-6">Ready to build?</h2>
             <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
               Stop experimenting with notebooks and start shipping production-grade AI agents. 
               Our team of ML engineers is ready to augment your workforce.
             </p>
             <button 
               onClick={handleContactClick}
               className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-lg"
             >
               Get a Consultation
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};