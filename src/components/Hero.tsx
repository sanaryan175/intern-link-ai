import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Shield, Brain } from "lucide-react";
import heroImage from "@/assets/hero-internship-portal.jpg";

interface HeroProps {
  onGetStarted: (module: 'students' | 'companies' | 'government') => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                PM Internship
                <span className="block text-secondary">Smart Allocation</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                AI-powered platform connecting students, companies, and government 
                for optimal internship matching and nationwide skill development.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">AI-Powered Matching</h3>
                  <p className="text-sm opacity-80">Smart allocation based on skills & preferences</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-success-light" />
                </div>
                <div>
                  <h3 className="font-semibold">Government Verified</h3>
                  <p className="text-sm opacity-80">Authentic opportunities from verified companies</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => onGetStarted('students')}
                className="flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>For Students</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onGetStarted('companies')}
                className="flex items-center space-x-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Building2 className="w-5 h-5" />
                <span>For Companies</span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="PM Internship Portal - AI-powered matching"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}