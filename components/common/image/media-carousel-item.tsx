"use client";

import Image from "next/image";

import { useMediaPreview } from "@/hooks/catalog/media-asset/useMediaPreview";
import { CarouselItem } from "@/components/ui/carousel";
import { MediaCarouselItemProps } from "./media-preview.types";

export function MediaCarouselItem({
  path,
  name,
  index,
}: MediaCarouselItemProps) {
  const { previewUrl, isLoading } = useMediaPreview(path);

  return (
    <CarouselItem>
      <div
        className="
          flex
          h-[75vh]
          items-center
          justify-center
        "
      >
        {isLoading ? (
          <div
            className="
              flex
              items-center
              justify-center
              text-sm
              text-muted-foreground
            "
          >
            ...
          </div>
        ) : previewUrl ? (
          <Image
            src={previewUrl}
            alt={`${name} - ${index + 1}`}
            width={1600}
            height={1200}
            className="
              max-h-[75vh]
              w-auto
              max-w-full
              rounded-lg
              object-contain
            "
            unoptimized
          />
        ) : (
          <div
            className="
              flex
              items-center
              justify-center
              text-sm
              text-muted-foreground
            "
          >
            Không thể tải ảnh
          </div>
        )}
      </div>
    </CarouselItem>
  );
}
