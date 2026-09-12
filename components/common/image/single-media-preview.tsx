"use client";

import Image from "next/image";

import { MediaAvatar } from "@/components/common/image/media-avatar";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SingleMediaPreviewProps } from "./media-preview.types";

export function SingleMediaPreview({
  previewUrl,
  name,
  fallback,
  className,
  imageClassName,
  fallbackClassName,
  previewClassName,
}: SingleMediaPreviewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          data-row-action
          aria-label={`Xem ${name}`}
          className="
            cursor-pointer
            rounded-full
            outline-none
            transition-opacity
            hover:opacity-90
            focus-visible:ring-2
            focus-visible:ring-ring
            focus-visible:ring-offset-2
          "
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <MediaAvatar
            image={previewUrl}
            name={name}
            fallback={fallback}
            className={className}
            imageClassName={imageClassName}
            fallbackClassName={fallbackClassName}
          />
        </button>
      </DialogTrigger>

      <DialogContent
        className={`
          max-w-4xl
          overflow-hidden
          border-none
          bg-transparent
          p-0
          shadow-none
          ${previewClassName ?? ""}
        `}
      >
        <DialogTitle className="sr-only">{name}</DialogTitle>

        <div className="flex max-h-[85vh] items-center justify-center">
          <Image
            src={previewUrl}
            alt={name}
            width={1600}
            height={1200}
            className="
              max-h-[85vh]
              w-auto
              max-w-full
              rounded-lg
              object-contain
            "
            unoptimized
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
