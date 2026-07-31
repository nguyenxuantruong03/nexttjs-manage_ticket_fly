import { MediaAssetFormSchema } from "./schema";

import { MediaType } from "@/types/bookings/hotel/enum/enums";

export const mediaAssetDefaultValues: MediaAssetFormSchema = {
  // ======================================================
  // STORAGE
  // ======================================================

  url: "",

  thumbnailUrl: "",

  path: "",

  // ======================================================
  // FILE INFO
  // ======================================================

  type: MediaType.IMAGE,

  mimeType: "",

  size: 0,

  width: 0,

  height: 0,

  // ======================================================
  // VIDEO
  // ======================================================

  duration: 0,

  // ======================================================
  // METADATA
  // ======================================================

  alt: "",

  caption: "",
};