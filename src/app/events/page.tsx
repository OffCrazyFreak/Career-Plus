"use client";

import { useState } from "react";
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
import {
  Calendar,
  MapPin,
  Users,
  Video,
  Clock,
  Building2,
  Globe,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

// Mock events data
const upcomingEvents = [
  {
    id: 1,
    type: "Speed Networking",
    title: "Online Speed Networking - Winter 2024",
    date: "November 25, 2024",
    time: "14:00 - 17:00 CET",
    location: "Virtual (Zoom)",
    participants: {
      students: 45,
      employers: 12,
      maxStudents: 60,
      maxEmployers: 15,
    },
    description:
      "Structured, short video sessions between students and employers. Students rotate between virtual tables every few minutes, focusing on personal interaction and talent discovery rather than formal interviews.",
    organizer: "University of Zagreb Career Development Office",
    status: "open-registration",
    price: {
      students: "Free",
      employers: "€150 per representative",
    },
    format: "5-minute sessions, 12 rotations",
    registrationDeadline: "November 20, 2024",
  },
  {
    id: 2,
    type: "Career Day",
    title: "Virtual International Career Day 2024",
    date: "December 10, 2024",
    time: "10:00 - 18:00 CET",
    location: "Virtual Platform",
    participants: {
      students: 120,
      employers: 25,
      universities: 8,
      maxStudents: 200,
    },
    description:
      "Interactive online event resembling a digital career fair. Each company or faculty hosts a virtual table (video call room) for up to 5 participants. Students can freely join, ask questions, and discuss opportunities.",
    organizer:
      "Co-organized by University of Zagreb CDO, ESN, and Partner Universities",
    status: "open-registration",
    price: {
      students: "Free",
      employers: "€200 per virtual table",
    },
    format: "Virtual tables with 5-person capacity, free-flowing networking",
    registrationDeadline: "December 5, 2024",
    partners: [
      "University of Zagreb",
      "ESN Croatia",
      "TU Wien",
      "TU Munich",
      "University of Ljubljana",
    ],
  },
  {
    id: 3,
    type: "Speed Networking",
    title: "Spring Internship Speed Networking",
    date: "January 15, 2025",
    time: "15:00 - 18:00 CET",
    location: "Virtual (Microsoft Teams)",
    participants: {
      students: 0,
      employers: 0,
      maxStudents: 50,
      maxEmployers: 12,
    },
    description:
      "Fast-paced networking event focused on spring and summer 2025 internship opportunities. Meet with top European employers in quick, engaging video sessions.",
    organizer: "University of Zagreb Career Development Office",
    status: "coming-soon",
    price: {
      students: "Free",
      employers: "€150 per representative",
    },
    format: "5-minute sessions, 10 rotations",
    registrationDeadline: "January 10, 2025",
  },
];

const pastEvents = [
  {
    id: 4,
    type: "Career Day",
    title: "Autumn Career Fair 2024",
    date: "October 15, 2024",
    participants: {
      students: 156,
      employers: 32,
    },
    feedback: {
      rating: 4.7,
      responses: 89,
    },
  },
  {
    id: 5,
    type: "Speed Networking",
    title: "Tech Talent Networking Session",
    date: "September 20, 2024",
    participants: {
      students: 52,
      employers: 14,
    },
    feedback: {
      rating: 4.9,
      responses: 48,
    },
  },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  "open-registration": {
    color: "bg-green-100 text-green-700",
    label: "Registration Open",
  },
  "coming-soon": { color: "bg-blue-100 text-blue-700", label: "Coming Soon" },
  full: { color: "bg-orange-100 text-orange-700", label: "Fully Booked" },
  completed: { color: "bg-gray-100 text-gray-700", label: "Completed" },
};

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className="max-w-7xl mx-auto p-6 lg:p-8">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#002F66] mb-2">
                Career+ Events
              </h1>
              <p className="text-gray-600">
                Connect with employers and explore opportunities through our
                networking events
              </p>
            </div>

            {/* Event Types Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-[#002F66]" />
                    Online Speed Networking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-[#002F66] mt-0.5 flex-shrink-0" />
                      <span>
                        Structured, short video sessions between students and
                        employers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-[#002F66] mt-0.5 flex-shrink-0" />
                      <span>
                        Students rotate between virtual tables every few minutes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-[#002F66] mt-0.5 flex-shrink-0" />
                      <span>
                        Focus on personal interaction and talent discovery
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-[#002F66] mt-0.5 flex-shrink-0" />
                      <span>
                        Free for students, participation fee for employers
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-[#002F66]" />
                    Virtual International Career Day
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-[#002F66] mt-0.5 flex-shrink-0" />
                      <span>
                        Interactive online event resembling a digital career
                        fair
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-[#002F66] mt-0.5 flex-shrink-0" />
                      <span>
                        Virtual tables (video rooms) for up to 5 participants
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-[#002F66] mt-0.5 flex-shrink-0" />
                      <span>
                        Students freely join, ask questions, and discuss
                        opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-[#002F66] mt-0.5 flex-shrink-0" />
                      <span>
                        Co-organized with ESN and European partner universities
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#002F66] mb-4">
                Upcoming Events
              </h2>
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
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
                            <Badge className={statusConfig[event.status].color}>
                              {statusConfig[event.status].label}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">
                            {event.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="h-4 w-4 text-[#002F66]" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="h-4 w-4 text-[#002F66]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="h-4 w-4 text-[#002F66]" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Users className="h-4 w-4 text-[#002F66]" />
                            <span>
                              {event.participants.students} /{" "}
                              {event.participants.maxStudents} students
                              registered
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              Format:
                            </p>
                            <p className="text-sm text-gray-700">
                              {event.format}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              Registration Deadline:
                            </p>
                            <p className="text-sm text-gray-700">
                              {event.registrationDeadline}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              Price:
                            </p>
                            <p className="text-sm text-gray-700">
                              Students: {event.price.students}
                            </p>
                            <p className="text-sm text-gray-700">
                              Employers: {event.price.employers}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{event.description}</p>

                      {event.partners && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-600 mb-2">
                            Partner Organizations:
                          </p>
                          <div className="flex flex-wrap gap-2">
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

                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Building2 className="h-4 w-4" />
                        <span>Organized by: {event.organizer}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button className="bg-[#002F66] hover:bg-[#004080]">
                          Register Now
                        </Button>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <div>
              <h2 className="text-2xl font-bold text-[#002F66] mb-4">
                Past Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-gray-600">
                          {event.type}
                        </Badge>
                        <Badge className={statusConfig.completed.color}>
                          Completed
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            Students Attended:
                          </span>
                          <span className="font-medium">
                            {event.participants.students}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Employers:</span>
                          <span className="font-medium">
                            {event.participants.employers}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            Feedback Rating:
                          </span>
                          <span className="font-medium">
                            ⭐ {event.feedback.rating} (
                            {event.feedback.responses} responses)
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Event Report
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
