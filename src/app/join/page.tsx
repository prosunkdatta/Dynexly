import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function JoinPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray('.reveal-card').forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top bottom-=100' },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  const roles = [
    { title: "Researcher", focus: "Focus on physics-informed neural network architectures. PyTorch experience required." },
    { title: "Developer", focus: "Build the open-source platforms and tools that deploy our research models." },
    { title: "Operations Lead", focus: "Assist with local partnerships and facility data collection coordination." }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-24 max-w-7xl mx-auto px-12">
      <div className="max-w-2xl mb-16 reveal-card text-center mx-auto">
        <h1 className="text-5xl font-bold tracking-tight uppercase mb-6">Join the Lab</h1>
        <p className="text-sm text-gray-400">
          We are actively seeking passionate researchers, engineers, and designers to contribute to our mission.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {roles.map((role, i) => (
          <div key={i} className="card-style reveal-card flex flex-col h-full group hover:border-[#A8D8F0]/30 transition-colors cursor-pointer relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 border border-[#A8D8F0]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="mb-auto relative z-10">
              <h3 className="text-2xl font-bold tracking-tight uppercase mb-2">{role.title}</h3>
              <p className="text-[10px] text-[#A8D8F0] uppercase tracking-widest mb-4 font-bold">Remote / Volunteer</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">{role.focus}</p>
            </div>
            <button className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold text-white group-hover:text-[#A8D8F0] transition-colors relative z-10">
              Apply Now <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="card-style reveal-card max-w-2xl mx-auto border-[#1E1E1E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <h3 className="text-2xl font-bold tracking-tight uppercase mb-6 text-center relative z-10">General Application</h3>
        <form className="space-y-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full bg-[#080808] border border-[#1E1E1E] rounded-sm p-4 text-xs text-white focus:outline-none focus:border-[#7C3AED] transition-colors" />
            <input type="text" placeholder="Last Name" className="w-full bg-[#080808] border border-[#1E1E1E] rounded-sm p-4 text-xs text-white focus:outline-none focus:border-[#7C3AED] transition-colors" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-[#080808] border border-[#1E1E1E] rounded-sm p-4 text-xs text-white focus:outline-none focus:border-[#7C3AED] transition-colors" />
          <textarea placeholder="Tell us about your background and interests..." rows={4} className="w-full bg-[#080808] border border-[#1E1E1E] rounded-sm p-4 text-xs text-white focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"></textarea>
          <button type="button" className="btn-primary w-full mt-4 flex justify-center items-center">Submit Application</button>
        </form>
      </div>
    </div>
  );
}
