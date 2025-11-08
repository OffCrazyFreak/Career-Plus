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
  Users,
  ArrowUpRight,
  ArrowDownLeft,
  FileCheck,
  TrendingUp,
  MapPin,
  Calendar,
  GraduationCap,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Download,
} from "lucide-react";

// Mock data for faculty dashboard
const stats = {
  outgoingStudents: 45,
  incomingStudents: 32,
  pendingApprovals: 8,
  completedMobilities: 127,
};

const outgoingStudents = [
  {
    id: 1,
    name: "Ana Horvat",
    program: "Computer Science",
    destination: "Vienna, Austria",
    organization: "Tech Innovation Hub",
    duration: "6 months",
    status: "approved",
    startDate: "Feb 2025",
    coordinator: "Dr. Marko Kovač",
  },
  {
    id: 2,
    name: "Ivan Novak",
    program: "Electrical Engineering",
    destination: "Berlin, Germany",
    organization: "Siemens AG",
    duration: "5 months",
    status: "pending",
    startDate: "Mar 2025",
    coordinator: "Dr. Marko Kovač",
  },
  {
    id: 3,
    name: "Petra Babić",
    program: "Computer Science",
    destination: "Amsterdam, Netherlands",
    organization: "Booking.com",
    duration: "6 months",
    status: "documents-pending",
    startDate: "Apr 2025",
    coordinator: "Dr. Ana Petrović",
  },
  {
    id: 4,
    name: "Luka Marić",
    program: "Software Engineering",
    destination: "Munich, Germany",
    organization: "BMW Group",
    duration: "4 months",
    status: "approved",
    startDate: "Jan 2025",
    coordinator: "Dr. Marko Kovač",
  },
];

const incomingStudents = [
  {
    id: 1,
    name: "Sophie Mueller",
    university: "TU Wien, Austria",
    program: "Computer Science",
    hostDepartment: "FER - Computing",
    duration: "5 months",
    status: "active",
    startDate: "Sep 2024",
    endDate: "Jan 2025",
  },
  {
    id: 2,
    name: "Lucas Schmidt",
    university: "TU Munich, Germany",
    program: "Electrical Engineering",
    hostDepartment: "FER - Electronics",
    duration: "6 months",
    status: "active",
    startDate: "Oct 2024",
    endDate: "Mar 2025",
  },
  {
    id: 3,
    name: "Emma van der Berg",
    university: "TU Delft, Netherlands",
    program: "Data Science",
    hostDepartment: "FER - Computing",
    duration: "4 months",
    status: "arriving",
    startDate: "Dec 2024",
    endDate: "Mar 2025",
  },
];

const pendingDocuments = [
  {
    id: 1,
    student: "Ana Horvat",
    document: "Learning Agreement",
    type: "Final Approval",
    submittedDate: "Nov 5, 2024",
    priority: "high",
  },
  {
    id: 2,
    student: "Ivan Novak",
    document: "Transcript of Records",
    type: "Verification",
    submittedDate: "Nov 6, 2024",
    priority: "medium",
  },
  {
    id: 3,
    student: "Petra Babić",
    document: "Learning Agreement Amendment",
    type: "Review",
    submittedDate: "Nov 7, 2024",
    priority: "high",
  },
];

const statisticsByField = [
  { field: "Computer Science", students: 18, percentage: 40 },
  { field: "Electrical Engineering", students: 12, percentage: 27 },
  { field: "Software Engineering", students: 8, percentage: 18 },
  { field: "Electronics", students: 5, percentage: 11 },
  { field: "Other", students: 2, percentage: 4 },
];

const statisticsByDestination = [
  { country: "Germany", students: 15, popular: true },
  { country: "Austria", students: 12, popular: true },
  { country: "Netherlands", students: 8, popular: true },
  { country: "Spain", students: 5, popular: false },
  { country: "France", students: 3, popular: false },
  { country: "Sweden", students: 2, popular: false },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  approved: { color: "bg-green-100 text-green-700", label: "Approved" },
  pending: {
    color: "bg-yellow-100 text-yellow-700",
    label: "Pending Approval",
  },
  "documents-pending": {
    color: "bg-orange-100 text-orange-700",
    label: "Documents Pending",
  },
  active: { color: "bg-blue-100 text-blue-700", label: "Active" },
  arriving: { color: "bg-purple-100 text-purple-700", label: "Arriving Soon" },
  completed: { color: "bg-gray-100 text-gray-700", label: "Completed" },
};

