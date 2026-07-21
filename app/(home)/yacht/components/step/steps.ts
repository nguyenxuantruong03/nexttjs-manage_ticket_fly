import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Ship,
  Images,
  Anchor,
  CalendarRange,
  DollarSign,
  Package,
  ShieldCheck,
  Users,
  Search,
  FileText,
  Settings,
} from "lucide-react";

export const yachtSteps: (FormWizardStep & {
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

    description: "General yacht information",

    icon: Info,

    sections: [
      {
        id: "yacht",
        title: "Yacht Information",
      },

      {
        id: "provider",
        title: "Provider Information",
      },

      {
        id: "search",
        title: "Search Metadata",
      },
    ],
  },

  // ======================================================
  // VEHICLE
  // ======================================================

  {
    id: "vehicle",

    title: "Vehicle",

    description: "Yacht specifications and facilities",

    icon: Ship,

    sections: [
      {
        id: "vehicleInfo",
        title: "Yacht Details",
      },

      {
        id: "capacity",
        title: "Capacity",
      },

      {
        id: "specification",
        title: "Specifications",
      },

      {
        id: "facilities",
        title: "Facilities",
      },

      {
        id: "safety",
        title: "Safety Equipment",
      },

      {
        id: "vehicleImages",
        title: "Vehicle Images",
      },
    ],
  },

  // ======================================================
  // MARINA
  // ======================================================

  {
    id: "marina",

    title: "Marina",

    description: "Marina and departure information",

    icon: Anchor,

    sections: [
      {
        id: "marinaInfo",
        title: "Marina Information",
      },

      {
        id: "marinaFacilities",
        title: "Marina Facilities",
      },
    ],
  },

  // ======================================================
  // ROUTES
  // ======================================================

  {
    id: "routes",

    title: "Routes",

    description: "Cruise routes and destinations",

    icon: Anchor,

    sections: [
      {
        id: "route",
        title: "Route Information",
      },

      {
        id: "stops",
        title: "Route Stops",
      },
    ],
  },

  // ======================================================
  // TRIPS
  // ======================================================

  {
    id: "trips",

    title: "Trips",

    description: "Trip schedules and availability",

    icon: CalendarRange,

    sections: [
      {
        id: "trip",
        title: "Trip Information",
      },

      {
        id: "schedule",
        title: "Trip Schedule",
      },

      {
        id: "tripPrice",
        title: "Trip Pricing",
      },

      {
        id: "availability",
        title: "Availability Calendar",
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

    description: "Yacht pricing management",

    icon: DollarSign,

    sections: [
      {
        id: "price",
        title: "Base Pricing",
      },

      {
        id: "priceOptions",
        title: "Price Options",
      },

      {
        id: "fees",
        title: "Additional Fees",
      },

      {
        id: "discounts",
        title: "Discount Rules",
      },
    ],
  },

  // ======================================================
  // PACKAGES
  // ======================================================

  {
    id: "packages",

    title: "Packages",

    description: "Tour packages and inclusions",

    icon: Package,

    sections: [
      {
        id: "package",
        title: "Packages",
      },

      {
        id: "packageExtras",
        title: "Package Extras",
      },

      {
        id: "packageImages",
        title: "Package Images",
      },
    ],
  },

  // ======================================================
  // EXTRA
  // ======================================================

  {
    id: "extras",

    title: "Extras",

    description: "Additional yacht services",

    icon: Package,

    sections: [
      {
        id: "extra",
        title: "Extra Services",
      },

      {
        id: "extraImages",
        title: "Extra Images",
      },
    ],
  },

  // ======================================================
  // POLICIES
  // ======================================================

  {
    id: "policies",

    title: "Policies",

    description: "Booking and passenger policies",

    icon: FileText,

    sections: [
      {
        id: "bookingPolicy",
        title: "Booking Policy",
      },

      {
        id: "cancellation",
        title: "Cancellation Policy",
      },

      {
        id: "passenger",
        title: "Passenger Requirements",
      },

      {
        id: "luggage",
        title: "Luggage Policy",
      },

      {
        id: "waiting",
        title: "Waiting Policy",
      },

      {
        id: "flightSupport",
        title: "Flight Support",
      },

      {
        id: "meetAndGreet",
        title: "Meet & Greet",
      },
    ],
  },

  // ======================================================
  // CREW
  // ======================================================

  {
    id: "crew",

    title: "Crew",

    description: "Crew members management",

    icon: Users,

    sections: [
      {
        id: "crew",
        title: "Crew Members",
      },
    ],
  },

  // ======================================================
  // IMAGES
  // ======================================================

  {
    id: "images",

    title: "Images",

    description: "Yacht gallery",

    icon: Images,

    sections: [
      {
        id: "images",
        title: "Yacht Images",
      },
    ],
  },

  // ======================================================
  // SETTINGS / SEO
  // ======================================================

  {
    id: "settings",

    title: "Settings",

    description: "Search and visibility settings",

    icon: Settings,

    sections: [
      {
        id: "seo",
        title: "SEO",
      },

      {
        id: "visibility",
        title: "Visibility",
      },

      {
        id: "status",
        title: "Status",
      },
    ],
  },
];
