import { Step } from "@/components/stepper/types";
import {
  Plane,
  Users,
  Tag,
  Building2,
  Handshake,
} from "lucide-react";

export const mainSteps: Step[] = [
  ["airline", "Airline", Plane],
  ["airport", "Airport", Building2],
  ["alliance", "Alliance", Handshake],
];

export const subSteps: Record<string, Step[]> = {
  airline: [
    ["airline-main", "Airline", Plane],

    ["aircraft-type", "Aircraft Type", Plane],
    ["aircraft-main", "Aircraft", Plane],

    ["crew-duty", "Crew Duty", Users],
    ["crew-role", "Crew Role", Users],
    ["crew-main", "Crew", Users],

    ["addon-type", "Addon Type", Tag],
  ],

  airport: [["airport", "Airport", Building2]],

  alliance: [["alliance", "Alliance", Handshake]],
};
