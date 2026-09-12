"use client";

import { useState } from "react";

import { usePresignedUpload } from "@/hooks/catalog/media-asset/usePresignedUpload";

import { UploadedMedia } from "@/types/common/catalog/media.types";

export function useS3Upload() {
  const [isUploading, setIsUploading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [error, setError] = useState<Error | null>(null);

  const { mutateAsync: createPresignedUpload } = usePresignedUpload();

  async function upload(file: File, folder = "media"): Promise<UploadedMedia> {
    try {
      setIsUploading(true);
      setProgress(0);
      setError(null);

      // ================================================
      // CREATE PRESIGNED UPLOAD
      // ================================================

      const result = await createPresignedUpload({
        filename: file.name,
        mimeType: file.type,
        folder,
      });

      const { uploadUrl, key, previewUrl } = result;

      if (!uploadUrl) {
        throw new Error("Presigned upload URL is missing");
      }

      if (!key) {
        throw new Error("S3 object key is missing");
      }

      if (!previewUrl) {
        throw new Error("Presigned preview URL is missing");
      }

      // ================================================
      // UPLOAD TO S3
      // ================================================

      const response = await fetch(uploadUrl, {
        method: "PUT",

        headers: {
          "Content-Type": file.type,
        },

        body: file,
      });

      if (!response.ok) {
        const errorText = await response.text();

        console.error("S3 upload error:", errorText);

        throw new Error(
          `S3 upload failed: ${response.status} ${response.statusText}`,
        );
      }

      // ================================================
      // COMPLETE
      // ================================================

      setProgress(100);

      return {
        key,
        previewUrl,
      };
    } catch (err) {
      const uploadError =
        err instanceof Error ? err : new Error("Failed to upload file");

      setError(uploadError);

      throw uploadError;
    } finally {
      setIsUploading(false);
    }
  }

  function reset() {
    setProgress(0);
    setError(null);
    setIsUploading(false);
  }

  return {
    upload,
    reset,
    isUploading,
    progress,
    error,
  };
}
