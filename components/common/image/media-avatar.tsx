"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getInitialsName } from "@/lib/utils";

interface MediaAvatarProps {
  image?: string | null;

  name?: string | null;

  fallback?: string;

  className?: string;

  imageClassName?: string;

  fallbackClassName?: string;
}

export function MediaAvatar({
  image,
  name,
  fallback,
  className = "h-10 w-10",
  imageClassName = "object-cover",
  fallbackClassName,
}: MediaAvatarProps) {
  const displayName = name?.trim() || "Media";

  const initials = fallback || getInitialsName(displayName);

  return (
    <Avatar className={className}>
      {image && (
        <AvatarImage src={image} alt={displayName} className={imageClassName} />
      )}

      <AvatarFallback className={fallbackClassName}>{initials}</AvatarFallback>
    </Avatar>
  );
}
