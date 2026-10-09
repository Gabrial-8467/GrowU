import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerMarquee from './components/PartnerMarquee';
import About from './components/About';
import Services from './components/Services';
import WhyGrowu from './components/WhyGrowu';
import CounterSection from './components/CounterSection';
import Process from './components/Process';
import FeatureSection from './components/FeatureSection';
import Industry from './components/Industry';
import Testimonial from './components/Testimonial';
import TechStack, { TrustedClients } from './components/TechStack';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import BackToTop from './components/BackToTop';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === '#contact') return;
    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <div id="home" />
      <Navbar onContact={openModal} />
      <main>
        <Hero onProposal={openModal} />
        <PartnerMarquee heading="CERTIFIED EXPERTISE ACROSS ALL LEADING PLATFORMS" />
        <About />
        <Services />
        <WhyGrowu />
        <CounterSection onProposal={openModal} />
        <FeatureSection onTalk={openModal} />
        <Process />
        <Industry />
        <Testimonial />
        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        <TechStack />
        <TrustedClients />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}