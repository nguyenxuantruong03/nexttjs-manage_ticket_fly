import {
  Route,
  Ship,
  Car,
  Fuel,
  Image,
  Images,
  MessageCircleWarning,
  MessageSquareText,
} from "lucide-react";

import { Step } from "@/components/stepper/types";

export const mainSteps: Step[] = [
  ["service", "Service", Ship],

  ["vehicle", "Vehicle", Car],

  ["media", "Media", Image],
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

  media: [
    ["media-asset", "Media Asset", Image],
    ["media-category", "Media Category", Images],
  ],

  reason: [
    ["reason-code", "Reason Code", MessageCircleWarning],
    ["reason-context", "Reason Context", MessageSquareText],
  ],
};
