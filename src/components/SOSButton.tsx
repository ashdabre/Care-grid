import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Phone, Clock, Shield } from "lucide-react";

const SOSButton = () => {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSOSClick = () => {
    setIsEmergencyMode(true);
    setCountdown(10);
    
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Here you would trigger the actual emergency response
          console.log("Emergency activated!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleCancel = () => {
    setIsEmergencyMode(false);
    setCountdown(0);
  };

  return (
    <>
      {/* Fixed SOS Button - Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <button className="sos-button relative">
              <div className="pulse-ring"></div>
              <span className="relative z-10">SOS</span>
            </button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-montserrat font-bold text-destructive">
                Emergency Blood Request
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              {!isEmergencyMode ? (
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-secondary" />
                    </div>
                    <p className="text-muted-foreground">
                      This will send an emergency alert to nearby verified donors and emergency services.
                    </p>
                  </div>
                  
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Current Location</div>
                        <div className="text-sm text-muted-foreground">123 Medical District, City</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">Estimated Response</div>
                        <div className="text-sm text-muted-foreground">6-10 minutes</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <Shield className="w-5 h-5 text-success" />
                      <div>
                        <div className="font-medium">Verified Donors</div>
                        <div className="text-sm text-muted-foreground">4 available nearby</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleSOSClick}
                    className="w-full emergency-gradient text-white font-bold text-lg py-6 rounded-2xl"
                  >
                    ACTIVATE EMERGENCY SOS
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto relative">
                      <div className="absolute inset-0 rounded-full border-4 border-secondary animate-ping"></div>
                      <div className="text-3xl font-bold text-secondary relative z-10">{countdown}</div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        Emergency Alert Activating...
                      </h3>
                      <p className="text-muted-foreground">
                        Cancel within {countdown} seconds if this was accidental
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      Notifying nearby donors...
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      Alerting emergency services...
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      Preparing medical logistics...
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleCancel}
                    variant="outline"
                    className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground font-bold py-4 rounded-2xl"
                  >
                    CANCEL EMERGENCY
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Desktop SOS Section */}
      <div className="hidden md:block">
        <div className="fixed bottom-8 right-8 z-50">
          <Dialog>
            <DialogTrigger asChild>
              <button className="sos-button scale-125 hover:scale-[1.35] smooth-transition">
                <div className="pulse-ring"></div>
                <span className="relative z-10">SOS</span>
              </button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-montserrat font-bold text-destructive">
                  Emergency Blood Request
                </DialogTitle>
              </DialogHeader>
              
              {/* Same content as mobile but with larger spacing */}
              <div className="space-y-8 py-6">
                {!isEmergencyMode ? (
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                        <Phone className="w-10 h-10 text-secondary" />
                      </div>
                      <p className="text-lg text-muted-foreground">
                        This will send an emergency alert to nearby verified donors and emergency services.
                      </p>
                    </div>
                    
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                        <MapPin className="w-6 h-6 text-primary" />
                        <div>
                          <div className="font-semibold">Current Location</div>
                          <div className="text-muted-foreground">123 Medical District, City</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                        <Clock className="w-6 h-6 text-accent" />
                        <div>
                          <div className="font-semibold">Estimated Response</div>
                          <div className="text-muted-foreground">6-10 minutes</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                        <Shield className="w-6 h-6 text-success" />
                        <div>
                          <div className="font-semibold">Verified Donors</div>
                          <div className="text-muted-foreground">4 available nearby</div>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleSOSClick}
                      className="w-full emergency-gradient text-white font-bold text-xl py-8 rounded-2xl"
                    >
                      ACTIVATE EMERGENCY SOS
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-8">
                    <div className="space-y-6">
                      <div className="w-32 h-32 bg-secondary/10 rounded-full flex items-center justify-center mx-auto relative">
                        <div className="absolute inset-0 rounded-full border-4 border-secondary animate-ping"></div>
                        <div className="text-4xl font-bold text-secondary relative z-10">{countdown}</div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-secondary mb-3">
                          Emergency Alert Activating...
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          Cancel within {countdown} seconds if this was accidental
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-3 text-muted-foreground">
                        <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                        Notifying nearby donors...
                      </div>
                      <div className="flex items-center justify-center gap-3 text-muted-foreground">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        Alerting emergency services...
                      </div>
                      <div className="flex items-center justify-center gap-3 text-muted-foreground">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                        Preparing medical logistics...
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleCancel}
                      variant="outline"
                      className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground font-bold py-6 rounded-2xl"
                    >
                      CANCEL EMERGENCY
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default SOSButton;