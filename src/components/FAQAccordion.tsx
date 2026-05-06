import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="flex flex-col gap-0 w-full max-w-4xl mx-auto">
      {items.map((item, i) => (
        <div 
          key={i} 
          className={`faq-item py-5 px-4 glass-card mb-3 ${openIndex === i ? 'open' : ''}`}
          onClick={() => toggle(i)}
        >
          <div className="faq-question font-display text-lg text-white flex justify-between items-center cursor-pointer">
            {item.question}
            <svg 
               className="w-5 h-5 text-[#A8D8F0] transform transition-transform duration-200" 
               style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }} 
               fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div 
             className="faq-answer text-textBody text-base leading-relaxed mt-2" 
             style={{ 
               maxHeight: openIndex === i ? '200px' : '0px', 
               overflow: 'hidden', 
               paddingBottom: openIndex === i ? '16px' : '0px', 
               transition: 'max-height 0.3s ease, padding 0.3s ease' 
             }}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
