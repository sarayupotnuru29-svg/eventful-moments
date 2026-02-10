import { useEffect, useRef, useState } from "react";
import { MessageSquare, Lightbulb, Settings, Rocket, HeartHandshake } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = [MessageSquare, Lightbulb, Settings, Rocket, HeartHandshake];

const ProcessSection = () => {
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
    <section ref={sectionRef} className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-[90%] sm:max-w-none">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Approach
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 gold-underline inline-block">
            How We Work
          </h2>
          <p className="text-muted-foreground mt-10 leading-relaxed">
            Our streamlined process ensures your event is planned and executed flawlessly 
            from start to finish.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = icons[index % icons.length];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={cn(
                    "relative flex items-start gap-8 transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    "md:flex-row",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Icon Circle */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-lg">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={cn(
                      "ml-24 md:ml-0 md:w-[calc(50%-3rem)]",
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left md:ml-auto"
                    )}
                  >
                    <div className="bg-card p-6 rounded-2xl shadow-elegant border border-border hover:border-primary/30 transition-colors">
                      <div className={cn(
                        "flex items-center gap-3 mb-3",
                        isLeft ? "md:justify-end" : "md:justify-start"
                      )}>
                        <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
