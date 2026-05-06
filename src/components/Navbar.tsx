import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Research', path: '/research' },
  { name: 'Our Leadership', path: '/team' },
  { name: 'Join Us', path: '/join' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    if (mobileMenuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(menuRef.current, { x: '100%', duration: 0.3, ease: 'power2.in' });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${scrolled ? 'glass-header h-20' : 'bg-transparent h-20'}`}>
        <div className="w-full px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <svg className="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* LEFT BRACKET = the D */}
              <line x1="22" y1="15" x2="22" y2="85" stroke="#a8d8f0" strokeWidth="7" strokeLinecap="round"/>
              <path d="M22,15 Q38,15 38,28" fill="none" stroke="#a8d8f0" strokeWidth="6" strokeLinecap="round"/>
              <path d="M22,85 Q38,85 38,72" fill="none" stroke="#a8d8f0" strokeWidth="6" strokeLinecap="round"/>
              {/* RIGHT BRACKET (code) */}
              <line x1="78" y1="15" x2="78" y2="85" stroke="#a8d8f0" strokeWidth="4" strokeLinecap="round" opacity="0.55"/>
              <path d="M78,15 Q62,15 62,28" fill="none" stroke="#a8d8f0" strokeWidth="3.5" strokeLinecap="round" opacity="0.55"/>
              <path d="M78,85 Q62,85 62,72" fill="none" stroke="#a8d8f0" strokeWidth="3.5" strokeLinecap="round" opacity="0.55"/>
              {/* X */}
              <line x1="34" y1="30" x2="66" y2="70" stroke="#a8d8f0" strokeWidth="6.5" strokeLinecap="round"/>
              <line x1="66" y1="30" x2="34" y2="70" stroke="#a8d8f0" strokeWidth="6.5" strokeLinecap="round"/>
              {/* Center dot */}
              <circle cx="50" cy="50" r="3.5" fill="#080808" stroke="#a8d8f0" strokeWidth="2.5"/>
            </svg>
            <span className="text-xl font-bold tracking-tighter uppercase text-white font-heading">DYNEXLY</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-1 ${active ? 'text-white border-b-2 border-brand-secondary' : 'hover:text-white'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-[60] bg-[#080808]/95 backdrop-blur-xl flex flex-col justify-center items-center transform translate-x-full"
      >
        <button className="absolute top-6 right-6 text-white" onClick={() => setMobileMenuOpen(false)}>
          <X className="w-8 h-8" />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold uppercase tracking-wider text-white hover:text-[#A8D8F0] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
