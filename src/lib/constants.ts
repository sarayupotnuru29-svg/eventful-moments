// Business Information
export const BUSINESS_NAME = "Jai Anjaniputra Event Management";
export const BUSINESS_TAGLINE = "Creating Moments. Delivering Memories.";

export const CONTACT = {
  phone: "7406939799",
  phoneFormatted: "+91 74069 39799",
  email: "jaianjaniputraeventmanagement@gmail.com",
  address: {
    line1: "#16 Shakambari Layout",
    line2: "Behind St Philomenas High School",
    line3: "Manchenahalli Road, Attibele",
    line4: "Anekal (T), Bangalore (D) – 562107",
    full: "#16 Shakambari Layout, Behind St Philomenas High School, Manchenahalli Road, Attibele, Anekal (T), Bangalore (D) – 562107",
  },
  hours: "Monday to Sunday – Open 24 Hours",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.0244372619957!2d77.76877!3d12.7786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ2JzQzLjAiTiA3N8KwNDYnMDcuNiJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
  mapUrl: "https://maps.google.com/?q=12.7786,77.76877",
};

// WhatsApp Configuration
export const WHATSAPP = {
  number: "917406939799",
  message: "Hello, I'm interested in your event management services.",
  getUrl: (customMessage?: string) => {
    const message = encodeURIComponent(customMessage || WHATSAPP.message);
    return `https://wa.me/${WHATSAPP.number}?text=${message}`;
  },
};

// Services
export const SERVICES = [
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    description: "Complete wedding planning from concept to execution, ensuring your special day is perfect in every detail.",
    icon: "heart",
  },
  {
    id: "wedding-reception",
    title: "Wedding Reception",
    description: "Elegant reception arrangements with stunning décor, catering, and entertainment for unforgettable celebrations.",
    icon: "party-popper",
  },
  {
    id: "engagement-ceremony",
    title: "Engagement Ceremony",
    description: "Beautiful engagement ceremonies that mark the beginning of your journey together with style and elegance.",
    icon: "gem",
  },
  {
    id: "birthday-parties",
    title: "Birthday Parties",
    description: "Creative and fun birthday celebrations for all ages, with themes, decorations, and entertainment.",
    icon: "cake",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    description: "Professional corporate event management including conferences, seminars, and team-building activities.",
    icon: "briefcase",
  },
  {
    id: "photography-videography",
    title: "Photography & Videography",
    description: "Capture every precious moment with our professional photography and cinematic videography services.",
    icon: "camera",
  },
  {
    id: "pre-wedding-shoot",
    title: "Pre-Wedding Shoot",
    description: "Romantic pre-wedding photoshoots at stunning locations to capture your love story beautifully.",
    icon: "image",
  },
  {
    id: "stage-decoration",
    title: "Stage Decoration",
    description: "Breathtaking stage designs that create the perfect backdrop for your most important moments.",
    icon: "sparkles",
  },
  {
    id: "flower-decoration",
    title: "Flower Decoration",
    description: "Exquisite floral arrangements that add natural beauty and elegance to your event venue.",
    icon: "flower",
  },
  {
    id: "catering-services",
    title: "Catering Services",
    description: "Delicious multi-cuisine catering with customized menus to delight your guests' palates.",
    icon: "utensils",
  },
  {
    id: "lighting-sound",
    title: "Lighting & Sound Setup",
    description: "Professional audio-visual setups with ambient lighting to create the perfect atmosphere.",
    icon: "lightbulb",
  },
  {
    id: "dj-entertainment",
    title: "DJ & Entertainment",
    description: "High-energy entertainment with professional DJs, live performances, and engaging activities.",
    icon: "music",
  },
  {
    id: "theme-decorations",
    title: "Traditional & Theme Decorations",
    description: "Custom themed décor that transforms venues into magical settings for any occasion.",
    icon: "palette",
  },
  {
    id: "housewarming",
    title: "Housewarming Events",
    description: "Auspicious housewarming ceremonies with traditional rituals and elegant arrangements.",
    icon: "home",
  },
  {
    id: "anniversary",
    title: "Anniversary Celebrations",
    description: "Romantic anniversary celebrations that honor your journey and create new memories.",
    icon: "heart-handshake",
  },
  {
    id: "cultural-religious",
    title: "Cultural & Religious Events",
    description: "Respectful organization of cultural and religious ceremonies with attention to traditions.",
    icon: "star",
  },
];

// Stats
export const STATS = [
  { label: "Customer Support", value: "24/7", suffix: "" },
  { label: "Events Managed", value: "100", suffix: "+" },
  { label: "Client Satisfaction", value: "100", suffix: "%" },
  { label: "Expert Team Members", value: "25", suffix: "+" },
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  {
    title: "24/7 Customer Service",
    description: "Round-the-clock support ensuring your queries and concerns are addressed promptly, any time of day or night.",
    icon: "headphones",
  },
  {
    title: "Experienced Professionals",
    description: "Our team brings years of expertise in event management, guaranteeing flawless execution every time.",
    icon: "award",
  },
  {
    title: "Premium Decorations",
    description: "Customized, high-quality decorations that transform venues into stunning visual experiences.",
    icon: "sparkles",
  },
  {
    title: "Transparent Pricing",
    description: "Clear, honest pricing with no hidden costs. We work within your budget without compromising quality.",
    icon: "badge-check",
  },
  {
    title: "Timely Execution",
    description: "Punctual delivery and execution of all event elements, ensuring everything runs smoothly on schedule.",
    icon: "clock",
  },
  {
    title: "One-Stop Solution",
    description: "Complete event management under one roof – from planning to execution, we handle everything.",
    icon: "layers",
  },
];

// Process Steps
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Understanding Requirements",
    description: "We begin with a detailed consultation to understand your vision, preferences, and expectations for the perfect event.",
  },
  {
    step: 2,
    title: "Creative Planning & Design",
    description: "Our creative team develops unique concepts and designs tailored specifically to bring your dream event to life.",
  },
  {
    step: 3,
    title: "Budget-Friendly Customization",
    description: "We work with you to customize every element within your budget, ensuring value without compromising on quality.",
  },
  {
    step: 4,
    title: "Flawless Event Execution",
    description: "On the big day, our team ensures seamless coordination and execution of every planned detail.",
  },
  {
    step: 5,
    title: "Post-Event Support",
    description: "Our service extends beyond the event with follow-up support and assistance for any post-event requirements.",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding Ceremony",
    rating: 5,
    text: "Jai Anjaniputra made our wedding absolutely magical! Every detail was perfect, from the stunning decorations to the seamless coordination. We couldn't have asked for a better team.",
  },
  {
    name: "Suresh Kumar",
    event: "Corporate Annual Day",
    rating: 5,
    text: "Professional, punctual, and perfect execution. Our company's annual day was a huge success thanks to their meticulous planning and creative ideas.",
  },
  {
    name: "Meena & Family",
    event: "Housewarming Ceremony",
    rating: 5,
    text: "The team handled our housewarming with such care and attention to our traditions. The decorations were beautiful and everything was arranged perfectly.",
  },
  {
    name: "Arun Reddy",
    event: "50th Birthday Celebration",
    rating: 5,
    text: "They turned my father's 50th birthday into an unforgettable celebration. The theme, food, and entertainment were all top-notch. Highly recommended!",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// Social Links (placeholders)
export const SOCIAL_LINKS = [
  { name: "Facebook", url: "#", icon: "facebook" },
  { name: "Instagram", url: "#", icon: "instagram" },
  { name: "LinkedIn", url: "#", icon: "linkedin" },
];
