"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Search,
  Home,
  MessageSquare,
  Briefcase,
  LayoutDashboard,
  LogIn,
  Menu,
} from "lucide-react";
import { useState } from "react";

export function ForumHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#002F66] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C+</span>
                  </div>
                  <span className="text-xl font-bold text-[#002F66]">
                    Career+
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-6">
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => setOpen(false)}
                >
                  <Home className="w-4 h-4" />
                  Home
                </Button>
                <Button
                  variant="default"
                  className="justify-start gap-2"
                  onClick={() => setOpen(false)}
                >
                  <MessageSquare className="w-4 h-4" />
                  Forum
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => setOpen(false)}
                >
                  <Briefcase className="w-4 h-4" />
                  Internships
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => setOpen(false)}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Button>
                <div className="border-t my-4" />
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search forum..." className="pl-9" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#002F66] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C+</span>
            </div>
            <span className="text-2xl font-bold text-[#002F66]">Career+</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="gap-2">
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button variant="default" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Forum
            </Button>
            <Button variant="ghost" className="gap-2">
              <Briefcase className="w-4 h-4" />
              Internships
            </Button>
            <Button variant="ghost" className="gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Button>
          </nav>

          {/* Search & Login */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search forum..." className="pl-9 w-64" />
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
