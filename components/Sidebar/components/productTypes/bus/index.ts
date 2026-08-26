import { SidebarItem } from "@/components/Sidebar/types";

import { busConfigurationSidebar } from "./configuration";

export const busSidebar: SidebarItem = {
  id: 51,

  title: "Bus Management",

  icon: "bus",

  categories: [
    {
      id: 32,
      name: "All Buses",
      link: "/product-types/ticket-bus",
    },
    {
      id: 33,
      name: "Bus",
      link: "/product-types/ticket-bus/main",
    },
  ],

  children: [...busConfigurationSidebar],
};
