import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/text-sidebar";
import { AppSidebar } from "../(dev)/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="sidebar-container">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
