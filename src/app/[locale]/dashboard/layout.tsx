import { AppSidebar } from "@/components/dashboard/AppSidebar";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, User } from "lucide-react";

export default function dahboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            {/* Header */}
            <header className="h-16 border-b bg-background flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold">Admin Dashboard</h1>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </header>
            <div className="mt-12 px-8">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
