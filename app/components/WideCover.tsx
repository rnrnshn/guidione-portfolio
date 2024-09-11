"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Zoomist from "zoomist";

type WideCoverProps = {
  imageUrl: string;
  altText: string;
};

export const WideCover = ({ imageUrl, altText }: WideCoverProps) => {
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (zoomRef.current) {
      new Zoomist(zoomRef.current, {
        zoomer: true,
        slider: true
      });
    }
  }, []);

  return (
    <div className="relative w-full sm:grid grid-cols-2 gap-4 mb-4">
      <div
        ref={zoomRef}
        className="image-section aspect-image-section col-span-2 h-[600px] w-full bg-red-300 relative overflow-x-scroll overflow-y-hidden"
      >
        <div className="image-container aspect-image-container h-[600px] overflow-auto absolute left-0 top-0 w-[400%] bg-blue-400">
          <div className="image_wrapper zoomist-wrapper absolute inset-0">
            <Image
              src={imageUrl}
              alt={altText}
              fill={true}
              className="large-image zoomist-image block rounded-3xl w-full h-full object-left object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
