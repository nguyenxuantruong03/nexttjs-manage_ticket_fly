import { Step } from "@/components/stepper/types";
import {
  Accessibility,
  Armchair,
  BadgeDollarSign,
  Bell,
  Building2,
  Clock,
  Coffee,
  Gift,
  LucideIcon,
  MapPin,
  Plane,
  Receipt,
  ShieldCheck,
  Utensils,
} from "lucide-react";

export const mainSteps: Step[] = [
  ["basic", "Basic", Plane],
  ["flight", "Flight", Clock],
  ["seat-meal", "Seat & Meal", Armchair],
  ["pricing", "Pricing", BadgeDollarSign],
  ["addon", "Addon", Gift],
];

export const subSteps: Record<string, Step[]> = {
  basic: [
    ["airport", "Airport", MapPin],
    ["cabin-class", "Cabin Class", Armchair],
  ],

  flight: [
    ["crew-duty", "Crew Duty", ShieldCheck],
    ["delay-reason", "Delay Reason", Clock],
  ],

  "seat-meal": [
    ["seat-type", "Seat Type", Armchair],
    ["meal-type", "Meal Type", Utensils],
  ],

  pricing: [["fare-rule-type", "Fare Rule Type", Receipt]],

  addon: [["addon-type", "Addon Type", Gift]],
};
