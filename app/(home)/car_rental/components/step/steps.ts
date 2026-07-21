import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Car,
  Images,
  Route,
  ShieldCheck,
  Settings,
  Clock,
  Search,
  FileText,
  Package,
} from "lucide-react";

export const carRentalSteps: (FormWizardStep & {
  sections: {
    id: string;
    title: string;
  }[];
})[] = [
  // =========================
  // BASIC
  // =========================

  {
    id: "basic",

    title: "Basic",

    description: "General rental information",

    icon: Info,

    sections: [
      {
        id: "rental",
        title: "Car Rental",
      },

      {
        id: "driverOption",
        title: "Driver Option",
      },
    ],
  },

  // =========================
  // VEHICLE
  // =========================

  {
    id: "vehicles",

    title: "Vehicles",

    description: "Vehicle fleet management",

    icon: Car,

    sections: [
      {
        id: "vehicle",
        title: "Vehicle Information",
      },

      {
        id: "capacity",
        title: "Vehicle Capacity",
      },

      {
        id: "features",
        title: "Vehicle Features",
      },

      {
        id: "specification",
        title: "Vehicle Specification",
      },

      {
        id: "maintenance",
        title: "Vehicle Maintenance",
      },

      {
        id: "documents",
        title: "Vehicle Documents",
      },

      {
        id: "vehicleLocation",
        title: "Vehicle Location",
      },
    ],
  },

  // =========================
  // IMAGES
  // =========================

  {
    id: "images",

    title: "Images",

    description: "Rental & vehicle gallery",

    icon: Images,

    sections: [
      {
        id: "rentalImages",
        title: "Rental Images",
      },

      {
        id: "vehicleImages",
        title: "Vehicle Images",
      },
    ],
  },

  // =========================
  // TRIP
  // =========================

  {
    id: "trip",

    title: "Trip",

    description: "Pickup, dropoff and schedule",

    icon: Route,

    sections: [
      {
        id: "locations",
        title: "Locations",
      },

      {
        id: "schedule",
        title: "Schedule",
      },

      {
        id: "tripFee",
        title: "Trip Fees",
      },
    ],
  },

  // =========================
  // PRICING / EXTRA
  // =========================

  {
    id: "pricing",

    title: "Pricing",

    description: "Rental prices and extras",

    icon: Package,

    sections: [
      {
        id: "prices",
        title: "Vehicle Prices",
      },

      {
        id: "priceRules",
        title: "Price Rules",
      },

      {
        id: "priceBreakdown",
        title: "Price Breakdown",
      },

      {
        id: "extras",
        title: "Extras",
      },
    ],
  },

  // =========================
  // INSURANCE
  // =========================

  {
    id: "insurance",

    title: "Insurance",

    description: "Insurance plans and benefits",

    icon: ShieldCheck,

    sections: [
      {
        id: "insurance",
        title: "Insurance",
      },

      {
        id: "benefits",
        title: "Insurance Benefits",
      },
    ],
  },

  // =========================
  // POLICIES
  // =========================

  {
    id: "policies",

    title: "Policies",

    description: "Rental rules and restrictions",

    icon: FileText,

    sections: [
      {
        id: "generalPolicies",
        title: "General Policies",
      },

      {
        id: "mileage",
        title: "Mileage Policy",
      },

      {
        id: "cancellation",
        title: "Cancellation Policy",
      },

      {
        id: "damage",
        title: "Damage Policy",
      },

      {
        id: "rules",
        title: "Rental Rules",
      },

      {
        id: "documents",
        title: "Required Documents",
      },
    ],
  },

  // =========================
  // OPERATION
  // =========================

  {
    id: "operation",

    title: "Operation",

    description: "Business operation settings",

    icon: Settings,

    sections: [
      {
        id: "businessHours",
        title: "Business Hours",
      },

      {
        id: "pickupInstructions",
        title: "Pickup Instructions",
      },

      {
        id: "drivers",
        title: "Drivers",
      },
    ],
  },

  // =========================
  // AVAILABILITY
  // =========================

  {
    id: "availability",

    title: "Availability",

    description: "Vehicle availability management",

    icon: Clock,

    sections: [
      {
        id: "calendar",
        title: "Availability Calendar",
      },

      {
        id: "inventoryLocks",
        title: "Inventory Locks",
      },
    ],
  },

];
