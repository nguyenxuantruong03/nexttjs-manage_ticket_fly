import { PromotionFormSchema } from "./schema";
import { PromotionStatus } from "@/types/common/commerce/promotion/promotion";

export const promotionDefaultValues: PromotionFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",
  description: null,
  code: null,

  // ======================================================
  // STATUS
  // ======================================================

  status: PromotionStatus.draft,

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: [],

  // ======================================================
  // DATE
  // ======================================================

  startDate: new Date(),
  endDate: new Date(),

  // ======================================================
  // USAGE
  // ======================================================

  usageLimit: null,
  usedCount: 0,
};
