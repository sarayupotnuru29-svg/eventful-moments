import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const featuredEvents = [
  {
    id: 1,
    title: "The Royal Wedding of Priya & Rahul",
    category: "Wedding Ceremony",
    description: "A magnificent celebration blending traditional elegance with modern sophistication. Over 500 guests witnessed this spectacular union featuring stunning mandap decorations, live orchestra, and a dreamy reception under the stars.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 2,
    title: "Tech Corp Annual Gala 2025",
    category: "Corporate Event",
    description: "An immersive corporate experience featuring cutting-edge stage design, professional lighting, and seamless coordination for 300+ executives. Complete with awards ceremony, networking sessions, and gala dinner.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 3,
    title: "Golden Anniversary Celebration",
    category: "Anniversary Party",
    description: "Celebrating 50 years of love with an intimate garden party for 150 family members. Vintage-themed décor, personalized touches, and an emotional timeline display honoring the couple's beautiful journey.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
  },
];

const FeaturedEventsSection = () => {
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Portfolio
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 gold-underline inline-block">
            Featured Events
          </h2>
          <p className="text-muted-foreground mt-10 leading-relaxed">
            Every event tells a unique story. Here are some of the memorable celebrations 
            we've had the privilege to create.
          </p>
        </div>

        {/* Featured Events */}
        <div className="space-y-16">
          {featuredEvents.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className={cn("relative", index % 2 === 1 && "lg:order-2")}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {event.category}
                </div>
              </div>

              {/* Content */}
              <div className={cn(index % 2 === 1 && "lg:order-1")}>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={WHATSAPP.getUrl(`Hello, I'm inspired by your ${event.category} work. I'd like to discuss a similar event.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Create Something Similar
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
