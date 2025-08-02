import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dashboardImage from "@/assets/dashboard-mockup.jpg";
import { Monitor, Calendar, Activity, Award, MapPin, Clock, Heart } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Patient Dashboard */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2">
                  <Monitor className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Patient Dashboard</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground">
                  Your Health,
                  <span className="block text-gradient">At Your Fingertips</span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Monitor your health journey, track emergency responses, and manage 
                  your medical schedule through our intuitive patient dashboard.
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Live Tracking</h4>
                    <p className="text-sm text-muted-foreground">Real-time delivery updates</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border">
                  <Clock className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold text-foreground">Smart Scheduling</h4>
                    <p className="text-sm text-muted-foreground">Automated appointments</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border">
                  <Activity className="w-6 h-6 text-success" />
                  <div>
                    <h4 className="font-semibold text-foreground">Health Metrics</h4>
                    <p className="text-sm text-muted-foreground">Track your progress</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border">
                  <Heart className="w-6 h-6 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Emergency SOS</h4>
                    <p className="text-sm text-muted-foreground">One-tap help access</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="primary-gradient text-white font-bold px-8 py-4 rounded-2xl">
                View Patient Demo
              </Button>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="relative bg-card rounded-3xl p-8 shadow-lg border">
                <img 
                  src={dashboardImage} 
                  alt="Patient dashboard interface"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Overlay Elements */}
                <div className="absolute top-12 right-12 glass-card">
                  <div className="flex items-center gap-2 text-success">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Donor En Route</span>
                  </div>
                </div>
                
                <div className="absolute bottom-12 left-12 bg-secondary text-white p-3 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-xs">min ETA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donor Dashboard */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Donor Impact Card */}
            <div className="lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-accent-dark" />
                  <span className="text-sm font-medium text-accent-dark">Donor Dashboard</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground">
                  Track Your
                  <span className="block text-gradient">Life-Saving Impact</span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  See your donation history, upcoming drives, and the real impact 
                  of your contributions through our comprehensive donor platform.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="space-y-4">
                <div className="impact-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Your Impact This Year</h3>
                    <Award className="w-6 h-6" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm opacity-80">Lives Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">480ml</div>
                      <div className="text-sm opacity-80">Blood Donated</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">6</div>
                      <div className="text-sm opacity-80">Emergency Responses</div>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-4 rounded-2xl">
                View Donor Demo
              </Button>
            </div>

            {/* Calendar Heatmap Mock */}
            <div className="lg:order-1">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-montserrat font-bold">Donation Calendar</h3>
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                  </div>
                  
                  {/* Heatmap Grid */}
                  <div className="space-y-2">
                    {Array.from({ length: 12 }).map((_, week) => (
                      <div key={week} className="flex gap-1">
                        {Array.from({ length: 7 }).map((_, day) => {
                          const intensity = Math.random();
                          let bgColor = "bg-muted";
                          if (intensity > 0.7) bgColor = "bg-secondary";
                          else if (intensity > 0.4) bgColor = "bg-secondary/60";
                          else if (intensity > 0.2) bgColor = "bg-secondary/30";
                          
                          return (
                            <div 
                              key={day} 
                              className={`w-4 h-4 rounded ${bgColor} hover:scale-110 smooth-transition cursor-pointer`}
                              title={`Day ${week * 7 + day + 1}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded bg-muted"></div>
                      <div className="w-3 h-3 rounded bg-secondary/30"></div>
                      <div className="w-3 h-3 rounded bg-secondary/60"></div>
                      <div className="w-3 h-3 rounded bg-secondary"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;