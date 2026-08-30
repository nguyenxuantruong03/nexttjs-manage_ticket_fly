import { z } from "zod";

// ======================================================
// RENTAL DOCUMENT TYPE
// ======================================================

export const RentalDocumentTypeSchema = z.object({
  name: z.string().min(1),

  description: z.string().nullable(),

  icon: z.string().nullable(),

  active: z.boolean().default(true),

  sortOrder: z.number().default(0),
});

export type RentalDocumentTypeFormSchema = z.infer<
  typeof RentalDocumentTypeSchema
>;

// ======================================================
// CAR RENTAL REQUIRED DOCUMENT TYPE
// ======================================================

export const CarRentalRequiredDocumentTypeSchema = z.object({
  documentTypeId: z.string().min(1),

  mandatory: z.boolean().default(false),

  note: z.string().nullable(),
});

export type CarRentalRequiredDocumentTypeFormSchema = z.infer<
  typeof CarRentalRequiredDocumentTypeSchema
>;