export interface MediaPreviewProps {
  /**
   * Có thể truyền:
   *
   * path="image.jpg"
   *
   * hoặc:
   *
   * path={["image-1.jpg", "image-2.jpg"]}
   */
  path?: string | string[] | null;

  name?: string | null;

  fallback?: string;

  className?: string;

  imageClassName?: string;

  fallbackClassName?: string;

  previewClassName?: string;
}

export interface SingleMediaPreviewProps {
  previewUrl: string;

  name: string;

  fallback: string;

  className: string;

  imageClassName: string;

  fallbackClassName?: string;

  previewClassName?: string;
}

export interface MultipleMediaPreviewProps {
  paths: string[];

  previewUrl: string;

  name: string;

  fallback: string;

  className: string;

  imageClassName: string;

  fallbackClassName?: string;

  previewClassName?: string;
}

export interface MediaStackProps {
  count: number;

  previewUrl: string;

  name: string;

  fallback: string;

  className: string;

  imageClassName: string;

  fallbackClassName?: string;
}

export interface MediaCarouselItemProps {
  path: string;

  name: string;

  index: number;
}
