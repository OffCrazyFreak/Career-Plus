"use client";

import * as React from "react";
import {
  Home,
  MessageSquare,
  Briefcase,
  LifeBuoy,
  Send,
  Search,
  LogIn,
  ChevronDown,
  LayoutDashboard,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { LoginDialog } from "@/components/login-dialog";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/forum",
      icon: Home,
      page: "forum" as const,
    },
    {
      title: "Forum",
      url: "/forum",
      icon: MessageSquare,
      page: "forum" as const,
    },
    {
      title: "Marketplace",
      url: "/marketplace",
      icon: Briefcase,
      page: "marketplace" as const,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const currentPage = pathname.startsWith("/marketplace")
    ? "marketplace"
    : "forum";
  const { user, openLoginDialog, logout } = useAuth();

  // Update navMain items with isActive based on currentPage
  const navMainWithActive = data.navMain.map((item) => ({
    ...item,
    isActive: item.page === currentPage,
  }));

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/forum">
                <div className="bg-[#002F66] text-white flex aspect-square size-8 items-center justify-center rounded-lg">
                  <span className="text-sm font-bold">C+</span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold text-[#002F66]">
                    Career+
                  </span>
                  <span className="truncate text-xs">Erasmus+ Platform</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Search Bar */}
        <SidebarGroup className="mt-4">
          <SidebarGroupContent>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8 h-9" />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainWithActive} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="h-auto py-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-[#002F66] text-white text-sm">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start flex-1">
                      <span className="text-sm font-medium">{user.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" align="end" className="w-56">
                  <DropdownMenuItem className="cursor-pointer">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
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
              <SidebarMenuButton onClick={openLoginDialog}>
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <LoginDialog />
    </Sidebar>
  );
}
