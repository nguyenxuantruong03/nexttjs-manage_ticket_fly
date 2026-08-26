import { SidebarItem } from "@/components/Sidebar/types";

export const airlineCrewSidebar: SidebarItem[] = [
  {
    id: 203,
    title: "Crew",
    icon: "users",
    categories: [
      {
        id: 105,
        name: "All Crew",
        link: "/product-types/references/airline/crew",
      },
      {
        id: 106,
        name: "Crew",
        link: "/product-types/references/airline/crew/main",
      },
      {
        id: 107,
        name: "Crew Duty",
        link: "/product-types/references/airline/crew/crew-duty",
      },
      {
        id: 108,
        name: "Crew Role",
        link: "/product-types/references/airline/crew/crew-role",
      },
    ],
  },
];