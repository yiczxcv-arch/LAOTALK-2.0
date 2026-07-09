"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/components/home/data";
import { cn } from "@/lib/utils";

/** 히어로 배너 슬라이더 — 375x220, radius 20, 인디케이터 4개 (design/mockup 9번.png "02 히어로 배너") */
function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <div className="px-4 pt-4">
      <div className="relative h-[220px] animate-in overflow-hidden rounded-[20px] fade-in shadow-[0_12px_28px_rgba(17,24,39,0.22)] duration-700 sm:h-[260px] lg:h-[320px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.imageSrc}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 size-full scale-[1.06] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/35" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <span className="absolute right-4 top-4 rounded-full bg-black/45 px-2.5 py-1 text-caption2 font-medium text-white backdrop-blur-sm">
          {index + 1}/{heroSlides.length}
        </span>

        <div className="absolute inset-x-0 bottom-9 px-5 text-white">
          <h1 className="whitespace-pre-line text-title1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            {slide.title}
          </h1>
          <p className="mt-2 text-body1 font-medium text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            {slide.subtitle}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-4 flex justify-center">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`${i + 1}번째 배너로 이동`}
              onClick={() => setIndex(i)}
              className="flex items-center justify-center p-1.5"
            >
              <span
                className={cn(
                  "h-1.5 rounded-full shadow-sm transition-all",
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/55",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { HeroBanner };
