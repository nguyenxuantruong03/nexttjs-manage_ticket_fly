import { MediaAsset } from "@/types/bookings/hotel/media.type";
import { mediaAssetDefaultValues } from "./default-values";
import { MediaAssetFormSchema } from "./schema";

export function initMediaAssetFormValues(
  mediaAsset: MediaAsset,
): MediaAssetFormSchema {
  if (!mediaAsset) {
    return structuredClone(mediaAssetDefaultValues);
  }

  return structuredClone(mediaAsset);
}
