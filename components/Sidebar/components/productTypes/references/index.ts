import { SidebarItem } from "@/components/Sidebar/types";

import { airlineSidebar } from "./airline";
import { allianceSidebar } from "./alliance/alliance";
import { airportSidebar } from "./airport/airport";

export const referencesSidebar: SidebarItem = {
  id: 200,

  title: "References",

  icon: "book_open",

  categories: [],

  children: [airlineSidebar, airportSidebar, allianceSidebar],
};
