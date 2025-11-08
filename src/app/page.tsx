"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Building2,
  School,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  MessageSquare,
  Briefcase,
  Calendar,
  FileText,
  Target,
  Award,
  Search,
  Heart,
  Sparkles,
  BookOpen,
  UserPlus,
  Mail,
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";

export default function HomePage() {
  const { openLoginDialog } = useAuth();
  const [activeTab, setActiveTab] = useState("students");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#002F66] to-blue-900 text-white">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Powered by Erasmus+
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Career+
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your gateway to international mobility, internships, and career
              development
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-2xl mx-auto">
              University of Zagreb's comprehensive platform connecting students,
              employers, and faculties for seamless international opportunities
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#002F66] hover:bg-blue-50"
                onClick={openLoginDialog}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#002F66] mb-2">
                1,247
              </div>
              <div className="text-sm text-muted-foreground">
                Active Students
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#002F66] mb-2">87</div>
              <div className="text-sm text-muted-foreground">
                Partner Employers
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#002F66] mb-2">12</div>
              <div className="text-sm text-muted-foreground">Faculties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#002F66] mb-2">340</div>
              <div className="text-sm text-muted-foreground">Placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features by User Type */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002F66] mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored features for students, employers, and faculties
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="max-w-6xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="students" className="gap-2">
                <GraduationCap className="w-4 h-4" />
                For Students
              </TabsTrigger>
              <TabsTrigger value="employers" className="gap-2">
                <Building2 className="w-4 h-4" />
                For Employers
              </TabsTrigger>
              <TabsTrigger value="faculties" className="gap-2">
                <School className="w-4 h-4" />
                For Faculties
              </TabsTrigger>
            </TabsList>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-[#002F66]" />
                    </div>
                    <CardTitle>
                      Application Portal & Progress Tracking
                    </CardTitle>
                    <CardDescription>
                      Apply to internships and track your application status in
                      real-time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          5-stage progress visualization (Documents, Submission,
                          Interview, Approval, Funding)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Real-time status updates and notifications
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          ESN buddy matching for destination support
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Direct messaging with employers and coordinators
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>AI-Powered Recommendations</CardTitle>
                    <CardDescription>
                      Get personalized internship matches based on your profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Smart matching algorithm with 95%+ accuracy
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Learn from past application feedback
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Personalized improvement suggestions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Discover opportunities tailored to your skills
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle>Profile & CV Management</CardTitle>
                    <CardDescription>
                      Showcase your skills and build a compelling profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Upload and manage your CV/resume
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Highlight skills, languages, and interests
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Define what you're looking for and offering
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Connect social profiles (LinkedIn, GitHub)
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle>Networking Events</CardTitle>
                    <CardDescription>
                      Connect with employers and peers at virtual events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Online Speed Networking with 5-minute video sessions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Virtual International Career Day with employer tables
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Free participation for all students
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Meet recruiters from across Europe
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Heart className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002F66] mb-2">
                      ESN Buddy Integration
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get matched with local students at your destination
                      through the Erasmus Student Network. Your buddy will help
                      you settle in, navigate the city, and make the most of
                      your international experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Cultural Support</Badge>
                      <Badge variant="secondary">Local Insights</Badge>
                      <Badge variant="secondary">Social Events</Badge>
                      <Badge variant="secondary">Language Exchange</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Employers Tab */}
            <TabsContent value="employers" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Briefcase className="w-6 h-6 text-[#002F66]" />
                    </div>
                    <CardTitle>Internship Posting Management</CardTitle>
                    <CardDescription>
                      Create and manage internship opportunities for
                      international students
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Easy-to-use posting creation with rich text editor
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Track views, applications, and engagement metrics
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Set requirements, benefits, and stipend details
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Manage multiple positions simultaneously
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>Smart Applicant Matching</CardTitle>
                    <CardDescription>
                      Find the perfect candidates with AI-powered matching
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          View match scores for each applicant (0-100%)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Filter by skills, languages, and experience
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Review CVs and student profiles in one place
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Schedule interviews and send feedback
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle>Application Management</CardTitle>
                    <CardDescription>
                      Streamline your hiring process from start to finish
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Review, approve, or reject applications
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Direct messaging with applicants
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Track intern progress and performance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Provide feedback to students and universities
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle>Company Profile & Verification</CardTitle>
                    <CardDescription>
                      Build trust with verified company status and reviews
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Verified employer badge for credibility
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Company ratings and reviews from past interns
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Showcase company culture and benefits
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Access to premium employer features
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Calendar className="w-8 h-8 text-[#002F66]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002F66] mb-2">
                      Participate in Networking Events
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Join Speed Networking sessions and Virtual International
                      Career Days to meet talented students. Book your virtual
                      table and conduct 5-minute video interviews with potential
                      candidates.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-[#002F66]">
                          Participation Fee:
                        </span>
                        <span className="ml-2">€150-200 per event</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#002F66]">
                          Average Reach:
                        </span>
                        <span className="ml-2">60-200 students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Faculties Tab */}
            <TabsContent value="faculties" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-[#002F66]" />
                    </div>
                    <CardTitle>Mobility Program Management</CardTitle>
                    <CardDescription>
                      Oversee outgoing and incoming student exchanges
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Track all outgoing students and their destinations
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Manage incoming exchange students
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Monitor application status and deadlines
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          View statistics by field of study and destination
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>Document Approval Workflow</CardTitle>
                    <CardDescription>
                      Review and approve student documents efficiently
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Review Learning Agreements and other documents
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Digital approval with timestamps
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Request revisions and provide feedback
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Track pending approvals across all students
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle>Analytics & Reporting</CardTitle>
                    <CardDescription>
                      Data-driven insights for better program management
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Student distribution by destination country
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Field of study breakdown and trends
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Application success rates and timelines
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Export reports for university administration
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-[#002F66] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <UserPlus className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle>Partner Institution Network</CardTitle>
                    <CardDescription>
                      Collaborate with international partner universities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          View and manage partner agreements
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Coordinate with partner coordinators
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Exchange best practices and resources
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Track bilateral exchange quotas
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <BookOpen className="w-8 h-8 text-[#002F66]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002F66] mb-2">
                      Streamlined Communication
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Centralized messaging system for students, partner
                      universities, and employers. Keep all stakeholders
                      informed with automated notifications and announcements.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Email Integration</Badge>
                      <Badge variant="secondary">Mass Announcements</Badge>
                      <Badge variant="secondary">Document Sharing</Badge>
                      <Badge variant="secondary">Status Updates</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002F66] mb-4">
              Additional Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed in your international journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#002F66]" />
              </div>
              <h3 className="text-xl font-bold text-[#002F66] mb-2">
                Forum & Community
              </h3>
              <p className="text-muted-foreground">
                Connect with peers, share experiences, and get advice from the
                Career+ community
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-[#002F66] mb-2">
                Marketplace
              </h3>
              <p className="text-muted-foreground">
                Discover internships, job postings, and opportunities from
                verified employers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#002F66] mb-2">
                Smart Search
              </h3>
              <p className="text-muted-foreground">
                Advanced filters to find exactly what you're looking for across
                all platform features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002F66] to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your International Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students, employers, and educators already using
            Career+
          </p>
          <Button
            size="lg"
            className="bg-white text-[#002F66] hover:bg-blue-50"
            onClick={openLoginDialog}
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Create Your Account
          </Button>
        </div>
      </section>
    </div>
  );
}
