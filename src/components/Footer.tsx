import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_NAME, BUSINESS_TAGLINE, CONTACT, NAV_LINKS, SERVICES, SOCIAL_LINKS, WHATSAPP } from "@/lib/constants";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook":
        return <Facebook className="h-5 w-5" />;
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-xl font-bold">
                  JA
                </span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">
                  Jai Anjaniputra
                </h3>
                <p className="text-xs text-muted-foreground">Event Management</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {BUSINESS_TAGLINE}. We specialize in creating unforgettable events 
              with creativity, precision, and passion.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">
              Our Services
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {SERVICES.slice(0, 8).map((service) => (
                <span
                  key={service.id}
                  className="text-muted-foreground text-sm"
                >
                  {service.title}
                </span>
              ))}
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#services");
                }}
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                View All Services →
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{CONTACT.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm break-all">{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  {CONTACT.address.line1}, {CONTACT.address.line2}, {CONTACT.address.line3}
                </span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{CONTACT.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2026 {BUSINESS_NAME}. All Rights Reserved.
            </p>
            <a
              href={WHATSAPP.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Chat with us on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
