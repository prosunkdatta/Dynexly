import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
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
    <main ref={containerRef} className="pt-28 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 w-full flex-grow flex flex-col items-center">
      <div className="text-center max-w-2xl mb-10 md:mb-16">
        <h1 ref={heroHeadingRef} className="font-display font-bold text-3xl sm:text-[40px] md:text-[48px] text-white mb-4 opacity-0 translate-y-4" id="hero-heading">Executives</h1>
        <p ref={heroTextRef} className="text-lg text-textBody opacity-0 translate-y-4" id="hero-text">Meet the leaders behind Dynexly’s mission.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto w-full">
        {/* Prosun Datta */}
        <Link to="/team/prosun-datta" className="glass-card p-10 rounded-xl flex flex-col items-center text-center group cursor-pointer outline-none no-underline card-reveal">
          <div className="w-48 h-48 sm:w-[250px] sm:h-[250px] shrink-0 rounded-full border-2 border-iceBlue bg-borderDark mb-6 flex items-center justify-center overflow-hidden group-hover:border-white transition-colors duration-300">
            {/* PROSUN PHOTO: Replace with Prosun Datta profile image URL */}
            <span className="text-textMuted text-[11px] font-mono">PHOTO</span>
          </div>
          <h3 className="font-display text-white text-[28px] font-bold mb-1 group-hover:text-[#7C3AED] transition-colors">Prosun Datta</h3>
          <p className="text-iceBlue font-semibold text-sm mb-4">Founder, Chairman & Executive Director</p>
          <p className="text-sm leading-relaxed px-2 text-textBody mb-6">Leading the vision and technical direction for applied PIML research in climate resilience.</p>
          <div className="flex items-center gap-4 justify-center mt-auto">
          </div>
        </Link>

        {/* Dipto Singha */}
        <Link to="/team/dipto-singha" className="glass-card p-10 rounded-xl flex flex-col items-center text-center group cursor-pointer outline-none no-underline card-reveal">
          <div className="w-48 h-48 sm:w-[250px] sm:h-[250px] shrink-0 rounded-full border-2 border-iceBlue bg-borderDark mb-6 flex items-center justify-center overflow-hidden group-hover:border-white transition-colors duration-300">
            {/* DIPTO PHOTO: Replace with Dipto Singha profile image URL */}
            <span className="text-textMuted text-[11px] font-mono">PHOTO</span>
          </div>
          <h3 className="font-display text-white text-[28px] font-bold mb-1 group-hover:text-[#7C3AED] transition-colors">Dipto Singha</h3>
          <p className="text-iceBlue font-semibold text-sm mb-4">Co‑Founder, Vice Chairman & President</p>
          <p className="text-sm leading-relaxed px-2 text-textBody mb-6">Managing operations, strategic partnerships, and organizational growth.</p>
          <div className="flex items-center gap-4 justify-center mt-auto">
          </div>
        </Link>
      </div>
    </main>
  );
}
