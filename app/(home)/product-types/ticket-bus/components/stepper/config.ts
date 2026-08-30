import { Step } from "@/components/stepper/types";
import { Car, Armchair, LucideIcon } from "lucide-react";

export const mainSteps: Step[] = [["seat", "Seat", Armchair]];

export const subSteps: Record<string, Step[]> = {
  seat: [["seat-type", "Seat Type", Armchair]],
};
