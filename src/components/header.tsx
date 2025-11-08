"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Search,
  Home,
  MessageSquare,
  Briefcase,
  LogIn,
  ChevronDown,
  LayoutDashboard,
  User,
  Settings,
  LogOut,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { LoginDialog } from "@/components/login-dialog";

export function Header() {
  const pathname = usePathname();
  const { user, openLoginDialog, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="flex items-center justify-between gap-8 px-4 py-4 container mx-auto">
        {/* Mobile Sidebar Trigger */}
        <SidebarTrigger className="lg:hidden" />

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#002F66] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">C+</span>
          </div>
          <span className="text-2xl font-bold text-[#002F66]">Career+</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link href="/">
            <Button
              variant={pathname === "/" ? "default" : "ghost"}
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
          </Link>
          <Link href="/forum">
            <Button
              variant={pathname.startsWith("/forum") ? "default" : "ghost"}
              className="gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Forum
            </Button>
          </Link>
          <Link href="/marketplace">
            <Button
              variant={
                pathname.startsWith("/marketplace") ? "default" : "ghost"
              }
              className="gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Marketplace
            </Button>
          </Link>
          <Link href="/events">
            <Button
              variant={pathname === "/events" ? "default" : "ghost"}
              className="gap-2"
            >
              <Calendar className="w-4 h-4" />
              Events
            </Button>
          </Link>
        </nav>

        {/* Search & Login/User */}
        <div className="flex items-center gap-2">
          <div className="hidden xl:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-64" />
            </div>
          </div>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-2 h-auto py-2 px-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#002F66] text-white text-sm">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <Link
                  href={
                    user.type === "student"
                      ? "/dashboard"
                      : user.type === "faculty"
                      ? "/faculty-dashboard"
                      : user.type === "employer"
                      ? "/employer-dashboard"
                      : "/career-office-dashboard"
                  }
                >
                  <DropdownMenuItem className="cursor-pointer">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                </Link>
                {user.type === "student" && (
                  <Link href="/profile">
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                  </Link>
                )}
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              className="gap-2"
              onClick={openLoginDialog}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          )}
        </div>
      </div>
      <LoginDialog />
    </header>
  );
}
