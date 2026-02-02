import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", category: "Weddings" },
  { url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80", category: "Stage Decorations" },
  { url: "https://images.unsplash.com/photo-1561128290-006dc4827214?w=600&q=80", category: "Floral Arrangements" },
  { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", category: "Weddings" },
  { url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80", category: "Photography" },
  { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80", category: "Stage Decorations" },
  { url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", category: "Cultural Events" },
  { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80", category: "Weddings" },
  { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", category: "Corporate" },
  { url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80", category: "Photography" },
  { url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80", category: "Cultural Events" },
  { url: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80", category: "Floral Arrangements" },
];

const categories = ["All", "Weddings", "Stage Decorations", "Floral Arrangements", "Photography", "Cultural Events", "Corporate"];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 gold-underline inline-block">
            Event Gallery
          </h2>
          <p className="text-muted-foreground mt-10 leading-relaxed">
            Browse through our collection of beautifully crafted events and celebrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setLightboxImage(image.url.replace("w=600", "w=1200"))}
              className={cn(
                "relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              )}
              style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
            >
              <img
                src={image.url}
                alt={image.category}
                className={cn(
                  "w-full object-cover group-hover:scale-110 transition-transform duration-500",
                  index === 0 || index === 5 ? "h-full min-h-[300px]" : "h-48 md:h-56"
                )}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {image.category}
                </span>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
