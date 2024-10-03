'use client'
import React from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// @ts-ignore
export const AccordionItem = ({ title, subTitle, children, isActive, onToggle }) => {
  return (
    <div className="w-full border-b border-gray-200 flex flex-col">
      <button
        className="sm:grid grid-cols-3 flex justify-between items-center w-full p-4 text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={`accordion-content-${title}`}
        id={`accordion-header-${title}`}
      >
        <span className="flex-1 sm:text-2xl text-black italic font-serif">{title}</span>
        <span className="text-sm sm:text-base font-light text-gray-500">{subTitle}</span>
        <div className='sm:justify-self-end'>
          {isActive ? (
            <FiChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <FiChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      {isActive && (
        <div
          id={`accordion-content-${title}`}
          role="region"
          aria-labelledby={`accordion-header-${title}`}
          className="w-full grid grid-cols-3 p-4 text-gray-500 transition-all duration-300 ease-in-out"
        >
          <div className='col-span-full sm:col-start-2 sm:col-end-4'>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
