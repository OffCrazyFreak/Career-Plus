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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Building2,
  MapPin,
  Users,
  Briefcase,
  Star,
  TrendingUp,
  Eye,
  UserCheck,
  Clock,
  CheckCircle,
  Edit,
  Plus,
  BarChart3,
  Award,
  MessageSquare,
} from "lucide-react";

// Mock data for employer dashboard
const companyProfile = {
  name: "Tech Innovation Hub",
  description:
    "Leading technology company specializing in AI and machine learning solutions. We offer innovative internship programs for students across Europe.",
  size: "250-500 employees",
  location: "Vienna, Austria",
  industry: "Technology / Software Development",
  verified: true,
  rating: 4.8,
  totalReviews: 24,
  website: "https://techinnovationhub.at",
  lookingFor:
    "Computer Science and Software Engineering students with strong programming skills, interest in AI/ML, and excellent problem-solving abilities. We value creativity, teamwork, and eagerness to learn.",
  offering:
    "6-month paid internships in software development, AI research, and data science. Mentorship from senior engineers, flexible working hours, modern office space, and potential for full-time employment after graduation.",
};

const stats = {
  activePostings: 5,
  totalApplications: 127,
  interviewsScheduled: 15,
  activeInterns: 8,
};

const internshipPostings = [
  {
    id: 1,
    title: "Software Development Intern",
    department: "Engineering",
    location: "Vienna, Austria",
    duration: "6 months",
    positions: 2,
    applications: 45,
    status: "active",
    postedDate: "Oct 15, 2024",
    deadline: "Dec 1, 2024",
  },
  {
    id: 2,
    title: "AI/ML Research Intern",
    department: "Research & Development",
    location: "Vienna, Austria",
    duration: "6 months",
    positions: 1,
    applications: 32,
    status: "active",
    postedDate: "Oct 20, 2024",
    deadline: "Dec 10, 2024",
  },
  {
    id: 3,
    title: "Data Science Intern",
    department: "Analytics",
    location: "Vienna, Austria",
    duration: "5 months",
    positions: 2,
    applications: 28,
    status: "active",
    postedDate: "Nov 1, 2024",
    deadline: "Nov 30, 2024",
  },
  {
    id: 4,
    title: "Full-Stack Developer Intern",
    department: "Product Development",
    location: "Vienna, Austria",
    duration: "6 months",
    positions: 1,
    applications: 22,
    status: "closed",
    postedDate: "Sep 10, 2024",
    deadline: "Oct 15, 2024",
  },
];

const recentApplications = [
  {
    id: 1,
    studentName: "Ana Horvat",
    university: "FER, University of Zagreb",
    position: "Software Development Intern",
    appliedDate: "Nov 5, 2024",
    status: "under-review",
    matchScore: 95,
    skills: ["Python", "JavaScript", "React"],
  },
  {
    id: 2,
    studentName: "Marko Novak",
    university: "University of Ljubljana",
    position: "AI/ML Research Intern",
    appliedDate: "Nov 6, 2024",
    status: "interview-scheduled",
    matchScore: 88,
    skills: ["Python", "TensorFlow", "Machine Learning"],
  },
  {
    id: 3,
    studentName: "Petra Kovač",
    university: "University of Belgrade",
    position: "Data Science Intern",
    appliedDate: "Nov 7, 2024",
    status: "new",
    matchScore: 92,
    skills: ["Python", "SQL", "Data Analysis"],
  },
];

const activeInterns = [
  {
    id: 1,
    name: "Ivan Jurić",
    position: "Software Development Intern",
    startDate: "Sep 2024",
    endDate: "Feb 2025",
    supervisor: "Sarah Miller",
    performance: "excellent",
  },
  {
    id: 2,
    name: "Luka Babić",
    position: "AI/ML Research Intern",
    startDate: "Oct 2024",
    endDate: "Mar 2025",
    supervisor: "Dr. Thomas Wagner",
    performance: "good",
  },
];

