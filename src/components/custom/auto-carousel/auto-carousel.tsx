"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { slides } from "./carousel-slide-data";
import { Illustration } from "./illustrations";

export function AutoCarousel({ className }: { className?: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          )}
        >
          <div
            className={cn(
              "h-full w-full flex flex-col items-center justify-center p-8",
              slide.backgroundColor
            )}
          >
            <div className="flex-1 flex items-center justify-center mb-8">
              <Illustration type={slide.illustration} />
            </div>

            <div className="text-center space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{slide.title}</h2>
                <p className="text-xl font-semibold text-gray-700">{slide.subtitle}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {slide.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/70 rounded-full text-xs font-medium text-gray-700">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-gray-800 w-6" : "bg-gray-400"
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
