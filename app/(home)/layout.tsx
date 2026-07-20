// app/(home)/layout.tsx

import NavbarMobile from "@/components/navbar";
import SidebarClient from "@/components/Sidebar/components/sidebarClient";
import { UserServerService } from "@/services/users/server";

export default async function LayoutHome({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await UserServerService.getMe();

  return (
    <SidebarClient user={user}>
      <NavbarMobile user={user} />
      <div className="w-full min-w-0 overflow-hidden lg:p-3">{children}</div>
    </SidebarClient>
  );
}