const reviews = [
  {
    id: 1,
    studentName: "Tomislav Marić",
    position: "Software Developer Intern",
    rating: 5,
    date: "Aug 2024",
    comment:
      "Excellent internship experience! Great mentorship, challenging projects, and a supportive team. Highly recommend!",
    verified: true,
  },
  {
    id: 2,
    studentName: "Maja Horvat",
    position: "Data Science Intern",
    rating: 5,
    date: "Jul 2024",
    comment:
      "Amazing learning opportunity. The team was very welcoming and I gained practical experience with real-world projects.",
    verified: true,
  },
  {
    id: 3,
    studentName: "Josip Kovačić",
    position: "Full-Stack Developer",
    rating: 4,
    date: "Jun 2024",
    comment:
      "Good experience overall. Projects were interesting and I learned a lot about modern web development.",
    verified: true,
  },
];

const applicationStatusConfig: Record<
  string,
  { color: string; label: string }
> = {
  new: { color: "bg-blue-100 text-blue-700", label: "New" },
  "under-review": {
    color: "bg-yellow-100 text-yellow-700",
    label: "Under Review",
  },
  "interview-scheduled": {
    color: "bg-purple-100 text-purple-700",
    label: "Interview Scheduled",
  },
  accepted: { color: "bg-green-100 text-green-700", label: "Accepted" },
  rejected: { color: "bg-red-100 text-red-700", label: "Rejected" },
};

const postingStatusConfig: Record<string, { color: string; label: string }> = {
  active: { color: "bg-green-100 text-green-700", label: "Active" },
  closed: { color: "bg-gray-100 text-gray-700", label: "Closed" },
  draft: { color: "bg-yellow-100 text-yellow-700", label: "Draft" },
};

