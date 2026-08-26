import { SidebarItem } from "@/components/Sidebar/types";

import { yachtConfigurationSidebar } from "./configuration";

export const yachtSidebar: SidebarItem = {
  id: 61,

  title: "Yacht Management",

  icon: "ship",

  categories: [
    {
      id: 40,
      name: "All Yachts",
      link: "/product-types/yacht",
    },
    {
      id: 41,
      name: "Yacht",
      link: "/product-types/yacht/main",
    },
  ],

  children: [...yachtConfigurationSidebar],
};
