"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Upload,
  MessageSquare,
  CheckCircle,
  Users,
  MapPin,
  Building2,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";

interface ApplicationDetailsModalProps {
  applicationId: string;
  onClose: () => void;
}

// Mock data for the selected application
const applicationDetails = {
  "1": {
    title: "Software Development Intern",
    employer: "Tech Innovation Hub",
    location: "Vienna, Austria",
    duration: "6 months (Feb 2025 - Jul 2025)",
    status: "Approved by University",
    currentStep: 4,
    supervisor: "Dr. Maria Schmidt",
    supervisorEmail: "m.schmidt@techhub.at",
    supervisorPhone: "+43 1 234 5678",
  },
  "2": {
    title: "Digital Marketing Intern",
    employer: "Creative Solutions GmbH",
    location: "Berlin, Germany",
    duration: "5 months (Jan 2025 - May 2025)",
    status: "Signed by Both Parties",
    currentStep: 3,
    supervisor: "Hans Müller",
    supervisorEmail: "h.muller@creative-solutions.de",
    supervisorPhone: "+49 30 987 6543",
  },
  "3": {
    title: "UX Research Assistant",
    employer: "DesignLab Studio",
    location: "Amsterdam, Netherlands",
    duration: "4 months (Mar 2025 - Jun 2025)",
    status: "Sent to Employer",
    currentStep: 2,
    supervisor: "Emma van der Berg",
    supervisorEmail: "e.vandenberg@designlab.nl",
    supervisorPhone: "+31 20 123 4567",
  },
};

const documents = [
  {
    name: "Learning_Agreement.pdf",
    size: "245 KB",
    uploaded: true,
    date: "Oct 15, 2024",
  },
  {
    name: "Motivation_Letter.pdf",
    size: "180 KB",
    uploaded: true,
    date: "Oct 15, 2024",
  },
  {
    name: "CV_English.pdf",
    size: "320 KB",
    uploaded: true,
    date: "Oct 14, 2024",
  },
  {
    name: "Transcript_of_Records.pdf",
    size: "890 KB",
    uploaded: true,
    date: "Oct 14, 2024",
  },
  {
    name: "Insurance_Certificate.pdf",
    size: "156 KB",
    uploaded: false,
    date: "",
  },
];

const messages = [
  {
    id: 1,
    sender: "Dr. Maria Schmidt",
    role: "Supervisor",
    message:
      "Welcome! Looking forward to having you on our team. Please confirm your start date.",
    timestamp: "Nov 2, 2024 - 10:30 AM",
  },
  {
    id: 2,
    sender: "Ana Horvat",
    role: "You",
    message:
      "Thank you! I confirm February 1st, 2025 as my start date. Very excited to join!",
    timestamp: "Nov 2, 2024 - 2:15 PM",
  },
  {
    id: 3,
    sender: "Career Office",
    role: "University",
    message:
      "Your Learning Agreement has been approved. Please upload your insurance certificate.",
    timestamp: "Nov 5, 2024 - 9:00 AM",
  },
];

const approvals = [
  {
    party: "Student",
    name: "Ana Horvat",
    status: "Signed",
    date: "Oct 15, 2024",
  },
  {
    party: "Employer",
    name: "Tech Innovation Hub",
    status: "Signed",
    date: "Oct 20, 2024",
  },
  {
    party: "University",
    name: "FER Zagreb",
    status: "Approved",
    date: "Nov 5, 2024",
  },
  { party: "Funding", name: "Erasmus+ Grant", status: "Pending", date: "-" },
];

export function ApplicationDetailsModal({
  applicationId,
  onClose,
}: ApplicationDetailsModalProps) {
  const [activeTab, setActiveTab] = useState("documents");
  const details =
    applicationDetails[applicationId as keyof typeof applicationDetails];

  if (!details) return null;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#002F66]">
            {details.title}
          </DialogTitle>
        </DialogHeader>

        {/* Application Info */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="h-4 w-4 text-[#002F66]" />
            <span className="font-medium">{details.employer}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-[#002F66]" />
            <span>{details.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-[#002F66]" />
            <span>{details.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="font-medium text-green-700">{details.status}</span>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between px-4">
          {["Draft", "Sent", "Signed", "Approved", "Funded"].map(
            (step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    index + 1 <= details.currentStep
                      ? "bg-[#002F66] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-xs mt-1 text-gray-600">{step}</span>
              </div>
            )
          )}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="esn">ESN Buddy</TabsTrigger>
          </TabsList>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-4">
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#002F66]" />
                    <div>
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-gray-500">
                        {doc.size}
                        {doc.uploaded && ` • Uploaded ${doc.date}`}
                      </p>
                    </div>
                  </div>
                  {doc.uploaded ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium text-[#002F66] mb-2">
                Automated Erasmus+ Form
              </h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  Your Learning Agreement has been automatically generated based
                  on your application. Download it below or view in the
                  documents section.
                </p>
                <Button
                  className="mt-3 bg-[#002F66] hover:bg-[#004080]"
                  size="sm"
                  disabled
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download Learning Agreement
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-4">
            <div className="space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-4 rounded-lg ${
                    msg.role === "You" ? "bg-blue-50 ml-8" : "bg-gray-50 mr-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{msg.sender}</span>
                    <span className="text-xs text-gray-500">
                      {msg.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{msg.message}</p>
                  <span className="text-xs text-gray-500 italic">
                    {msg.role}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                disabled
              />
              <Button disabled>
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          {/* Approvals Tab */}
          <TabsContent value="approvals" className="space-y-3">
            {approvals.map((approval, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-sm">{approval.party}</p>
                  <p className="text-xs text-gray-600">{approval.name}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-medium ${
                      approval.status === "Approved" ||
                      approval.status === "Signed"
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {approval.status}
                  </p>
                  {approval.date !== "-" && (
                    <p className="text-xs text-gray-500">{approval.date}</p>
                  )}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* ESN Buddy Tab */}
          <TabsContent value="esn" className="space-y-4">
            <div className="bg-gradient-to-r from-[#002F66] to-[#004080] text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#002F66]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">ESN Buddy Program</h4>
                  <p className="text-sm opacity-90">You've been matched!</p>
                </div>
              </div>
              <p className="text-sm">
                You've been matched with an ESN Buddy in Vienna! Your buddy will
                help you settle in and explore the city.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#002F66] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  LK
                </div>
                <div>
                  <h5 className="font-bold text-[#002F66]">Lukas Kovač</h5>
                  <p className="text-sm text-gray-600">
                    ESN Vienna - Computer Science Student
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-[#002F66]" />
                  <span>lukas.kovac@esn-vienna.at</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-[#002F66]" />
                  <span>+43 664 123 4567</span>
                </div>
              </div>
              <Button
                className="w-full mt-4 bg-[#002F66] hover:bg-[#004080]"
                disabled
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
