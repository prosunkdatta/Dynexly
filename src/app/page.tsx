import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import GlobeCanvas from '../components/GlobeCanvas';
import FAQAccordion from '../components/FAQAccordion';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const highlightWordRef = useRef<HTMLSpanElement>(null);
  const leadershipCardRef = useRef<HTMLDivElement>(null);
  const leadershipSvgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    // Hero Entrance
    const tl = gsap.timeline();
    tl.to(heroHeadingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(heroTextRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .to(heroButtonsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');

    // Highlight Word Pulse
    gsap.to(highlightWordRef.current, {
      color: '#A8D8F0',
      textShadow: '0 0 10px rgba(168,216,240,0.5)',
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

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

    // Stat Counter
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((statObj: any) => {
      const target = parseInt(statObj.getAttribute('data-target') || '0', 10);
      ScrollTrigger.create({
        trigger: '#stats',
        start: 'top bottom-=50',
        once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              statObj.innerText = Math.floor(this.targets()[0].val);
            }
          });
        }
      });
    });

    // Leadership Card Mouse Move
    if (leadershipCardRef.current) {
      leadershipCardRef.current.addEventListener('mousemove', (e) => {
        const rect = leadershipCardRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        leadershipCardRef.current!.style.setProperty('--mouse-x', `${x}px`);
        leadershipCardRef.current!.style.setProperty('--mouse-y', `${y}px`);
        
        if (leadershipSvgRef.current) {
          const centerX = rect.width / 2;
          const rotateY = ((x - centerX) / centerX) * 5;
          gsap.to(leadershipSvgRef.current, {
            rotationY: rotateY,
            rotationX: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      });

      leadershipCardRef.current.addEventListener('mouseleave', () => {
        if (leadershipSvgRef.current) {
          gsap.to(leadershipSvgRef.current, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.8,
            ease: 'power3.out'
          });
        }
      });
    }

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="page-content">
      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-8 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <GlobeCanvas />
        <div className="flex flex-col w-full relative z-10 hero-content">
          <div className="max-w-3xl w-full">
            <h1 ref={heroHeadingRef} className="font-display font-bold text-4xl sm:text-5xl md:text-[64px] text-white leading-tight mb-6 opacity-0 translate-y-4" id="hero-heading">
              Neural Exploration for Real Impact.
            </h1>
            <p ref={heroTextRef} className="text-base md:text-[18px] text-textBody max-w-[580px] mb-10 leading-relaxed opacity-0 translate-y-4" id="hero-text">
              A youth-led, physics-informed machine learning research collective studying solar microgrid{' '}
              <span ref={highlightWordRef} id="highlight-word" className="inline-block transition-colors duration-300">resilience</span> for healthcare in monsoon regions.
            </p>
            <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-4" id="hero-buttons">
              <Link to="/research" className="btn-primary px-6 py-3 sm:px-8 w-full sm:w-auto rounded-md text-sm text-center font-medium">
                Explore Our Research
              </Link>
              <Link to="/join" className="btn-secondary px-6 py-3 sm:px-8 w-full sm:w-auto rounded-md text-sm text-center font-medium">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="py-12 px-6 md:py-20 md:px-12 max-w-7xl mx-auto what-we-do-container relative scroll-mt-16">
        <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none" style={{ backgroundColor: '#A8D8F0', opacity: 0.03, filter: 'blur(80px)', top: '10%', left: '-100px', zIndex: 0 }}>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="glass-card p-8 card-reveal">
            <svg className="w-8 h-8 text-iceBlue mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
            <h3 className="font-display text-white text-xl mb-3">Research</h3>
            <p className="text-sm leading-relaxed text-textBody">We leverage Physics-Informed Neural Networks to model and optimize energy systems in harsh climates.</p>
          </div>
          <div className="glass-card p-8 card-reveal">
            <svg className="w-8 h-8 text-iceBlue mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <h3 className="font-display text-white text-xl mb-3">Build</h3>
            <p className="text-sm leading-relaxed text-textBody">Open-source models, simulations, and tools built for resilience and distributed access.</p>
          </div>
          <div className="glass-card p-8 card-reveal">
            <svg className="w-8 h-8 text-iceBlue mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="font-display text-white text-xl mb-3">Deploy</h3>
            <p className="text-sm leading-relaxed text-textBody">Translating research into practical, open-source software structures for immediate impact.</p>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section id="stats" className="py-8 px-6 scroll-mt-16 relative z-20 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-textMuted tracking-wider font-mono gap-4 text-center md:text-left">
          <span className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-iceBlue dot-pulse" style={{ animationDelay: '0s' }}></span>
            Founded February 2026
          </span>
          <span className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-iceBlue dot-pulse" style={{ animationDelay: '0.3s' }}></span>
            <span><span className="stat-number inline-block" data-target="10">0</span>+ Researchers</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-iceBlue dot-pulse" style={{ animationDelay: '0.6s' }}></span>
            Bangladesh
          </span>
          <span className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-iceBlue dot-pulse" style={{ animationDelay: '0.9s' }}></span>
            100% Open-Source
          </span>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="py-12 px-6 md:py-20 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center scroll-mt-16">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4 card-reveal">About Dynexly</h2>
        <p className="text-base text-textBody max-w-2xl mb-6 leading-relaxed card-reveal">
          We are a youth-led international non-profit research collective using physics-informed AI to solve critical infrastructure challenges.
        </p>
        <Link to="/about" className="btn-secondary px-6 py-3 sm:px-8 w-full sm:w-auto rounded-md text-sm text-center font-medium card-reveal">Learn more about us →</Link>
      </section>

      {/* RESEARCH PREVIEW */}
      <section id="research-preview" className="relative overflow-visible py-12 px-6 md:py-20 md:px-12 max-w-7xl mx-auto scroll-mt-16 flex flex-col items-center text-center">
        <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none" style={{ backgroundColor: '#A8D8F0', opacity: 0.02, filter: 'blur(60px)', top: '50%', right: '-50px', zIndex: 0 }}>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4 card-reveal relative z-10">Explore Our Research</h2>
        <p className="text-base text-textBody max-w-2xl mb-6 leading-relaxed card-reveal relative z-10">
          Discover our methodology, dual-output pipeline, and the physics-informed tools we are building for global climate resilience.
        </p>
        <Link to="/research" className="btn-primary px-6 py-3 sm:px-8 w-full sm:w-auto rounded-md text-sm text-center font-medium card-reveal relative z-10">View Research →</Link>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-12 px-6 md:py-20 md:px-12 w-full flex justify-center max-w-7xl mx-auto scroll-mt-16">
        <div ref={leadershipCardRef} className="max-w-5xl w-full leadership-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 rounded-xl card-reveal" id="leadership-card-el">
          <div className="flex-shrink-0 w-24 h-24 relative cursor-pointer flex items-center justify-center">
            <svg ref={leadershipSvgRef} className="w-full h-full leadership-icon" id="leadership-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="14" fill="#7C3AED" opacity="0.9" />
              <circle cx="50" cy="20" r="6" fill="#A8D8F0" opacity="0.8" />
              <circle cx="78" cy="35" r="6" fill="#A8D8F0" opacity="0.8" />
              <circle cx="78" cy="65" r="6" fill="#A8D8F0" opacity="0.8" />
              <circle cx="50" cy="80" r="6" fill="#A8D8F0" opacity="0.8" />
              <circle cx="22" cy="65" r="6" fill="#A8D8F0" opacity="0.8" />
              <circle cx="22" cy="35" r="6" fill="#A8D8F0" opacity="0.8" />
              <g stroke="#A8D8F0" strokeWidth="1.5" opacity="0.6">
                <line x1="50" y1="36" x2="50" y2="26" />
                <line x1="62" y1="39" x2="72" y2="35" />
                <line x1="62" y1="61" x2="72" y2="65" />
                <line x1="50" y1="64" x2="50" y2="74" />
                <line x1="38" y1="39" x2="28" y2="35" />
                <line x1="38" y1="61" x2="28" y2="65" />
              </g>
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left z-10 relative pointer-events-none">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Discover our leadership</h2>
            <p className="text-textBody text-lg leading-relaxed max-w-lg">
              Meet the founders, heads, directors, researchers and innovators driving Dynexly's mission. Our team of young scientists is redefining open‑source, physics‑informed AI for a sustainable future.
            </p>
          </div>
          <div className="flex-shrink-0 z-10 relative">
            <Link to="/team" className="group inline-flex items-center gap-2 bg-white text-bgDark font-display font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              Our leadership
              <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-12 px-6 md:py-20 md:px-12 max-w-4xl mx-auto scroll-mt-16">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-10 text-center card-reveal">Frequently Asked Questions</h2>
        <FAQAccordion items={[
          {
            question: "What is Dynexly?",
            answer: <>Dynexly — Dynamic Neural Exploration Lab for Youth — is a youth‑led, international, non‑profit research collective. We apply Physics‑Informed Machine Learning (PIML) to build free, open‑source tools for critical infrastructure resilience, starting with solar microgrids in healthcare.</>
          },
          {
            question: "What is Physics‑Informed Machine Learning?",
            answer: <>PIML is a type of AI that embeds the known laws of physics directly into the model’s learning process. This ensures our forecasts are not just accurate on average — they are physically impossible to violate, even during unprecedented extreme weather.</>
          },
          {
            question: "What does the name Dynexly mean?",
            answer: <>Dynexly stands for <strong>Dy</strong>namic <strong>N</strong>eural <strong>Ex</strong>ploration <strong>L</strong>ab for <strong>Y</strong>outh. The name captures our dual nature: a physics‑driven exploration of neural systems (dynamic neural exploration) and a permanent commitment to youth‑led research (lab for youth). It’s a reminder that scientific inquiry is alive, moving, and belongs to the next generation.</>
          },
          {
            question: "Is Dynexly’s research peer‑reviewed?",
            answer: <>Our first major preprint, DX‑01, is being submitted to arXiv under an open‑access license. Our goal is for every project to produce a publication‑quality paper and a free, open‑source tool.</>
          },
          {
            question: "How can I join?",
            answer: <>You can apply via the "Join" section on our website. We're looking for passionate researchers, developers, and communicators aged 14–22 from anywhere in the world. No fees, no formal degrees required — just curiosity and commitment.</>
          }
        ]} />
      </section>

      {/* JOIN SECTION */}
      <section id="join" className="py-12 px-6 md:py-20 md:px-12 max-w-7xl mx-auto scroll-mt-16 relative">
        <div className="max-w-3xl mb-10 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 card-reveal">Join the Lab</h2>
          <p className="text-base text-textBody leading-relaxed card-reveal">We are actively seeking passionate researchers, engineers, and designers to contribute to our mission. Explore open roles or submit a general application.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="glass-card p-6 card-reveal">
            <h3 className="font-display text-white text-lg mb-1">Researcher</h3>
            <p className="text-xs text-[#7C3AED] mb-3">Remote / Volunteer</p>
            <p className="text-sm text-textBody leading-relaxed mb-6">Focus on physics-informed neural network architectures. PyTorch experience required.</p>
            <Link to="/join" className="text-sm text-white hover:text-[#7C3AED] underline decoration-borderDark underline-offset-4 transition-colors">Apply Now →</Link>
          </div>
          <div className="glass-card p-6 card-reveal">
            <h3 className="font-display text-white text-lg mb-1">Developer</h3>
            <p className="text-xs text-[#7C3AED] mb-3">Remote / Volunteer</p>
            <p className="text-sm text-textBody leading-relaxed mb-6">Build the open-source platforms and tools that deploy our research models.</p>
            <Link to="/join" className="text-sm text-white hover:text-[#7C3AED] underline decoration-borderDark underline-offset-4 transition-colors">Apply Now →</Link>
          </div>
          <div className="glass-card p-6 card-reveal">
            <h3 className="font-display text-white text-lg mb-1">Operations Lead</h3>
            <p className="text-xs text-[#7C3AED] mb-3">Remote / Volunteer</p>
            <p className="text-sm text-textBody leading-relaxed mb-6">Assist with local partnerships and facility data collection coordination.</p>
            <Link to="/join" className="text-sm text-white hover:text-[#7C3AED] underline decoration-borderDark underline-offset-4 transition-colors">Apply Now →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
