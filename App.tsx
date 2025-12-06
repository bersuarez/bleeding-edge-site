import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { AICloudPage } from './components/AICloudPage';
import { AppliedAIPage } from './components/AppliedAIPage';
import { BuildPage } from './components/BuildPage';
import { ColocationPage } from './components/ColocationPage';
import { AboutUsPage } from './components/AboutUsPage';
import { PartnerPage } from './components/PartnerPage';
import { EnergyPage } from './components/EnergyPage';
import { ManufacturingPage } from './components/ManufacturingPage';
import { GovernmentPage } from './components/GovernmentPage';
import { EnterprisePage } from './components/EnterprisePage';
import { AINativePage } from './components/AINativePage';

// Scroll to top when location changes (path only)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Separated layout to allow useLocation hook
const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`min-h-screen text-white font-sans selection:bg-brand-500 selection:text-white ${isHome ? 'bg-transparent' : 'bg-slate-950'}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="/colocation" element={<ColocationPage />} />
          <Route path="/ai-cloud" element={<AICloudPage />} />
          <Route path="/applied-ai" element={<AppliedAIPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/energy" element={<EnergyPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/government" element={<GovernmentPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/ai-native" element={<AINativePage />} />
          {/* Catch-all route to prevent blank screens if a user clicks an anchor link that HashRouter misinterprets */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <MainLayout />
    </HashRouter>
  );
}

export default App;