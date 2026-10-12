import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import SpeakerModal from './components/SpeakerModal.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SpeakersPage from './pages/SpeakersPage.jsx';
import AgendaPage from './pages/AgendaPage.jsx';
import PartnersPage from './pages/PartnersPage.jsx';
import StudentInitiativePage from './pages/StudentInitiativePage.jsx';
import { initSiteInteractions } from './scripts/mainInteractions.js';

function RouteScrollWatcher() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => {
      try {
        initSiteInteractions();
      } catch (e) {
        console.warn('initSiteInteractions error:', e);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    try {
      initSiteInteractions();
    } catch (e) {
      console.warn('initSiteInteractions error:', e);
    }
  }, []);

  return (
    <BrowserRouter>
      <RouteScrollWatcher />
      <div className="app-container">
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/student-initiative" element={<StudentInitiativePage />} />
            <Route path="/students" element={<StudentInitiativePage />} />
            <Route path="/student-pass" element={<StudentInitiativePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal />
        <SpeakerModal />
      </div>
    </BrowserRouter>
  );
}
