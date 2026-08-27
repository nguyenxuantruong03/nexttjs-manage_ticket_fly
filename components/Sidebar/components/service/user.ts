import { SidebarTopic } from "../../types";

export const userSidebar: SidebarTopic = {
  id: 2,
  topic: "User",
  items: [
    {
      id: 49,
      title: "User Management",
      icon: "user",
      categories: [
        {
          id: 1,
          name: "User",
          link: "/user",
        },
      ],
    },
  ],
};
