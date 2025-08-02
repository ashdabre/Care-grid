import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Globe, Phone } from "lucide-react";
import bloodIcon from "@/assets/blood-donation-icon.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "Support", href: "#support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <img 
                src={bloodIcon} 
                alt="CareGrid Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-montserrat font-bold text-primary">
                CareGrid
              </h1>
              <div className="text-xs text-muted-foreground -mt-1">ThalaBridge</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium smooth-transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="w-4 h-4" />
              EN
            </Button>

            {/* Emergency Hotline */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-secondary" />
              <span className="font-medium">24/7: 1-800-BLOOD</span>
            </div>

            {/* Auth Buttons */}
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            
            <Button size="sm" className="primary-gradient text-white font-semibold gap-2">
              <Heart className="w-4 h-4" />
              Become Donor
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary font-medium py-2 smooth-transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Emergency Hotline */}
              <div className="flex items-center gap-2 py-2 border-t border-border">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Emergency: 1-800-BLOOD</span>
              </div>

              {/* Mobile Actions */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    English
                  </Button>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    Sign In
                  </Button>
                  
                  <Button size="sm" className="flex-1 primary-gradient text-white font-semibold gap-2">
                    <Heart className="w-4 h-4" />
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;