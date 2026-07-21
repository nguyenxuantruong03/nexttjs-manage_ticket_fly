import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Images, Activity } from "lucide-react";

export const currencySteps: (FormWizardStep & {
  sections: {
    id: string;
    title: string;
  }[];
})[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Currency information",
    icon: Info,

    sections: [
      {
        id: "currency",
        title: "Currency",
      },
    ],
  },

  {
    id: "display",
    title: "Display",
    description: "Currency display settings",
    icon: Images,

    sections: [
      {
        id: "display",
        title: "Display",
      },
    ],
  },

  {
    id: "status",
    title: "Status",
    description: "Currency availability",
    icon: Activity,

    sections: [
      {
        id: "status",
        title: "Status",
      },
    ],
  },
];
