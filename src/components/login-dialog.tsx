"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Briefcase, Users } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";

export function LoginDialog() {
  const { isLoginDialogOpen, closeLoginDialog, login } = useAuth();

  const userTypes = [
    {
      type: "student" as const,
      label: "Student",
      description: "Ana Horvat",
      icon: GraduationCap,
    },
    {
      type: "faculty" as const,
      label: "Faculty",
      description: "FER Zagreb",
      icon: Building2,
    },
    {
      type: "career-office" as const,
      label: "Career Development Office",
      description: "Marko Ljutić",
      icon: Users,
    },
    {
      type: "employer" as const,
      label: "Employer",
      description: "Tech Innovation Hub",
      icon: Briefcase,
    },
  ];

  return (
    <Dialog open={isLoginDialogOpen} onOpenChange={closeLoginDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose Your Role</DialogTitle>
          <DialogDescription>
            Select how you want to login to Career+
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {userTypes.map((userType) => {
            const Icon = userType.icon;
            return (
              <Button
                key={userType.type}
                variant="outline"
                className="h-auto py-4 px-4 justify-start gap-4"
                onClick={() => login(userType.type)}
              >
                <div className="w-10 h-10 bg-[#002F66] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col items-start flex-1">
                  <span className="font-semibold text-base">
                    {userType.label}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {userType.description}
                  </span>
                </div>
              </Button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
