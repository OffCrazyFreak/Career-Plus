"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Clock,
  Globe,
  Euro,
  Ban,
  BadgeCheck,
  CheckCircle2,
  MessageSquare,
  Calculator,
  Building2,
} from "lucide-react";
import { Internship } from "../data/internships-data";
import Link from "next/link";

interface InternshipDetailModalProps {
  internship: Internship | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InternshipDetailModal({
  internship,
  open,
  onOpenChange,
}: InternshipDetailModalProps) {
  if (!internship) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            {/* Organization Logo */}
            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
              {internship.organizationLogo}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <DialogDescription className="font-semibold">
                  {internship.organizationName}
                </DialogDescription>
                {internship.verified && (
                  <Badge
                    variant="outline"
                    className="gap-1 text-[#002F66] border-[#002F66]"
                  >
                    <BadgeCheck className="w-3 h-3" />
                    Verified
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-2xl text-[#002F66]">
                {internship.title}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        {/* Key Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="font-medium text-sm">
                {internship.city}, {internship.country}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-medium text-sm">{internship.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Language</p>
              <p className="font-medium text-sm">
                {internship.language} {internship.languageLevel}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {internship.isPaid ? (
              <Euro className="w-5 h-5 text-green-600" />
            ) : (
              <Ban className="w-5 h-5 text-muted-foreground" />
            )}
            <div>
              <p className="text-xs text-muted-foreground">Stipend</p>
              <p className="font-medium text-sm">
                {internship.isPaid ? internship.stipend : "Unpaid"}
              </p>
            </div>
          </div>
        </div>

        {/* Field Badge */}
        <div>
          <Badge variant="outline" className="text-sm">
            {internship.field}
          </Badge>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Overview</h3>
          <p className="text-muted-foreground leading-relaxed">
            {internship.description}
          </p>
        </div>

        <Separator />

        {/* Tasks */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Your Tasks</h3>
          <ul className="space-y-2">
            {internship.tasks.map((task, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#002F66] flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Requirements */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Requirements</h3>
          <ul className="space-y-2">
            {internship.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#002F66] flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Related Resources */}
        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="font-semibold mb-3">
            Learn More About This Opportunity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/forum"
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all border"
            >
              <MessageSquare className="w-5 h-5 text-[#002F66]" />
              <div>
                <p className="font-medium text-sm text-[#002F66]">
                  Forum Discussions
                </p>
                <p className="text-xs text-muted-foreground">
                  Read experiences from {internship.city}
                </p>
              </div>
            </Link>

            <Link
              href="/forum#calculator"
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all border"
            >
              <Calculator className="w-5 h-5 text-[#002F66]" />
              <div>
                <p className="font-medium text-sm text-[#002F66]">
                  Living Expenses
                </p>
                <p className="text-xs text-muted-foreground">
                  Calculate costs in {internship.city}
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex gap-3 pt-4">
          <Button size="lg" className="flex-1 bg-[#002F66] hover:bg-[#004080]">
            Quick Apply
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
