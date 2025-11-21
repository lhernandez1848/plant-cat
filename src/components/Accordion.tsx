'use client'

import { filterClassNames } from "@/lib/utilities";
import { useState } from "react";

export default function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <button onClick={() => handleClick()} className={filterClassNames(isOpen && "bg-teal-100","flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl hover:bg-teal-100 gap-3 cursor-pointer")}>
        <h4 className="text-gray-600 font-semibold">{question}</h4>
        <svg data-accordion-icon className={filterClassNames(isOpen ? "" : "rotate-180","w-3 h-3 shrink-0")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
      {isOpen &&
        <div id="accordion-collapse-body-1">
          <div className="p-5 border border-b-0 border-gray-200">
            <p className="mb-2 text-gray-600">{answer}.</p>
          </div>
        </div>
      }      
    </div>
  );
}