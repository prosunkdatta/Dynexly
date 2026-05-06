import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FileText, CodeXml, LayoutTemplate } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ResearchPage() {
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
      <div className="max-w-3xl mx-auto text-center reveal-card mb-24 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">Our Research</h1>
        <p className="text-sm md:text-base text-gray-400 font-medium">
          Physics-Informed Machine Learning for Critical Infrastructure Resilience
        </p>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto pt-2">
          We apply physics-guaranteed AI to solve real-world infrastructure problems. Every project ships both a research paper and a free open-source tool.
        </p>
      </div>

      {/* DX-01 Featured Project */}
      <div className="card-style reveal-card p-8 md:p-12 mb-24 border-[#222]">
        <div className="flex justify-between items-center mb-8">
          <span className="border border-[#333] text-gray-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">DX-01</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]"></span>
            <span className="text-[#7C3AED] text-[10px] font-bold uppercase tracking-widest">ONGOING</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 font-heading">PIML for Solar Microgrid Resilience in Healthcare Facilities</h2>
        <h3 className="text-sm text-gray-400 mb-8 border-b border-[#222] pb-8">A Stochastic Study of the Sylhet Monsoon Corridor, Bangladesh</h3>

        <div className="space-y-6 text-sm text-gray-400 leading-relaxed max-w-4xl mb-12">
          <p>
            DX-01 is our flagship study investigating Physics-Informed Machine Learning applied to solar-battery microgrid systems that power rural healthcare facilities. In the Sylhet monsoon corridor, heavy precipitation and rapid cloud transitions can collapse solar generation within minutes — threatening vaccine cold chains, surgical lighting, and life-support equipment. Standard machine learning models fail during these extreme events because they lack physical constraints, generating physically impossible outputs such as non-zero irradiance at night or power exceeding the Shockley-Queisser limit.
          </p>
          <p>
            This project embeds three physics-grounded penalty terms directly into the neural network loss function: an upper-bound constraint (Lmax), a nocturnal zero constraint (Lnight), and a novel monsoon rain-cooling and attenuation term (Lmonsoon) that captures a dual thermodynamic effect unique to high-humidity South Asian monsoon corridors. The model is applied to a representative Upazila Health Complex in Sylhet, using 20 years of hourly NASA POWER satellite data and PVLib-simulated ground-truth PV output.
          </p>
        </div>

        <div className="mb-12">
          <h4 className="text-xl font-bold text-white mb-6 font-heading">Methodology</h4>
          <ul className="space-y-4 text-xs text-gray-400 max-w-4xl">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#A8D8F0] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg>
              <span><strong className="text-white">Data:</strong> 20 years of hourly NASA POWER satellite data (2006–2025) for Sylhet, Bangladesh</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#A8D8F0] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg>
              <span><strong className="text-white">Simulation:</strong> PVLib for ground-truth solar power output and PV system modeling</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#A8D8F0] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg>
              <span><strong className="text-white">Baselines:</strong> LSTM, GRU, and PVLib deterministic models for comparison</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#A8D8F0] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg>
              <span><strong className="text-white">Proposed Model:</strong> PIML-LSTM with custom physics-constrained loss function</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#A8D8F0] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg>
              <span><strong className="text-white">Evaluation:</strong> RMSE, MAE, and physics-violation counts on full-year, monsoon, and extreme-event test subsets</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#A8D8F0] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg>
              <span><strong className="text-white">Resilience Metrics:</strong> Hour-by-hour microgrid simulation computing LOLP, EENS, and Critical Load Survival Rate</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {["Python", "PyTorch", "PVLib", "NASA POWER API", "PIML", "LSTM", "GRU", "Jupyter"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-[#7C3AED] text-white text-[10px] font-bold rounded-full shadow-[0_0_10px_rgba(124,58,237,0.2)]">
              {tag}
            </span>
          ))}
        </div>

        <button className="btn-primary w-max flex items-center gap-2">
          View on GitHub <span className="text-[10px]">→</span>
        </button>
      </div>

      {/* How We Work */}
      <div className="reveal-card mb-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-6 font-heading">How We Work</h2>
        <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
          Every Dynexly project follows a strict dual-output mandate: each initiative produces both a peer-reviewable research output and a free, open-source tool available to anyone, anywhere. We do not publish without shipping code, and we do not ship without empirical validation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">
          <div className="hidden md:block absolute top-[22px] left-[8%] right-[8%] h-[1px] bg-[#333] -z-10"></div>
          {[
            { num: "1", text: "Identify a real-world problem affecting vulnerable communities" },
            { num: "2", text: "Conduct rigorous computational research with clear methodology" },
            { num: "3", text: "Publish a preprint-quality manuscript on arXiv" },
            { num: "4", text: "Release a free, open-source tool under MIT License" },
            { num: "5", text: "Deploy with real users, collect feedback, and iterate" },
            { num: "6", text: "Publish Impact Report & public data" }
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 bg-[#080808] px-2">
              <div className="w-11 h-11 rounded-full flex items-center justify-center border border-white text-sm font-bold text-white bg-[#080808] z-10">
                {step.num}
              </div>
              <p className="text-[10px] text-gray-500 leading-relaxed text-center">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Outputs */}
      <div className="reveal-card mb-32 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-10 text-center font-heading">Research Outputs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-style p-8 border-[#222]">
            <FileText className="w-8 h-8 text-[#A8D8F0] mb-6 opacity-80" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-white mb-4">Preprints & Papers</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every project targets arXiv submission and eventual journal publication to ensure rigorous peer review.
            </p>
          </div>
          <div className="card-style p-8 border-[#222]">
            <CodeXml className="w-8 h-8 text-[#A8D8F0] mb-6 opacity-80" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-white mb-4">Open-Source Code</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              All models, data pipelines, and tools are MIT licensed and available on GitHub for the community to leverage.
            </p>
          </div>
          <div className="card-style p-8 border-[#222]">
            <LayoutTemplate className="w-8 h-8 text-[#A8D8F0] mb-6 opacity-80" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-white mb-4">Impact Reports</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Accessible summaries of methodology, results, and real-world implications, tailored for general audiences.
            </p>
          </div>
        </div>
      </div>

      {/* Next Projects */}
      <div className="reveal-card max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-10 font-heading">Next Projects</h2>
        <div className="card-style p-8 md:p-12 border-[#222]">
          <div className="flex justify-between items-center mb-6">
            <span className="border border-[#333] text-gray-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">DX-02</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EAB308] shadow-[0_0_8px_#EAB308]"></span>
              <span className="text-[#EAB308] text-[10px] font-bold uppercase tracking-widest">PLANNED</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-heading">Techno-Economic Optimization of Rural Microgrids</h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-4xl">
            Planned for 2027. DX-02 will apply NSGA-II multi-objective evolutionary algorithms to find Pareto-optimal PV-battery system sizes for rural healthcare facilities. This work will build directly on the forecasting pipeline developed in DX-01.
          </p>
        </div>
      </div>

    </div>
  );
}
