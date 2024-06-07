"use client";
import React, { useState } from "react";
import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/components/nav-items";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import { NavItem } from "@/types";
import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";
import { LogoutButton } from "./logout-button";
import { LuLogOut } from "react-icons/lu";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  const handleItemClick = (item: NavItem) => {
    // Implement your logic based on the clicked item
    console.log("Clicked item:", item);
    if (item.title === "Logout") {
      // Perform logout logic
      signOut();
    }
  };
  return (
    <nav
      className={cn(
        `relative hidden h-screen flex-none border-r pt-20 md:block`,
        status && "duration-500",
        !isMinimized ? "w-72" : "w-[72px]",
        className
      )}
    >
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
