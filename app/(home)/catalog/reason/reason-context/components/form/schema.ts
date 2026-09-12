import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().min(1, "Reason context code is required"),

  name: z.string().trim().min(1, "Reason context name is required"),

  description: z.string().trim().nullable().optional(),


  // ======================================================
  // STATUS
  // ======================================================

  isActive: z.boolean(),
});

export type ReasonContextFormSchema = z.infer<typeof schema>;