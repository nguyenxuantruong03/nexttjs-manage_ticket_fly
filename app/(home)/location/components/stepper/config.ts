import {
  Building2,
  CircleDollarSign,
  Clock,
  Home,
  Languages,
  Map,
  MapPinHouse,
  MapPinned,
  Navigation,
} from "lucide-react";

import { Step } from "@/components/stepper/types";

export const mainSteps: Step[] = [
  ["country", "Country", MapPinHouse],
  ["city", "City", Building2],
  ["address", "Address", Home],
];

export const subSteps: Record<string, Step[]> = {
  country: [
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
    ["address", "Address", Map],
    ["place", "Place", Map],
    ["flyairport", "FlyAirport", Map],
  ],
};
