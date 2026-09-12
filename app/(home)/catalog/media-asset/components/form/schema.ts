import { z } from "zod";

import { MediaType } from "@/types/product-types/hotel/enum/enums";

export const schema = z.object({
  // ======================================================
  // STORAGE
  // ======================================================

  path: z
    .object({
      key: z.array(z.string()),
      previewUrl: z.array(z.string()).nullable(),
    })
    .nullable(),

  // ======================================================
  // FILE INFO
  // ======================================================

  type: z.nativeEnum(MediaType),

  bookingTypeIds: z.array(z.string()).default([]),

  size: z.coerce.number().int().nonnegative().nullable().optional(),

  width: z.coerce.number().int().nonnegative().nullable().optional(),

  height: z.coerce.number().int().nonnegative().nullable().optional(),

  duration: z.coerce.number().nonnegative().nullable().optional(),

  // ======================================================
  // CONTENT
  // ======================================================

  alt: z.string().trim().nullable().optional(),

  caption: z.string().trim().nullable().optional(),
});

export type MediaAssetFormSchema = z.infer<typeof schema>;
