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
  Star,
  Search,
  Package,
  Sparkles,
  Tags,
  CalendarDays,
} from "lucide-react";

import { hotelFieldGroups } from "./field-groups";
import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelSteps: FormWizardStep<HotelSchemaForm>[] = [
  // ======================================================
  // BASIC
  // ======================================================

  {
    id: "basic",
    title: "Basic",
    description: "General hotel information",
    icon: Info,
    fields: hotelFieldGroups.basic,
  },

  // ======================================================
  // INFORMATION
  // ======================================================

  {
    id: "information",
    title: "Information",
    description: "Hotel location & provider information",
    icon: MapPinned,
    fields: hotelFieldGroups.information,
  },

  // ======================================================
  // MEDIA
  // ======================================================

  {
    id: "medias",
    title: "Images",
    description: "Hotel gallery & media",
    icon: Images,
    fields: hotelFieldGroups.medias,
  },

  // ======================================================
  // ROOMS
  // ======================================================

  {
    id: "rooms",
    title: "Rooms",
    description: "Room types, beds & room facilities",
    icon: BedDouble,
    fields: hotelFieldGroups.rooms,
  },

  // ======================================================
  // INVENTORY
  // ======================================================

  {
    id: "inventories",
    title: "Inventory",
    description: "Availability calendar & room inventory",
    icon: CalendarDays,
    fields: hotelFieldGroups.inventories,
  },

  // ======================================================
  // FACILITIES
  // ======================================================

  {
    id: "facilities",
    title: "Facilities",
    description: "Hotel amenities & services",
    icon: Building2,
    fields: hotelFieldGroups.facilities,
  },

  // ======================================================
  // MEAL
  // ======================================================

  {
    id: "meal",
    title: "Dining",
    description: "Restaurants, meals & dining options",
    icon: UtensilsCrossed,
    fields: hotelFieldGroups.meal,
  },

  // ======================================================
  // EXTRA
  // ======================================================

  {
    id: "extras",
    title: "Extras",
    description: "Additional services & fees",
    icon: Package,
    fields: hotelFieldGroups.extras,
  },

  // ======================================================
  // PRICING
  // ======================================================

  {
    id: "pricing",
    title: "Rate Plans",
    description: "Rate plans & booking conditions",
    icon: DollarSign,
    fields: hotelFieldGroups.pricing,
  },

  // ======================================================
  // PRICE
  // ======================================================

  {
    id: "price",
    title: "Price",
    description: "Room pricing, breakdown & rules",
    icon: DollarSign,
    fields: hotelFieldGroups.price,
  },

  // ======================================================
  // POLICIES
  // ======================================================

  {
    id: "policies",
    title: "Policies",
    description: "Check-in, cancellation & hotel rules",
    icon: FileText,
    fields: hotelFieldGroups.policies,
  },

  // ======================================================
  // DETAILS
  // ======================================================

  {
    id: "details",
    title: "Details",
    description: "Descriptions, contacts, awards & accessibility",
    icon: Sparkles,
    fields: hotelFieldGroups.details,
  },

  // ======================================================
  // BRAND / RATING
  // ======================================================

  {
    id: "brand",
    title: "Brand",
    description: "Hotel brand information",
    icon: Star,
    fields: hotelFieldGroups.brand,
  },

  // ======================================================
  // RATING
  // ======================================================

  {
    id: "rating",
    title: "Rating",
    description: "Hotel star rating information",
    icon: Star,
    fields: hotelFieldGroups.rating,
  },

  // ======================================================
  // SEO
  // ======================================================

  {
    id: "seo",
    title: "SEO",
    description: "Search metadata & visibility",
    icon: Search,
    fields: hotelFieldGroups.seo,
  },
];
