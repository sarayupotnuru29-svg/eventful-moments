import { useEffect, useRef, useState } from "react";
import { Headphones, Award, Sparkles, BadgeCheck, Clock, Layers } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: { [key: string]: any } = {
  headphones: Headphones,
  award: Award,
  sparkles: Sparkles,
  "badge-check": BadgeCheck,
  clock: Clock,
  layers: Layers,
};

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-[90%] sm:max-w-none">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Commitment
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 gold-underline inline-block">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground mt-10 leading-relaxed">
            We're committed to making your events extraordinary. Here's what sets us apart.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className={cn(
                  "group p-8 bg-card rounded-2xl shadow-elegant border border-border hover:border-primary/50 transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
