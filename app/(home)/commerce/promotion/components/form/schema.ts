import { z } from "zod";
import { PromotionStatus } from "@/types/common/commerce/promotion/promotion";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Promotion name is required"),

  description: z.string().trim().nullable().optional(),

  code: z.string().trim().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  status: z.nativeEnum(PromotionStatus),

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeId: z.string().min(1, "Booking type is required"),

  // ======================================================
  // DATE
  // ======================================================

  startDate: z.date(),

  endDate: z.date(),

  // ======================================================
  // USAGE
  // ======================================================

  usageLimit: z.number().int().min(0).nullable().optional(),

  usedCount: z.number().int().min(0),
});

export type PromotionFormSchema = z.infer<typeof schema>;
