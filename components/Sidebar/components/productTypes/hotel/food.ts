import { SidebarItem } from "../../../types";

export const hotelFoodSidebar: SidebarItem[] = [
  {
    id: 112,
    title: "Meal Plan",
    icon: "utensils",
    categories: [
      {
        id: 12,
        name: "Meal Plan",
        link: "/hotel/meal-plan",
      },
    ],
  },
  {
    id: 113,
    title: "Dining Meal Type",
    icon: "soup",
    categories: [
      {
        id: 13,
        name: "Dining Meal Type",
        link: "/hotel/dining-meal-type",
      },
    ],
  },
  {
    id: 114,
    title: "Dining Service Type",
    icon: "bell",
    categories: [
      {
        id: 14,
        name: "Dining Service Type",
        link: "/hotel/dining-service-type",
      },
    ],
  },
];