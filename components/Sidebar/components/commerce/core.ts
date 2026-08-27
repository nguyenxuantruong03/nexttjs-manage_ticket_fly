import { SidebarItem } from "@/components/Sidebar/types";

export const commerceCoreSidebar: SidebarItem[] = [
  {
    id: 401,
    title: "Booking Type",
    icon: "calendar_check",
    categories: [
      {
        id: 301,
        name: "Booking Type",
        link: "/commerce/booking-type",
      },
    ],
  },
  {
    id: 402,
    title: "Booking Item Type",
    icon: "list_tree",
    categories: [
      {
        id: 302,
        name: "Booking Item Type",
        link: "/commerce/booking-item-type",
      },
    ],
  },
];