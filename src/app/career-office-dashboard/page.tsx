"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Shield,
  Users,
  Building2,
  MessageSquare,
  Calendar,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  BarChart3,
  FileCheck,
  UserPlus,
  Flag,
  Star,
  Download,
} from "lucide-react";

// Mock data for admin dashboard
const platformStats = {
  totalUsers: 1247,
  activeStudents: 892,
  registeredEmployers: 87,
  partnerFaculties: 12,
  totalApplications: 3456,
  activeInternships: 234,
  pendingApprovals: 15,
  forumPosts: 567,
};

const pendingEmployers = [
  {
    id: 1,
    companyName: "Digital Solutions Ltd.",
    location: "London, UK",
    industry: "Software Development",
    submittedDate: "Nov 6, 2024",
    contactPerson: "James Wilson",
    email: "j.wilson@digitalsolutions.uk",
  },
  {
    id: 2,
    companyName: "Green Energy Corp",
    location: "Copenhagen, Denmark",
    industry: "Renewable Energy",
    submittedDate: "Nov 7, 2024",
    contactPerson: "Anna Nielsen",
    email: "a.nielsen@greenenergy.dk",
  },
];

const flaggedContent = [
  {
    id: 1,
    type: "Forum Post",
    user: "User_12345",
    content: "Inappropriate language in forum discussion...",
    reportedBy: "Ana Horvat",
    date: "Nov 7, 2024",
    status: "pending",
  },
  {
    id: 2,
    type: "Review",
    user: "Anonymous",
    content: "Potentially fake review for Company XYZ...",
    reportedBy: "System",
    date: "Nov 6, 2024",
    status: "pending",
  },
];

const recentActivity = [
  {
    id: 1,
    action: "New employer registered",
    entity: "Tech Innovation Hub",
    user: "Admin",
    timestamp: "2 hours ago",
    type: "employer",
  },
  {
    id: 2,
    action: "Forum post moderated",
    entity: "Internship Tips Thread",
    user: "Marko Ljutić",
    timestamp: "5 hours ago",
    type: "moderation",
  },
  {
    id: 3,
    action: "Event created",
    entity: "Career Day 2025",
    user: "Marko Ljutić",
    timestamp: "1 day ago",
    type: "event",
  },
  {
    id: 4,
    action: "Student application approved",
    entity: "Ana Horvat - Vienna Internship",
    user: "Auto-system",
    timestamp: "1 day ago",
    type: "approval",
  },
];

const upcomingEvents = [
  {
    id: 1,
    name: "Online Speed Networking - Winter 2024",
    type: "Speed Networking",
    date: "Nov 25, 2024",
    time: "14:00 - 17:00 CET",
    location: "Virtual (Zoom)",
    participants: {
      students: 45,
      employers: 12,
      maxStudents: 60,
      maxEmployers: 15,
    },
    status: "confirmed",
    price: {
      students: "Free",
      employers: "€150",
    },
    format: "5-minute sessions, 12 rotations",
  },
  {
    id: 2,
    name: "Virtual International Career Day 2024",
    type: "Career Day",
    date: "Dec 10, 2024",
    time: "10:00 - 18:00 CET",
    location: "Virtual Platform",
    participants: {
      students: 120,
      employers: 25,
      maxStudents: 200,
      maxEmployers: 40,
    },
    status: "planning",
    price: {
      students: "Free",
      employers: "€200",
    },
    format: "Virtual tables, 5-person capacity",
    partners: ["ESN Croatia", "TU Wien", "TU Munich"],
  },
  {
    id: 3,
    name: "Spring Internship Speed Networking",
    type: "Speed Networking",
    date: "Jan 15, 2025",
    time: "15:00 - 18:00 CET",
    location: "Virtual (Microsoft Teams)",
    participants: {
      students: 0,
      employers: 0,
      maxStudents: 50,
      maxEmployers: 12,
    },
    status: "draft",
    price: {
      students: "Free",
      employers: "€150",
    },
    format: "5-minute sessions, 10 rotations",
  },
];

