"use client";

import { useMemo } from "react";

import { SingleMediaPreview } from "./single-media-preview";
import { MultipleMediaPreview } from "./multiple-media-preview";

import { useMediaPreview } from "@/hooks/catalog/media-asset/useMediaPreview";

import { MediaAvatar } from "@/components/common/image/media-avatar";
import { MediaPreviewProps } from "./media-preview.types";

export function MediaPreview({
  path,
  name,
  fallback = "IM",
  className = "h-10 w-10",
  imageClassName = "object-cover",
  fallbackClassName,
  previewClassName,
}: MediaPreviewProps) {
  /**
   * Normalize:
   *
   * string
   *    ↓
   * [string]
   *
   * string[]
   *    ↓
   * string[]
   */
  const paths = useMemo(() => {
    if (!path) {
      return [];
    }

    if (Array.isArray(path)) {
      return path.filter(Boolean);
    }

    return [path];
  }, [path]);

  /**
   * Path đầu tiên được dùng làm thumbnail.
   */
  const firstPath = paths[0];

  const { previewUrl, isLoading } = useMediaPreview(firstPath);

  const displayName = name?.trim() || "Media";

  /**
   * ========================================
   * LOADING
   * ========================================
   */
  if (isLoading) {
    return (
      <div
        className={`
          flex
          items-center
          justify-center
          rounded-full
          bg-muted
          text-xs
          text-muted-foreground
          ${className}
        `}
      >
        ...
      </div>
    );
  }

  /**
   * ========================================
   * NO IMAGE
   * ========================================
   */
  if (!firstPath || !previewUrl) {
    return (
      <MediaAvatar
        image={null}
        name={displayName}
        fallback={fallback}
        className={className}
        fallbackClassName={fallbackClassName}
      />
    );
  }

  /**
   * ========================================
   * SINGLE IMAGE
   *
   * path="image.jpg"
   *
   * => Dialog
   * ========================================
   */
  if (paths.length === 1) {
    return (
      <SingleMediaPreview
        previewUrl={previewUrl}
        name={displayName}
        fallback={fallback}
        className={className}
        imageClassName={imageClassName}
        fallbackClassName={fallbackClassName}
        previewClassName={previewClassName}
      />
    );
  }

  /**
   * ========================================
   * MULTIPLE IMAGES
   *
   * path={["1.jpg", "2.jpg", "3.jpg"]}
   *
   * => Stacked thumbnail
   * => Dialog + Carousel
   * ========================================
   */
  return (
    <MultipleMediaPreview
      paths={paths}
      previewUrl={previewUrl}
      name={displayName}
      fallback={fallback}
      className={className}
      imageClassName={imageClassName}
      fallbackClassName={fallbackClassName}
      previewClassName={previewClassName}
    />
  );
}
