import { SidebarTopic } from "../../types";

import { flySidebar } from "./fly";
import { busSidebar } from "./bus";
import { yachtSidebar } from "./yacht";
import { carRentalSidebar } from "./car-rental";
import { hotelSidebar } from "./hotel";
import { airportTransferSidebar } from "./airport-transfer";
import { referencesSidebar } from "./references";

export const productTypesSidebar: SidebarTopic = {
  id: 5,
  topic: "Booking",

  items: [
    {
      id: 100,
      title: "Booking Management",
      icon: "book_a",

      children: [
        flySidebar,
        busSidebar,
        yachtSidebar,
        carRentalSidebar,
        hotelSidebar,
        airportTransferSidebar,
        referencesSidebar,
      ],
    },
  ],
};
