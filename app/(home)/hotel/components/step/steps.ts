import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  MapPinned,
  Images,
  BedDouble,
  Building2,
  UtensilsCrossed,
  DollarSign,
  FileText,
  CalendarRange,
  Star,
  ClipboardCheck,
} from "lucide-react";

export const hotelSteps: (FormWizardStep & {
  sections: {
    id: string;
    title: string;
  }[];
})[] = [
  {
    id: "basic",
    title: "Basic",
    description: "General information",
    icon: Info,
    sections: [
      {
        id: "hotel",
        title: "Hotel",
      },
    ],
  },

  {
    id: "location",
    title: "Location",
    description: "Address & nearby places",
    icon: MapPinned,
    sections: [
      {
        id: "information",
        title: "Hotel Information",
      },
      {
        id: "nearbyPlaces",
        title: "Nearby Places",
      },
      {
        id: "areaGuides",
        title: "Area Guides",
      },
    ],
  },

  {
    id: "images",
    title: "Images",
    description: "Hotel gallery",
    icon: Images,
    sections: [
      {
        id: "hotelImages",
        title: "Hotel Images",
      },
    ],
  },

  {
    id: "rooms",
    title: "Rooms",
    description: "Room types, rooms & inventory",
    icon: BedDouble,
    sections: [
      {
        id: "roomTypes",
        title: "Room Types",
      },
      {
        id: "rooms",
        title: "Rooms",
      },
      {
        id: "roomFacilities",
        title: "Room Facilities",
      },
      {
        id: "roomImages",
        title: "Room Images",
      },
      {
        id: "inventory",
        title: "Inventory",
      },
    ],
  },

  {
    id: "facilities",
    title: "Facilities",
    description: "Amenities & hotel services",
    icon: Building2,
    sections: [
      {
        id: "wifi",
        title: "Wifi",
      },
      {
        id: "pool",
        title: "Swimming Pool",
      },
      {
        id: "gym",
        title: "Gym",
      },
      {
        id: "restaurants",
        title: "Restaurants",
      },
      {
        id: "generalFacilities",
        title: "General Facilities",
      },
    ],
  },

  {
    id: "meal",
    title: "Meals",
    description: "Meal options & hotel extras",
    icon: UtensilsCrossed,
    sections: [
      {
        id: "mealOptions",
        title: "Meal Options",
      },
      {
        id: "extras",
        title: "Extras",
      },
    ],
  },

  {
    id: "pricing",
    title: "Pricing",
    description: "Rate plans, prices & rules",
    icon: DollarSign,
    sections: [
      {
        id: "ratePlans",
        title: "Rate Plans",
      },
      {
        id: "prices",
        title: "Prices",
      },
      {
        id: "breakdowns",
        title: "Price Breakdown",
      },
      {
        id: "rules",
        title: "Price Rules",
      },
    ],
  },

  {
    id: "policies",
    title: "Policies",
    description: "Booking, payment & cancellation",
    icon: FileText,
    sections: [
      {
        id: "checkIn",
        title: "Check In",
      },
      {
        id: "guest",
        title: "Guest",
      },
      {
        id: "payment",
        title: "Payment",
      },
      {
        id: "cancellation",
        title: "Cancellation",
      },
      {
        id: "booking",
        title: "Booking",
      },
      {
        id: "houseRules",
        title: "House Rules",
      },
    ],
  },

  {
    id: "availability",
    title: "Availability",
    description: "Inventory, calendar & room locks",
    icon: CalendarRange,
    sections: [
      {
        id: "availability",
        title: "Availability",
      },
      {
        id: "calendar",
        title: "Calendar",
      },
      {
        id: "locks",
        title: "Inventory Locks",
      },
    ],
  },

  {
    id: "seo",
    title: "SEO",
    description: "Search metadata & visibility",
    icon: Star,
    sections: [
      {
        id: "metadata",
        title: "Search Metadata",
      },
    ],
  },
];