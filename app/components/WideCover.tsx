"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Zoomist from "zoomist";

type WideCoverProps = {
  imageUrl: string;
  altText: string;
  imageSectionHeight: number; // in pixels
  imageContainerHeight: number; // in pixels
  imageContainerWidth: number; // in percentage
};

export const WideCover = ({
  imageUrl,
  altText,
  imageSectionHeight,
  imageContainerHeight,
  imageContainerWidth,
}: WideCoverProps) => {
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (zoomRef.current) {
      new Zoomist(zoomRef.current, {
        zoomer: true,
        slider: true,
      });
    }
  }, []);

  return (
    <div className="relative w-full sm:grid grid-cols-2 gap-4 mb-4">
      <div
        ref={zoomRef}
        className="image-section aspect-image-section col-span-2 w-full bg-red-300 relative overflow-x-scroll overflow-y-hidden"
        style={{ height: `${imageSectionHeight}px` }} // Dynamically set height
      >
        <div
          className="image-container aspect-image-container absolute left-0 top-0 bg-blue-400"
          style={{
            height: `${imageContainerHeight}px`, // Dynamically set height
            width: `${imageContainerWidth}%`, // Dynamically set width
          }}
        >
          <div className="image_wrapper zoomist-wrapper absolute inset-0">
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
