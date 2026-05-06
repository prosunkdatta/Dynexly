import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray('.reveal-card').forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top bottom-=100' },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center reveal-card mb-20 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">About Dynexly</h1>
        <p className="text-sm md:text-base text-gray-400">
          A youth-led non-profit research collective — permanently volunteer-driven and 100% open-source.
        </p>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto pt-4">
          Dynexly — Dynamic Neural Exploration Lab for Youth — was founded in March 2026 in Sylhet, Bangladesh. We are a permanently volunteer-driven, youth-led, international non-profit research collective. Every project we undertake produces both a peer-reviewable research output and a free, open-source tool. We are governed exclusively by researchers aged 14–22. All our tools are free, all our research is open-access.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal-card mb-20">
        <div className="card-style border-[#222]">
          <h3 className="text-lg font-bold mb-4 text-white font-heading">Our Mission</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            To solve pressing systemic vulnerabilities through rigorous open-source research and free, accessible tools — beginning with climate-resilient energy systems for healthcare.
          </p>
        </div>
        <div className="card-style border-[#222]">
          <h3 className="text-lg font-bold mb-4 text-white font-heading">Our Vision</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            To become a globally recognized framework where young researchers lead science that matters, establishing the standard for physics-guaranteed climate risk intelligence.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="text-center reveal-card mb-24">
        <h2 className="text-xl font-bold mb-8 text-white font-heading">Core Values</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {["Open First", "Scientific Rigor", "Youth-Governed", "Respect", "Research-to-Product", "Global by Design", "Empirical Impact"].map(val => (
            <span key={val} className="px-5 py-2.5 bg-[#7C3AED] text-white text-[11px] font-bold tracking-wide rounded-full shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              {val}
            </span>
          ))}
        </div>
      </div>

      {/* Our Model */}
      <div className="reveal-card mb-24 text-center">
        <h2 className="text-xl font-bold mb-12 text-white font-heading">Our Model</h2>
        <div className="max-w-4xl mx-auto flex items-center justify-between relative px-4 md:px-0">
          <div className="absolute top-5 left-[5%] right-[5%] md:left-[10%] md:right-[10%] h-[1px] bg-[#333] -z-10"></div>
          {[
            { num: "1", label: "Research" },
            { num: "2", label: "Code" },
            { num: "3", label: "Free App" },
            { num: "4", label: "Deploy" },
            { num: "5", label: "Measure Impact", active: true }
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 bg-[#080808] px-2 md:px-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-[2px] text-xs md:text-sm font-bold bg-[#080808] ${step.active ? 'border-white text-white' : 'border-[#444] text-gray-400'}`}>
                {step.num}
              </div>
              <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-wider ${step.active ? 'text-white' : 'text-gray-500'}`}>{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto reveal-card mb-24">
        {[
          { value: "10+", label: "Researchers" },
          { value: "1", label: "Manuscript in Progress" },
          { value: "100%", label: "Open-Source" },
          { value: "2026", label: "Founded March" },
        ].map((stat, idx) => (
          <div key={idx} className="card-style text-center py-10 border-[#222]">
            <div className="text-2xl md:text-3xl font-bold text-white mb-3 font-heading">{stat.value}</div>
            <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* How We Work Timeline */}
      <div className="reveal-card mb-24 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-12 text-white text-center font-heading">How We Work</h2>
        <div className="relative border-l border-[#333] ml-4 md:ml-12 space-y-12">
          
          <div className="relative pl-8 md:pl-10">
            <div className="absolute w-[10px] h-[10px] rounded-full -left-[5.5px] top-1.5 border-[2px] border-[#A8D8F0] bg-[#080808] shadow-[0_0_10px_rgba(168,216,240,0.5)]"></div>
            <h3 className="text-sm font-bold text-white mb-2 font-heading tracking-wide">March 2026 — Foundation</h3>
            <p className="text-xs text-gray-500 leading-relaxed md:max-w-xl">
              Dynexly was founded in Sylhet, Bangladesh. We started with the belief that serious scientific research can be led by young people, focusing entirely on open-source resilience infrastructure.
            </p>
          </div>

          <div className="relative pl-8 md:pl-10">
            <div className="absolute w-[10px] h-[10px] rounded-full -left-[5.5px] top-1.5 border-[2px] border-[#A8D8F0] bg-[#080808] shadow-[0_0_10px_rgba(168,216,240,0.5)]"></div>
            <h3 className="text-sm font-bold text-white mb-2 font-heading tracking-wide">100% Open-Source Commitment</h3>
            <p className="text-xs text-gray-500 leading-relaxed md:max-w-xl">
              Dynexly is and will remain a 100% volunteer, non-profit research collective. All tools are free, all research is open-access, and no revenue model is planned. We believe the best tools for humanity must be free forever.
            </p>
          </div>

          <div className="relative pl-8 md:pl-10">
            <div className="absolute w-[10px] h-[10px] rounded-full -left-[5.5px] top-1.5 border-[2px] border-[#A8D8F0] bg-[#080808] shadow-[0_0_10px_rgba(168,216,240,0.5)]"></div>
            <h3 className="text-sm font-bold text-white mb-2 font-heading tracking-wide">Future Outlook</h3>
            <p className="text-xs text-gray-500 leading-relaxed md:max-w-xl">
              Expanding from DX-01, our goal is to scale physics-guaranteed neural architectures globally, turning theoretical research into real-time climate risk intelligence for marginalized communities.
            </p>
          </div>

        </div>
      </div>

      {/* Discover our leadership CTA */}
      <div className="reveal-card max-w-3xl mx-auto card-style p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0B0B0B] border-[#222]">
        <div className="flex-shrink-0 grid grid-cols-3 gap-2 opacity-60">
          <div className="w-2 h-2 rounded-full bg-[#555]"></div>
          <div className="w-2 h-2 rounded-full bg-[#555]"></div>
          <div className="w-2 h-2 rounded-full bg-[#555]"></div>
          <div className="w-2 h-2 rounded-full bg-[#555]"></div>
          <div className="w-2 h-2 rounded-full bg-[#A8D8F0] shadow-[0_0_8px_#A8D8F0]"></div>
          <div className="w-2 h-2 rounded-full bg-[#555]"></div>
          <div className="w-2 h-2 rounded-full bg-[#555]"></div>
          <div className="w-2 h-2 rounded-full bg-[#555]"></div>
          <div className="w-2 h-2 rounded-full bg-[#555]"></div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-3 font-heading">Discover our leadership</h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            Meet the founders, heads, directors, researchers and innovators driving Dynexly's mission. Our team of young scientists is redefining open-source, physics-informed AI for a sustainable future.
          </p>
        </div>
        
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <Link to="/team" className="btn-primary inline-flex items-center gap-2 whitespace-nowrap text-xs px-6 py-3">
            Our leadership <span className="text-[10px]">→</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
