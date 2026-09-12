"use client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { useCallback, useEffect, useRef, useState } from "react";

export function useMediaPreview(key: string | null | undefined) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const keyRef = useRef(key);
  keyRef.current = key;

  const fetchPreview = useCallback(async (mediaKey: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await MediaAssetService.getPreviewUrl(mediaKey);
      setPreviewUrl(result.url);
    } catch (err) {
      const previewError =
        err instanceof Error ? err : new Error("Failed to load media preview");
      console.error("Failed to load media preview:", previewError);
      setPreviewUrl(null);
      setError(previewError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch khi key đổi
  useEffect(() => {
    if (!key) {
      setPreviewUrl(null);
      setError(null);
      return;
    }
    fetchPreview(key);
  }, [key, fetchPreview]);

  // Fetch lại khi tab quay lại active
  // (trình duyệt có thể hủy/treo request ảnh khi tab bị ẩn,
  // khiến ảnh không tự phục hồi nếu không ép load lại)
  useEffect(() => {
    function handleVisibilityChange() {
      if (document.visibilityState === "visible" && keyRef.current) {
        fetchPreview(keyRef.current);
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [fetchPreview]);

  // Fallback: nếu ảnh vẫn lỗi (vd load fail giữa chừng), retry 1 lần
  const handleError = useCallback(() => {
    if (keyRef.current) {
      fetchPreview(keyRef.current);
    }
  }, [fetchPreview]);

  return { previewUrl, isLoading, error, handleError };
}
