import { SidebarItem } from "../../../types";

export const hotelBasicSidebar: SidebarItem[] = [
  {
    id: 102,
    title: "Hotel Brand",
    icon: "badge_check",
    categories: [
      {
        id: 2,
        name: "Brand",
        link: "/hotel/brand",
      },
    ],
  },
  {
    id: 103,
    title: "Star Rating",
    icon: "star",
    categories: [
      {
        id: 3,
        name: "Star Rating",
        link: "/hotel/star-rating",
      },
    ],
  },
  {
    id: 104,
    title: "Sustainability",
    icon: "leaf",
    categories: [
      {
        id: 4,
        name: "Sustainability",
        link: "/hotel/sustainability",
      },
    ],
  },
];