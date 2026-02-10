import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-[90%] sm:max-w-none">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={cn(
              "relative transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                alt="Elegant wedding setup"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <p className="font-heading text-3xl font-bold">100+</p>
              <p className="text-sm opacity-90">Events Delivered</p>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Celebrations
              <span className="text-gold-gradient block">Since Day One</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Jai Anjaniputra Event Management</strong> is a professional 
                event management company dedicated to delivering memorable, elegant, and perfectly 
                executed events. From intimate family gatherings to grand celebrations, we transform 
                ideas into reality with creativity, precision, and passion.
              </p>
              <p>
                We specialize in complete event planning, design, coordination, and execution, 
                ensuring every detail is managed seamlessly. Our team focuses on quality, elegance, 
                and customer satisfaction, making every event a stress-free and joyful experience 
                for our clients.
              </p>
              <p>
                Whether it's a traditional wedding, a corporate gala, or a milestone celebration, 
                we bring your vision to life with meticulous attention to detail and unwavering 
                commitment to excellence.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                "Professional Team",
                "24/7 Support",
                "Custom Designs",
                "Budget Friendly",
              ].map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-2"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
