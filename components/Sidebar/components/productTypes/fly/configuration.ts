import { SidebarItem } from "@/components/Sidebar/types";

export const flyConfigurationSidebar: SidebarItem[] = [
  {
    id: 72,
    title: "Cabin Class",
    icon: "armchair",
    categories: [
      {
        id: 52,
        name: "Cabin Class",
        link: "/product-types/ticket-fly/cabin-class",
      },
    ],
  },
  {
    id: 73,
    title: "Seat Type",
    icon: "sofa",
    categories: [
      {
        id: 53,
        name: "Seat Type",
        link: "/product-types/ticket-fly/seat-type",
      },
    ],
  },
  {
    id: 74,
    title: "Delay Reason",
    icon: "clock_alert",
    categories: [
      {
        id: 54,
        name: "Delay Reason",
        link: "/product-types/ticket-fly/delay-reason",
      },
    ],
  },
];
