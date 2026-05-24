import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MatchFlow from './pages/MatchFlow';
import Browse from './pages/Browse';
import MentorProfile from './pages/MentorProfile';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import BecomeaMentor from './pages/BecomeaMentor';
import FAQ from './pages/FAQ';
import Safety from './pages/Safety';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import MentorVideoUpload from './pages/MentorVideoUpload';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

const basename = '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/match" element={<MatchFlow />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/mentor/:id" element={<MentorProfile />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/become-a-mentor" element={<BecomeaMentor />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/mentor-video-upload" element={<MentorVideoUpload />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
