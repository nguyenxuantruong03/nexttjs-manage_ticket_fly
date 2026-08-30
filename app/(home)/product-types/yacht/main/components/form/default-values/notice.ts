import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtNoticeDefaultValues = {
  // =========================
  // NOTICE
  // =========================

  notice: {
    important: null,
    beforeBooking: null,
    afterBooking: null,
    safetyNotice: null,
  },
} satisfies Pick<YachtFormSchema, "notice">;
