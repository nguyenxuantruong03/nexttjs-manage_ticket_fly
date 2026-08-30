import { SidebarItem } from "@/components/Sidebar/types";

export const catalogTypeSidebar: SidebarItem[] = [
  {
    id: 300,
    title: "Catalog",
    icon: "folder",
    categories: [
      {
        id: 200,
        name: "Catalog",
        link: "/catalog",
      },
    ],
  },

  {
    id: 301,
    title: "Fuel Type",
    icon: "fuel",
    categories: [
      {
        id: 201,
        name: "Fuel Type",
        link: "/catalog/fuel-type",
      },
    ],
  },

  {
    id: 302,
    title: "Route Type",
    icon: "route",
    categories: [
      {
        id: 202,
        name: "Route Type",
        link: "/catalog/route-type",
      },
    ],
  },

  {
    id: 303,
    title: "Service Type",
    icon: "concierge_bell",
    categories: [
      {
        id: 203,
        name: "Service Type",
        link: "/catalog/service-type",
      },
    ],
  },

  {
    id: 304,
    title: "Vehicle Type",
    icon: "car",
    categories: [
      {
        id: 204,
        name: "Vehicle Type",
        link: "/catalog/vehicle-type",
      },
    ],
  },
];