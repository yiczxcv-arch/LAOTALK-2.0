"use client";

import { useState } from "react";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { cn } from "@/lib/utils";

type ImageSliderProps = {
  images: string[];
  alt: string;
  className?: string;
};

/** 상세 페이지 이미지 슬라이더 — 이미지 + 카운터 + 인디케이터 (design/wireframe 7번.png "03 ACTIVITY(상세)") */
function ImageSlider({ images, alt, className }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return <ImagePlaceholder ratio="4:3" className={className} />;
  }

  return (
    <div className={cn("relative aspect-[4/3] w-full overflow-hidden bg-surface", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={images[index]} alt={alt} className="size-full object-cover" />

      {images.length > 1 && (
        <>
          <span className="absolute right-4 top-4 rounded-full bg-black/45 px-2.5 py-1 text-caption2 font-medium text-white backdrop-blur-sm">
            {index + 1}/{images.length}
          </span>
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                aria-label={`${i + 1}번째 이미지로 이동`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full shadow-sm transition-all",
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/55",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export { ImageSlider };
