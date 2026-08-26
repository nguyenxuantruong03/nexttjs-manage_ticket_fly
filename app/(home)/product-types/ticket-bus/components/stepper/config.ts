import {
  Car,
  Armchair,
  LucideIcon,
} from "lucide-react";

export type Step = [id: string, title: string, icon: LucideIcon];

export const mainSteps: Step[] = [
  ["seat", "Seat", Armchair],
];

export const subSteps: Record<string, Step[]> = {
  seat: [
    ["seat-type", "Seat Type", Armchair],
  ],
};