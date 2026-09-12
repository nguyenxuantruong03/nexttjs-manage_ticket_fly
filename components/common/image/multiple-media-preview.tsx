"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MediaCarouselItem } from "./media-carousel-item";
import { MediaStack } from "./media-stack";
import { MultipleMediaPreviewProps } from "./media-preview.types";

export function MultipleMediaPreview({
  paths,
  previewUrl,
  name,
  fallback,
  className,
  imageClassName,
  fallbackClassName,
  previewClassName,
}: MultipleMediaPreviewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          data-row-action
          aria-label={`Xem ${paths.length} ảnh của ${name}`}
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
          <MediaStack
            count={paths.length}
            previewUrl={previewUrl}
            name={name}
            fallback={fallback}
            className={className}
            imageClassName={imageClassName}
            fallbackClassName={fallbackClassName}
          />
        </button>
      </DialogTrigger>

      <DialogContent
        data-dialog-content
        closeClassName="text-white hover:text-white w-6 h-6"
        className={`
          max-w-5xl
          overflow-hidden
          border-none
          bg-transparent
          p-0
          shadow-none
          ${previewClassName ?? ""}
        `}
      >
        <DialogTitle className="sr-only">
          {name} - {paths.length} ảnh
        </DialogTitle>

        <Carousel
          opts={{
            loop: true,
          }}
          className="mx-auto w-full max-w-4xl"
        >
          <CarouselContent>
            {paths.map((mediaPath, index) => (
              <MediaCarouselItem
                key={`${mediaPath}-${index}`}
                path={mediaPath}
                name={name}
                index={index}
              />
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2" />

          <CarouselNext className="right-2" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
