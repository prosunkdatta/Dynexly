import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#040404] border-t border-[#1E1E1E] py-12 px-6 md:px-12 font-sans font-medium text-sm w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        
        {/* Left Column – Logo & main links */}
        <div className="flex flex-col gap-5 md:w-1/3">
          <Link to="/" className="flex items-center gap-3 mb-1 hover:text-white transition-colors">
            {/* Inline logo SVG (Bracket Mark) */}
            <svg className="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* LEFT BRACKET = the D */}
              <line x1="22" y1="15" x2="22" y2="85" stroke="#a8d8f0" strokeWidth="7" strokeLinecap="round" />
              <path d="M22,15 Q38,15 38,28" fill="none" stroke="#a8d8f0" strokeWidth="6" strokeLinecap="round" />
              <path d="M22,85 Q38,85 38,72" fill="none" stroke="#a8d8f0" strokeWidth="6" strokeLinecap="round" />
              {/* RIGHT BRACKET (code) */}
              <line x1="78" y1="15" x2="78" y2="85" stroke="#a8d8f0" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
              <path d="M78,15 Q62,15 62,28" fill="none" stroke="#a8d8f0" strokeWidth="3.5" strokeLinecap="round" opacity="0.55" />
              <path d="M78,85 Q62,85 62,72" fill="none" stroke="#a8d8f0" strokeWidth="3.5" strokeLinecap="round" opacity="0.55" />
              {/* X */}
              <line x1="34" y1="30" x2="66" y2="70" stroke="#a8d8f0" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="66" y1="30" x2="34" y2="70" stroke="#a8d8f0" strokeWidth="6.5" strokeLinecap="round" />
              {/* Center dot */}
              <circle cx="50" cy="50" r="3.5" fill="#080808" stroke="#a8d8f0" strokeWidth="2.5" />
            </svg>
            <span className="font-display font-bold text-white tracking-[2px] text-[16px]">DYNEXLY</span>
          </Link>

          <div className="flex flex-col gap-3 text-textBody">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/research" className="hover:text-white transition-colors">Research</Link>
            <Link to="/team" className="hover:text-white transition-colors">Our Leadership</Link>
            <Link to="/join" className="hover:text-white transition-colors">Open Roles</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Middle Column – Terms & Policies */}
        <div className="flex flex-col gap-5 md:w-1/3">
          <h4 className="font-bold text-textMuted mt-1 mb-1">Our terms and policies</h4>
          <div className="flex flex-col gap-3 text-textBody">
            {/* Internal policy pages – open in new tab (mirrors original behavior) */}
            <a href="/community-standards" target="_blank" className="hover:text-white transition-colors">Community standards</a>
            <a href="/privacy-policy" target="_blank" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="/terms" target="_blank" className="hover:text-white transition-colors">Terms</a>
            <a href="/sitemap" target="_blank" className="hover:text-white transition-colors">Site map</a>
          </div>
        </div>

        {/* Right Column – Social, Address, Copyright */}
        <div className="flex flex-col gap-6 md:w-1/3 md:items-end text-left md:text-right">
          {/* Social icons */}
          <div className="flex gap-4 text-textMuted justify-start md:justify-end">
            <a href="https://facebook.com/dynexlylabs" target="_blank" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="https://instagram.com/dynexlylabs" target="_blank" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/dynexlylabs" target="_blank" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/dynexlylab" target="_blank" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>

          {/* Lab Info */}
          <div className="flex flex-col gap-1 text-textBody">
            <span className="text-white">Dynamic Neural Exploration Lab for Youth</span>
            <span>Bangladesh</span>
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-1 text-textMuted mt-2 md:mt-auto">
            <span>Accessibility</span>
            <span>© 2026 Dynexly.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}