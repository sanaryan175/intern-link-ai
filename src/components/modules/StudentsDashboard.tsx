import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  MapPin, 
  Briefcase, 
  Star, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Target,
  BookOpen,
  Award
} from "lucide-react";

export function StudentsDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Students Dashboard</h1>
          <p className="text-muted-foreground">Discover perfect internships with AI-powered recommendations</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Completion */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>Profile Completion</span>
                    </CardTitle>
                    <CardDescription>Complete your profile to get better recommendations</CardDescription>
                  </div>
                  <Badge variant="secondary">75% Complete</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={75} className="h-3" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Basic Information</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Skills & Qualifications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Location Preferences</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Sector Preferences</span>
                  </div>
                </div>
                <Button variant="secondary" size="sm">Complete Profile</Button>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-secondary" />
                  <span>AI-Recommended Internships</span>
                </CardTitle>
                <CardDescription>Personalized matches based on your profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Software Development Intern",
                    company: "TechCorp Solutions",
                    location: "Bangalore, Karnataka",
                    match: 95,
                    duration: "6 months",
                    skills: ["React", "Node.js", "Python"]
                  },
                  {
                    title: "Digital Marketing Intern",
                    company: "StartupXYZ",
                    location: "Mumbai, Maharashtra",
                    match: 88,
                    duration: "4 months",
                    skills: ["SEO", "Content Writing", "Analytics"]
                  },
                  {
                    title: "Data Science Intern",
                    company: "Analytics Pro",
                    location: "Hyderabad, Telangana",
                    match: 82,
                    duration: "5 months",
                    skills: ["Python", "Machine Learning", "SQL"]
                  }
                ].map((internship, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{internship.title}</h3>
                        <p className="text-sm text-muted-foreground">{internship.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        {internship.match}% Match
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{internship.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {internship.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Applications</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Shortlisted</span>
                  </div>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-success" />
                    <span className="text-sm">Offers</span>
                  </div>
                  <span className="font-semibold">1</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { action: "Applied to Software Development Intern", time: "2 hours ago" },
                  { action: "Profile viewed by TechCorp", time: "1 day ago" },
                  { action: "New recommendation available", time: "2 days ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Update Skills
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Set Preferences
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Complete Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}