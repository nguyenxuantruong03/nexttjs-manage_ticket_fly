"use client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { useMutation } from "@tanstack/react-query";

export function usePresignedUpload() {
  return useMutation({
    mutationFn: MediaAssetService.createPresignedUpload,
  });
}
