import { Step } from "@/components/stepper/types";
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

export const mainSteps: Step[] = [["crew", "Crew", ShieldCheck]];

export const subSteps: Record<string, Step[]> = {
  crew: [
    ["crew-role", "Crew Role", BriefcaseBusiness],
    ["condition", "Condition", ClipboardCheck],
  ],
};
