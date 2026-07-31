import {
  Database,
  FileImage,
  FileVideo,
  Info,
} from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { MediaAssetFormSchema } from "../form/schema";
import { mediaAssetFieldGroups } from "./field-groups";

export const mediaAssetSteps: FormWizardStep<MediaAssetFormSchema>[] = [
  {
    id: "storage",
    title: "Storage",
    description: "Media storage information",
    icon: Database,

    fields: mediaAssetFieldGroups.storage,
  },
  {
    id: "fileInfo",
    title: "File Info",
    description: "Media file information",
    icon: FileImage,

    fields: mediaAssetFieldGroups.fileInfo,
  },
  {
    id: "video",
    title: "Video",
    description: "Video information",
    icon: FileVideo,

    fields: mediaAssetFieldGroups.video,
  },
  {
    id: "metadata",
    title: "Metadata",
    description: "Media metadata",
    icon: Info,

    fields: mediaAssetFieldGroups.metadata,
  },
];