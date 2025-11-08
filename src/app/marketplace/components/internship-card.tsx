"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Globe, BadgeCheck, Euro, Ban } from "lucide-react";
import { Internship } from "../data/internships-data";

interface InternshipCardProps {
  internship: Internship;
  onViewDetails: (internship: Internship) => void;
}

export function InternshipCard({
  internship,
  onViewDetails,
}: InternshipCardProps) {
  const getStatusBadge = (status: Internship["applicationStatus"]) => {
    if (!status) return null;

    const statusConfig = {
      received: {
        label: "Received",
        variant: "secondary" as const,
        className: "",
      },
      "in-review": {
        label: "In Review",
        variant: "default" as const,
        className: "",
      },
      accepted: {
        label: "Accepted",
        variant: "default" as const,
        className: "bg-green-600 hover:bg-green-700",
      },
      declined: {
        label: "Declined",
        variant: "destructive" as const,
        className: "",
      },
    };

    const config = statusConfig[status];

    return (
      <Badge variant={config.variant} className={config.className || undefined}>
        {config.label}
      </Badge>
    );
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          {/* Organization Logo */}
          <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
            {internship.organizationLogo}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-sm text-muted-foreground truncate">
                {internship.organizationName}
              </h3>
              {internship.verified && (
                <BadgeCheck className="w-4 h-4 text-[#002F66] flex-shrink-0" />
              )}
            </div>
            <h2 className="text-lg font-bold text-[#002F66] group-hover:text-[#004080] transition-colors line-clamp-2">
              {internship.title}
            </h2>
          </div>

          {/* Status Badge */}
          {internship.applicationStatus && (
            <div className="flex-shrink-0">
              {getStatusBadge(internship.applicationStatus)}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-3 flex-1">
        {/* Location & Field */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>
              {internship.city}, {internship.country}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Badge variant="outline" className="text-xs">
              {internship.field}
            </Badge>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-xs">{internship.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Globe className="w-4 h-4" />
            <span className="text-xs">
              {internship.language} {internship.languageLevel}
            </span>
          </div>
        </div>

        {/* Paid/Unpaid Badge */}
        <div className="mt-3">
          {internship.isPaid ? (
            <Badge className="gap-1 bg-green-100 text-green-800 hover:bg-green-200">
              <Euro className="w-3 h-3" />
              {internship.stipend}
            </Badge>
          ) : (
            <Badge variant="secondary" className="gap-1">
              <Ban className="w-3 h-3" />
              Unpaid
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t">
        <Button
          onClick={() => onViewDetails(internship)}
          className="w-full bg-[#002F66] hover:bg-[#004080]"
        >
          Quick Apply
        </Button>
      </CardFooter>
    </Card>
  );
}
