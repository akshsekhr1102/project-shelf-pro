
import { AutoCarousel } from "@/components/custom/auto-carousel/auto-carousel";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  carouselPosition?: "left" | "right";
}


  

export default function AuthLayout({ 
  children,
  carouselPosition = "right" 
}: AuthLayoutProps) {
  const isCarouselLeft = carouselPosition === "left";
  
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Conditional Carousel */}
      {isCarouselLeft && (
        <div className="hidden lg:block">
          <AutoCarousel  />
        </div>
      )}

      {/* Main content - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right side - Conditional Carousel */}
      {!isCarouselLeft && (
        <div className="hidden lg:block">
          <AutoCarousel  />
        </div>
      )}
    </div>
  );
}