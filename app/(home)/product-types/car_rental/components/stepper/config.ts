import { Step } from "@/components/stepper/types";
import { Car, Gift, ShieldCheck, FileText, LucideIcon } from "lucide-react";

export const mainSteps: Step[] = [
  ["insurance", "Insurance", ShieldCheck],
  ["document", "Document", FileText],
];

export const subSteps: Record<string, Step[]> = {
  insurance: [
    ["insurance-type", "Insurance Type", ShieldCheck],
    ["insurance-benefit-type", "Insurance Benefit Type", Gift],
  ],

  document: [["document-type", "Document Type", FileText]],
};
