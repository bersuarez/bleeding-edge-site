'use client';

import React from 'react';
import { Icons } from './Icons';
import { useRouter } from 'next/navigation';

export const EnterprisePage: React.FC = () => {
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const managedServices = [
    {
      title: 'Concierge Onboarding',
      desc: 'We don\'t just hand you an API key. Our solution architects work with your CTO to map your data topology, select the right models, and design the inference architecture.',
      icon: 'MessageSquare'
    },
    {
      title: 'Private AI Cloud',
      desc: 'Single-tenant infrastructure. Your weights and data never leave your dedicated cluster. No "noisy neighbors," no shared memory, total privacy.',
      icon: 'ShieldCheck'
    },
    {
      title: '24/7 LLMOps Support',
      desc: 'We manage the chaos of the AI stack—driver updates, CUDA compatibility, and vector database scaling—so your team can focus on application logic.',
      icon: 'Zap'
    }
  ];

  const useCases = [
    {
      sector: 'Financial Services',
      title: 'Fraud Detection & Risk',
      desc: 'Process millions of transactions in real-time with on-prem latency. Keep sensitive financial data within a compliant, air-gapped perimeter.',
      icon: 'Database'
    },
    {
      sector: 'Healthcare',
      title: 'Patient Data Analysis',
      desc: 'HIPAA-compliant private clusters for analyzing medical imaging and patient records without exposing PII to public model providers.',
      icon: 'Server'
    },
    {
      sector: 'Legal & Corporate',
      title: 'Internal Knowledge Retrieval',
      desc: 'Secure RAG pipelines that ingest millions of internal documents to create an omniscient corporate oracle that knows your business.',
      icon: 'Brain'
    }
  ];

  const roadmap = [
    {
      step: '01',
      title: 'Assessment',
      desc: 'We audit your data readiness and identify high-ROI AI use cases.'
    },
    {
      step: '02',
      title: 'Architecture',
      desc: 'We design a hybrid or private topology that meets your compliance needs.'
    },
    {
      step: '03',
      title: 'Migration',
      desc: 'Our "White Glove" team handles the data ingestion and model deployment.'
    },
    {
      step: '04',
      title: 'Optimization',
      desc: 'Continuous fine-tuning and infrastructure right-sizing to control costs.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/40"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 mb-6">
              <Icons.ShieldCheck className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">Enterprise Managed Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              AI Adoption, <br />
              <span className="text-brand-500">De-risked.</span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              The enterprise journey to AI is fraught with complexity.
              We bridge the gap between "Proof of Concept" and "Production" with fully managed infrastructure and white-glove implementation guidance.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleContactClick}
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(158,28,32,0.3)]"
              >
                Schedule Executive Briefing
                <Icons.ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The "Hand Holding" Section */}
      <section className="py-24 px-6 relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">More Than Just Metal</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              You don't just need GPUs; you need a partner. We provide the operational maturity that hyperscalers ignore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managedServices.map((service, idx) => {
              const Icon = Icons[service.icon as keyof typeof Icons];
              return (
                <div key={idx} className="p-8 bg-slate-900 border border-white/10 rounded-2xl hover:border-brand-500/50 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    {/* @ts-ignore */}
                    <Icon className="w-32 h-32 text-brand-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      {/* @ts-ignore */}
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Roadmap / Process */}
      <section className="py-24 px-6 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Guided Implementation</h2>
              <p className="text-slate-400 mb-8">
                We take the guesswork out of deployment. Our dedicated Customer Success Engineers walk you through every phase of the lifecycle.
              </p>
              <div className="p-6 bg-brand-900/10 border border-brand-500/20 rounded-xl">
                <h4 className="text-brand-500 font-bold mb-2">The Difference?</h4>
                <p className="text-sm text-slate-400">
                  AWS and Azure give you documentation. Bleeding Edge gives you a Slack channel with our lead engineers.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="space-y-8">
                {roadmap.map((step, idx) => (
                  <div key={idx} className="flex group">
                    <div className="mr-6 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-slate-700 flex items-center justify-center text-slate-500 font-bold bg-slate-900 group-hover:border-brand-500 group-hover:text-brand-500 transition-colors">
                        {step.step}
                      </div>
                      {idx !== roadmap.length - 1 && <div className="h-full w-px bg-slate-800 my-2"></div>}
                    </div>
                    <div className="pb-12">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">Sector Specific Architectures</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = Icons[useCase.icon as keyof typeof Icons];
              return (
                <div key={idx} className="glass-panel p-8 rounded-2xl flex flex-col">
                  <div className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-4">{useCase.sector}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    {/* @ts-ignore */}
                    <Icon className="w-6 h-6 mr-3 text-slate-400" />
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {useCase.desc}
                  </p>
                  <div className="pt-6 border-t border-white/5">
                    <button className="text-white hover:text-brand-500 text-sm font-bold flex items-center transition-colors">
                      View Reference Architecture <Icons.ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
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
            <h2 className="text-3xl font-display font-bold text-white mb-6">Stop building in the dark.</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with an infrastructure provider that acts like an extension of your engineering team.
            </p>
            <button
              onClick={handleContactClick}
              className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-lg"
            >
              Let's Build Together
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};