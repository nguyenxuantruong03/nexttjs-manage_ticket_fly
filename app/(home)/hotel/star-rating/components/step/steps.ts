import { Info } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { StarRatingFormSchema } from "../form/schema";
import { starRatingFieldGroups } from "./field-groups";

export const starRatingSteps: FormWizardStep<StarRatingFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic star rating information",
    icon: Info,

    fields: starRatingFieldGroups.basic,
  },
];
