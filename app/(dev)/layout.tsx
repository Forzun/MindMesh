import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/text-sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="sidebar-container ">
          <SidebarTrigger />
          {children}
          <Toaster
            className="bg-amber-400"
            position="top-center"
            theme="system"
          />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
