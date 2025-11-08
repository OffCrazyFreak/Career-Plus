"use client";

import { Button } from "@/components/ui/button";
import {
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Circle,
} from "lucide-react";
import Image from "next/image";

interface ApplicationCardProps {
  application: {
    id: string;
    title: string;
    employer: string;
    employerLogo: string;
    location: string;
    submissionDate: string;
    status: string;
    currentStep: number;
    totalSteps: number;
  };
  onViewDetails: () => void;
}

const statusConfig = {
  draft: {
    label: "Draft",
    color: "bg-gray-100 text-gray-700 border-gray-300",
    progressColor: "bg-gray-400",
  },
  sent: {
    label: "Sent to Employer",
    color: "bg-blue-100 text-blue-700 border-blue-300",
    progressColor: "bg-blue-500",
  },
  signed: {
    label: "Signed by Both Parties",
    color: "bg-purple-100 text-purple-700 border-purple-300",
    progressColor: "bg-purple-500",
  },
  approved: {
    label: "Approved by University",
    color: "bg-green-100 text-green-700 border-green-300",
    progressColor: "bg-green-500",
  },
  funded: {
    label: "Funded / Mobility Started",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
    progressColor: "bg-emerald-500",
  },
};

export function ApplicationCard({
  application,
  onViewDetails,
}: ApplicationCardProps) {
  const status = statusConfig[application.status as keyof typeof statusConfig];
  const progressPercentage =
    (application.currentStep / application.totalSteps) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Company Logo Placeholder */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
            <Building2 className="h-8 w-8 text-gray-400" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-bold text-[#002F66] mb-1">
                {application.title}
              </h3>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {application.employer}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${status.color}`}
            >
              {status.label}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {application.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Submitted:{" "}
              {new Date(application.submissionDate).toLocaleDateString()}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>Progress</span>
              <span>
                Step {application.currentStep} of {application.totalSteps}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${status.progressColor}`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center gap-2 mb-4">
            {Array.from({ length: application.totalSteps }).map((_, index) => (
              <div key={index} className="flex items-center">
                {index + 1 <= application.currentStep ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
                {index < application.totalSteps - 1 && (
                  <div
                    className={`w-8 h-0.5 ${
                      index + 1 < application.currentStep
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex justify-end">
            <Button
              onClick={onViewDetails}
              variant="outline"
              className="border-[#002F66] text-[#002F66] hover:bg-[#002F66] hover:text-white"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
