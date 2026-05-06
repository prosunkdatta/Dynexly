import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ProsunDattaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Hero Entrance
    const tl = gsap.timeline();
    tl.to(heroHeadingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(heroTextRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');

    // Reveal Cards
    gsap.utils.toArray('.card-reveal').forEach((elem: any) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom-=80',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="pt-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <Link to="/team" className="inline-block mb-8 md:mb-12 mt-8 text-iceBlue hover:text-white transition-colors">← Back to Team</Link>
      
      <div className="glass-card p-8 md:p-16 rounded-3xl flex flex-col md:flex-row gap-12 items-start mb-8 md:mb-12 card-reveal">
        {/* Profile Photo */}
        <div className="w-[150px] h-[150px] shrink-0 rounded-full border-4 border-iceBlue overflow-hidden bg-borderDark flex items-center justify-center">
          {/* PROSUN PHOTO: Replace with Prosun Datta profile image URL */}
          <span className="text-textMuted text-xs font-mono">PHOTO</span>
        </div>
        
        <div className="flex-1">
          <h1 ref={heroHeadingRef} className="font-display font-bold text-[28px] text-white mb-2 opacity-0 translate-y-4" id="hero-heading">Prosun Datta</h1>
          <p ref={heroTextRef} className="font-sans font-medium text-iceBlue mb-6 opacity-0 translate-y-4" id="hero-text">Founder & Executive Director · PIML Researcher</p>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://github.com/prosunkdatta" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
            </a>
            <a href="https://linkedin.com/in/prosunkdatta" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .78 23.21 0 22.23 0zM7.05 20.45H3.56V9h3.49v11.45zM5.31 7.42c-1.15 0-2.06-.93-2.06-2.07 0-1.13.91-2.06 2.06-2.06 1.14 0 2.06.93 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zm15.13 13.03h-3.48v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67h-3.49V9h3.35v1.56h.05c.47-.9 1.63-1.84 3.36-1.84 3.6 0 4.27 2.37 4.27 5.45v6.28z"/></svg>
            </a>
            <a href="https://prosunkdatta.github.io" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </a>
            <a href="https://orcid.org/0009-0004-2557-9095" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors font-mono text-sm flex items-center bg-bgDark px-3 py-1 rounded border border-borderDark">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-4.743 17.51h-2.17V6.634h2.17v10.876zm-1.085-11.968a1.32 1.32 0 01-1.32-1.32 1.32 1.32 0 011.32-1.32 1.32 1.32 0 011.32 1.32 1.32 1.32 0 01-1.32 1.32zm11.378 7.37c0 2.21-1.3 3.6-3.8 3.6h-3.41V6.634h3.36c2.56 0 3.73 1.48 3.73 3.49 0 1.25-.63 2.15-1.57 2.6.99.36 1.69 1.33 1.69 2.568zm-2.13-5.26c0-1.12-.66-1.63-1.84-1.63h-1.53v3.42h1.5c1.15 0 1.87-.56 1.87-1.79zm.18 4.88c0-1.2-.74-1.86-1.95-1.86h-1.53v3.89h1.56c1.23 0 1.92-.66 1.92-2.03z"/></svg>
              ORCID
            </a>
          </div>

          {/* About */}
          <h2 className="font-display text-white text-xl mb-4">About</h2>
          <p className="text-textBody leading-relaxed mb-8">
            Prosun Datta is a Physics‑Informed Machine Learning researcher and the Founder & Executive Director of Dynexly. He leads the DX‑01 research project, designing physics‑guaranteed neural architectures for solar microgrid resilience in healthcare facilities. His work sits at the intersection of computational physics, deep learning, and climate‑resilient infrastructure.
          </p>
          
          {/* Skills & Expertise */}
          <h2 className="font-display text-white text-xl mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="pill-tag">Physics‑Informed ML</span>
            <span className="pill-tag">PyTorch</span>
            <span className="pill-tag">PVLib</span>
            <span className="pill-tag">Computational Physics</span>
            <span className="pill-tag">LSTM/GRU</span>
            <span className="pill-tag">NASA POWER API</span>
            <span className="pill-tag">Open Source</span>
            <span className="pill-tag">Research Leadership</span>
          </div>

          {/* Research & Work */}
          <h2 className="font-display text-white text-xl mb-4">Research & Work at Dynexly</h2>
          <p className="text-textBody leading-relaxed">
            Leading the technical direction for Dynexly, Prosun architects the primary logic of DX-01. His work aims to synthesize real-world meteorological conditions with neural solvers to ensure open-source simulation tools accurately represent system performance, particularly aiding infrastructure planning in South Asia's monsoon climate.
          </p>
        </div>
      </div>
    </main>
  );
}
