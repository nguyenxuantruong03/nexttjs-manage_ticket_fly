import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { CarRentalDocumentTypeFormSchema } from "../form/schema";

import { carRentalDocumentTypeFieldGroups } from "./field-groups";

export const carRentalDocumentTypeSteps: FormWizardStep<CarRentalDocumentTypeFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "Car rental document type information",
      icon: Info,
      fields: carRentalDocumentTypeFieldGroups.basic,
    },

    {
      id: "status",
      title: "Status",
      description: "Car rental document type status",
      icon: Activity,
      fields: carRentalDocumentTypeFieldGroups.status,
    },
  ];