import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Settings2,
  Wrench,
  Armchair,
  Image as ImageIcon,
  Map,
  CalendarClock,
  Activity,
} from "lucide-react";

import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

import { flyAircraftFieldGroups } from "./field-groups";

export const flyAircraftSteps: FormWizardStep<FlyAircraftFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly aircraft basic information",
    icon: Info,
    fields: flyAircraftFieldGroups.basic,
  },

  {
    id: "specification",
    title: "Specification",
    description: "Technical specifications of the aircraft",
    icon: Settings2,
    fields: flyAircraftFieldGroups.specification,
  },

  {
    id: "facilities",
    title: "Facilities",
    description: "Facilities available on the aircraft",
    icon: Wrench,
    fields: flyAircraftFieldGroups.facilities,
  },

  {
    id: "cabins",
    title: "Cabins & Seats",
    description: "Cabin classes and seat layout",
    icon: Armchair,
    fields: flyAircraftFieldGroups.cabins,
  },

  {
    id: "images",
    title: "Images",
    description: "Aircraft images and gallery",
    icon: ImageIcon,
    fields: flyAircraftFieldGroups.images,
  },

  {
    id: "seatMap",
    title: "Seat Map",
    description: "Visual seat map for the aircraft",
    icon: Map,
    fields: flyAircraftFieldGroups.seatMap,
  },

  {
    id: "schedule",
    title: "Schedule",
    description: "Flight schedule and operating days",
    icon: CalendarClock,
    fields: flyAircraftFieldGroups.schedule,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly aircraft status",
    icon: Activity,
    fields: flyAircraftFieldGroups.status,
  },
];