"use client";

import { useAuth } from "@/contexts/auth-context";
import { StudentDashboard } from "@/components/dashboards/student-dashboard";
import { EmployerDashboard } from "@/components/dashboards/employer-dashboard";
import { FacultyDashboard } from "@/components/dashboards/faculty-dashboard";
import { CareerOfficeDashboard } from "@/components/dashboards/career-office-dashboard";

export default function DashboardPage() {
  const { user, isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002F66] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Render the appropriate dashboard based on user type
  switch (user.type) {
    case "student":
      return <StudentDashboard />;
    case "employer":
      return <EmployerDashboard />;
    case "faculty":
      return <FacultyDashboard />;
    case "career-office":
      return <CareerOfficeDashboard />;
    default:
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-[#002F66]">
              Invalid User Type
            </h1>
            <p className="text-gray-600">Please contact support.</p>
          </div>
        </div>
      );
  }
}
