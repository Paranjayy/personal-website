import { ReactNode } from "react";
import Footer from "~/components/layout/footer";
import Navbar from "~/components/layout/nav";
import SidebarLayout from "~/components/layout/sidebar-layout";
import SkipContent from "~/components/ui/skip-content";

const Layout = ({ children }: { children: ReactNode }) => {
  // Left sidebar content
  const LeftSidebarContent = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider">Navigation</h4>
        <div className="space-y-1 text-sm">
          <div className="p-2 hover:bg-accent/50 rounded cursor-pointer">Home</div>
          <div className="p-2 hover:bg-accent/50 rounded cursor-pointer">Projects</div>
          <div className="p-2 hover:bg-accent/50 rounded cursor-pointer">Blog</div>
          <div className="p-2 hover:bg-accent/50 rounded cursor-pointer">About</div>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider">Quick Links</h4>
        <div className="space-y-1 text-sm">
          <div className="p-2 hover:bg-accent/50 rounded cursor-pointer">GitHub</div>
          <div className="p-2 hover:bg-accent/50 rounded cursor-pointer">LinkedIn</div>
          <div className="p-2 hover:bg-accent/50 rounded cursor-pointer">Resume</div>
        </div>
      </div>
    </div>
  );

  // Right sidebar content
  const RightSidebarContent = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider">Table of Contents</h4>
        <div className="text-sm text-muted-foreground">
          <p>Content outline will appear here when viewing blog posts.</p>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider">Recent Activity</h4>
        <div className="text-sm text-muted-foreground">
          <p>Recent commits, posts, and updates will be shown here.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container relative">
        <div className="!mb-2 space-y-4 py-2">
          <SkipContent />
          <Navbar />
        </div>
      </div>
      
      <SidebarLayout 
        className="flex-1"
        leftSidebar={<LeftSidebarContent />}
        rightSidebar={<RightSidebarContent />}
      >
        <main className="flex-1 flex flex-col">
          <div className="container relative flex-1 space-y-4 py-2">
            {children}
          </div>
          <Footer />
        </main>
      </SidebarLayout>
    </div>
  );
};

export default Layout;
