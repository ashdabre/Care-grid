import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Star, Quote } from "lucide-react";

const testimonials = [
  {
    type: "patient",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra", 
    condition: "Thalassemia Major",
    quote: "CareGrid saved my life when I had a severe crisis at 2 AM. The donor reached me in 6 minutes, and the platform connected me with the nearest blood bank instantly.",
    impact: "Received emergency blood transfusion",
    rating: 5,
    verified: true
  },
  {
    type: "donor",
    name: "Dr. Rajesh Kumar",
    location: "Delhi, NCR",
    profession: "Cardiologist",
    quote: "As a medical professional, I appreciate CareGrid's verification system. It ensures my donations reach genuine patients, and I can track the real impact of my contributions.",
    impact: "12 lives saved through donations",
    rating: 5,
    verified: true
  },
  {
    type: "patient",
    name: "Anita Patel",
    location: "Ahmedabad, Gujarat",
    condition: "Chronic Anemia",
    quote: "The multilingual WhatsApp support helped my grandmother communicate in Gujarati during an emergency. The AI chatbot understood her perfectly and arranged everything.",
    impact: "Regular automated scheduling setup",
    rating: 5,
    verified: true
  },
  {
    type: "donor",
    name: "Mohammed Ali",
    location: "Hyderabad, Telangana", 
    profession: "Software Engineer",
    quote: "The gamification features motivate me to donate regularly. Seeing my impact card showing 8 lives saved gives me immense satisfaction and purpose.",
    impact: "8 lives saved this year",
    rating: 5,
    verified: true
  },
  {
    type: "patient",
    name: "Sarah Joseph",
    location: "Kochi, Kerala",
    condition: "Beta Thalassemia",
    quote: "CareGrid's automated pharmacy integration is amazing. My chelation therapy medications are delivered on time, and lab appointments are perfectly coordinated.",
    impact: "Seamless treatment coordination",
    rating: 5,
    verified: true
  }
];

const lettersOfLife = [
  {
    patientName: "Arjun",
    donorName: "Meera",
    location: "Bangalore",
    preview: "Dear Meera, because of your donation, I was able to see my daughter's first birthday...",
    artworkColor: "from-secondary to-destructive"
  },
  {
    patientName: "Kavya",
    donorName: "Vikram",
    location: "Chennai", 
    preview: "Thank you Vikram, your blood gave me strength to complete my engineering degree...",
    artworkColor: "from-primary to-accent"
  },
  {
    patientName: "Rohan",
    donorName: "Priya",
    location: "Pune",
    preview: "Priya, your kindness during my cancer treatment gave me hope when I needed it most...",
    artworkColor: "from-success to-primary"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Real Stories, Real Impact</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Voices from Our
            <span className="block text-gradient">CareGrid Community</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from patients and donors whose lives have been transformed through 
            our platform's life-saving connections and innovative healthcare solutions.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12">
              <div className="flex items-start gap-6">
                <Quote className="w-12 h-12 text-primary/20 flex-shrink-0" />
                
                <div className="space-y-6">
                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-accent text-accent" 
                      />
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-border">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-foreground text-lg">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        {testimonials[currentTestimonial].verified && (
                          <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          testimonials[currentTestimonial].type === 'patient' 
                            ? 'bg-secondary/10 text-secondary' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {testimonials[currentTestimonial].type === 'patient' ? 'Patient' : 'Donor'}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].location}
                        {testimonials[currentTestimonial].condition && 
                          ` • ${testimonials[currentTestimonial].condition}`
                        }
                        {testimonials[currentTestimonial].profession && 
                          ` • ${testimonials[currentTestimonial].profession}`
                        }
                      </p>
                    </div>
                    
                    <div className="mt-4 sm:mt-0 text-right">
                      <div className="font-semibold text-success">
                        {testimonials[currentTestimonial].impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Letters of Life Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              Letters of Life
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personal messages from patients to their donors, creating lasting bonds 
              and celebrating the gift of life through our Letters of Life program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lettersOfLife.map((letter, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg smooth-transition">
                {/* Artwork Header */}
                <div className={`h-32 bg-gradient-to-br ${letter.artworkColor} relative`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{letter.location}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      From {letter.patientName} to {letter.donorName}
                    </span>
                  </div>
                  
                  <p className="text-foreground leading-relaxed text-sm">
                    {letter.preview}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto text-primary">
                    Read Full Letter →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;