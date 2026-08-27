import { CouponFormSchema } from "./schema";
import { DiscountType } from "@/types/common/commerce/promotion/promotion";

export const couponDefaultValues: CouponFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  code: "",
  name: "",
  description: null,

  // ======================================================
  // DISCOUNT
  // ======================================================

  discountType: DiscountType.percentage,

  bookingTypeIds: [],

  value: 0,
  maxDiscount: null,
  minimumAmount: null,

  // ======================================================
  // DATE
  // ======================================================

  startDate: null,
  endDate: null,

  // ======================================================
  // USAGE
  // ======================================================

  usageLimit: null,

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
};