export function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#002F66] rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                TIH
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold text-[#002F66]">
                    {companyProfile.name}
                  </h1>
                  {companyProfile.verified && (
                    <Badge className="bg-blue-100 text-blue-700">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 mt-1">{companyProfile.industry}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {companyProfile.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {companyProfile.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {companyProfile.rating} ({companyProfile.totalReviews}{" "}
                    reviews)
                  </span>
                </div>
              </div>
            </div>
            <Button className="bg-[#002F66] hover:bg-[#004080] text-white">
              <Plus className="mr-2 h-4 w-4" />
              Post New Internship
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
                    Active Postings
                  </p>
                  <p className="text-3xl font-bold text-[#002F66] mt-2">
                    {stats.activePostings}
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Applications
                  </p>
                  <p className="text-3xl font-bold text-[#002F66] mt-2">
                    {stats.totalApplications}
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Interviews Scheduled
                  </p>
                  <p className="text-3xl font-bold text-[#002F66] mt-2">
                    {stats.interviewsScheduled}
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Interns
                  </p>
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    {stats.activeInterns}
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="postings">Internship Postings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="interns">Active Interns</TabsTrigger>
            <TabsTrigger value="profile">Company Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Applications */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest student applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplications.slice(0, 3).map((app) => (
                      <div
                        key={app.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold">{app.studentName}</p>
                            <p className="text-sm text-gray-600">
                              {app.university}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {app.position}
                            </p>
                          </div>
                          <Badge className="bg-green-100 text-green-700">
                            {app.matchScore}% Match
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {app.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {app.appliedDate}
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

              {/* Recent Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Recent Reviews
                  </CardTitle>
                  <CardDescription>
                    Feedback from verified interns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reviews.slice(0, 3).map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-4 last:border-0"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-medium text-sm">
                              {review.studentName}
                            </p>
                            <p className="text-xs text-gray-500">
                              {review.position}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          {review.comment}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">
                            {review.date}
                          </span>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Analytics Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-[#002F66]" />
                  Application Insights
                </CardTitle>
                <CardDescription>Premium analytics feature</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">1,247</p>
                    <p className="text-sm text-gray-600">
                      Profile Views (30 days)
                    </p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">+23%</p>
                    <p className="text-sm text-gray-600">Application Growth</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">87%</p>
                    <p className="text-sm text-gray-600">Average Match Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Internship Postings Tab */}
          <TabsContent value="postings">
            <Card>
              <CardHeader>
                <CardTitle>Your Internship Postings</CardTitle>
                <CardDescription>
                  Manage current and past internship offers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Position</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Applications</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {internshipPostings.map((posting) => (
                        <TableRow key={posting.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{posting.title}</p>
                              <p className="text-sm text-gray-500">
                                {posting.positions} position(s)
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>{posting.department}</TableCell>
                          <TableCell>{posting.duration}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">
                              {posting.applications}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={
                                postingStatusConfig[posting.status].color
                              }
                            >
                              {postingStatusConfig[posting.status].label}
                            </Badge>
                          </TableCell>
                          <TableCell>{posting.deadline}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>All Applications</CardTitle>
                <CardDescription>
                  Review and manage student applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app) => (
                    <div
                      key={app.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-[#002F66] rounded-full flex items-center justify-center text-white font-bold">
                              {app.studentName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="font-semibold">{app.studentName}</p>
                              <p className="text-sm text-gray-600">
                                {app.university}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Applied for: {app.position}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {app.skills.map((skill, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className="bg-green-100 text-green-700">
                            {app.matchScore}% Match
                          </Badge>
                          <Badge
                            className={
                              applicationStatusConfig[app.status].color
                            }
                          >
                            {applicationStatusConfig[app.status].label}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t">
                        <span className="text-sm text-gray-500">
                          Applied: {app.appliedDate}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                          <Button
                            size="sm"
                            className="bg-[#002F66] hover:bg-[#004080]"
                          >
                            Schedule Interview
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Active Interns Tab */}
          <TabsContent value="interns">
            <Card>
              <CardHeader>
                <CardTitle>Active Interns</CardTitle>
                <CardDescription>Currently working interns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Intern</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Period</TableHead>
                        <TableHead>Supervisor</TableHead>
                        <TableHead>Performance</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activeInterns.map((intern) => (
                        <TableRow key={intern.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#002F66] rounded-full flex items-center justify-center text-white font-bold">
                                {intern.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <p className="font-medium">{intern.name}</p>
                            </div>
                          </TableCell>
                          <TableCell>{intern.position}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <p>{intern.startDate}</p>
                              <p className="text-gray-500">
                                to {intern.endDate}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>{intern.supervisor}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                intern.performance === "excellent"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-blue-100 text-blue-700"
                              }
                            >
                              {intern.performance.charAt(0).toUpperCase() +
                                intern.performance.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Contact
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Company Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Company Profile</CardTitle>
                    <CardDescription>
                      Manage your organization information
                    </CardDescription>
                  </div>
                  <Button
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                    variant="outline"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    {isEditingProfile ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Company Description</Label>
                  {isEditingProfile ? (
                    <Textarea
                      value={companyProfile.description}
                      rows={4}
                      className="mt-2"
                    />
                  ) : (
                    <p className="text-gray-700 mt-2">
                      {companyProfile.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Company Size</Label>
                    {isEditingProfile ? (
                      <Input value={companyProfile.size} className="mt-2" />
                    ) : (
                      <p className="text-gray-700 mt-2">
                        {companyProfile.size}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label>Location</Label>
                    {isEditingProfile ? (
                      <Input value={companyProfile.location} className="mt-2" />
                    ) : (
                      <p className="text-gray-700 mt-2">
                        {companyProfile.location}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label>What We're Looking For</Label>
                  {isEditingProfile ? (
                    <Textarea
                      value={companyProfile.lookingFor}
                      rows={3}
                      className="mt-2"
                    />
                  ) : (
                    <p className="text-gray-700 mt-2">
                      {companyProfile.lookingFor}
                    </p>
                  )}
                </div>

                <div>
                  <Label>What We Offer</Label>
                  {isEditingProfile ? (
                    <Textarea
                      value={companyProfile.offering}
                      rows={3}
                      className="mt-2"
                    />
                  ) : (
                    <p className="text-gray-700 mt-2">
                      {companyProfile.offering}
                    </p>
                  )}
                </div>

                {isEditingProfile && (
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsEditingProfile(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-[#002F66] hover:bg-[#004080]"
                      onClick={() => setIsEditingProfile(false)}
                    >
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
