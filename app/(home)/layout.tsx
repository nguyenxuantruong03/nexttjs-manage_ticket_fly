import NavbarMobile from "@/components/navbar";
import SidebarClient from "@/components/Sidebar/components/sidebarClient";
import { getUser } from "@/lib/user";
export default async function LayoutHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  return (
    <SidebarClient user={user}>
      <NavbarMobile user={user} />
      <div className="w-full min-w-0 overflow-hidden lg:p-3">{children}</div>
    </SidebarClient>
  );
}
