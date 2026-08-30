import { Step } from "@/components/stepper/types";
import { Route, Ship, Car, Fuel, LucideIcon } from "lucide-react";

export const mainSteps: Step[] = [
  ["service", "Service", Ship],
  ["vehicle", "Vehicle", Car],
];

export const subSteps: Record<string, Step[]> = {
  service: [
    ["route-type", "Route Type", Route],
    ["service-type", "Service Type", Ship],
  ],

  vehicle: [
    ["vehicle-type", "Vehicle Type", Car],
    ["fuel-type", "Fuel Type", Fuel],
  ],
};
