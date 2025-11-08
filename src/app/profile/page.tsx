"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { StudentProfile } from "@/components/profile/student-profile";
import { EmployerProfile } from "@/components/profile/employer-profile";
import { FacultyProfile } from "@/components/profile/faculty-profile";
import { CareerOfficeProfile } from "@/components/profile/career-office-profile";

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect if not authenticated
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  // Render the appropriate profile based on user type
  switch (user.type) {
    case "student":
      return <StudentProfile />;
    case "employer":
      return <EmployerProfile />;
    case "faculty":
      return <FacultyProfile />;
    case "career-office":
      return <CareerOfficeProfile />;
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
