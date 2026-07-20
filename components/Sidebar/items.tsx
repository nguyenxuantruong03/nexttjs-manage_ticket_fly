import {
  Building2,
  Bus,
  CarTaxiFront,
  ChartPie,
  CircleDollarSign,
  Hotel,
  MapPinHouseIcon,
  Plane,
  PlaneLanding,
  Ship,
  User,
  UserCog,
} from "lucide-react";
import { SidebarTopic } from "./types";

export const SIDEBARCONTENTICONS = {
  user: User,
  plane: Plane,
  bus: Bus,
  car_taxi_front: CarTaxiFront,
  hotel: Hotel,
  yacht: Ship,
  plane_landing: PlaneLanding,
  chart_pie: ChartPie,
  user_cog: UserCog,
  circle_dollar_sign: CircleDollarSign,
  building_2: Building2,
  map_pin_house: MapPinHouseIcon,
} as const;
export const SIDEBARCONTENTITEMS: SidebarTopic[] = [
  {
    id: 1,
    topic: "Thống kê",

    items: [
      {
        id: 48,
        title: "Thống kê",
        icon: "chart_pie",

        categories: [
          {
            id: 1,
            name: "Tổng hợp",
            link: "/",
          },
          {
            id: 2,
            name: "Người dùng",
            link: "/dashboard/user",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    topic: "User",

    items: [
      {
        id: 49,
        title: "User Management",
        icon: "user",

        categories: [
          {
            id: 1,
            name: "User",
            link: "/user",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    topic: "Provider-Booking",

    items: [
      {
        id: 59,
        title: "Provider",
        icon: "user_cog",

        categories: [
          {
            id: 1,
            name: "Provider",
            link: "/provider_booking",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    topic: "Service",

    items: [
      {
        id: 50,
        title: "Currency",
        icon: "circle_dollar_sign",

        categories: [
          {
            id: 31,
            name: "currency",
            link: "/currency",
          },
        ],
      },

      {
        id: 51,
        title: "City",
        icon: "building_2",

        categories: [
          {
            id: 31,
            name: "City",
            link: "/city",
          },
        ],
      },
      {
        id: 52,
        title: "Country",
        icon: "map_pin_house",

        categories: [
          {
            id: 31,
            name: "country",
            link: "/country",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    topic: "Booking",

    items: [
      {
        id: 50,
        title: "Fly Management",
        icon: "plane",

        categories: [
          {
            id: 31,
            name: "Ticket Fly",
            link: "/ticket_fly",
          },
        ],
      },

      {
        id: 51,
        title: "Bus Management",
        icon: "bus",

        categories: [
          {
            id: 31,
            name: "Ticket Bus",
            link: "/ticket_bus",
          },
        ],
      },

      {
        id: 52,
        title: "Yacht Management",
        icon: "yacht",

        categories: [
          {
            id: 31,
            name: "Yacht",
            link: "/yacht",
          },
        ],
      },
      {
        id: 53,
        title: "Car Rental Management",
        icon: "car_taxi_front",

        categories: [
          {
            id: 31,
            name: "Car Rental",
            link: "/car_rental",
          },
        ],
      },
      {
        id: 54,
        title: "Hotel Management",
        icon: "hotel",

        categories: [
          {
            id: 31,
            name: "Hotel",
            link: "/hotel",
          },
        ],
      },
      {
        id: 55,
        title: "Airport Transfer Management",
        icon: "plane_landing",

        categories: [
          {
            id: 31,
            name: "Airport Transfer ",
            link: "/airport_transfer",
          },
        ],
      },
    ],
  },
];

export const getDefaultOpenItem = (pathname: string) => {
  for (const group of SIDEBARCONTENTITEMS) {
    const item = group.items.find((item) =>
      item.categories?.some((category) => category.link === pathname),
    );

    if (item) {
      return String(item.id);
    }
  }

  return undefined;
};
