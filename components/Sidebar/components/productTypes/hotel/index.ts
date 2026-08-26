import { SidebarItem } from "../../../types";

import { hotelBasicSidebar } from "./basic";
import { hotelRoomSidebar } from "./room";
import { hotelFacilitySidebar } from "./facility";
import { hotelFoodSidebar } from "./food";
import { hotelPricingSidebar } from "./pricing";

export const hotelSidebar: SidebarItem = {
  id: 192,
  title: "Hotel",
  icon: "hotel",

  categories: [
    {
      id: 35,
      name: "All Hotels",
      link: "/hotel/main",
    },
    {
      id: 38,
      name: "Hotel Stepper",
      link: "/hotel",
    },
  ],

  children: [
    ...hotelBasicSidebar,
    ...hotelRoomSidebar,
    ...hotelFacilitySidebar,
    ...hotelFoodSidebar,
    ...hotelPricingSidebar,
  ],
};