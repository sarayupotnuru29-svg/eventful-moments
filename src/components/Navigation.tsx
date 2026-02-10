import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/ThemeProvider";
import { BUSINESS_NAME, NAV_LINKS, WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading text-xl font-bold">
                JA
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-semibold text-foreground leading-tight">
                Jai Anjaniputra
              </h1>
              <p className="text-xs text-muted-foreground">Event Management</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* WhatsApp CTA - Desktop */}
            <Button
              asChild
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <a href={WHATSAPP.getUrl()} target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                Enquire Now
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background border-l border-primary/20">
                <div className="flex flex-col h-full pt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-8 px-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-heading text-lg font-bold">
                        JA
                      </span>
                    </div>
                    <div>
                      <h2 className="font-heading text-base font-semibold">
                        {BUSINESS_NAME}
                      </h2>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-2">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="px-4 py-4 text-lg font-medium text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-auto pb-8">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-14 text-base"
                    >
                      <a href={WHATSAPP.getUrl()} target="_blank" rel="noopener noreferrer">
                        <Phone className="h-5 w-5" />
                        Enquire on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
