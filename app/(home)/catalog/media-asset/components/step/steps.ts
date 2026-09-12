import { Database, FileText, Video, Type, CalendarCheck } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { MediaAssetFormSchema } from "../form/schema";

import { mediaAssetFieldGroups } from "./field-groups";

export const mediaAssetSteps: FormWizardStep<MediaAssetFormSchema>[] = [
  {
    id: "storage",

    title: "Storage",

    description: "Media asset storage information",

    icon: Database,

    fields: mediaAssetFieldGroups.storage,
  },

  {
    id: "file-info",

    title: "File Information",

    description: "Media asset file metadata",

    icon: FileText,

    fields: mediaAssetFieldGroups.fileInfo,
  },

  {
    id: "content",

    title: "Content",

    description: "Media asset content information",

    icon: Type,

    fields: mediaAssetFieldGroups.content,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Media asset booking configuration",

    icon: CalendarCheck,

    fields: mediaAssetFieldGroups.bookingType,
  },
];
