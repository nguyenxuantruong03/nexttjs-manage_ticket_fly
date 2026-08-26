import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { CarRentalInsuranceBenefitTypeFormSchema } from "../form/schema";
import { carRentalInsuranceBenefitTypeFieldGroups } from "./field-groups";

export const carRentalInsuranceBenefitTypeSteps: FormWizardStep<CarRentalInsuranceBenefitTypeFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "Car rental insurance benefit type information",
      icon: Info,

      fields: carRentalInsuranceBenefitTypeFieldGroups.basic,
    },

    {
      id: "status",
      title: "Status",
      description: "Car rental insurance benefit type status",
      icon: Activity,

      fields: carRentalInsuranceBenefitTypeFieldGroups.status,
    },
  ];