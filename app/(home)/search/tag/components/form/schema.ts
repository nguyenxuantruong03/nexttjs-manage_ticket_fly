import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Tag name is required"),

  bookingTypeIds: z
    .array(z.string())
    .min(1, "At least one booking type is required"),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type SearchTagFormSchema = z.infer<typeof schema>;