import { z } from "zod";
import { DiscountType } from "@/types/common/commerce/promotion/promotion";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().min(1, "Coupon code is required"),

  name: z.string().trim().min(1, "Coupon name is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // DISCOUNT
  // ======================================================

  discountType: z.nativeEnum(DiscountType),

  bookingTypeIds: z.array(z.string()).default([]),

  value: z.number().min(0, "Value must be greater than or equal to 0"),

  maxDiscount: z
    .number()
    .min(0, "Max discount must be greater than or equal to 0")
    .nullable()
    .optional(),

  minimumAmount: z
    .number()
    .min(0, "Minimum amount must be greater than or equal to 0")
    .nullable()
    .optional(),

  // ======================================================
  // DATE
  // ======================================================

  startDate: z.date().nullable().optional(),

  endDate: z.date().nullable().optional(),

  // ======================================================
  // USAGE
  // ======================================================

  usageLimit: z
    .number()
    .int()
    .min(0, "Usage limit must be greater than or equal to 0")
    .nullable()
    .optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type CouponFormSchema = z.infer<typeof schema>;
