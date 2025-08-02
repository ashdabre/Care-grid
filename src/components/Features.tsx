import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Shield, MessageCircle, Calendar, Gamepad2, Users, MapPin, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI-Fraud Detection",
    subtitle: "Verified & Secure",
    description: "Advanced machine learning algorithms verify donor authenticity and detect fraudulent activities in real-time, ensuring only genuine donors participate in our platform.",
    details: [
      "Real-time identity verification using government databases",
      "Behavioral pattern analysis to detect suspicious activities", 
      "Multi-factor authentication with biometric confirmation",
      "Continuous monitoring and risk assessment"
    ]
  },
  {
    icon: MessageCircle,
    title: "Multilingual Voice Chatbot",
    subtitle: "WhatsApp + In-App Support",
    description: "Communicate in your preferred language through our intelligent voice and text chatbot, available 24/7 via WhatsApp and our mobile app.",
    details: [
      "Support for 12+ regional languages with voice recognition",
      "WhatsApp integration for seamless communication",
      "Natural language processing for complex medical queries",
      "Emergency response protocols with instant escalation"
    ]
  },
  {
    icon: Calendar,
    title: "Automated Pharmacy & Labs",
    subtitle: "Smart Healthcare Coordination",
    description: "Intelligent scheduling system automatically coordinates with pharmacies and laboratories based on your medical profile and location preferences.",
    details: [
      "Integration with 500+ pharmacies and medical labs",
      "Automated prescription delivery scheduling",
      "Lab appointment booking with optimal time slots",
      "Insurance verification and pre-authorization handling"
    ]
  },
  {
    icon: Gamepad2,
    title: "Gamification & Legacy Mode",
    subtitle: "Engaging Donor Experience",
    description: "Motivate donors through achievement systems, impact tracking, and legacy building features that showcase the lives they've helped save.",
    details: [
      "Achievement badges and milestone rewards",
      "Impact visualization with lives saved counter",
      "Legacy stories and testimonial collection",
      "Community leaderboards and social sharing"
    ]
  }
];

const integrations = [
  { name: "e-RaktKosh", description: "National blood bank database integration", status: "Active" },
  { name: "Google Maps", description: "Real-time location and routing services", status: "Active" },
  { name: "WhatsApp Business", description: "Automated messaging and support", status: "Active" },
  { name: "Local Medical Labs", description: "200+ partner laboratories nationwide", status: "Expanding" },
  { name: "Pharmacy Networks", description: "500+ connected pharmacies", status: "Active" },
  { name: "Emergency Services", description: "Direct connection to 108 ambulance", status: "Active" }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Advanced Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Powered by
            <span className="block text-gradient">Cutting-Edge Technology</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CareGrid combines artificial intelligence, real-time coordination, and community 
            engagement to revolutionize emergency blood delivery and healthcare access.
          </p>
        </div>

        {/* Features Accordion */}
        <div className="mb-20">
          <Accordion type="single" collapsible className="space-y-4">
            {features.map((feature, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="trust-card border-0 rounded-3xl overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline p-8 text-left">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-left">
                      <h3 className="text-2xl font-montserrat font-bold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {feature.subtitle}
                      </p>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-8 pb-8">
                  <div className="ml-22 space-y-4">
                    <h4 className="font-semibold text-foreground mb-3">Key Capabilities:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Partnerships & Integrations */}
        <div id="partnerships">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-accent-dark" />
              <span className="text-sm font-medium text-accent-dark">Partnerships & Integrations</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Trusted Healthcare Network
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CareGrid connects with leading healthcare providers, government databases, 
              and emergency services to ensure comprehensive care coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-6 hover:shadow-md smooth-transition">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-foreground">{integration.name}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    integration.status === 'Active' 
                      ? 'bg-success/10 text-success' 
                      : 'bg-accent/10 text-accent-dark'
                  }`}>
                    {integration.status}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    integration.status === 'Active' ? 'bg-success' : 'bg-accent'
                  } animate-pulse`}></div>
                  <span className="text-xs text-muted-foreground">
                    {integration.status === 'Active' ? 'Connected' : 'Expanding Coverage'}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
            <div className="text-muted-foreground">Verified Donors</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">8 min</div>
            <div className="text-muted-foreground">Avg Response Time</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">15</div>
            <div className="text-muted-foreground">Cities Covered</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-accent-dark" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-muted-foreground">Always Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;