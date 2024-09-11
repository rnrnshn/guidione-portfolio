'use client'
import React, { useRef, useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// @ts-ignore
export const AccordionProjectItem = ({ title, children, isActive, onToggle }) => {
  const contentRef = useRef(null); // Reference to the content to calculate height
  const [maxHeight, setMaxHeight] = useState("0px");

  // Update the maxHeight when isActive changes
  useEffect(() => {
    if (isActive) {
      // @ts-ignore
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isActive]);

  return (
    <div className="flex flex-col">
      <button
        className="max-w-5xl sm:ml-40 flex justify-between items-center w-full sm:p-4 py-4 text-left focus:outline-none border-b border-gray-200"
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

      <div
        id={`accordion-content-${title}`}
        ref={contentRef}
        role="region"
        aria-labelledby={`accordion-header-${title}`}
        style={{
          maxHeight: maxHeight,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
          opacity: isActive ? 1 : 0,
        }}
        className="w-full text-gray-500"
      >
        <div className="sm:p-4 pb-4 w-full sm:flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
