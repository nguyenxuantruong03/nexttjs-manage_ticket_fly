import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Tag name is required"),

bookingTypeIds: z.array(z.string()).default([]),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type SearchTagFormSchema = z.infer<typeof schema>;