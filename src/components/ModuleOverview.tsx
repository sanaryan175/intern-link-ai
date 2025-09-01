import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Building2, 
  Shield, 
  Target, 
  FileText, 
  BarChart3,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from "lucide-react";

interface ModuleOverviewProps {
  onSelectModule: (module: 'students' | 'companies' | 'government') => void;
}

export function ModuleOverview({ onSelectModule }: ModuleOverviewProps) {
  const modules = [
    {
      id: 'students' as const,
      title: 'Students Module',
      description: 'Create profiles, get AI-powered internship recommendations, and track your applications.',
      icon: Users,
      color: 'bg-secondary',
      features: [
        'Complete skill-based profile creation',
        'AI-powered internship recommendations',
        'Real-time application tracking',
        'Location and sector preferences'
      ],
      stats: { label: 'Active Students', value: '25,000+' }
    },
    {
      id: 'companies' as const,
      title: 'Companies Module',
      description: 'Post internships, get AI-suggested candidates, and manage your intern selection process.',
      icon: Building2,
      color: 'bg-primary',
      features: [
        'Government-verified company registration',
        'AI-powered candidate shortlisting',
        'Streamlined selection process',
        'Feedback and certification system'
      ],
      stats: { label: 'Partner Companies', value: '1,200+' }
    },
    {
      id: 'government' as const,
      title: 'Government Module',
      description: 'Monitor, verify, and ensure fair allocation with comprehensive analytics and oversight.',
      icon: Shield,
      color: 'bg-success',
      features: [
        'Company verification and approval',
        'Fraud detection and monitoring',
        'Analytics and diversity tracking',
        'Affirmative action enforcement'
      ],
      stats: { label: 'Districts Covered', value: '650+' }
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Three Powerful Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive ecosystem connecting all stakeholders in the internship allocation process
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.id} className="relative overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 border-0">
                <div className={`absolute top-0 left-0 w-full h-2 ${module.color}`}></div>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{module.stats.value}</p>
                      <p className="text-sm text-muted-foreground">{module.stats.label}</p>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                    <CardDescription className="text-base">{module.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {module.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => onSelectModule(module.id)}
                  >
                    Access {module.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 p-8 bg-card rounded-2xl shadow-medium">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-6 h-6 text-secondary" />
                <span className="text-3xl font-bold text-foreground">92%</span>
              </div>
              <p className="text-muted-foreground">Successful Matches</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-6 h-6 text-success" />
                <span className="text-3xl font-bold text-foreground">45%</span>
              </div>
              <p className="text-muted-foreground">Rural Participation</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">98%</span>
              </div>
              <p className="text-muted-foreground">Company Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}