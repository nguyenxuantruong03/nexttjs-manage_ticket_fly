import { SidebarItem } from "@/components/Sidebar/types";

export const carRentalInsuranceSidebar: SidebarItem[] = [
  {
    id: 56,
    title: "Insurance Type",
    icon: "shield",
    categories: [
      {
        id: 37,
        name: "Insurance Type",
        link: "/product-types/car_rental/insurance-type",
      },
    ],
  },
  {
    id: 57,
    title: "Insurance Benefit Type",
    icon: "shield_check",
    categories: [
      {
        id: 38,
        name: "Insurance Benefit Type",
        link: "/product-types/car_rental/insurance-benefit-type",
      },
    ],
  },
];