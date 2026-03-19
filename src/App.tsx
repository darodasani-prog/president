import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Agenda from './pages/Agenda';
import Achievements from './pages/Achievements';
import Vision from './pages/Vision';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import StateImpact from './pages/StateImpact';
import Diaspora from './pages/Diaspora';
import Contact from './pages/Contact';
import Transparency from './pages/Transparency';
import MobileApp from './pages/MobileApp';
import VicePresident from './pages/VicePresident';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-navy-blue">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-president-tinubu" element={<About />} />
                <Route path="/achievements-dashboard" element={<Achievements />} />
                <Route path="/renewed-hope-agenda" element={<Agenda />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/news-center" element={<News />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/vision-2027" element={<Vision />} />
                <Route path="/state-impact" element={<StateImpact />} />
                <Route path="/diaspora" element={<Diaspora />} />
                <Route path="/transparency" element={<Transparency />} />
                <Route path="/mobile-app" element={<MobileApp />} />
                <Route path="/vice-president-shettima" element={<VicePresident />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
