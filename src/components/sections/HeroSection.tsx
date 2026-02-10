import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, BUSINESS_TAGLINE, WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    alt: "Elegant wedding ceremony with beautiful decorations",
  },
  {
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
    alt: "Grand wedding reception with stunning lighting",
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80",
    alt: "Beautiful floral decorations at a wedding venue",
  },
  {
    url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=80",
    alt: "Luxurious event setup with elegant décor",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          )}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay - Consistent dark overlay for text visibility in both themes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Gold Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            fill="currentColor"
            d="M0,100 Q50,0 100,100 T200,100"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            fill="currentColor"
            d="M0,100 Q50,0 100,100 T200,100"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Tagline */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm md:text-base mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            {BUSINESS_TAGLINE}
          </p>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in opacity-0 text-balance max-w-5xl mx-auto leading-tight" style={{ animationDelay: "0.4s" }}>
            Turning Your Events Into{" "}
            <span className="text-gold-gradient">Timeless Experiences</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            From intimate gatherings to grand celebrations, we transform your dreams into 
            reality with creativity, precision, and passion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-14 px-8 text-lg shadow-lg"
            >
              <a href={WHATSAPP.getUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Enquire Now
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white gap-2 h-14 px-8 text-lg backdrop-blur-sm"
            >
              View Our Services
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 800);
                  }
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/50 hover:bg-white/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



// import { useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight, MessageCircle, ArrowDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { BUSINESS_TAGLINE, WHATSAPP } from "@/lib/constants";
// import { cn } from "@/lib/utils";

// const heroImages = [
//   {
//     url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
//     alt: "Elegant wedding ceremony with beautiful decorations",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
//     alt: "Grand wedding reception with stunning lighting",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80",
//     alt: "Beautiful floral decorations at a wedding venue",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=80",
//     alt: "Luxurious event setup with elegant décor",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     setTimeout(() => setIsAnimating(false), 800);
//   }, [isAnimating]);

//   const prevSlide = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
//     setTimeout(() => setIsAnimating(false), 800);
//   }, [isAnimating]);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   const scrollToServices = () => {
//     document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-[100svh] md:min-h-screen overflow-hidden"
//     >
//       {/* Background Slides */}
//       {heroImages.map((image, index) => (
//         <div
//           key={index}
//           className={cn(
//             "absolute inset-0 transition-all duration-1000 ease-in-out",
//             index === currentSlide
//               ? "opacity-100 scale-100"
//               : "opacity-0 scale-105"
//           )}
//         >
//           <img
//             src={image.url}
//             alt={image.alt}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-primary tracking-widest uppercase text-xs sm:text-sm mb-3">
//             {BUSINESS_TAGLINE}
//           </p>

//           <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-5 max-w-5xl mx-auto leading-tight">
//             Turning Your Events Into{" "}
//             <span className="text-gold-gradient">Timeless Experiences</span>
//           </h1>

//           <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
//             From intimate gatherings to grand celebrations, we transform your dreams
//             into reality with creativity, precision, and passion.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Button
//               asChild
//               size="lg"
//               className="bg-primary hover:bg-primary/90 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
//             >
//               <a href={WHATSAPP.getUrl()} target="_blank" rel="noopener noreferrer">
//                 <MessageCircle className="h-5 w-5 mr-2" />
//                 Enquire Now
//               </a>
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               onClick={scrollToServices}
//               className="border-white/30 bg-white/10 text-white hover:bg-white/20 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
//             >
//               View Our Services
//               <ArrowDown className="h-5 w-5 ml-2" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Carousel Controls */}
//       <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-20">
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           <div className="flex gap-2">
//             <button
//               onClick={prevSlide}
//               className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-white/10 text-white"
//             >
//               <ChevronLeft />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-white/10 text-white"
//             >
//               <ChevronRight />
//             </button>
//           </div>

//           <div className="flex gap-2">
//             {heroImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={cn(
//                   "h-2 rounded-full transition-all",
//                   index === currentSlide
//                     ? "w-6 bg-primary"
//                     : "w-2 bg-white/50"
//                 )}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
