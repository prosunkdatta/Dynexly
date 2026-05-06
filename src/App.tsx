import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import RootLayout from './app/layout';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ResearchPage from './app/research/page';
import TeamPage from './app/team/page';
import ProsunDattaPage from './app/team/prosun-datta/page';
import DiptoSinghaPage from './app/team/dipto-singha/page';
import JoinPage from './app/join/page';
import ContactPage from './app/contact/page';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <RootLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/prosun-datta" element={<ProsunDattaPage />} />
        <Route path="/team/dipto-singha" element={<DiptoSinghaPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </RootLayout>
  );
}
