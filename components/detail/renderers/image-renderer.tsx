"use client";

import { MediaPreview } from "@/components/common/image/media-preview";

type Props = {
  value: unknown;
};

export function ImageRenderer({ value }: Props) {
  if (!value) {
    return <span className="text-muted-foreground">-</span>;
  }

  /**
   * Single image
   */
  if (typeof value === "string") {
    return (
      <MediaPreview
        path={value}
        name="Image"
        fallback="IM"
        className="h-20 w-20 rounded-md"
      />
    );
  }

  /**
   * Multiple images
   */
  if (Array.isArray(value)) {
    const paths = value.filter(
      (item): item is string =>
        typeof item === "string" && item.trim().length > 0,
    );

    if (!paths.length) {
      return <span className="text-muted-foreground">-</span>;
    }

    return (
      <div className="flex flex-wrap gap-3">
        {paths.map((path, index) => (
          <MediaPreview
            key={`${path}-${index}`}
            path={path}
            name={`Image ${index + 1}`}
            fallback="IM"
            className="h-20 w-20 rounded-md"
          />
        ))}
      </div>
    );
  }

  return <span className="text-muted-foreground">-</span>;
}