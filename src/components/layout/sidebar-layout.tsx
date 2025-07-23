"use client";

import React from "react";
import { cn } from "~/lib/utils";
import Sidebar from "./sidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
  className?: string;
  showLeftSidebar?: boolean;
  showRightSidebar?: boolean;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children,
  leftSidebar,
  rightSidebar,
  className,
  showLeftSidebar = true,
  showRightSidebar = true,
}) => {
  return (
    <div className={cn("flex h-screen overflow-hidden", className)}>
      {/* Left Sidebar */}
      {showLeftSidebar && (
        <Sidebar position="left" defaultWidth={280} minWidth={200} maxWidth={500}>
          {leftSidebar}
        </Sidebar>
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

      {/* Right Sidebar */}
      {showRightSidebar && (
        <Sidebar position="right" defaultWidth={280} minWidth={200} maxWidth={500}>
          {rightSidebar}
        </Sidebar>
      )}
    </div>
  );
};

export default SidebarLayout; 