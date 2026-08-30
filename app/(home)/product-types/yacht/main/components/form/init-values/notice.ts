import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtNoticeValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "notice"> {
  return {
    notice: yacht.notice
      ? {
          important: yacht.notice.important ?? null,
          beforeBooking: yacht.notice.beforeBooking ?? null,
          afterBooking: yacht.notice.afterBooking ?? null,
          safetyNotice: yacht.notice.safetyNotice ?? null,
        }
      : null,
  };
}