export default function FacultyDashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("outgoing");

  useEffect(() => {
    // Redirect non-faculty users
    if (user && user.type !== "faculty") {
      router.push("/");
    }
  }, [user, router]);

  // Only show dashboard to faculty
  if (!user || user.type !== "faculty") {
    return (
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
              <p className="text-gray-600">
                This dashboard is only available for faculty members.
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
                    Faculty Mobility Dashboard
                  </h1>
                  <p className="text-gray-600">
                    Manage and track student mobility applications and
                    statistics
                  </p>
                </div>
                <Button className="bg-[#002F66] hover:bg-[#004080] text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Outgoing Students
                      </p>
                      <p className="text-3xl font-bold text-[#002F66] mt-2">
                        {stats.outgoingStudents}
                      </p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <ArrowUpRight className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Incoming Students
                      </p>
                      <p className="text-3xl font-bold text-[#002F66] mt-2">
                        {stats.incomingStudents}
                      </p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <ArrowDownLeft className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Pending Approvals
                      </p>
                      <p className="text-3xl font-bold text-orange-600 mt-2">
                        {stats.pendingApprovals}
                      </p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Total Completed
                      </p>
                      <p className="text-3xl font-bold text-green-600 mt-2">
                        {stats.completedMobilities}
                      </p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Students Management */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Mobility Management</CardTitle>
                    <CardDescription>
                      Track outgoing and incoming students
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="outgoing">
                          Outgoing Students
                        </TabsTrigger>
                        <TabsTrigger value="incoming">
                          Incoming Students
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="outgoing" className="mt-4">
                        <div className="rounded-md border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Student</TableHead>
                                <TableHead>Destination</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Start Date</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {outgoingStudents.map((student) => (
                                <TableRow key={student.id}>
                                  <TableCell>
                                    <div>
                                      <p className="font-medium">
                                        {student.name}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {student.program}
                                      </p>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div>
                                      <p className="font-medium">
                                        {student.destination}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {student.organization}
                                      </p>
                                    </div>
                                  </TableCell>
                                  <TableCell>{student.duration}</TableCell>
                                  <TableCell>
                                    <Badge
                                      className={
                                        statusConfig[student.status].color
                                      }
                                    >
                                      {statusConfig[student.status].label}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>{student.startDate}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </TabsContent>

                      <TabsContent value="incoming" className="mt-4">
                        <div className="rounded-md border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Student</TableHead>
                                <TableHead>Home University</TableHead>
                                <TableHead>Host Department</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Period</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {incomingStudents.map((student) => (
                                <TableRow key={student.id}>
                                  <TableCell>
                                    <div>
                                      <p className="font-medium">
                                        {student.name}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {student.program}
                                      </p>
                                    </div>
                                  </TableCell>
                                  <TableCell>{student.university}</TableCell>
                                  <TableCell>
                                    {student.hostDepartment}
                                  </TableCell>
                                  <TableCell>
                                    <Badge
                                      className={
                                        statusConfig[student.status].color
                                      }
                                    >
                                      {statusConfig[student.status].label}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    <div className="text-sm">
                                      <p>{student.startDate}</p>
                                      <p className="text-gray-500">
                                        to {student.endDate}
                                      </p>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Statistics Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-[#002F66]" />
                        By Field of Study
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {statisticsByField.map((item, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">
                                {item.field}
                              </span>
                              <span className="text-sm text-gray-600">
                                {item.students} ({item.percentage}%)
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#002F66] h-2 rounded-full"
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-[#002F66]" />
                        By Destination
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {statisticsByDestination.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-[#002F66]" />
                              <span className="font-medium">
                                {item.country}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">
                                {item.students} students
                              </span>
                              {item.popular && (
                                <Badge variant="secondary" className="text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Pending Actions */}
              <div className="space-y-6">
                {/* Pending Approvals */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-[#002F66]" />
                      Pending Documents
                    </CardTitle>
                    <CardDescription>Require your review</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {pendingDocuments.map((doc) => (
                        <div
                          key={doc.id}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <p className="font-medium text-sm">
                                {doc.student}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {doc.document}
                              </p>
                            </div>
                            {doc.priority === "high" && (
                              <AlertCircle className="h-4 w-4 text-red-500" />
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-xs text-gray-500">
                              {doc.submittedDate}
                            </span>
                            <Button
                              size="sm"
                              className="bg-[#002F66] hover:bg-[#004080]"
                            >
                              Review
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      View All Students
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileCheck className="mr-2 h-4 w-4" />
                      Approve Documents
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Meetings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Generate Reports
                    </Button>
                  </CardContent>
                </Card>

                {/* Coordinator Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Erasmus Coordinators
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#002F66] rounded-full flex items-center justify-center text-white font-bold">
                          MK
                        </div>
                        <div>
                          <p className="font-medium text-sm">Dr. Marko Kovač</p>
                          <p className="text-xs text-gray-500">
                            Computing Department
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#002F66] rounded-full flex items-center justify-center text-white font-bold">
                          AP
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            Dr. Ana Petrović
                          </p>
                          <p className="text-xs text-gray-500">
                            Electronics Department
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
