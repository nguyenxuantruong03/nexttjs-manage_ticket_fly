import { FieldPath } from "react-hook-form";

import { MediaAssetFormSchema } from "../form/schema";

type MediaAssetFieldPath = FieldPath<MediaAssetFormSchema>;

export const mediaAssetFieldGroups: Record<
  string,
  readonly MediaAssetFieldPath[]
> = {
  // ======================================================
  // STORAGE
  // ======================================================

  storage: ["url", "thumbnailUrl", "path"],

  // ======================================================
  // FILE INFO
  // ======================================================

  fileInfo: ["type", "mimeType", "size", "width", "height"],

  // ======================================================
  // VIDEO
  // ======================================================

  video: ["duration"],

  // ======================================================
  // METADATA
  // ======================================================

  metadata: ["alt", "caption"],
};