const platformAnalytics = [
  { month: "Jun", students: 680, employers: 62, applications: 2100 },
  { month: "Jul", students: 720, employers: 68, applications: 2400 },
  { month: "Aug", students: 780, employers: 72, applications: 2700 },
  { month: "Sep", students: 830, employers: 78, applications: 3000 },
  { month: "Oct", students: 870, employers: 82, applications: 3200 },
  { month: "Nov", students: 892, employers: 87, applications: 3456 },
];

const topEmployers = [
  {
    name: "Tech Innovation Hub",
    applications: 127,
    rating: 4.8,
    verified: true,
  },
  { name: "Siemens AG", applications: 98, rating: 4.7, verified: true },
  { name: "BMW Group", applications: 87, rating: 4.9, verified: true },
  { name: "Booking.com", applications: 76, rating: 4.6, verified: true },
  { name: "Microsoft Research", applications: 65, rating: 4.8, verified: true },
];

export default function CareerOfficeDashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Redirect non-career-office users
    if (user && user.type !== "career-office") {
      router.push("/");
    }
  }, [user, router]);

  // Only show dashboard to career office
  if (!user || user.type !== "career-office") {
    return (
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
              <p className="text-gray-600">
                This dashboard is only available for Career Development Office
                staff.
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
                    Career Office Dashboard
                  </h1>
                  <p className="text-gray-600">
                    Platform administration and partner management
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export Analytics
                  </Button>
                  <Button className="bg-[#002F66] hover:bg-[#004080] text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    Create Event
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-gray-600">
                        Total Users
                      </p>
                      <p className="text-2xl font-bold text-[#002F66] mt-1">
                        {platformStats.totalUsers}
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-gray-600">
                        Active Students
                      </p>
                      <p className="text-2xl font-bold text-[#002F66] mt-1">
                        {platformStats.activeStudents}
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-gray-600">
                        Employers
                      </p>
                      <p className="text-2xl font-bold text-[#002F66] mt-1">
                        {platformStats.registeredEmployers}
                      </p>
                    </div>
                    <Building2 className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-gray-600">
                        Pending
                      </p>
                      <p className="text-2xl font-bold text-orange-600 mt-1">
                        {platformStats.pendingApprovals}
                      </p>
                    </div>
                    <AlertCircle className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-6 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="approvals">Approvals</TabsTrigger>
                <TabsTrigger value="moderation">Moderation</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="partners">Partners</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Recent Activity */}
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                          Latest platform actions and updates
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentActivity.map((activity) => (
                            <div
                              key={activity.id}
                              className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="mt-1">
                                {activity.type === "employer" && (
                                  <Building2 className="h-5 w-5 text-purple-600" />
                                )}
                                {activity.type === "moderation" && (
                                  <Shield className="h-5 w-5 text-blue-600" />
                                )}
                                {activity.type === "event" && (
                                  <Calendar className="h-5 w-5 text-green-600" />
                                )}
                                {activity.type === "approval" && (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900">
                                  {activity.action}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {activity.entity}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {activity.user} • {activity.timestamp}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Stats */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Platform Health
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Applications
                          </span>
                          <span className="text-lg font-bold text-[#002F66]">
                            {platformStats.totalApplications}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Active Internships
                          </span>
                          <span className="text-lg font-bold text-green-600">
                            {platformStats.activeInternships}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Forum Posts
                          </span>
                          <span className="text-lg font-bold text-[#002F66]">
                            {platformStats.forumPosts}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Partner Faculties
                          </span>
                          <span className="text-lg font-bold text-purple-600">
                            {platformStats.partnerFaculties}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Top Employers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {topEmployers.slice(0, 5).map((employer, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">
                                  {employer.name}
                                </span>
                                {employer.verified && (
                                  <CheckCircle className="h-3 w-3 text-blue-600" />
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs text-gray-600">
                                  {employer.rating}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Approvals Tab */}
              <TabsContent value="approvals">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pending Employer Registrations</CardTitle>
                      <CardDescription>
                        Review and approve new employers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {pendingEmployers.map((employer) => (
                          <div
                            key={employer.id}
                            className="border border-gray-200 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-lg">
                                  {employer.companyName}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {employer.industry}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  {employer.location}
                                </p>
                              </div>
                              <Badge
                                variant="outline"
                                className="text-orange-600"
                              >
                                Pending Review
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                              <div>
                                <p className="text-gray-600">Contact Person</p>
                                <p className="font-medium">
                                  {employer.contactPerson}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Email</p>
                                <p className="font-medium">{employer.email}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t">
                              <span className="text-sm text-gray-500">
                                Submitted: {employer.submittedDate}
                              </span>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600"
                                >
                                  Reject
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Approve
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Moderation Tab */}
              <TabsContent value="moderation">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Moderation</CardTitle>
                    <CardDescription>
                      Review flagged content and user reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {flaggedContent.map((item) => (
                        <div
                          key={item.id}
                          className="border border-red-200 rounded-lg p-4 bg-red-50"
                        >
                          <div className="flex items-start gap-4">
                            <Flag className="h-5 w-5 text-red-600 mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <Badge
                                  variant="outline"
                                  className="text-red-600"
                                >
                                  {item.type}
                                </Badge>
                                <span className="text-sm text-gray-500">
                                  {item.date}
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 mb-2">
                                {item.content}
                              </p>
                              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                                <div>
                                  <span className="text-gray-600">User: </span>
                                  <span className="font-medium">
                                    {item.user}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-gray-600">
                                    Reported by:{" "}
                                  </span>
                                  <span className="font-medium">
                                    {item.reportedBy}
                                  </span>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  View Full Content
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600"
                                >
                                  Remove Content
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-[#002F66] hover:bg-[#004080]"
                                >
                                  Mark as Resolved
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Event Management</CardTitle>
                          <CardDescription>
                            Create and manage Career Day and Speed Networking
                            events
                          </CardDescription>
                        </div>
                        <Button className="bg-[#002F66] hover:bg-[#004080]">
                          <Calendar className="mr-2 h-4 w-4" />
                          Create New Event
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {upcomingEvents.map((event) => (
                          <div
                            key={event.id}
                            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge
                                    variant="outline"
                                    className={
                                      event.type === "Speed Networking"
                                        ? "border-blue-300 text-blue-700"
                                        : "border-purple-300 text-purple-700"
                                    }
                                  >
                                    {event.type}
                                  </Badge>
                                  <Badge
                                    className={
                                      event.status === "confirmed"
                                        ? "bg-green-100 text-green-700"
                                        : event.status === "planning"
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-gray-100 text-gray-700"
                                    }
                                  >
                                    {event.status.charAt(0).toUpperCase() +
                                      event.status.slice(1)}
                                  </Badge>
                                </div>
                                <h4 className="text-lg font-semibold text-[#002F66]">
                                  {event.name}
                                </h4>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <p className="text-sm font-medium text-gray-600 mb-2">
                                  Date & Time
                                </p>
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-900">
                                    {event.date}
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {event.time}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600 mb-2">
                                  Location
                                </p>
                                <p className="text-sm text-gray-900">
                                  {event.location}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600 mb-2">
                                  Format
                                </p>
                                <p className="text-sm text-gray-900">
                                  {event.format}
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                              <div>
                                <p className="text-sm font-medium text-gray-600 mb-2">
                                  Student Registrations
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-blue-600 h-2 rounded-full"
                                      style={{
                                        width: `${
                                          (event.participants.students /
                                            event.participants.maxStudents) *
                                          100
                                        }%`,
                                      }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium">
                                    {event.participants.students} /{" "}
                                    {event.participants.maxStudents}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600 mb-2">
                                  Employer Registrations
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-purple-600 h-2 rounded-full"
                                      style={{
                                        width: `${
                                          (event.participants.employers /
                                            event.participants.maxEmployers) *
                                          100
                                        }%`,
                                      }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium">
                                    {event.participants.employers} /{" "}
                                    {event.participants.maxEmployers}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-sm font-medium text-gray-600 mb-1">
                                  Pricing
                                </p>
                                <p className="text-sm text-gray-700">
                                  Students: {event.price.students}
                                </p>
                                <p className="text-sm text-gray-700">
                                  Employers: {event.price.employers}
                                </p>
                              </div>
                              {event.partners && (
                                <div>
                                  <p className="text-sm font-medium text-gray-600 mb-1">
                                    Partner Organizations
                                  </p>
                                  <div className="flex flex-wrap gap-1">
                                    {event.partners.map((partner, i) => (
                                      <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {partner}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="flex gap-2 pt-4 border-t">
                              <Button size="sm" variant="outline">
                                Edit Event
                              </Button>
                              <Button size="sm" variant="outline">
                                Manage Registrations
                              </Button>
                              <Button size="sm" variant="outline">
                                View Participants
                              </Button>
                              {event.status === "confirmed" && (
                                <Button
                                  size="sm"
                                  className="bg-[#002F66] hover:bg-[#004080]"
                                >
                                  Send Invitations
                                </Button>
                              )}
                              {event.status === "draft" && (
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  Publish Event
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Event Creation Quick Guide */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Event Types</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                          <h5 className="font-semibold text-blue-900 mb-2">
                            Online Speed Networking
                          </h5>
                          <ul className="space-y-1 text-sm text-blue-800">
                            <li>• 5-minute video sessions</li>
                            <li>• Students rotate between employer tables</li>
                            <li>• Focus on personal interaction</li>
                            <li>• Employers pay participation fee</li>
                          </ul>
                        </div>
                        <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                          <h5 className="font-semibold text-purple-900 mb-2">
                            Virtual International Career Day
                          </h5>
                          <ul className="space-y-1 text-sm text-purple-800">
                            <li>• Virtual table (video rooms) format</li>
                            <li>• Up to 5 participants per table</li>
                            <li>• Free-flowing networking</li>
                            <li>• Co-organized with ESN and partners</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Partners Tab */}
              <TabsContent value="partners">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>University Faculties</CardTitle>
                      <CardDescription>
                        Partner faculties in the network
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          "Faculty of Electrical Engineering and Computing (FER)",
                          "Faculty of Mechanical Engineering and Naval Architecture",
                          "Faculty of Science",
                          "Faculty of Economics",
                        ].map((faculty, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="text-sm font-medium">
                              {faculty}
                            </span>
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top Employer Partners</CardTitle>
                      <CardDescription>Most active employers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {topEmployers.slice(0, 4).map((employer, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="text-sm font-medium">
                                {employer.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {employer.applications} applications
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">
                                {employer.rating}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-[#002F66]" />
                        Platform Growth Analytics
                      </CardTitle>
                      <CardDescription>
                        6-month platform statistics
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-blue-600">
                              +31%
                            </p>
                            <p className="text-sm text-gray-600">
                              Student Growth
                            </p>
                          </div>
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-green-600">
                              +40%
                            </p>
                            <p className="text-sm text-gray-600">
                              Employer Growth
                            </p>
                          </div>
                          <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-purple-600">
                              +64%
                            </p>
                            <p className="text-sm text-gray-600">
                              Application Growth
                            </p>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-4">
                            Monthly Statistics
                          </h4>
                          <div className="space-y-3">
                            {platformAnalytics.map((month, i) => (
                              <div
                                key={i}
                                className="grid grid-cols-4 gap-4 text-sm"
                              >
                                <div className="font-medium">
                                  {month.month} 2024
                                </div>
                                <div className="text-gray-600">
                                  {month.students} students
                                </div>
                                <div className="text-gray-600">
                                  {month.employers} employers
                                </div>
                                <div className="text-gray-600">
                                  {month.applications} applications
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
