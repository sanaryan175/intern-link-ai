import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  FileText, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Clock,
  Target,
  Plus,
  Eye
} from "lucide-react";

export function CompaniesDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Companies Dashboard</h1>
            <p className="text-muted-foreground">Manage internships and discover top talent with AI assistance</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Post New Internship</span>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          {[
            { label: "Active Internships", value: "8", icon: FileText, color: "text-secondary" },
            { label: "Applications", value: "156", icon: Users, color: "text-primary" },
            { label: "Shortlisted", value: "24", icon: Target, color: "text-success" },
            { label: "Completed", value: "12", icon: Award, color: "text-muted-foreground" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Recommended Candidates */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-secondary" />
                  <span>AI-Recommended Candidates</span>
                </CardTitle>
                <CardDescription>Top matches for your Software Development Intern position</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Priya Sharma",
                    education: "B.Tech Computer Science, IIT Delhi",
                    skills: ["React", "Node.js", "Python", "MongoDB"],
                    location: "Delhi",
                    match: 96,
                    experience: "2 previous internships"
                  },
                  {
                    name: "Arjun Patel",
                    education: "B.E Software Engineering, BITS Pilani",
                    skills: ["Java", "Spring", "MySQL", "AWS"],
                    location: "Gujarat",
                    match: 94,
                    experience: "1 previous internship"
                  },
                  {
                    name: "Sneha Reddy",
                    education: "B.Tech IT, NIT Warangal",
                    skills: ["Python", "Django", "PostgreSQL", "Docker"],
                    location: "Telangana",
                    match: 91,
                    experience: "3 projects"
                  }
                ].map((candidate, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{candidate.name}</h3>
                        <p className="text-sm text-muted-foreground">{candidate.education}</p>
                        <p className="text-xs text-muted-foreground mt-1">{candidate.location} • {candidate.experience}</p>
                      </div>
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        {candidate.match}% Match
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {candidate.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{candidate.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm">Shortlist</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Active Internships */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Active Internship Postings</CardTitle>
                <CardDescription>Monitor your current openings and applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Software Development Intern",
                    applications: 45,
                    shortlisted: 8,
                    posted: "5 days ago",
                    status: "Active"
                  },
                  {
                    title: "Product Management Intern",
                    applications: 32,
                    shortlisted: 6,
                    posted: "1 week ago",
                    status: "Active"
                  },
                  {
                    title: "UI/UX Design Intern",
                    applications: 28,
                    shortlisted: 4,
                    posted: "3 days ago",
                    status: "Active"
                  }
                ].map((internship, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{internship.title}</h3>
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        {internship.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Applications</p>
                        <p className="font-semibold">{internship.applications}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Shortlisted</p>
                        <p className="font-semibold">{internship.shortlisted}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Posted</p>
                        <p className="font-semibold">{internship.posted}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">View Applications</Button>
                      <Button size="sm" variant="outline">Edit Posting</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Verification Status */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <span>Verification Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Government Verification</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Company Profile</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Document Upload</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <Badge variant="secondary" className="w-full justify-center bg-success/10 text-success">
                  Fully Verified
                </Badge>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Rate</span>
                  <span className="font-semibold">89%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Completion Rate</span>
                  <span className="font-semibold">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Student Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">4.7</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-3 h-3 bg-secondary rounded-full mr-0.5"></div>
                      ))}
                    </div>
                  </div>
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
                  { action: "New application received", time: "1 hour ago" },
                  { action: "Candidate shortlisted", time: "3 hours ago" },
                  { action: "Internship posted", time: "2 days ago" }
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
          </div>
        </div>
      </div>
    </div>
  );
}