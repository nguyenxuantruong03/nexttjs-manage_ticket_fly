// app/(home)/layout.tsx

import NavbarMobile from "@/components/navbar";
import SidebarClient from "@/components/Sidebar/components/sidebarClient";
import { UserProvider } from "@/provider/UserProvider";
import { UserServerService } from "@/services/users/server";
import { redirect } from "next/navigation";

export default async function LayoutHome({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await UserServerService.getMe();

  if (me.status === "unauthenticated") {
    redirect("/auth/login");
  }

  /**
   * Đã bị ban
   */
  if (me.status === "banned") {
    const params = new URLSearchParams();

    params.set("reason", me.reason);

    if (me.banUntil) {
      params.set("banUntil", me.banUntil);
    }

    redirect(`/auth/banned?${params.toString()}`);
  }

  const initialUser = me.status === "authenticated" ? me.user : null;

  return (
    <UserProvider initialUser={initialUser}>
      <SidebarClient user={me.user}>
        <NavbarMobile user={me.user} />
        <div className="w-full min-w-0 overflow-hidden lg:p-3">{children}</div>
      </SidebarClient>
    </UserProvider>
  );
}
