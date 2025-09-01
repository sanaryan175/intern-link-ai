import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Building2, Shield } from "lucide-react";

interface HeaderProps {
  activeModule?: 'students' | 'companies' | 'government' | null;
  onModuleChange?: (module: 'students' | 'companies' | 'government') => void;
}

export function Header({ activeModule, onModuleChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modules = [
    { id: 'students' as const, label: 'Students', icon: User },
    { id: 'companies' as const, label: 'Companies', icon: Building2 },
    { id: 'government' as const, label: 'Government', icon: Shield },
  ];

  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">PM</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">PM Internship Portal</h1>
                <p className="text-xs text-muted-foreground">Smart Allocation System</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {modules.map((module) => {
              const Icon = module.icon;
              const isActive = activeModule === module.id;
              return (
                <Button
                  key={module.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onModuleChange?.(module.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{module.label}</span>
                </Button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {modules.map((module) => {
                const Icon = module.icon;
                const isActive = activeModule === module.id;
                return (
                  <Button
                    key={module.id}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      onModuleChange?.(module.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-start space-x-2 w-full"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{module.label}</span>
                  </Button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}