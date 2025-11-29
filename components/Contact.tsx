import React from 'react';
import { Icons } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to <span className="text-brand-500">Deploy?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Whether you need a single rack, a private cage, or a multi-megawatt build-to-suit facility, Bleeding Edge has the infrastructure you need.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg text-brand-500">
                  <Icons.Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Global Headquarters</h4>
                  <p className="text-slate-500">100 Innovation Dr, Silicon Valley, CA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg text-brand-500">
                  <Icons.HardDrive className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Sales & Leasing</h4>
                  <p className="text-slate-500">sales@bleedingedge.io</p>
                  <p className="text-slate-500">+1 (888) 555-0199</p>
                </div>
              </div>
            </div>
          </div>

          <form className="glass-panel p-8 rounded-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Company</label>
                <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" placeholder="Acme AI Inc." />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Email</label>
              <input type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" placeholder="john@acme.ai" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Interest</label>
              <select className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors">
                <option>Hyperscale Build</option>
                <option>Colocation</option>
                <option>AI Cloud (GPU)</option>
                <option>Applied AI Services</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" placeholder="Tell us about your compute requirements..."></textarea>
            </div>

            <button type="button" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-lg transition-all transform hover:translate-y-[-2px] hover:shadow-lg">
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
