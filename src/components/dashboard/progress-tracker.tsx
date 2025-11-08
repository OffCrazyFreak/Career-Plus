"use client";

import { FileText, Send, PenTool, CheckCircle, Banknote } from "lucide-react";

const stages = [
  {
    id: 1,
    title: "Draft Application",
    icon: FileText,
    description:
      "Create your application by filling in internship details, uploading required documents, and preparing your Learning Agreement draft.",
  },
  {
    id: 2,
    title: "Sent to Employer",
    icon: Send,
    description:
      "Your application has been submitted to the host organization. They will review your documents and provide feedback or request signatures.",
  },
  {
    id: 3,
    title: "Signed by Both Parties",
    icon: PenTool,
    description:
      "Both you and the employer have signed the Learning Agreement. The document is now ready for university review and approval.",
  },
  {
    id: 4,
    title: "Approved by University",
    icon: CheckCircle,
    description:
      "Your university has reviewed and approved your Learning Agreement and mobility plan. The application moves to the funding stage.",
  },
  {
    id: 5,
    title: "Funded / Mobility Started",
    icon: Banknote,
    description:
      "Funding has been confirmed and disbursed. Your Erasmus+ mobility is officially active. Safe travels and enjoy your internship!",
  },
];

export function ProgressTracker() {
  return (
    <div className="space-y-6">
      {stages.map((stage, index) => (
        <div key={stage.id} className="flex gap-4">
          {/* Icon Column */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#002F66] text-white flex items-center justify-center">
              <stage.icon className="h-6 w-6" />
            </div>
            {index < stages.length - 1 && (
              <div className="w-0.5 h-full min-h-[60px] bg-gray-300 mt-2"></div>
            )}
          </div>

          {/* Content Column */}
          <div className="flex-1 pb-8">
            <h3 className="text-lg font-bold text-[#002F66] mb-2">
              {stage.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {stage.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
