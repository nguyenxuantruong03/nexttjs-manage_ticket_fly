import { SidebarTopic } from "@/components/Sidebar/types";

import { catalogTypeSidebar } from "./type";

export const catalogSidebar: SidebarTopic = {
  id: 300,
  topic: "Catalog Management",
  items: [
    {
      id: 300,
      title: "Catalog Management",
      icon: "folder",
      categories: [
        {
          id: 200,
          name: "Catalog",
          link: "/catalog",
        },
      ],
      children: [...catalogTypeSidebar],
    },
  ],
};
