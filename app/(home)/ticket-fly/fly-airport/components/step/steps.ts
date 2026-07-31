import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Plane, MapPinned } from "lucide-react";

import { FlyAirportFormSchema } from "../form/schema";
import { flyAirportFieldGroups } from "./field-groups";

export const flyAirportSteps: FormWizardStep<FlyAirportFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Airport basic information",
    icon: Info,

    fields: flyAirportFieldGroups.basic,
  },

  {
    id: "airport",
    title: "Airport",
    description: "Airport details and coordinates",
    icon: Plane,

    fields: flyAirportFieldGroups.airport,
  },

  {
    id: "relation",
    title: "Address",
    description: "Airport address information",
    icon: MapPinned,

    fields: flyAirportFieldGroups.relation,
  },
];
