import { FormWizardStep } from "@/components/form/wizard/types";

export const airportTransferSteps: FormWizardStep[] = [
  {
    id: "basic",
    title: "Basic",
    description: "General information",
  },
  {
    id: "route",
    title: "Route",
    description: "Departure & Arrival",
  },
  {
    id: "vehicle",
    title: "Vehicle",
    description: "Vehicle information",
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "Prices",
  },
  {
    id: "service",
    title: "Service",
    description: "Transfer service",
  },
  {
    id: "review",
    title: "Review",
    description: "Review & Submit",
  },
];
