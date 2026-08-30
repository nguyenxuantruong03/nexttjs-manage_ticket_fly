import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyNoticeValues(
  ticketFly: Fly,
): Pick<FlyFormSchema, "notice"> {
  return {
    notice: ticketFly.notice
      ? {
          title: ticketFly.notice.title ?? "",
          content: ticketFly.notice.content ?? "",
          baggageNotice: ticketFly.notice.baggageNotice ?? "",
          checkInNotice: ticketFly.notice.checkInNotice ?? "",
          visaNotice: ticketFly.notice.visaNotice ?? "",
          covidNotice: ticketFly.notice.covidNotice ?? "",
          refundNotice: ticketFly.notice.refundNotice ?? "",
        }
      : null,
  };
}
