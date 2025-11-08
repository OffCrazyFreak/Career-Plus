"use client";

import { Bell, CheckCircle2, FileCheck, Banknote } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: CheckCircle2,
    message: "Your Learning Agreement has been approved.",
    time: "2 hours ago",
    type: "success",
  },
  {
    id: 2,
    icon: FileCheck,
    message: "Employer signed the document.",
    time: "1 day ago",
    type: "info",
  },
  {
    id: 3,
    icon: Banknote,
    message: "Funding confirmation received.",
    time: "3 days ago",
    type: "success",
  },
];

const iconColors = {
  success: "text-green-500",
  info: "text-blue-500",
  warning: "text-yellow-500",
};

export function NotificationPanel() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-bold text-[#002F66] mb-4 flex items-center">
        <Bell className="mr-2 h-5 w-5" />
        Recent Notifications
      </h3>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <notification.icon
              className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                iconColors[notification.type as keyof typeof iconColors]
              }`}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {notification.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
