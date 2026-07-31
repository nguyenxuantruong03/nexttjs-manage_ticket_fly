import { MediaType } from "@/types/bookings/hotel/enum/enums";
import { z } from "zod";

// ======================================================
// MEDIA ASSET
// ======================================================

export const mediaAssetSchema = z.object({
  // ======================================================
  // STORAGE
  // ======================================================

  url: z.string().url(),

  thumbnailUrl: z.string().url().nullable().optional(),

  path: z.string().nullable().optional(),

  // ======================================================
  // FILE INFO
  // ======================================================

  type: z.nativeEnum(MediaType),

  mimeType: z.string().nullable().optional(),

  size: z.number().int().min(0).nullable().optional(),

  width: z.number().int().min(0).nullable().optional(),

  height: z.number().int().min(0).nullable().optional(),

  // ======================================================
  // VIDEO
  // ======================================================

  duration: z.number().int().min(0).nullable().optional(),

  alt: z.string().nullable().optional(),

  caption: z.string().nullable().optional(),
});

// ======================================================
// TYPES
// ======================================================

export type MediaAssetSchema = z.infer<typeof mediaAssetSchema>;
