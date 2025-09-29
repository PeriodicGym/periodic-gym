import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";

export default function WorkoutLayout({
  children,
}:
{children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
        <main className="flex-1 overflow-auto">{children}</main>
    </SidebarProvider>
  )
}
