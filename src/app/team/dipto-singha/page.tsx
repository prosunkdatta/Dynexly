import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function DiptoSinghaPage() {
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
    <main ref={containerRef} className="pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex-grow flex flex-col">
      <Link to="/team" className="inline-block mb-8 md:mb-12 mt-8 text-iceBlue hover:text-white transition-colors self-start">← Back to Team</Link>
      
      <div className="glass-card p-8 md:p-16 rounded-3xl flex flex-col md:flex-row gap-12 items-start mb-8 md:mb-12 w-full card-reveal">
        {/* Profile Photo */}
        <div className="w-[150px] h-[150px] shrink-0 rounded-full border-4 border-iceBlue overflow-hidden bg-borderDark flex items-center justify-center">
          {/* DIPTO PHOTO: Replace with Dipto Singha profile image URL */}
          <span className="text-textMuted text-xs font-mono">PHOTO</span>
        </div>
        
        <div className="flex-1 w-full">
          <h1 ref={heroHeadingRef} className="font-display font-bold text-[28px] text-white mb-2 opacity-0 translate-y-4" id="hero-heading">Dipto Singha</h1>
          <p ref={heroTextRef} className="font-sans font-medium text-iceBlue mb-6 opacity-0 translate-y-4" id="hero-text">Co‑Founder & COO · Data & Operations Lead</p>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://linkedin.com/in/diptosingha" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .78 23.21 0 22.23 0zM7.05 20.45H3.56V9h3.49v11.45zM5.31 7.42c-1.15 0-2.06-.93-2.06-2.07 0-1.13.91-2.06 2.06-2.06 1.14 0 2.06.93 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zm15.13 13.03h-3.48v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67h-3.49V9h3.35v1.56h.05c.47-.9 1.63-1.84 3.36-1.84 3.6 0 4.27 2.37 4.27 5.45v6.28z"/></svg>
            </a>
          </div>

          {/* About */}
          <h2 className="font-display text-white text-xl mb-4">About</h2>
          <p className="text-textBody leading-relaxed mb-8">
            Dipto Singha is Co‑Founder & COO of Dynexly, overseeing operations, data analytics, and field deployment logistics. He manages the organisation's social media presence, coordinates the 30‑member research team, and leads data‑driven impact measurement for Dynexly's projects.
          </p>
          
          {/* Skills & Expertise */}
          <h2 className="font-display text-white text-xl mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="pill-tag">Data Analysis</span>
            <span className="pill-tag">Operations Management</span>
            <span className="pill-tag">Team Coordination</span>
            <span className="pill-tag">Social Media Strategy</span>
            <span className="pill-tag">Field Logistics</span>
            <span className="pill-tag">Impact Measurement</span>
          </div>

          {/* Research & Work */}
          <h2 className="font-display text-white text-xl mb-4">Research & Work at Dynexly</h2>
          <p className="text-textBody leading-relaxed">
            At Dynexly, Dipto handles the essential logistics that translate computational models like DX-01 into actionable local outcomes. He sets up data pipelines necessary for validation and coordinates the deployment timelines to fit within critical facility upgrade schedules.
          </p>
        </div>
      </div>
    </main>
  );
}
