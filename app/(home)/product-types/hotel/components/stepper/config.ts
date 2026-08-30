import { Step } from "@/components/stepper/types";
import {
  Accessibility,
  BadgeCheck,
  BadgeDollarSign,
  Bath,
  BedDouble,
  Bell,
  Building,
  Building2,
  DoorOpen,
  FileText,
  Gift,
  Hotel,
  Image,
  LayoutGrid,
  Leaf,
  LucideIcon,
  Mountain,
  Receipt,
  ShieldCheck,
  Soup,
  Star,
  Timer,
  Utensils,
  UtensilsCrossed,
} from "lucide-react";

export const mainSteps: Step[] = [
  ["basic", "Basic", Hotel],
  ["room", "Room", BedDouble],
  ["facility", "Facility", Building2],
  ["food", "Food & Extra", UtensilsCrossed],
  ["pricing", "Pricing & Policy", BadgeDollarSign],
];

export const subSteps: Record<string, Step[]> = {
  basic: [
    ["hotel-brand", "Brand", BadgeCheck],
    ["hotel-star-rating", "Star Rating", Star],
    ["hotel-sustainability", "Sustainability", Leaf],
  ],

  room: [
    ["hotel-room-category", "Room Category", DoorOpen],
    ["hotel-check-in-policy", "Check In Policy", Timer],
    ["hotel-room-type", "Room Type", BedDouble],
    ["hotel-bed-type", "Bed Type", BedDouble],
    ["hotel-bathroom-type", "Bathroom Type", Bath],
    ["hotel-room-view", "Room View", Mountain],
  ],

  facility: [["hotel-accessibility", "Accessibility", Accessibility]],

  food: [
    ["hotel-meal-plan", "Meal Plan", Utensils],
    ["hotel-dining-meal-type", "Dining Meal", Soup],
    ["hotel-dining-service-type", "Dining Service", Bell],
  ],

  pricing: [["hotel-rate-plan-type", "Rate Plan", Receipt]],
};
