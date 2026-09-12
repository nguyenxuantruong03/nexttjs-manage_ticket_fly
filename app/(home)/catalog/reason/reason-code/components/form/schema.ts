import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().min(1, "Reason code is required"),

  title: z.string().trim().min(1, "Title is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // CONTEXT
  // ======================================================

  contextId: z.string().trim().min(1, "Context is required"),

  // ======================================================
  // STATUS
  // ======================================================

  severity: z.number().int().min(1, "Severity must be between 1 and 5").max(5, "Severity must be between 1 and 5"),

  isActive: z.boolean(),
});

export type ReasonCodeFormSchema = z.infer<typeof schema>;
