"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MessageSquare, Calculator } from "lucide-react";
import Link from "next/link";

export function HelpfulResources() {
  const resources = [
    {
      icon: MessageSquare,
      title: "Forum Discussions",
      description: "Ask questions and share experiences",
      link: "/forum",
    },
    {
      icon: Calculator,
      title: "Living Expenses Calculator",
      description: "Plan your budget for European cities",
      link: "/forum#calculator",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-[#002F66]" />
          Helpful Resources
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {resources.map((resource) => (
          <Link
            key={resource.title}
            href={resource.link}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border"
          >
            <resource.icon className="w-5 h-5 text-[#002F66] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm text-[#002F66] hover:underline">
                {resource.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {resource.description}
              </p>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
