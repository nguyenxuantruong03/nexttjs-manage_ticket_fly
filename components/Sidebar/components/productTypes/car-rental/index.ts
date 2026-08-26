import { SidebarItem } from "@/components/Sidebar/types";

import { carRentalConfigurationSidebar } from "./configuration";

import { carRentalInsuranceSidebar } from "./insurance";

export const carRentalSidebar: SidebarItem = {
  id: 53,

  title: "Car Rental Management",

  icon: "car_taxi_front",

  categories: [
    {
      id: 34,
      name: "All Car Rentals",
      link: "/product-types/car_rental",
    },
    {
      id: 35,
      name: "Car Rental",
      link: "/product-types/car_rental/main",
    },
  ],

  children: [...carRentalConfigurationSidebar, ...carRentalInsuranceSidebar],
};
