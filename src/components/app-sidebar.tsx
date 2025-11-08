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
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { Input } from "@/components/ui/input";
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
            <SidebarMenuButton asChild>
              <a href="#" className="gap-2">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
