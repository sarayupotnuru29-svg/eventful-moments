import { useEffect, useRef, useState } from "react";
import { Clock, Calendar, Users, Award } from "lucide-react";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = [Clock, Calendar, Users, Award];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: string; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value);

  useEffect(() => {
    if (!isVisible || isNaN(numericValue)) return;

    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  if (isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-[90%] sm:max-w-none">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {STATS.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={stat.label}
                className={cn(
                  "text-center p-6 rounded-2xl bg-card shadow-elegant border border-border transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
