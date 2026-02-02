import { useEffect, useRef, useState } from "react";
import { MessageCircle, Heart, PartyPopper, Gem, Cake, Briefcase, Camera, Image, Sparkles, Flower, UtensilsCrossed, Lightbulb, Music, Palette, Home, HeartHandshake, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: { [key: string]: any } = {
  heart: Heart,
  "party-popper": PartyPopper,
  gem: Gem,
  cake: Cake,
  briefcase: Briefcase,
  camera: Camera,
  image: Image,
  sparkles: Sparkles,
  flower: Flower,
  utensils: UtensilsCrossed,
  lightbulb: Lightbulb,
  music: Music,
  palette: Palette,
  home: Home,
  "heart-handshake": HeartHandshake,
  star: Star,
};

const serviceImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80",
  "https://images.unsplash.com/photo-1561128290-006dc4827214?w=600&q=80",
  "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80",
];

const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 gold-underline inline-block">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground mt-10 leading-relaxed">
            From concept to execution, we offer comprehensive event management services 
            tailored to your unique vision and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Star;
            return (
              <div
                key={service.id}
                className={cn(
                  "group bg-card rounded-2xl overflow-hidden shadow-elegant card-hover-gold transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={serviceImages[index % serviceImages.length]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground group-hover:border-primary"
                  >
                    <a
                      href={WHATSAPP.getUrl(`Hello, I'm interested in your ${service.title} service.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Enquire Now
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
