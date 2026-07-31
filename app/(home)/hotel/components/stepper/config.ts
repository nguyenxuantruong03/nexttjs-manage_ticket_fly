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
  Utensils,
  UtensilsCrossed,
} from "lucide-react";

export type Step = [id: string, title: string, icon: LucideIcon];

export const mainSteps: Step[] = [
  ["basic", "Basic", Hotel],
  ["room", "Room", BedDouble],
  ["facility", "Facility", Building2],
  ["food", "Food & Extra", UtensilsCrossed],
  ["pricing", "Pricing & Policy", BadgeDollarSign],
];

export const subSteps: Record<string, Step[]> = {
  basic: [
    ["hotel-type", "Hotel Type", Building],
    ["hotel-brand", "Brand", BadgeCheck],
    ["hotel-star-rating", "Star Rating", Star],
    ["hotel-sustainability", "Sustainability", Leaf],
  ],

  room: [
    ["hotel-room-category", "Room Category", DoorOpen],
    ["hotel-room-type", "Room Type", BedDouble],
    ["hotel-bed-type", "Bed Type", BedDouble],
    ["hotel-bathroom-type", "Bathroom Type", Bath],
    ["hotel-room-view", "Room View", Mountain],
    ["hotel-room-media-category", "Room Media Category", Image],
  ],

  facility: [
    ["hotel-facility-category", "Facility Category", LayoutGrid],
    ["hotel-facility", "Facility", Building2],
    ["hotel-accessibility", "Accessibility", Accessibility],
  ],

  food: [
    ["hotel-meal-plan", "Meal Plan", Utensils],
    ["hotel-dining-meal-type", "Dining Meal", Soup],
    ["hotel-dining-service-type", "Dining Service", Bell],
    ["hotel-extra-type", "Extra Type", Gift],
  ],

  pricing: [
    ["hotel-rate-plan-type", "Rate Plan", Receipt],
    ["hotel-policy-type", "Policy Type", FileText],
    ["hotel-policy", "Policy", ShieldCheck],
    ["hotel-media-category", "Media Category", Image],
    ["hotel-media-asset", "Media Asset", Image],
  ],
};