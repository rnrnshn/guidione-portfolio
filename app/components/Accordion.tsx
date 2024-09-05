'use client'
import React, { useState } from 'react';

export const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const items = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: activeIndex === index,
      onToggle: () => handleToggle(index),
    });
  });

  return <div className="w-full bg-white">{items}</div>;
};
