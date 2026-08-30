import { SidebarTopic } from "@/components/Sidebar/types";

import { facilitySidebar } from "./facility";
import { policySidebar } from "./policy";

export const featuresSidebar: SidebarTopic = {
  id: 500,

  topic: "Features",

  items: [
    {
      id: 500,
      title: "Features",
      icon: "layout_grid",

      categories: [
        {
          id: 501,
          name: "Features",
          link: "/features",
        },
      ],

      children: [facilitySidebar, policySidebar],
    },
  ],
};
