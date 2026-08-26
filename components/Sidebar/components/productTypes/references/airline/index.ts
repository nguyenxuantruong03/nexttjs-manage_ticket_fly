import { SidebarItem } from "@/components/Sidebar/types";

import { airlineAircraftSidebar } from "./aircraft";
import { airlineCrewSidebar } from "./crew";
import { airlineTypeSidebar } from "./type";

export const airlineSidebar: SidebarItem = {
  id: 201,

  title: "Airline Management",

  icon: "plane",

  categories: [
    {
      id: 101,
      name: "All Airlines",
      link: "/product-types/references/airline",
    },
    {
      id: 110,
      name: "Airline",
      link: "/product-types/references/airline/main",
    },
  ],

  children: [
    ...airlineAircraftSidebar,
    ...airlineCrewSidebar,
    ...airlineTypeSidebar,
  ],
};
