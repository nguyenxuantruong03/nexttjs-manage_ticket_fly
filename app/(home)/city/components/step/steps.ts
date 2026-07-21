import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  MapPinned,
  Images,
  Search,
  Plane,
  FileText,
  Activity,
} from "lucide-react";

export const citySteps: (FormWizardStep & {
  sections: {
    id: string;
    title: string;
  }[];
})[] = [
  {
    id: "basic",
    title: "Basic",
    description: "City basic information",
    icon: Info,

    sections: [
      {
        id: "city",
        title: "City",
      },
    ],
  },

  {
    id: "location",
    title: "Location",
    description: "Geography & country information",
    icon: MapPinned,

    sections: [
      {
        id: "country",
        title: "Country",
      },
      {
        id: "coordinates",
        title: "Coordinates",
      },
    ],
  },

  {
    id: "media",
    title: "Media",
    description: "City images and videos",
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
    description: "Search configuration",
    icon: Search,

    sections: [
      {
        id: "metadata",
        title: "Search Metadata",
      },
    ],
  },

  {
    id: "travel",
    title: "Travel",
    description: "Travel information",
    icon: Plane,

    sections: [
      {
        id: "season",
        title: "Travel Season",
      },
    ],
  },

  {
    id: "seo",
    title: "SEO",
    description: "Search engine optimization",
    icon: FileText,

    sections: [
      {
        id: "seo",
        title: "SEO Metadata",
      },
    ],
  },

  {
    id: "status",
    title: "Status",
    description: "City visibility",
    icon: Activity,

    sections: [
      {
        id: "status",
        title: "Status",
      },
    ],
  },
];
