import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/** * SAFE LOADING TECHNIQUE
 * This prevents the "Blank Page" by using Vite's glob import.
 * It looks for ALL jpegs in your assets folder automatically.
 */
const allAssets = import.meta.glob('@/assets/*.{jpeg,jpg,png,JPG,JPEG}', { eager: true });

const GallerySection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  // Categories updated to include Corporate Events
  const categories = [
    "All", 
    "Corporate Events", 
    "Haldi Function", 
    "Birthday", 
    "Naming Ceremony", 
    "Reception", 
    "Wedding"
  ];

  // Mapping the files to your specific categories based on their filenames
  const galleryImages = Object.keys(allAssets).map((path) => {
    const fileName = path.split('/').pop().toLowerCase();
    let category = "Other";

    // Logic to detect the category from the filename
    if (fileName.includes("corporate")) category = "Corporate Events";
    else if (fileName.includes("haldhi")) category = "Haldi Function";
    else if (fileName.includes("birthday")) category = "Birthday";
    else if (fileName.includes("naming")) category = "Naming Ceremony";
    else if (fileName.includes("reception")) category = "Reception";
    else if (fileName.includes("wedding")) category = "Wedding";

    return {
      url: allAssets[path].default || allAssets[path],
      category: category
    };
  }).filter(img => img.category !== "Other"); // Filter out images that don't match our categories

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 sm:py-24 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-[90%] sm:max-w-none">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 gold-underline inline-block">
            Event Gallery
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                selectedCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-card text-foreground hover:bg-primary/10 border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setLightboxImage(image.url)}
                className={cn(
                  "relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
                  index % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""
                )}
              >
                <img
                  src={image.url}
                  alt={image.category}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover group-hover:scale-110 transition-transform duration-500",
                    index % 7 === 0 ? "h-full min-h-[300px]" : "h-44 sm:h-64"
                  )}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                   <span className="bg-primary text-white px-3 py-1 rounded-full text-xs uppercase font-bold tracking-wider">
                     {image.category}
                   </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              No images found for this category.
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300" 
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={lightboxImage} 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain" 
            alt="Full view" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;