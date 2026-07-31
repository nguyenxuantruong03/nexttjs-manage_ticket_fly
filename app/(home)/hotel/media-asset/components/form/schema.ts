import { z } from "zod";

import { MediaType } from "@/types/bookings/hotel/enum/enums";

export const MediaAssetSchema = z.object({
  // ======================================================
  // STORAGE
  // ======================================================

  url: z.string().url("Invalid URL"),

  thumbnailUrl: z.string().url().nullable().optional(),

  path: z.string().trim().nullable().optional(),

  // ======================================================
  // FILE INFO
  // ======================================================

  type: z.nativeEnum(MediaType),

  mimeType: z.string().trim().nullable().optional(),

  size: z.coerce.number().int().min(0).nullable().optional(),

  width: z.coerce.number().int().min(0).nullable().optional(),

  height: z.coerce.number().int().min(0).nullable().optional(),

  // ======================================================
  // VIDEO
  // ======================================================

  duration: z.coerce.number().int().min(0).nullable().optional(),

  // ======================================================
  // METADATA
  // ======================================================

  alt: z.string().trim().nullable().optional(),

  caption: z.string().trim().nullable().optional(),
});

export type MediaAssetFormSchema = z.infer<typeof MediaAssetSchema>;
