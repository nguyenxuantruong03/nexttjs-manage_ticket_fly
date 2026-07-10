"use client";
import SidebarIndex from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { User } from "@/type";
import { useState } from "react";
export default function SidebarClient({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: User;
}>) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": open ? "16rem" : "4.2rem",
          } as React.CSSProperties
        }
      >
        <SidebarIndex open={open} setOpen={setOpen} user={user} />
        {children}
      </SidebarProvider>
    </>
  );
}
