import { Button } from "@/components/ui/button";
import { Phone, Calendar, Users, Shield, MessageCircle, MapPin } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Request SOS Blood",
    description: "Tap the SOS button or call our 24/7 helpline. Our AI instantly verifies your emergency and connects you with nearby verified donors.",
    features: ["Instant verification", "AI fraud detection", "Multi-language support"]
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Our system automatically schedules medicine delivery and lab appointments based on your medical profile and location.",
    features: ["Smart scheduling", "Pharmacy integration", "Lab coordination"]
  },
  {
    icon: Users,
    title: "Community & Letters of Life",
    description: "Connect with your donor community, share your recovery story, and create lasting bonds through our Letters of Life program.",
    features: ["Donor matching", "Story sharing", "Impact tracking"]
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">How CareGrid Works</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Three Simple Steps to
            <span className="block text-gradient">Save Lives</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our intelligent platform streamlines emergency blood delivery through verified donors, 
            automated healthcare coordination, and community support.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="trust-card group hover:scale-105 smooth-transition">
              {/* Step Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full primary-gradient flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <step.icon className="w-8 h-8 text-primary group-hover:text-secondary smooth-transition" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-montserrat font-bold text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 smooth-transition">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-card rounded-2xl p-6 border hover:shadow-md smooth-transition">
            <MessageCircle className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-semibold text-foreground mb-2">WhatsApp Bot</h4>
            <p className="text-sm text-muted-foreground">Voice & text support in your language</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 border hover:shadow-md smooth-transition">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-semibold text-foreground mb-2">AI Security</h4>
            <p className="text-sm text-muted-foreground">Advanced fraud detection & verification</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 border hover:shadow-md smooth-transition">
            <MapPin className="w-8 h-8 text-success mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Live Tracking</h4>
            <p className="text-sm text-muted-foreground">Real-time delivery monitoring</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 border hover:shadow-md smooth-transition">
            <Users className="w-8 h-8 text-secondary mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Community</h4>
            <p className="text-sm text-muted-foreground">Connect with donors & recipients</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="primary-gradient text-white font-bold text-lg px-8 py-4 rounded-2xl">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;