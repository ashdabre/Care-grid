import { useState } from "react";
import { MessageCircle, Phone, Mail, ChevronDown, X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SupportChannelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  href?: string;
}

const SupportChannelCard = ({ icon, title, description, buttonText, onClick, href }: SupportChannelCardProps) => (
  <Card className="trust-card h-full">
    <CardHeader className="text-center pb-4">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <CardTitle className="text-xl font-montserrat">{title}</CardTitle>
      <CardDescription className="text-muted-foreground">{description}</CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      {href ? (
        <a href={href} className="block">
          <Button className="w-full primary-gradient text-white font-semibold" onClick={onClick}>
            {buttonText}
          </Button>
        </a>
      ) : (
        <Button className="w-full primary-gradient text-white font-semibold" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </CardContent>
  </Card>
);

interface ChatbotWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotWidget = ({ isOpen, onClose }: ChatbotWidgetProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-3xl shadow-2xl w-full max-w-md h-[500px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold">CareGrid Support</h3>
              <p className="text-sm text-muted-foreground">Online now</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Chat Content */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          <div className="bg-primary/10 rounded-2xl p-4">
            <p className="text-sm">👋 Hi! I'm your CareGrid assistant. How can I help you today?</p>
          </div>
          
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-left h-auto p-4" size="sm">
              🩸 Request emergency blood
            </Button>
            <Button variant="outline" className="w-full justify-start text-left h-auto p-4" size="sm">
              📋 Update medical history
            </Button>
            <Button variant="outline" className="w-full justify-start text-left h-auto p-4" size="sm">
              🏥 Find nearby hospitals
            </Button>
            <Button variant="outline" className="w-full justify-start text-left h-auto p-4" size="sm">
              ❓ Other questions
            </Button>
          </div>
        </div>

        {/* Input */}
        <div className="p-6 border-t border-border">
          <div className="flex gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button size="sm" className="primary-gradient text-white">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TicketFormProps {
  onSubmit: (data: any) => void;
  isSubmitting: boolean;
  isSuccess: boolean;
}

const TicketForm = ({ onSubmit, isSubmitting, isSuccess }: TicketFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to Terms & Privacy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <Card className="trust-card">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-xl font-montserrat font-semibold mb-2">Ticket Submitted!</h3>
          <p className="text-muted-foreground">
            Your support ticket has been submitted successfully. We'll reply within 2 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="trust-card">
      <CardHeader>
        <CardTitle className="text-2xl font-montserrat">Submit a Support Ticket</CardTitle>
        <CardDescription>
          Describe your issue and we'll get back to you within 2 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your full name"
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject *</label>
            <Input
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              placeholder="Brief description of your issue"
              className={errors.subject ? 'border-destructive' : ''}
            />
            {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message * (min. 20 characters)</label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Please describe your issue in detail..."
              rows={5}
              className={errors.message ? 'border-destructive' : ''}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              <p className="text-sm text-muted-foreground ml-auto">
                {formData.message.length}/20 characters
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
            />
            <label htmlFor="terms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">Terms & Privacy Policy</a>
            </label>
          </div>
          {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms}</p>}

          <Button
            type="submit"
            className="w-full primary-gradient text-white font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const faqData = [
  {
    question: "How do I request emergency blood?",
    answer: "Click the red SOS button on any page or dial our emergency hotline at +91-800-BLOOD. Our AI system will immediately connect you with the nearest verified donors and coordinate delivery within 15-30 minutes."
  },
  {
    question: "How do I update my medical history?",
    answer: "Log into your patient dashboard and navigate to 'Medical Profile'. You can upload new reports, update allergies, medications, and blood type information. All data is encrypted and verified by our medical team."
  },
  {
    question: "What documents do I need to become a donor?",
    answer: "You'll need a government-issued ID, recent blood test results (within 3 months), and completion of our health questionnaire. Our verification process takes 24-48 hours for your safety and recipients' safety."
  },
  {
    question: "How does the AI fraud detection work?",
    answer: "Our system uses machine learning to verify requests in real-time by cross-referencing medical history, location data, hospital partnerships, and previous donation patterns to ensure legitimate emergency needs."
  },
  {
    question: "Can I schedule regular medication deliveries?",
    answer: "Yes! Our automated pharmacy integration allows you to set up recurring prescriptions. We partner with local pharmacies to ensure timely delivery and medication management."
  },
  {
    question: "What languages does the chatbot support?",
    answer: "Our multilingual voice chatbot supports Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, and Kannada. It's available 24/7 via WhatsApp and in-app messaging."
  },
  {
    question: "How do I track my impact as a donor?",
    answer: "Your donor dashboard shows your donation history, lives saved, impact cards, and gamification points. You can share your impact on social media and receive 'Letters of Life' from recipients."
  },
  {
    question: "Is my medical data secure?",
    answer: "Absolutely. We use bank-level encryption, comply with healthcare data protection laws, and never share personal information without explicit consent. All data is stored securely with multiple backup systems."
  }
];

const Support = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
    // TODO: Replace with real chat integration
    console.log('Opening chat widget...');
  };

  const handleCall = () => {
    // TODO: Replace with real phone call tracking
    console.log('Initiating phone call...');
  };

  const scrollToTicketForm = () => {
    const element = document.getElementById('ticket-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitTicket = async (formData: any) => {
    setIsSubmitting(true);
    
    // TODO: Replace with real API call
    console.log('Submitting ticket:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="support" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            We're Here to Help
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            24/7 patient & donor support—any question, any time.
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <SupportChannelCard
            icon={<MessageCircle size={32} />}
            title="Start a Chat"
            description="Instant answers via WhatsApp or in-app bot."
            buttonText="Chat Now"
            onClick={handleChatOpen}
          />
          
          <SupportChannelCard
            icon={<Phone size={32} />}
            title="Call Us"
            description="Speak to a care coordinator."
            buttonText="Call +91-800-BLOOD"
            onClick={handleCall}
            href="tel:+91800BLOOD"
          />
          
          <SupportChannelCard
            icon={<Mail size={32} />}
            title="Send Email"
            description="Submit a support ticket and we'll reply within 2 hrs."
            buttonText="Submit a Ticket"
            onClick={scrollToTicketForm}
          />
        </div>

        {/* FAQ Accordion */}
        <div className="mb-20">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="trust-card border-0"
                >
                  <AccordionTrigger className="text-left font-montserrat font-semibold hover:no-underline px-6 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Ticket Submission Form */}
        <div id="ticket-form" className="max-w-2xl mx-auto">
          <TicketForm
            onSubmit={handleSubmitTicket}
            isSubmitting={isSubmitting}
            isSuccess={isSuccess}
          />
        </div>
      </div>

      {/* Chat Widget Modal */}
      <ChatbotWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
};

export default Support;