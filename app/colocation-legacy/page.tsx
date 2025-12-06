'use client';

import React from 'react';
import { Icons } from '@/components/Icons';
import { Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LegacyColocationPage() {
    const router = useRouter();

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push('/');
        setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const features = [
        {
            title: 'Tier IV Reliability',
            description: 'Fault-tolerant site infrastructure with electrical power storage and distribution facilities. Guaranteed 100% Uptime SLA.',
            icon: 'ShieldCheck'
        },
        {
            title: 'Carrier Neutral',
            description: 'Direct access to 50+ carriers and major cloud on-ramps (AWS Direct Connect, Azure ExpressRoute, Google Cloud Interconnect).',
            icon: 'Network'
        },
        {
            title: '24/7 Remote Hands',
            description: 'Expert on-site technicians available around the clock for rack-and-stack, cabling, and hardware troubleshooting.',
            icon: 'Server'
        }
    ];

    const specs = [
        { label: 'Rack Units', value: '42U / 45U / 52U' },
        { label: 'Power Feeds', value: 'A + B (2N Redundancy)' },
        { label: 'Voltage', value: '208V / 415V 3-Phase' },
        { label: 'Security', value: 'Biometric + Mantrap' },
    ];

    const locations = [
        { city: 'Ashburn, VA', region: 'US East', code: 'US-ASH-1', status: 'Available' },
        { city: 'Santa Clara, CA', region: 'US West', code: 'US-SJC-2', status: 'Limited' },
        { city: 'London, UK', region: 'Europe', code: 'EU-LHR-1', status: 'Available' },
        { city: 'Tokyo, JP', region: 'Asia Pacific', code: 'AP-NRT-1', status: 'Waitlist' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 pt-20">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>

                <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 mb-6">
                            <Icons.Server className="w-4 h-4 text-brand-500" />
                            <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">Premium Rack Space</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                            Fortress for your <br />
                            <span className="text-brand-500">Hardware.</span>
                        </h1>

                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            Secure, connected, and power-dense colocation for mission-critical infrastructure.
                            From single racks to private cages, we provide the uptime your business demands.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={handleContactClick}
                                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(158,28,32,0.3)]"
                            >
                                Reserve Space
                                <Icons.ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            <button
                                onClick={handleContactClick}
                                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-lg transition-all"
                            >
                                Schedule Tour
                            </button>
                        </div>
                    </div>

                    {/* RIGHT VISUAL: PREVIOUS 2D CSS SERVER RACK */}
                    <div className="hidden lg:flex justify-center relative">
                        <div className="relative w-80 h-[500px] border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg p-2 shadow-2xl shadow-red-900/20">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50 blur-[2px] animate-pulse" />
                            <div className="h-full w-full grid grid-rows-[repeat(42,minmax(0,1fr))] gap-[2px]">
                                {/* Loop 42 times for rack units */}
                                {[...Array(42)].map((_, i) => (
                                    <div key={i} className="w-full bg-white/5 rounded-[1px] flex items-center justify-between px-2">
                                        <div className="w-1 h-1 rounded-full bg-gray-600" />
                                        <div className={`w-1 h-1 rounded-full ${Math.random() > 0.8 ? 'bg-red-500 animate-pulse' : 'bg-gray-700'}`} />
                                    </div>
                                ))}
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-12 bg-[#0a0a0a] border border-white/10 p-4 rounded-lg shadow-xl flex items-center gap-3">
                                <div className="p-2 bg-red-500/10 rounded-md"><Zap className="w-5 h-5 text-red-500" /></div>
                                <div>
                                    <div className="text-xs text-gray-400">Power Draw</div>
                                    <div className="text-lg font-mono font-bold">12.4 kW</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feat, idx) => {
                            const Icon = Icons[feat.icon as keyof typeof Icons];
                            return (
                                <div key={idx} className="p-8 bg-slate-900 border border-white/5 rounded-2xl hover:border-brand-500/50 transition-colors group">
                                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-white group-hover:bg-brand-600 transition-colors">
                                        {/* @ts-ignore */}
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feat.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technical Specs & Connectivity */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
                                    alt="Server Aisle"
                                    className="w-full h-auto object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay"></div>
                            </div>
                            {/* Decorative floating element */}
                            <div className="absolute -left-6 top-10 p-4 bg-slate-950 border border-white/10 rounded-xl shadow-xl z-20 flex items-center space-x-3 animate-float">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <div className="text-xs font-mono text-white">SYSTEM NORMAL</div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Built for Uptime</h2>
                            <p className="text-slate-400 mb-8">
                                Our facilities are engineered to eliminate single points of failure. Every critical system—power, cooling, and network—is concurrently maintainable.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {specs.map((spec, i) => (
                                    <div key={i} className="p-4 bg-slate-900/50 border border-white/10 rounded-xl hover:bg-slate-900 transition-colors">
                                        <div className="text-xs text-slate-500 uppercase font-mono mb-1">{spec.label}</div>
                                        <div className="text-lg font-bold text-white">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-brand-900/10 border border-brand-500/20 rounded-xl">
                                <h4 className="text-brand-500 font-bold mb-2 flex items-center">
                                    <Icons.ShieldCheck className="w-4 h-4 mr-2" />
                                    Physical Security
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Perimeter fencing, 24/7 armed guards, mantraps, biometric scanners, and CCTV with 90-day retention.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="py-24 px-6 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Global Presence</h2>
                        <p className="text-slate-400">Low-latency hubs in major digital corridors.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {locations.map((loc, idx) => (
                            <div key={idx} className="p-6 border border-white/10 rounded-xl bg-slate-950 hover:border-brand-500/50 transition-colors group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <Icons.Globe className="w-6 h-6 text-slate-600 group-hover:text-brand-500 transition-colors" />
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${loc.status === 'Available' ? 'bg-green-500/10 text-green-500' :
                                            loc.status === 'Limited' ? 'bg-yellow-500/10 text-yellow-500' :
                                                'bg-red-500/10 text-red-500'
                                            }`}>
                                            {loc.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{loc.city}</h3>
                                    <div className="text-sm text-slate-500 mb-1">{loc.region}</div>
                                    <div className="text-xs font-mono text-slate-600">{loc.code}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center glass-panel p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] pointer-events-none"></div>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Need a custom cage?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        We offer private suites and build-to-suit options for enterprise requirements. Contact our leasing team for floor plans and pricing.
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-lg"
                    >
                        Get a Quote
                    </button>
                </div>
            </section>
        </div>
    );
}
