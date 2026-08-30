import { FlyFormSchema } from "../schema/core/fly.schema";

export const flyNoticeDefaultValues = {
  // =========================
  // NOTICE
  // =========================

  notice: {
    title: "",
    content: "",
    baggageNotice: "",
    checkInNotice: "",
    visaNotice: "",
    covidNotice: "",
    refundNotice: "",
  },
} satisfies Pick<FlyFormSchema, "notice">;
