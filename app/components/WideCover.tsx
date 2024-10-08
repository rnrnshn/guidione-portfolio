"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Zoomist from "zoomist";

type WideCoverProps = {
  imageUrl: string;
  altText: string;
};

export const WideCover = ({
  imageUrl,
  altText
}: WideCoverProps) => {
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (zoomRef.current) {
      new Zoomist(zoomRef.current, {
        zoomer: true,
        slider: true,
        bounds: true,
      });
    }
  }, []);

  return (
    <div className="relative w-full mb-4">
      <div
        ref={zoomRef}
        className="image-section w-full bg-red-300 relative overflow-x-scroll overflow-y-hidden"
      >
        <div
          className="zoomist-container image-container absolute left-0 top-0"
        >
          <div className="zoomist-wrapper image_wrapper absolute inset-0">
            <Image
              src={imageUrl}
              alt={altText}
              fill={true}
              priority={true}
              quality={100}
              unoptimized={true}
              className="large-image zoomist-image block w-full h-full object-left object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
