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
import { Plus, Calendar, Lightbulb, Clock } from "lucide-react";

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
                {/* Application Cards */}
                <div className="space-y-4">
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
