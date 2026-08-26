import { SidebarItem } from "@/components/Sidebar/types";

import { flyConfigurationSidebar } from "./configuration";
import { flyServiceSidebar } from "./service";
import { flyPricingSidebar } from "./pricing";

export const flySidebar: SidebarItem = {
  id: 71,

  title: "Flight Management",

  icon: "plane",

  categories: [
    {
      id: 50,
      name: "All Flights",
      link: "/product-types/ticket-fly",
    },
    {
      id: 51,
      name: "Flight",
      link: "/product-types/ticket-fly/main",
    },
  ],

  children: [
    ...flyConfigurationSidebar,
    ...flyServiceSidebar,
    ...flyPricingSidebar,
  ],
};
