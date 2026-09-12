"use client";

import { useRef } from "react";
import { Edit2 } from "lucide-react";

import { useS3Upload } from "@/hooks/catalog/media-asset/useS3Upload";
import { useUpdateUserMe } from "@/hooks/user";
import { MediaAvatar } from "../common/image/media-avatar";

interface UserAvatarUploadProps {
  image?: string | null;
  name?: string | null;
}

export function UserAvatarUpload({ image, name }: UserAvatarUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { upload, isUploading, error } = useS3Upload();

  const updateUserMe = useUpdateUserMe();

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const result = await upload(file, "users/avatar");

      await updateUserMe.mutateAsync({
        image: result.key,
      });
    } catch {
      // Error handled by useS3Upload / mutation
    } finally {
      event.target.value = "";
    }
  }

  const isLoading = isUploading || updateUserMe.isPending;

  return (
    <div className="relative inline-block">
      <div className="group relative overflow-hidden rounded-full">
        <MediaAvatar image={image} name={name} className="h-10 w-10" />

        <button
          type="button"
          disabled={isLoading}
          onClick={() => inputRef.current?.click()}
          className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Edit2 className="h-5 w-5 text-white" />
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          disabled={isLoading}
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      {isUploading && (
        <p className="mt-1 text-xs text-muted-foreground">Uploading...</p>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
}
