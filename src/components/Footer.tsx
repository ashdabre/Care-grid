import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import bloodIcon from "@/assets/blood-donation-icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <img 
                  src={bloodIcon} 
                  alt="CareGrid Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-montserrat font-bold">
                  CareGrid
                </h1>
                <div className="text-sm text-primary-foreground/70">ThalaBridge</div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Connecting patients in critical need with verified blood donors through 
              intelligent technology. Fast, secure, and life-saving healthcare delivery.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="font-medium">24/7 Emergency: 1-800-BLOOD</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>support@caregrid.health</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-success" />
                <span>15 cities across India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-montserrat font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#how-it-works" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                How It Works
              </a>
              <a href="#features" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Features
              </a>
              <a href="#partnerships" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Partnerships
              </a>
              <a href="#support" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Support
              </a>
              <a href="/donor-signup" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Become a Donor
              </a>
              <a href="/patient-signup" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Patient Registration
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-montserrat font-semibold">Services</h3>
            <nav className="space-y-3">
              <div className="text-primary-foreground/80">
                Emergency Blood Delivery
              </div>
              <div className="text-primary-foreground/80">
                Automated Medicine Scheduling
              </div>
              <div className="text-primary-foreground/80">
                Lab Appointment Coordination
              </div>
              <div className="text-primary-foreground/80">
                Donor Verification & Matching
              </div>
              <div className="text-primary-foreground/80">
                Multilingual Support
              </div>
              <div className="text-primary-foreground/80">
                Real-time Tracking
              </div>
            </nav>
          </div>

          {/* Legal & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-montserrat font-semibold">Legal & Connect</h3>
            
            <nav className="space-y-3">
              <a href="/privacy" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Terms of Service
              </a>
              <a href="/medical-disclaimer" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Medical Disclaimer
              </a>
              <a href="/data-security" className="block text-primary-foreground/80 hover:text-secondary smooth-transition">
                Data Security
              </a>
            </nav>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-secondary hover:bg-secondary/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-secondary hover:bg-secondary/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-secondary hover:bg-secondary/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-secondary hover:bg-secondary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="py-8 border-t border-primary-light/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-montserrat font-bold text-secondary mb-2">
                Medical Emergency?
              </h3>
              <p className="text-primary-foreground/80">
                Get immediate help through our 24/7 emergency response system
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="emergency-gradient text-white font-bold px-6 py-3 rounded-2xl">
                <Phone className="mr-2 h-4 w-4" />
                Call Emergency
              </Button>
              
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-3 rounded-2xl">
                <Heart className="mr-2 h-4 w-4" />
                Open SOS App
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-light/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <div className="flex items-center gap-4">
            <span>© 2024 CareGrid (ThalaBridge). All rights reserved.</span>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <span>Registered under the Ministry of Health & Family Welfare</span>
            <span>•</span>
            <span>ISO 27001 Certified</span>
            <span>•</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;