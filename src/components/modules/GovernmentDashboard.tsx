import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Building2, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3, 
  TrendingUp, 
  MapPin,
  FileSearch,
  Award,
  Target,
  Eye
} from "lucide-react";

export function GovernmentDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Government Dashboard</h1>
          <p className="text-muted-foreground">Monitor, verify, and ensure fair internship allocation nationwide</p>
        </div>

        {/* Overview Stats */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Students", value: "25,847", icon: Users, change: "+12%", color: "text-primary" },
            { label: "Verified Companies", value: "1,234", icon: Building2, change: "+8%", color: "text-success" },
            { label: "Active Internships", value: "3,456", icon: FileSearch, change: "+15%", color: "text-secondary" },
            { label: "Pending Reviews", value: "89", icon: AlertTriangle, change: "-5%", color: "text-destructive" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className={`text-xs ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                        {stat.change} from last month
                      </p>
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
            {/* Company Verification Queue */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>Company Verification Queue</span>
                </CardTitle>
                <CardDescription>Companies pending government approval</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "InnovateTech Solutions",
                    sector: "Information Technology",
                    location: "Bangalore, Karnataka",
                    documents: "Complete",
                    risk: "Low",
                    submitted: "2 days ago"
                  },
                  {
                    name: "GreenEnergy Corp",
                    sector: "Renewable Energy",
                    location: "Pune, Maharashtra",
                    documents: "Pending",
                    risk: "Medium",
                    submitted: "5 days ago"
                  },
                  {
                    name: "FinTech Innovations",
                    sector: "Financial Services",
                    location: "Mumbai, Maharashtra",
                    documents: "Complete",
                    risk: "Low",
                    submitted: "1 day ago"
                  }
                ].map((company, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{company.name}</h3>
                        <p className="text-sm text-muted-foreground">{company.sector}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{company.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge 
                          variant={company.risk === 'Low' ? 'secondary' : 'destructive'}
                          className={company.risk === 'Low' ? 'bg-success/10 text-success' : ''}
                        >
                          {company.risk} Risk
                        </Badge>
                        <span className="text-xs text-muted-foreground">{company.submitted}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <span className="text-muted-foreground">Documents:</span>
                          <Badge variant="outline" className={company.documents === 'Complete' ? 'text-success' : 'text-secondary'}>
                            {company.documents}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Analytics Overview */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Participation Analytics</span>
                </CardTitle>
                <CardDescription>Regional and demographic distribution insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Regional Distribution */}
                <div>
                  <h4 className="font-semibold mb-3">Top Performing States</h4>
                  <div className="space-y-3">
                    {[
                      { state: "Karnataka", students: 3420, percentage: 87 },
                      { state: "Maharashtra", students: 2890, percentage: 92 },
                      { state: "Tamil Nadu", students: 2654, percentage: 79 },
                      { state: "Uttar Pradesh", students: 2134, percentage: 68 }
                    ].map((state, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">{state.state}</span>
                          <span className="text-sm text-muted-foreground ml-2">({state.students} students)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-muted rounded-full">
                            <div 
                              className="h-full bg-secondary rounded-full"
                              style={{ width: `${state.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{state.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Diversity Metrics */}
                <div>
                  <h4 className="font-semibold mb-3">Diversity & Inclusion</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <p className="text-2xl font-bold text-success">45%</p>
                      <p className="text-sm text-muted-foreground">Rural Students</p>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <p className="text-2xl font-bold text-secondary">48%</p>
                      <p className="text-sm text-muted-foreground">Female Participation</p>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <p className="text-2xl font-bold text-primary">38%</p>
                      <p className="text-sm text-muted-foreground">SC/ST/OBC</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Fraud Detection Alerts */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span>AI Fraud Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-start space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Suspicious Posting</p>
                      <p className="text-xs text-muted-foreground">FakeCompany Ltd - Multiple red flags detected</p>
                    </div>
                  </div>
                  <Button size="sm" variant="destructive" className="w-full">Investigate</Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-success mx-auto mb-1" />
                  No other alerts detected
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">AI Matching Engine</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Fraud Detection</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database Sync</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">Synced</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Response</span>
                  <span className="text-sm font-semibold">120ms</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileSearch className="w-4 h-4 mr-2" />
                  Audit Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Issue Certificates
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Set Quotas
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { action: "Company verified", entity: "TechCorp", time: "30 mins ago" },
                  { action: "Fraud alert resolved", entity: "FakeCompany", time: "2 hours ago" },
                  { action: "Monthly report generated", entity: "System", time: "1 day ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.entity} • {activity.time}</p>
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