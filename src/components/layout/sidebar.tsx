"use client";

import React, { useState, useEffect } from "react";
import { cn } from "~/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface SidebarProps {
  position: "left" | "right";
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
  children?: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  position,
  defaultWidth = 300,
  minWidth = 200,
  maxWidth = 600,
  children,
  className,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(defaultWidth);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;

    let newWidth;
    if (position === "left") {
      newWidth = e.clientX;
    } else {
      newWidth = window.innerWidth - e.clientX;
    }

    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  // Add event listeners for resizing
  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);

  const sidebarWidth = isCollapsed ? 0 : width;

  return (
    <>
      {/* Collapsed Toggle Button - positioned absolutely relative to viewport */}
      {isCollapsed && (
        <div
          className={cn(
            "fixed top-20 z-50 w-8 h-10 bg-background border border-border rounded-md cursor-pointer flex items-center justify-center hover:bg-accent transition-all duration-200 shadow-lg",
            position === "left" ? "left-2" : "right-2"
          )}
          onClick={() => setIsCollapsed(false)}
          title={`Open ${position} sidebar`}
        >
          <MoreHorizontal size={16} className="text-muted-foreground" />
        </div>
      )}

      <div
        className={cn(
          "relative flex-shrink-0 border-border transition-all duration-200 overflow-hidden",
          position === "left" ? "border-r" : "border-l",
          className
        )}
        style={{ width: sidebarWidth }}
      >
        {/* Sidebar Content */}
        <div className="h-full bg-background/50 backdrop-blur-sm">
          {!isCollapsed && (
            <>
              {/* Sidebar Header */}
              <div className="p-4 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {position === "left" ? "Explorer" : "Outline"}
                  </h3>
                  <button
                    onClick={() => setIsCollapsed(true)}
                    className="p-1 hover:bg-accent rounded text-muted-foreground hover:text-foreground transition-colors"
                    title={`Collapse ${position} sidebar`}
                  >
                    {position === "left" ? (
                      <ChevronLeft size={14} />
                    ) : (
                      <ChevronRight size={14} />
                    )}
                  </button>
                </div>
              </div>

              {/* Sidebar Body */}
              <div className="p-4 text-sm text-muted-foreground">
                {children || (
                  <div className="space-y-2">
                    <p>Sidebar content will go here.</p>
                    <p className="text-xs opacity-60">
                      This is a blank {position} sidebar inspired by Obsidian/VSCode.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Resize Handle */}
        {!isCollapsed && (
          <div
            className={cn(
              "absolute top-0 w-1 h-full cursor-col-resize hover:bg-accent/50 transition-colors",
              position === "left" ? "right-0" : "left-0"
            )}
            onMouseDown={handleMouseDown}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar; 