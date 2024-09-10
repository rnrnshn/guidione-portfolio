'use client'
import React from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// @ts-ignore
export const AccordionProjectItem = ({ title, children, isActive, onToggle }) => {
  return (
    <div className="flex flex-col">
      <button
        className="max-w-6xl mx-auto flex justify-between items-center w-full sm:p-4 py-4 text-left focus:outline-none border-b border-gray-200"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={`accordion-content-${title}`}
        id={`accordion-header-${title}`}
      >
        <span className="flex-1 text-gray-500 font-sans font-light">{title}</span>
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
          className="w-full sm:p-4 pb-4 text-gray-500 transition-all duration-300 ease-in-out"
        >
          <div className='w-full bg-red-300 sm:flex flex-col'>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
