import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images, Search, Activity } from "lucide-react";

export const countrySteps: (FormWizardStep & {
  sections: {
    id: string;
    title: string;
  }[];
})[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Country basic information",
    icon: Info,

    sections: [
      {
        id: "country",
        title: "Country",
      },
    ],
  },

  {
    id: "location",
    title: "Location",
    description: "Geography information",
    icon: MapPinned,

    sections: [
      {
        id: "location",
        title: "Location",
      },
      {
        id: "languages",
        title: "Languages",
      },
    ],
  },

  {
    id: "media",
    title: "Media",
    description: "Country images",
    icon: Images,

    sections: [
      {
        id: "images",
        title: "Images",
      },
    ],
  },

  {
    id: "search",
    title: "Search",
    description: "Search metadata",
    icon: Search,

    sections: [
      {
        id: "metadata",
        title: "Search Metadata",
      },
    ],
  },

  {
    id: "status",
    title: "Status",
    description: "Country visibility",
    icon: Activity,

    sections: [
      {
        id: "status",
        title: "Status",
      },
    ],
  },
];
