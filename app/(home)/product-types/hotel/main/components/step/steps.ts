import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Star,
  ShieldCheck,
  Sparkles,
  Package,
  Building2,
  FileText,
  MapPinned,
  CalendarDays,
  UtensilsCrossed,
  Images,
  BedDouble,
  DollarSign,
  Search,
  Tags,
} from "lucide-react";

import { hotelFieldGroups } from "./field-groups";
import { HotelSchemaForm } from "../form/schema/core/hotel.schema";

export const hotelSteps: FormWizardStep<HotelSchemaForm>[] = [
  // ======================================================
  // 1. BASIC
  // ======================================================
  {
    id: "basic",
    title: "Basic",
    description: "General hotel information",
    icon: Info,
    fields: hotelFieldGroups.basic,
  },

  // ======================================================
  // 2. BRAND
  // ======================================================
  {
    id: "brand",
    title: "Brand",
    description: "Hotel brand information",
    icon: Star,
    fields: hotelFieldGroups.brand,
  },

  // ======================================================
  // 3. CHECK-IN POLICY
  // ======================================================
  {
    id: "check-in-policy",
    title: "Check-in Policy",
    description: "Check-in and check-out policies",
    icon: ShieldCheck,
    fields: hotelFieldGroups["check-in-policy"],
  },

  // ======================================================
  // 4. DETAILS
  // ======================================================
  {
    id: "details",
    title: "Details",
    description: "Descriptions, contacts, awards & accessibility",
    icon: Sparkles,
    fields: hotelFieldGroups.details,
  },

  // ======================================================
  // 5. EXTRAS
  // ======================================================
  {
    id: "extras",
    title: "Extras",
    description: "Additional services & fees",
    icon: Package,
    fields: hotelFieldGroups.extras,
  },

  // ======================================================
  // 6. FACILITIES
  // ======================================================
  {
    id: "facilities",
    title: "Facilities",
    description: "Hotel amenities & services",
    icon: Building2,
    fields: hotelFieldGroups.facilities,
  },

  // ======================================================
  // 7. HOTEL POLICY
  // ======================================================
  {
    id: "hotel-policy",
    title: "Hotel Policy",
    description: "Hotel rules and policy settings",
    icon: ShieldCheck,
    fields: hotelFieldGroups["hotel-policy"],
  },

  // ======================================================
  // 8. INFORMATION
  // ======================================================
  {
    id: "information",
    title: "Information",
    description: "Hotel location & provider information",
    icon: MapPinned,
    fields: hotelFieldGroups.information,
  },

  // ======================================================
  // 9. INVENTORIES
  // ======================================================
  {
    id: "inventories",
    title: "Inventories",
    description: "Availability calendar & room inventory",
    icon: CalendarDays,
    fields: hotelFieldGroups.inventories,
  },

  // ======================================================
  // 10. MEAL
  // ======================================================
  {
    id: "meal",
    title: "Meal",
    description: "Restaurants, meals & dining options",
    icon: UtensilsCrossed,
    fields: hotelFieldGroups.meal,
  },

  // ======================================================
  // 11. MEDIA
  // ======================================================
  {
    id: "media",
    title: "Media",
    description: "Hotel gallery & media",
    icon: Images,
    fields: hotelFieldGroups.media,
  },

  // ======================================================
  // 12. PACKAGE
  // ======================================================
  {
    id: "package",
    title: "Package",
    description: "Bundled hotel packages",
    icon: Package,
    fields: hotelFieldGroups.package,
  },

  // ======================================================
  // 13. PRICING
  // ======================================================
  {
    id: "pricing",
    title: "Pricing",
    description: "Room pricing, rate plans & booking conditions",
    icon: DollarSign,
    fields: hotelFieldGroups.pricing,
  },

  // ======================================================
  // 14. RATING
  // ======================================================
  {
    id: "rating",
    title: "Rating",
    description: "Hotel star rating information",
    icon: Star,
    fields: hotelFieldGroups.rating,
  },

  // ======================================================
  // 15. ROOM
  // ======================================================
  {
    id: "room",
    title: "Room",
    description: "Room types, beds & room facilities",
    icon: BedDouble,
    fields: hotelFieldGroups.room,
  },

  // ======================================================
  // 16. SEO
  // ======================================================
  {
    id: "seo",
    title: "SEO",
    description: "Search metadata & visibility",
    icon: Search,
    fields: hotelFieldGroups.seo,
  },
];
