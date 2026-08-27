import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Image as ImageIcon,
  PackagePlus,
  Wifi,
  Activity,
  Link2,
  Share2,
} from "lucide-react";

import { flyAirlineFieldGroups } from "./field-groups";
import { FlyAirlineFormSchema } from "../schema/airline.schema";

export const flyAirlineSteps: FormWizardStep<FlyAirlineFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly airline basic information",
    icon: Info,
    fields: flyAirlineFieldGroups.basic,
  },

  {
    id: "images",
    title: "Images",
    description: "Airline images and gallery",
    icon: ImageIcon,
    fields: flyAirlineFieldGroups.images,
  },

  {
    id: "addon",
    title: "Addons",
    description: "Passenger addons offered by this airline",
    icon: PackagePlus,
    fields: flyAirlineFieldGroups.addon,
  },

  {
    id: "interline",
    title: "Interline",
    description: "Interline agreements with validating airlines",
    icon: Link2,
    fields: flyAirlineFieldGroups.interline,
  },

  {
    id: "operatingCodeshares",
    title: "Operating Codeshares",
    description: "Flights this airline operates on behalf of others",
    icon: Share2,
    fields: flyAirlineFieldGroups.operatingCodeshares,
  },

  {
    id: "marketingCodeshares",
    title: "Marketing Codeshares",
    description: "Flights this airline markets under its own code",
    icon: Share2,
    fields: flyAirlineFieldGroups.marketingCodeshares,
  },

  {
    id: "wifiPackage",
    title: "Wifi Packages",
    description: "In-flight wifi packages",
    icon: Wifi,
    fields: flyAirlineFieldGroups.wifiPackage,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly airline status",
    icon: Activity,
    fields: flyAirlineFieldGroups.status,
  },
];