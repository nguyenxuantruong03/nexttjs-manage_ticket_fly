import { SidebarItem } from "../../../types";

export const hotelRoomSidebar: SidebarItem[] = [
  {
    id: 105,
    title: "Room Category",
    icon: "folder",
    categories: [
      {
        id: 5,
        name: "Room Category",
        link: "/hotel/room-category",
      },
    ],
  },
  {
    id: 106,
    title: "Room Type",
    icon: "bed",
    categories: [
      {
        id: 6,
        name: "Room Type",
        link: "/hotel/room-type",
      },
    ],
  },
  {
    id: 107,
    title: "Bed Type",
    icon: "bed_double",
    categories: [
      {
        id: 7,
        name: "Bed Type",
        link: "/hotel/bed-type",
      },
    ],
  },
  {
    id: 108,
    title: "Bathroom Type",
    icon: "bath",
    categories: [
      {
        id: 8,
        name: "Bathroom Type",
        link: "/hotel/bathroom-type",
      },
    ],
  },
  {
    id: 109,
    title: "Room View",
    icon: "mountain",
    categories: [
      {
        id: 9,
        name: "Room View",
        link: "/hotel/room-view",
      },
    ],
  },
];