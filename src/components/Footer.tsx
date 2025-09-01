import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Users,
  Building2,
  Award
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">PM</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">PM Internship Portal</h3>
                <p className="text-xs text-muted-foreground">Smart Allocation System</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering India's youth through AI-powered internship matching, 
              connecting talented students with verified companies under government oversight.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm text-success font-medium">Government Verified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                  <Users className="w-3 h-3" />
                  <span>Student Registration</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                  <Building2 className="w-3 h-3" />
                  <span>Company Portal</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                  <Shield className="w-3 h-3" />
                  <span>Government Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                  <Award className="w-3 h-3" />
                  <span>Success Stories</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>1800-11-INTERN</span>
              </li>
              <li className="text-muted-foreground flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>support@pminternship.gov.in</span>
              </li>
              <li className="text-muted-foreground flex items-center space-x-2">
                <Globe className="w-3 h-3" />
                <span>Help Center</span>
              </li>
              <li className="text-muted-foreground flex items-start space-x-2">
                <MapPin className="w-3 h-3 mt-0.5" />
                <span className="leading-tight">
                  Ministry of Corporate Affairs<br />
                  Government of India<br />
                  New Delhi - 110001
                </span>
              </li>
            </ul>
          </div>

          {/* Statistics */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Impact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Students Placed</span>
                <Badge variant="secondary" className="bg-success/10 text-success">25,847</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Partner Companies</span>
                <Badge variant="secondary" className="bg-primary/10 text-primary">1,234</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Success Rate</span>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary">92%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Districts Covered</span>
                <Badge variant="outline">650+</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Government of India. All rights reserved. | 
              <span className="ml-1">Developed under PM's Vision for Digital India</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}