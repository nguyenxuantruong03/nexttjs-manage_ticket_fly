import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { CarRentalInsuranceTypeFormSchema } from "../form/schema";
import { carRentalInsuranceTypeFieldGroups } from "./field-groups";

export const carRentalInsuranceTypeSteps: FormWizardStep<CarRentalInsuranceTypeFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "Car rental insurance type information",
      icon: Info,

      fields: carRentalInsuranceTypeFieldGroups.basic,
    },

    {
      id: "status",
      title: "Status",
      description: "Car rental insurance type status",
      icon: Activity,

      fields: carRentalInsuranceTypeFieldGroups.status,
    },
  ];