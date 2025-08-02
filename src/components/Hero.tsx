import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-healthcare.jpg";
import { Heart, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Healthcare professional with delivery kit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white border border-white/20">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Life-Saving Technology</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-montserrat font-bold text-white leading-tight">
                Life-Saving
                <span className="block text-gradient">Blood,</span>
                <span className="block">On-Demand.</span>
              </h1>
              
              <p className="text-xl text-white/90 font-inter leading-relaxed max-w-2xl">
                Connect patients in critical need with verified blood donors through our intelligent platform. 
                Fast, secure, and life-saving healthcare delivery at your fingertips.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="emergency-gradient text-white font-bold text-lg px-8 py-4 hover:scale-105 smooth-transition rounded-2xl shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Help Now
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-4 rounded-2xl"
              >
                <Heart className="mr-2 h-5 w-5" />
                Become a Donor
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI-Verified Donors</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">24/7 Emergency Response</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Real-time Tracking</span>
              </div>
            </div>
          </div>

          {/* Emergency SOS Card */}
          <div className="lg:justify-self-end">
            <div className="glass-card max-w-md mx-auto space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                  Emergency SOS
                </h3>
                <p className="text-white/80 text-sm">
                  Critical blood needed? Get help instantly.
                </p>
              </div>
              
              <div className="relative flex justify-center">
                <div className="pulse-ring"></div>
                <button className="sos-button relative z-10 flex items-center justify-center">
                  SOS
                </button>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-xs text-white/70">
                  Average response time: <span className="font-bold text-accent">8 minutes</span>
                </p>
                <div className="flex justify-center gap-4 text-xs text-white/60">
                  <span>✓ Verified Donors</span>
                  <span>✓ Real-time GPS</span>
                  <span>✓ Secure Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;