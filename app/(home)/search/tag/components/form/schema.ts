import { TagType } from "@/types/bookings/search/tag.types";
import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Tag name is required"),
  type: z.nativeEnum(TagType),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type SearchTagFormSchema = z.infer<typeof schema>;
