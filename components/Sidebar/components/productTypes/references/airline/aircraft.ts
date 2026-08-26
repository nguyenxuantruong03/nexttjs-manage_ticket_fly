import { SidebarItem } from "@/components/Sidebar/types";

export const airlineAircraftSidebar: SidebarItem[] = [
  {
    id: 202,
    title: "Aircraft",
    icon: "plane",
    categories: [
      {
        id: 102,
        name: "All Aircraft",
        link: "/product-types/references/airline/aircraft",
      },
      {
        id: 103,
        name: "Aircraft",
        link: "/product-types/references/airline/aircraft/main",
      },
      {
        id: 104,
        name: "Aircraft Type",
        link: "/product-types/references/airline/aircraft/aircraft-type",
      },
    ],
  },
];
