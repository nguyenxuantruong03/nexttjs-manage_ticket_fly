import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { LegalDocumentFormSchema } from "../form/schema";

import { legalDocumentFieldGroups } from "./field-groups";

export const legalDocumentSteps: FormWizardStep<LegalDocumentFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Legal document information",

    icon: Info,

    fields: legalDocumentFieldGroups.basic,
  },

  {
    id: "status",

    title: "Status",

    description: "Legal document status",

    icon: Activity,

    fields: legalDocumentFieldGroups.status,
  },
];
