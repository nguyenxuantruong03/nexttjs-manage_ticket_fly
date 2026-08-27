import { SidebarItem } from "@/components/Sidebar/types";

export const commercePricingSidebar: SidebarItem[] = [
  {
    id: 403,
    title: "Package",
    icon: "package",
    categories: [
      {
        id: 303,
        name: "Package",
        link: "/commerce/package",
      },
    ],
  },
  {
    id: 404,
    title: "Price Rule Type",
    icon: "receipt",
    categories: [
      {
        id: 304,
        name: "Price Rule Type",
        link: "/commerce/price-rule-type",
      },
    ],
  },
];