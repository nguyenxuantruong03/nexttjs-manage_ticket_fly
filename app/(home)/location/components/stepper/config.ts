import {
  Building2,
  CircleDollarSign,
  Clock,
  Globe2,
  Home,
  Languages,
  Map,
  MapPinHouse,
  MapPinned,
  Navigation,
  Tags,
} from "lucide-react";

import { Step } from "@/components/stepper/types";

export const mainSteps: Step[] = [
  ["country", "Country", MapPinHouse],
  ["city", "City", Building2],
  ["address", "Address", Home],
];

export const subSteps: Record<string, Step[]> = {
  country: [
    ["continent", "Continent", Globe2],
    ["currency", "Currency", CircleDollarSign],
    ["language", "Language", Languages],
    ["timezone", "Timezone", Clock],
    ["country", "Country", MapPinHouse],
  ],

  city: [
    ["district", "District", MapPinned],
    ["ward", "Ward", Navigation],
    ["city", "City", Building2],
  ],

  address: [
    ["place-type", "Place Type", Tags],
    ["address", "Address", Map],
    ["place", "Place", Map],
    ["flyairport", "FlyAirport", Map],
  ],
};
