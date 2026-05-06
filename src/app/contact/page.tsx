import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, MapPin, Users, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray('.reveal-card').forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top bottom-=50' },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.1
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      
      {/* Hero Section */}
      <div className="max-w-2xl mx-auto text-center reveal-card mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">Get in Touch</h1>
        <p className="text-sm md:text-base text-gray-400 font-medium pb-4">
          Interested in our research, partnerships, or joining the collective? We'd love to hear from you.
        </p>
        <div className="flex justify-center pt-6 opacity-80">
          <svg width="140" height="90" viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20,35 L 40,25 L 60,30 L 80,25 L 100,35" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M 40,25 L 50,45 L 70,45 L 80,25" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M 20,35 L 30,55 M 100,35 L 90,55" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M 50,45 L 60,30 L 70,45" stroke="#333" strokeWidth="2" fill="none" />
            
            <circle cx="20" cy="35" r="3" fill="#555" />
            <circle cx="40" cy="25" r="3" fill="#A8D8F0" className="drop-shadow-[0_0_4px_#A8D8F0]" />
            <circle cx="60" cy="30" r="3" fill="#7C3AED" className="drop-shadow-[0_0_4px_#7C3AED]" />
            <circle cx="80" cy="25" r="3" fill="#A8D8F0" className="drop-shadow-[0_0_4px_#A8D8F0]" />
            <circle cx="100" cy="35" r="3" fill="#555" />
            
            <circle cx="50" cy="45" r="3" fill="#555" />
            <circle cx="70" cy="45" r="3" fill="#555" />
            
            <circle cx="30" cy="55" r="3" fill="#333" />
            <circle cx="90" cy="55" r="3" fill="#333" />
          </svg>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
        {/* Contact Info Card */}
        <div className="card-style reveal-card p-8 border-[#222] h-max">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-gray-500 font-medium mb-1">Address</p>
                <p className="text-sm text-white">Sylhet, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-gray-500 font-medium mb-1">Email</p>
                <a href="mailto:hello@dynexly.org" className="text-sm text-[#A8D8F0] hover:text-white transition-colors">hello@dynexly.org</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-gray-500 font-medium mb-1">Partnerships & Collaborations</p>
                <a href="mailto:dynexlylabs@gmail.com" className="text-sm text-[#A8D8F0] hover:text-white transition-colors">dynexlylabs@gmail.com</a>
              </div>
            </div>
          </div>
          
          <hr className="border-[#222] my-8" />
          
          <div className="flex gap-4 text-gray-500">
            <a href="https://facebook.com/dynexlylabs" target="_blank" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://instagram.com/dynexlylabs" target="_blank" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://linkedin.com/company/dynexlylabs" target="_blank" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://github.com/dynexlylab" target="_blank" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Send a Message Form Card */}
        <div className="card-style reveal-card p-8 border-[#222]">
          <h2 className="text-xl font-bold text-white mb-6 font-heading">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-2">Full Name</label>
              <input type="text" placeholder="Your full name" className="w-full bg-[#080808] border border-[#1E1E1E] rounded-md p-3 text-sm text-white focus:outline-none focus:border-[#444] transition-colors placeholder:text-[#333]" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-2">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full bg-[#080808] border border-[#1E1E1E] rounded-md p-3 text-sm text-white focus:outline-none focus:border-[#444] transition-colors placeholder:text-[#333]" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-2">Subject</label>
              <input type="text" placeholder="What's this about?" className="w-full bg-[#080808] border border-[#1E1E1E] rounded-md p-3 text-sm text-white focus:outline-none focus:border-[#444] transition-colors placeholder:text-[#333]" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-2">Message</label>
              <textarea rows={4} placeholder="Write your message here..." className="w-full bg-[#080808] border border-[#1E1E1E] rounded-md p-3 text-sm text-white focus:outline-none focus:border-[#444] transition-colors resize-none placeholder:text-[#333]"></textarea>
            </div>
            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" id="terms" className="mt-1 flex-shrink-0 bg-[#080808] border-[#333] accent-white" />
              <label htmlFor="terms" className="text-xs text-gray-400 leading-relaxed cursor-pointer select-none">
                I agree with <Link to="/terms" className="text-white hover:underline">Terms of Use</Link> and <Link to="/privacy" className="text-white hover:underline">Privacy Policy</Link>.
              </label>
            </div>
            <button type="submit" className="btn-primary w-full mt-4 flex justify-center items-center py-3 text-sm font-bold bg-white text-black hover:bg-gray-200 transition-colors rounded-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-1 gap-6 max-w-5xl mx-auto flex-col">
        {/* Join the Collective Card */}
        <div className="card-style reveal-card p-8 md:p-10 border-[#222]">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-heading">Join the Collective</h2>
          <p className="text-sm text-gray-400 max-w-3xl leading-relaxed mb-6">
            We recruit youth researchers and developers from around the world. All roles are volunteer. You'll gain authorship or co-authorship on real papers, open-source contributions, and a global peer network.
          </p>
          <Link to="/join" className="btn-secondary inline-flex items-center gap-2 border-[#1E1E1E] text-white hover:border-white">
            Apply Now <span className="text-xs">→</span>
          </Link>
        </div>

        {/* Contribute to Open Research Card */}
        <div className="card-style reveal-card p-8 md:p-10 border-[#222]">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-heading">Contribute to Open Research</h2>
          <p className="text-sm text-gray-400 max-w-3xl leading-relaxed mb-6">
            Dynexly is a non-profit organization. You can support our mission by using our tools, citing our work, contributing to our GitHub repositories, or spreading the word.
          </p>
          <a href="https://github.com/dynexlylab" target="_blank" className="btn-secondary inline-flex items-center gap-2 border-[#1E1E1E] text-white hover:border-white">
            Explore Our GitHub <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
