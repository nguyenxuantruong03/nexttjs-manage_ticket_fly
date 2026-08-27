import { SidebarItem } from "@/components/Sidebar/types";

import { facilityConfigurationSidebar } from "./configuration";

export const facilitySidebar: SidebarItem = {
  id: 501,

  title: "Facility Management",

  icon: "building_2",

  categories: [
    {
      id: 400,
      name: "Facility",
      link: "/features/facility/main",
    },
  ],

  children: [...facilityConfigurationSidebar],
};