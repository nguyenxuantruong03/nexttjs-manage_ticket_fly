import { SidebarTopic } from "@/components/Sidebar/types";

export const dashboardSidebar: SidebarTopic = {
  id: 50,
  topic: "Dashboard",
  items: [
    {
      id: 51,
      title: "User",
      icon: "users",
      categories: [
        {
          id: 51,
          name: "User",
          link: "/dashboard/user",
        },
      ],
    },
  ],
};