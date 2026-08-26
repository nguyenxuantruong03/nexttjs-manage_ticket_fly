import {
  BadgeDollarSign,
  BriefcaseBusiness,
  ClipboardCheck,
  DollarSign,
  Gift,
  LucideIcon,
  Sailboat,
  Settings,
  ShieldCheck,
} from "lucide-react";

export type Step = [id: string, title: string, icon: LucideIcon];

export const mainSteps: Step[] = [
  ["crew", "Crew", ShieldCheck],
];

export const subSteps: Record<string, Step[]> = {
  crew: [
    ["crew-role", "Crew Role", BriefcaseBusiness],
    ["condition", "Condition", ClipboardCheck],
  ],

 
};