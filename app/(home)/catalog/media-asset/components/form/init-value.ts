import { MediaAsset } from "@/types/common/catalog/media-asset";

import { MediaAssetFormSchema } from "./schema";
import { mediaAssetDefaultValues } from "./default-values";

export function initMediaAssetFormValues(
  mediaAsset?: MediaAsset,
): MediaAssetFormSchema {
  if (!mediaAsset) {
    return structuredClone(mediaAssetDefaultValues);
  }

  return {
    // ======================================================
    // STORAGE
    // ======================================================

    path: {
      key: mediaAsset.path ?? [],
      previewUrl: [],
    },

    // ======================================================
    // FILE INFO
    // ======================================================

    type: mediaAsset.type,

    size: mediaAsset.size ?? null,

    width: mediaAsset.width ?? null,

    height: mediaAsset.height ?? null,

    // ======================================================
    // VIDEO
    // ======================================================

    duration: mediaAsset.duration ?? null,

    // ======================================================
    // CONTENT
    // ======================================================

    alt: mediaAsset.alt ?? null,

    caption: mediaAsset.caption ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      mediaAsset.bookingTypes?.map((bookingType) => bookingType.id) ?? [],
  };
}
