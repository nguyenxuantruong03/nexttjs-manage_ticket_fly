"use client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { useMutation } from "@tanstack/react-query";

export function useDeleteMediaObject() {
  return useMutation({
    mutationFn: (key: string) => MediaAssetService.deleteObject(key),
  });
}
