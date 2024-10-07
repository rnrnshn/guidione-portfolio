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
    <div className="relative w-full mb-4">
      <div
        ref={zoomRef}
        className="image-section w-full bg-red-300 relative overflow-x-scroll overflow-y-hidden"
        style={{
          height: "auto", // For mobile (default)
          minHeight: "300px", // Ensuring a minimum height on mobile
        }}
      >
        <div
          className="zoomist-container image-container absolute left-0 top-0 bg-blue-400"
          style={{
            height: "100%", // For mobile (default)
            width: `${imageContainerWidth}%`,
          }}
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

      {/* Tailwind responsive styling */}
      <style jsx>{`
        @media (min-width: 640px) {
          .image-section {
            height: ${imageSectionHeight}px; /* For larger screens */
          }
          .image-container {
            height: ${imageContainerHeight}px; /* For larger screens */
          }
        }
      `}</style>
    </div>
  );
};
