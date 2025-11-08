"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ApplicationCard } from "@/components/dashboard/application-card";
import { ProgressTracker } from "@/components/dashboard/progress-tracker";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { ApplicationDetailsModal } from "@/components/dashboard/application-details-modal";
import {
  Plus,
  Calendar,
  Lightbulb,
  Clock,
  Sparkles,
  History,
  TrendingUp,
  MapPin,
  Building2,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Mock application data
const mockApplications = [
  {
    id: "1",
    title: "Software Development Intern",
    employer: "Tech Innovation Hub",
    employerLogo: "/placeholder-company.png",
    location: "Vienna, Austria",
    submissionDate: "2024-10-15",
    status: "approved",
    currentStep: 4,
    totalSteps: 5,
  },
  {
    id: "2",
    title: "Digital Marketing Intern",
    employer: "Creative Solutions GmbH",
    employerLogo: "/placeholder-company.png",
    location: "Berlin, Germany",
    submissionDate: "2024-11-01",
    status: "signed",
    currentStep: 3,
    totalSteps: 5,
  },
  {
    id: "3",
    title: "UX Research Assistant",
    employer: "DesignLab Studio",
    employerLogo: "/placeholder-company.png",
    location: "Amsterdam, Netherlands",
    submissionDate: "2024-11-05",
    status: "sent",
    currentStep: 2,
    totalSteps: 5,
  },
];

const upcomingDeadlines = [
  {
    id: 1,
    title: "Submit final documents for Vienna internship",
    date: "Nov 15, 2024",
  },
  { id: 2, title: "Complete pre-departure orientation", date: "Nov 20, 2024" },
  { id: 3, title: "ESN Buddy introduction call", date: "Nov 22, 2024" },
];

const applicationTips = [
  "Ensure all documents are signed and uploaded before the deadline",
  "Maintain regular communication with your host organization",
  "Complete your Learning Agreement with accurate course descriptions",
  "Connect with your ESN Buddy early to ease your transition abroad",
];

// Personalized internship suggestions based on profile
const suggestedInternships = [
  {
    id: "s1",
    title: "AI/ML Research Intern",
    company: "Microsoft Research Vienna",
    location: "Vienna, Austria",
    matchScore: 95,
    tags: ["Python", "Machine Learning", "AI"],
    duration: "6 months",
    deadline: "Dec 1, 2024",
    description: "Work on cutting-edge machine learning research projects.",
  },
  {
    id: "s2",
    title: "Full-Stack Developer Intern",
    company: "Siemens Digital",
    location: "Munich, Germany",
    matchScore: 88,
    tags: ["React", "Node.js", "JavaScript"],
    duration: "5 months",
    deadline: "Nov 25, 2024",
    description:
      "Build scalable web applications for industrial IoT solutions.",
  },
  {
    id: "s3",
    title: "Data Science Intern",
    company: "Booking.com",
    location: "Amsterdam, Netherlands",
    matchScore: 85,
    tags: ["Python", "SQL", "Data Science"],
    duration: "6 months",
    deadline: "Dec 10, 2024",
    description: "Analyze travel data and build predictive models.",
  },
];

// Application history
const applicationHistory = [
  {
    id: "h1",
    title: "Backend Developer Intern",
    company: "SAP",
    location: "Berlin, Germany",
    status: "rejected",
    appliedDate: "Sep 15, 2024",
    feedback:
      "Strong technical skills, but we were looking for more experience with cloud technologies.",
  },
  {
    id: "h2",
    title: "Mobile App Developer",
    company: "N26",
    location: "Barcelona, Spain",
    status: "withdrawn",
    appliedDate: "Aug 20, 2024",
    feedback: "Candidate withdrew application to pursue other opportunities.",
  },
];

// Personalized recommendations
const recommendations = [
  {
    title: "Improve your profile",
    description:
      "Add cloud computing skills (AWS/Azure) to match 15 more positions",
    action: "Update Skills",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    title: "Complete your applications",
    description: "You have 2 draft applications that need to be submitted",
    action: "View Drafts",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    title: "Expand your search",
    description:
      "Consider positions in France and Sweden - 8 new matches found",
    action: "Browse",
    icon: MapPin,
    color: "text-green-600",
  },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [selectedApplication, setSelectedApplication] = useState<string | null>(
    null
  );

  useEffect(() => {
    // Redirect non-student users
    if (user && user.type !== "student") {
      router.push("/");
    }
  }, [user, router]);

  // Only show dashboard to students
  if (!user || user.type !== "student") {
    return (
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
              <p className="text-gray-600">
                This dashboard is only available for students.
              </p>
              <Button onClick={() => router.push("/")} className="mt-4">
                Go to Home
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className="max-w-7xl mx-auto p-6 lg:p-8">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-[#002F66] mb-2">
                    My Internship Applications
                  </h1>
                  <p className="text-gray-600">
                    Track your Erasmus+ internship applications, documentation,
                    and approval status — all in one place.
                  </p>
                </div>
                <Button className="bg-[#002F66] hover:bg-[#004080] text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  New Application
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personalized Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-[#002F66]" />
                      Recommendations for You
                    </CardTitle>
                    <CardDescription>
                      Personalized tips to improve your internship search
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendations.map((rec, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className={`mt-1 ${rec.color}`}>
                            <rec.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {rec.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {rec.description}
                            </p>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-[#002F66] border-[#002F66] hover:bg-[#002F66] hover:text-white"
                            >
                              {rec.action}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Suggested Internships */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-[#002F66]" />
                      Suggested for You
                    </CardTitle>
                    <CardDescription>
                      Internship opportunities matching your profile and
                      interests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {suggestedInternships.map((internship) => (
                        <div
                          key={internship.id}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-bold text-[#002F66] mb-1">
                                {internship.title}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Building2 className="h-4 w-4" />
                                <span>{internship.company}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                <MapPin className="h-4 w-4" />
                                <span>{internship.location}</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                {internship.matchScore}% Match
                              </Badge>
                              <span className="text-xs text-gray-500">
                                Due: {internship.deadline}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-3">
                            {internship.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {internship.tags.map((tag, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                              <Badge variant="outline" className="text-xs">
                                {internship.duration}
                              </Badge>
                            </div>
                            <Button
                              size="sm"
                              className="bg-[#002F66] hover:bg-[#004080]"
                            >
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Link href="/marketplace">
                        <Button
                          variant="outline"
                          className="w-full border-[#002F66] text-[#002F66] hover:bg-[#002F66] hover:text-white"
                        >
                          View All Opportunities
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Active Applications */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-[#002F66]">
                    Active Applications
                  </h2>
                  {mockApplications.map((application) => (
                    <ApplicationCard
                      key={application.id}
                      application={application}
                      onViewDetails={() =>
                        setSelectedApplication(application.id)
                      }
                    />
                  ))}
                </div>

                {/* Application History */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <History className="h-5 w-5 text-[#002F66]" />
                      Application History
                    </CardTitle>
                    <CardDescription>
                      Previous applications and feedback
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {applicationHistory.map((app) => (
                        <div
                          key={app.id}
                          className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {app.title}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                <Building2 className="h-4 w-4" />
                                <span>{app.company}</span>
                                <span>•</span>
                                <MapPin className="h-4 w-4" />
                                <span>{app.location}</span>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                app.status === "rejected"
                                  ? "border-red-300 text-red-700"
                                  : "border-gray-300 text-gray-700"
                              }
                            >
                              {app.status.charAt(0).toUpperCase() +
                                app.status.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Applied: {app.appliedDate}
                          </p>
                          {app.feedback && (
                            <div className="bg-white border-l-4 border-[#002F66] p-3 rounded">
                              <p className="text-xs font-medium text-gray-700 mb-1">
                                Feedback:
                              </p>
                              <p className="text-sm text-gray-600">
                                {app.feedback}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Progress Tracker Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-[#002F66] mb-4">
                    Application Process Overview
                  </h2>
                  <ProgressTracker />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Notifications */}
                <NotificationPanel />

                {/* Upcoming Deadlines */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-[#002F66] mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Deadlines
                  </h3>
                  <div className="space-y-3">
                    {upcomingDeadlines.map((deadline) => (
                      <div
                        key={deadline.id}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <Clock className="h-4 w-4 text-[#002F66] mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {deadline.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {deadline.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-[#002F66] mb-4 flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Tips for Successful Applications
                  </h3>
                  <ul className="space-y-2">
                    {applicationTips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-[#002F66] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>

      {/* Application Details Modal */}
      {selectedApplication && (
        <ApplicationDetailsModal
          applicationId={selectedApplication}
          onClose={() => setSelectedApplication(null)}
        />
      )}
    </SidebarProvider>
  );
}
