"use client";

import { MediaAvatar } from "@/components/common/image/media-avatar";
import { MediaStackProps } from "./media-preview.types";

export function MediaStack({
  count,
  previewUrl,
  name,
  fallback,
  className,
  imageClassName,
  fallbackClassName,
}: MediaStackProps) {
  /**
   * Lấy kích thước từ className.
   *
   * Component stack sẽ có cùng kích thước
   * với MediaAvatar.
   */
  return (
    <div
      className={`
        relative
        ${className}
      `}
    >
      <div
        className="
          absolute
          inset-0
          translate-x-2
          scale-[0.88]
          overflow-hidden
          rounded-full
          border-2
          border-background
          bg-muted
        "
      >
        <img
          src={previewUrl}
          alt=""
          className={`
            h-full
            w-full
            ${imageClassName}
          `}
        />
      </div>

      <div
        className="
          absolute
          inset-0
          translate-x-1
          scale-[0.94]
          overflow-hidden
          rounded-full
          border-2
          border-background
          bg-muted
        "
      >
        <img
          src={previewUrl}
          alt=""
          className={`
            h-full
            w-full
            ${imageClassName}
          `}
        />
      </div>
      <div
        className="
          relative
          z-10
          h-full
          w-full
          overflow-hidden
          rounded-full
          border-2
          border-background
          bg-muted
        "
      >
        <img
          src={previewUrl}
          alt={name}
          className={`
            h-full
            w-full
            ${imageClassName}
          `}
        />
        {!previewUrl && (
          <MediaAvatar
            image={null}
            name={name}
            fallback={fallback}
            className="h-full w-full"
            fallbackClassName={fallbackClassName}
          />
        )}
      </div>
      <span
        className="
          absolute
          -right-1
          -top-1
          z-20
          flex
          min-h-5
          min-w-5
          items-center
          justify-center
          rounded-full
          border
          border-background
          bg-background
          px-1
          text-[10px]
          font-medium
          leading-none
          text-foreground
          shadow-sm
        "
      >
        +{count - 1}
      </span>
    </div>
  );
}
