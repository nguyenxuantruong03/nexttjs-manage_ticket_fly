import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Plane,
  Route,
  Ticket,
  DollarSign,
  FileText,
  Images,
  CalendarRange,
  Search,
} from "lucide-react";


export const flySteps: (FormWizardStep & {
  sections: {
    id: string;
    title: string;
  }[];
})[] = [

  {
    id: "basic",
    title: "Basic",
    description: "Basic flight information",
    icon: Info,
    sections: [
      {
        id: "basic",
        title: "Flight Information",
      },
    ],
  },


  {
    id: "airline",
    title: "Airline",
    description: "Airline information",
    icon: Plane,
    sections: [
      {
        id: "airline",
        title: "Airline",
      },
      {
        id: "addons",
        title: "Airline Addons",
      },
      {
        id: "wifi",
        title: "Wifi Package",
      },
    ],
  },


  {
    id: "routes",
    title: "Routes",
    description: "Flight routes and segments",
    icon: Route,
    sections: [
      {
        id: "routes",
        title: "Routes",
      },
      {
        id: "segments",
        title: "Route Segments",
      },
    ],
  },


  {
    id: "trips",
    title: "Trips",
    description: "Flight trips and operations",
    icon: Ticket,
    sections: [
      {
        id: "trips",
        title: "Trips",
      },
      {
        id: "operations",
        title: "Operations",
      },
      {
        id: "tracking",
        title: "Tracking",
      },
      {
        id: "connections",
        title: "Connections",
      },
      {
        id: "codeshare",
        title: "Codeshare",
      },
      {
        id: "history",
        title: "History",
      },
    ],
  },


  {
    id: "pricing",
    title: "Pricing",
    description: "Fare and pricing",
    icon: DollarSign,
    sections: [
      {
        id: "price",
        title: "Price",
      },
      {
        id: "fares",
        title: "Fares",
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
    description: "Flight policies",
    icon: FileText,
    sections: [
      {
        id: "cancellation",
        title: "Cancellation",
      },
      {
        id: "change",
        title: "Change",
      },
      {
        id: "baggage",
        title: "Baggage",
      },
      {
        id: "boarding",
        title: "Boarding",
      },
      {
        id: "checkIn",
        title: "Check In",
      },
      {
        id: "passenger",
        title: "Passenger",
      },
      {
        id: "transit",
        title: "Transit",
      },
      {
        id: "visa",
        title: "Visa",
      },
    ],
  },


  {
    id: "notice",
    title: "Notice",
    description: "Flight notices",
    icon: FileText,
    sections: [
      {
        id: "notice",
        title: "Notice",
      },
    ],
  },


  {
    id: "images",
    title: "Images",
    description: "Flight images",
    icon: Images,
    sections: [
      {
        id: "images",
        title: "Images",
      },
    ],
  },


  {
    id: "schedule",
    title: "Schedule",
    description: "Flight schedule",
    icon: CalendarRange,
    sections: [
      {
        id: "schedule",
        title: "Schedule",
      },
    ],
  },


  {
    id: "seo",
    title: "SEO",
    description: "Search metadata",
    icon: Search,
    sections: [
      {
        id: "seo",
        title: "SEO",
      },
    ],
  },

];