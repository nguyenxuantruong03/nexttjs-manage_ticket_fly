import { Step } from "@/components/stepper/types";
import { Building2, Tags, ScrollText, ListChecks } from "lucide-react";

export const mainSteps: Step[] = [
  ["facility", "Facility", Building2],
  ["policy", "Policy", ScrollText],
];

export const subSteps: Record<string, Step[]> = {
  facility: [
    ["facility-category", "Facility Category", Tags],
    ["facility-main", "Facility", Building2],
  ],

  policy: [
    ["policy-main", "Policy", ScrollText],
    ["policy-type", "Policy Type", ListChecks],
  ],
};
