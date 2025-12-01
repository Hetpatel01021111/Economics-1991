
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, EconomicObjectScene } from './components/QuantumScene';
import { ForexChart, ReformCards, ImpactIndicators, ComparisonChart } from './components/Diagrams';
import { ArrowDown, Menu, X, User, ArrowRight, TrendingDown, TrendingUp, Anchor } from 'lucide-react';

const SpeakerBadge = ({ name }: { name: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 bg-india-dark text-white text-xs font-bold tracking-widest uppercase rounded-full mb-4 shadow-sm">
    <User size={12} className="text-india-saffron" />
    <span>Speaker: {name}</span>
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="font-serif text-3xl md:text-5xl text-india-dark mb-4">{title}</h2>
    {subtitle && <div className="w-24 h-1 bg-india-saffron opacity-80"></div>}
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-india-cream text-stone-800 selection:bg-india-saffron selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-india-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-br from-india-saffron to-india-green rounded-full flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">₹</div>
            <span className={`font-serif font-bold text-lg tracking-wide ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              ECONOMICS <span className="font-normal text-stone-500">1991</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-xs font-bold tracking-widest uppercase text-stone-600">
            {['Intro', 'Background', 'Causes', 'Impact', 'Reforms', 'Outcomes'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={scrollToSection(item.toLowerCase())} className="hover:text-india-saffron transition-colors cursor-pointer">
                {item}
              </a>
            ))}
          </div>

          <button className="lg:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-india-cream flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
           {['Intro', 'Background', 'Causes', 'Impact', 'Reforms', 'People', 'Outcomes', 'Conclusion'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={scrollToSection(item.toLowerCase())} className="hover:text-india-saffron transition-colors cursor-pointer uppercase">
                {item}
              </a>
            ))}
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.8)_0%,rgba(249,248,244,0.4)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-india-green text-india-green text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
            Economic History Project
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 text-stone-900 drop-shadow-sm">
            The 1991 Indian <br/><span className="text-india-saffron">Economic Crisis</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-stone-700 font-light leading-relaxed mb-12">
            From the brink of default to a global powerhouse. <br/> A comprehensive analysis of the crisis that reshaped India.
          </p>
          
          <div className="flex justify-center">
             <a href="#intro" onClick={scrollToSection('intro')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>START PRESENTATION</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* 1. Introduction - Sohan */}
        <section id="intro" className="py-24 bg-white relative">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SpeakerBadge name="Sohan" />
              <SectionTitle title="Introduction" subtitle="true" />
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  The 1991 economic crisis was a watershed moment in independent India's history. It was not just a financial glitch, but a systemic failure that forced a complete reimagining of the Indian economy.
                </p>
                <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-india-green">
                  <h4 className="font-bold text-stone-900 mb-2">Key Highlights</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Balance of Payments Crisis:</strong> India could barely finance 3 weeks of imports.</li>
                    <li><strong>Economic Slowdown:</strong> Stagnant growth paired with structural rigidity.</li>
                    <li><strong>Hyperinflation:</strong> Prices skyrocketed, eroding savings.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-stone-100 rounded-xl p-8 border border-stone-200 shadow-inner">
               <ForexChart mode="mini" />
               <p className="text-center text-sm text-stone-500 mt-4 italic">Foreign Exchange Reserves plummeted to ~$1.2 Billion in 1991</p>
            </div>
          </div>
        </section>

        {/* 2. Background - Sohan */}
        <section id="background" className="py-24 bg-stone-50 border-t border-stone-200">
           <div className="container mx-auto px-6">
              <SpeakerBadge name="Sohan" />
              <SectionTitle title="Background: Pre-1991 Era" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                    <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-full mb-4"><Anchor size={20}/></div>
                    <h3 className="font-serif text-xl mb-2">License Raj</h3>
                    <p className="text-stone-600 text-sm">Excessive government control, strict licensing for production, and low industrial productivity.</p>
                 </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full mb-4"><Anchor size={20}/></div>
                    <h3 className="font-serif text-xl mb-2">Protectionism</h3>
                    <p className="text-stone-600 text-sm">Strict import restrictions and high tariffs to protect domestic industries, leading to inefficiency.</p>
                 </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4"><TrendingDown size={20}/></div>
                    <h3 className="font-serif text-xl mb-2">Public Sector</h3>
                    <p className="text-stone-600 text-sm">Dominance of inefficient PSUs causing massive fiscal deficits and supply constraints.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. Causes - Vidit */}
        <section id="causes" className="py-24 bg-stone-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <SpeakerBadge name="Vidit" />
                <h2 className="font-serif text-4xl md:text-5xl mb-12">Causes of the Crisis</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="text-4xl font-serif text-red-500">01</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Balance of Payments (BoP)</h3>
                                <p className="text-stone-400">The current account deficit widened significantly. We were spending far more foreign currency than we were earning.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-4xl font-serif text-red-500">02</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Fiscal Deficit</h3>
                                <p className="text-stone-400">Government expenditure outpaced revenue. Heavy borrowing led to a crowding-out effect and mounting debt.</p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <div className="text-4xl font-serif text-red-500">03</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Inflation</h3>
                                <p className="text-stone-400">Money supply increased to finance deficit, pushing inflation to double digits (approx 17%).</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-stone-800 p-8 rounded-xl border border-stone-700">
                        <h3 className="text-xl font-bold mb-6 text-india-saffron">External Shocks</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                <div>
                                    <span className="font-bold block">The Gulf War (1990)</span>
                                    <span className="text-sm text-stone-400">Oil prices skyrocketed. India's oil import bill swelled, draining reserves.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                <div>
                                    <span className="font-bold block">Remittances Drop</span>
                                    <span className="text-sm text-stone-400">Conflict in the Middle East stopped the flow of NRI remittances.</span>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                <div>
                                    <span className="font-bold block">Political Instability</span>
                                    <span className="text-sm text-stone-400">Frequent changes in government created uncertainty, scaring off investors.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. Impact - Adithya */}
        <section id="impact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SpeakerBadge name="Adithya Sharath Kumar" />
                <SectionTitle title="Impact of the Crisis" />
                <ImpactIndicators />
                
                <div className="mt-12 p-8 bg-red-50 rounded-xl border border-red-100 text-center">
                    <h3 className="font-serif text-2xl text-red-800 mb-4">The Breaking Point</h3>
                    <p className="text-red-700 max-w-2xl mx-auto">
                        India had to pledge <strong>67 tons of gold</strong> to the IMF and Union Bank of Switzerland just to secure an emergency loan to prevent defaulting on debt payments.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. Reforms (LPG) - Het */}
        <section id="reforms" className="py-24 bg-[#F5F9F5]">
            <div className="container mx-auto px-6">
                <SpeakerBadge name="Het" />
                <SectionTitle title="The Response: Reforms of 1991" subtitle="true" />
                <p className="max-w-3xl mb-12 text-lg text-stone-600">
                    The government introduced the New Economic Policy (NEP), famously known as the <strong>LPG Model</strong>.
                </p>
                
                <ReformCards />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                     <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-200">
                        <h4 className="font-bold text-lg mb-2">Financial Sector Reforms</h4>
                        <p className="text-stone-600 text-sm">Reduction in CRR/SLR, deregulation of interest rates, and autonomy for the RBI.</p>
                     </div>
                     <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-200">
                        <h4 className="font-bold text-lg mb-2">Trade Reforms</h4>
                        <p className="text-stone-600 text-sm">Massive reduction in import tariffs and removal of quantitative restrictions (quotas).</p>
                     </div>
                </div>
            </div>
        </section>

        {/* 6. Key People - Aryan */}
        <section id="people" className="py-24 bg-india-dark text-white">
            <div className="container mx-auto px-6">
                 <SpeakerBadge name="Aryan" />
                 <SectionTitle title="Architects of Reform" />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                     <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-xl border border-white/10 hover:border-india-saffron transition-colors">
                        <div className="w-24 h-24 bg-stone-200 rounded-full mb-6 overflow-hidden relative">
                             {/* Placeholder for Manmohan Singh */}
                             <div className="absolute inset-0 flex items-center justify-center bg-blue-900 text-white font-serif text-3xl">MS</div>
                        </div>
                        <h3 className="font-serif text-2xl mb-2">Dr. Manmohan Singh</h3>
                        <p className="text-india-saffron text-sm uppercase tracking-widest font-bold mb-4">Finance Minister</p>
                        <p className="text-stone-300 italic">"No power on earth can stop an idea whose time has come."</p>
                     </div>
                     <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-xl border border-white/10 hover:border-india-saffron transition-colors">
                        <div className="w-24 h-24 bg-stone-200 rounded-full mb-6 overflow-hidden relative">
                             {/* Placeholder for PV Narasimha Rao */}
                             <div className="absolute inset-0 flex items-center justify-center bg-stone-600 text-white font-serif text-3xl">PV</div>
                        </div>
                        <h3 className="font-serif text-2xl mb-2">P.V. Narasimha Rao</h3>
                        <p className="text-india-saffron text-sm uppercase tracking-widest font-bold mb-4">Prime Minister</p>
                        <p className="text-stone-300 italic">Provided the critical political will and leadership to navigate the crisis.</p>
                     </div>
                 </div>
            </div>
        </section>

        {/* 7 & 8 Outcomes - Aryan */}
        <section id="outcomes" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SpeakerBadge name="Aryan" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionTitle title="Outcomes" />
                        
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-xl text-stone-800 mb-2 flex items-center gap-2">
                                    <div className="w-2 h-8 bg-india-green"></div> Short Term (1991-1995)
                                </h4>
                                <ul className="pl-6 list-disc text-stone-600 space-y-1">
                                    <li>Stabilization of forex reserves.</li>
                                    <li>Inflation brought under control.</li>
                                    <li>Restoration of international confidence.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-stone-800 mb-2 flex items-center gap-2">
                                    <div className="w-2 h-8 bg-india-saffron"></div> Long Term (1995-2025)
                                </h4>
                                <ul className="pl-6 list-disc text-stone-600 space-y-1">
                                    <li>India emerged as a major global economy.</li>
                                    <li>Boom in IT and Service sectors.</li>
                                    <li>Significant poverty reduction.</li>
                                    <li>Rise of the Indian middle class.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                         <ComparisonChart />
                    </div>
                </div>
            </div>
        </section>

        {/* 9. Conclusion - Rohith */}
        <section id="conclusion" className="py-24 bg-stone-100 relative overflow-hidden">
             <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="h-96 relative rounded-xl overflow-hidden shadow-xl">
                     <EconomicObjectScene />
                     <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-500 font-bold bg-white/80 py-2">Visualization of Economic Growth</div>
                </div>
                <div className="flex flex-col justify-center">
                    <SpeakerBadge name="Rohith" />
                    <h2 className="font-serif text-4xl mb-6 text-stone-900">Conclusion</h2>
                    <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                        The 1991 crisis was a blessing in disguise. It shifted India from a closed, controlled economy to an open, competitive marketplace.
                    </p>
                    <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                        While challenges like inequality and job creation remain, the reforms laid the foundation for the "India Growth Story" we witness today.
                    </p>
                    <div className="p-6 bg-white border border-stone-300 rounded-lg shadow-sm">
                        <p className="font-serif italic text-xl text-stone-800 mb-2">
                            "Economics is about making choices in scarcity. 1991 forced us to make the right ones."
                        </p>
                    </div>
                </div>
             </div>
        </section>

        {/* 10. References & 11. Thank You */}
        <footer className="bg-stone-900 text-stone-400 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h4 className="text-white font-serif text-xl mb-4">References</h4>
                        <ul className="text-sm space-y-2">
                            <li>Reserve Bank of India (RBI) Historical Data</li>
                            <li>Economic Survey of India 1991-92</li>
                            <li>"To the Brink and Back" by Jairam Ramesh</li>
                            <li>World Bank GDP Statistics</li>
                        </ul>
                    </div>
                    <div className="text-right flex flex-col items-end justify-center">
                        <h2 className="text-4xl font-serif text-india-saffron mb-2">Thank You</h2>
                        <p>For your attention.</p>
                    </div>
                </div>
                <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-600">
                    Presented by Group 3 • Sohan, Vidit, Adithya, Het, Aryan, Rohith
                </div>
            </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
