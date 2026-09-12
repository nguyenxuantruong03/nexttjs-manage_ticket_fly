import { MediaType } from "@/types/product-types/hotel/enum/enums";
import { MediaAssetFormSchema } from "./schema";

export const mediaAssetDefaultValues: MediaAssetFormSchema = {
  // ======================================================
  // STORAGE
  // ======================================================

  path: {
    key: [],
    previewUrl: [],
  },

  // ======================================================
  // FILE INFO
  // ======================================================

  type: MediaType.IMAGE,

  size: null,

  width: null,

  height: null,

  // ======================================================
  // VIDEO
  // ======================================================

  duration: null,

  // ======================================================
  // CONTENT
  // ======================================================

  alt: null,

  caption: null,

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: [],
};
