import { z } from "zod";

export const PolicySchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  typeId: z.string().trim().min(1, "Policy type is required"),

  description: z.string().trim().min(1, "Description is required"),
});

export type PolicyFormSchema = z.infer<typeof PolicySchema>;
