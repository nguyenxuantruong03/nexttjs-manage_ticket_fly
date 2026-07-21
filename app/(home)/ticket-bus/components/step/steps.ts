import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Route,
  Bus,
  Armchair,
  DollarSign,
  FileText,
  Images,
  Search,
  CalendarRange,
} from "lucide-react";

export const busSteps: (FormWizardStep & {
  sections: {
    id: string;
    title: string;
  }[];
})[] = [
  // ======================================================
  // BASIC
  // ======================================================
  {
    id: "basic",
    title: "Basic",
    description: "General bus information",
    icon: Info,
    sections: [
      {
        id: "bus",
        title: "Bus",
      },
    ],
  },

  // ======================================================
  // ROUTES
  // ======================================================
  {
    id: "routes",
    title: "Routes",
    description: "Routes, boarding & trips",
    icon: Route,
    sections: [
      {
        id: "routes",
        title: "Routes",
      },
      {
        id: "boardingPoints",
        title: "Boarding Points",
      },
      {
        id: "dropoffPoints",
        title: "Dropoff Points",
      },
      {
        id: "stops",
        title: "Route Stops",
      },
      {
        id: "trips",
        title: "Trips",
      },
    ],
  },

  // ======================================================
  // VEHICLES
  // ======================================================
  {
    id: "vehicles",
    title: "Vehicles",
    description: "Bus vehicles & specifications",
    icon: Bus,
    sections: [
      {
        id: "vehicles",
        title: "Vehicles",
      },
      {
        id: "capacity",
        title: "Capacity",
      },
      {
        id: "features",
        title: "Features",
      },
      {
        id: "specification",
        title: "Specifications",
      },
      {
        id: "vehicleImages",
        title: "Vehicle Images",
      },
    ],
  },

  // ======================================================
  // SEATS
  // ======================================================
  {
    id: "seats",
    title: "Seats",
    description: "Seat layouts & availability",
    icon: Armchair,
    sections: [
      {
        id: "seatLayout",
        title: "Seat Layout",
      },
      {
        id: "seatMap",
        title: "Seat Map",
      },
      {
        id: "seats",
        title: "Seats",
      },
      {
        id: "seatAvailability",
        title: "Seat Availability",
      },
      {
        id: "inventoryLocks",
        title: "Inventory Locks",
      },
    ],
  },

  // ======================================================
  // PRICING
  // ======================================================
  {
    id: "pricing",
    title: "Pricing",
    description: "Prices & pricing rules",
    icon: DollarSign,
    sections: [
      {
        id: "prices",
        title: "Prices",
      },
      {
        id: "breakdowns",
        title: "Price Breakdown",
      },
      {
        id: "seatPrices",
        title: "Seat Prices",
      },
      {
        id: "tripPrices",
        title: "Trip Prices",
      },
      {
        id: "rules",
        title: "Price Rules",
      },
    ],
  },

  // ======================================================
  // POLICIES
  // ======================================================
  {
    id: "policies",
    title: "Policies",
    description: "Passenger & ticket policies",
    icon: FileText,
    sections: [
      {
        id: "boarding",
        title: "Boarding Policy",
      },
      {
        id: "cancellation",
        title: "Cancellation Policy",
      },
      {
        id: "ticketChange",
        title: "Ticket Change",
      },
      {
        id: "luggage",
        title: "Luggage Policy",
      },
      {
        id: "child",
        title: "Child Policy",
      },
      {
        id: "passenger",
        title: "Passenger Policy",
      },
    ],
  },

  // ======================================================
  // IMAGES
  // ======================================================
  {
    id: "images",
    title: "Images",
    description: "Bus gallery",
    icon: Images,
    sections: [
      {
        id: "busImages",
        title: "Bus Images",
      },
    ],
  },

  // ======================================================
  // SCHEDULE
  // ======================================================
  {
    id: "schedule",
    title: "Schedule",
    description: "Trip schedules",
    icon: CalendarRange,
    sections: [
      {
        id: "departureArrival",
        title: "Departure & Arrival",
      },
      {
        id: "tripStatus",
        title: "Trip Status",
      },
    ],
  },
];
