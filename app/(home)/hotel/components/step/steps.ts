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
} from "lucide-react";

import { hotelFieldGroups } from "./field-groups";
import { HotelFormSchema } from "../schema";

export const hotelSteps: FormWizardStep<HotelFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "General information",
    icon: Info,
    fields: hotelFieldGroups.basic,
  },

  {
    id: "location",
    title: "Location",
    description: "Address & nearby places",
    icon: MapPinned,
    fields: hotelFieldGroups.location,
  },

  {
    id: "images",
    title: "Images",
    description: "Hotel gallery",
    icon: Images,
    fields: hotelFieldGroups.images,
  },

  {
    id: "rooms",
    title: "Rooms",
    description: "Room types, rooms & inventory",
    icon: BedDouble,
    fields: hotelFieldGroups.rooms,
  },

  {
    id: "facilities",
    title: "Facilities",
    description: "Amenities & hotel services",
    icon: Building2,
    fields: hotelFieldGroups.facilities,
  },

  {
    id: "meal",
    title: "Meals",
    description: "Meal options & hotel extras",
    icon: UtensilsCrossed,
    fields: hotelFieldGroups.meal,
  },

  {
    id: "pricing",
    title: "Pricing",
    description: "Rate plans, prices & rules",
    icon: DollarSign,
    fields: hotelFieldGroups.pricing,
  },

  {
    id: "policies",
    title: "Policies",
    description: "Booking, payment & cancellation",
    icon: FileText,
    fields: hotelFieldGroups.policies,
  },

  {
    id: "availability",
    title: "Availability",
    description: "Inventory, calendar & room locks",
    icon: CalendarRange,
    fields: hotelFieldGroups.availability,
  },

  {
    id: "seo",
    title: "SEO",
    description: "Search metadata & visibility",
    icon: Star,
    fields: hotelFieldGroups.seo,
  },
];
