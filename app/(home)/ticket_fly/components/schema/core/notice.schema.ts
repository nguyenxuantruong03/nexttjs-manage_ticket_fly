import { z } from "zod";

export const FlyNoticeSchema = z.object({
  title: z.string().optional(),

  content: z.string().optional(),

  baggageNotice: z.string().optional(),

  checkInNotice: z.string().optional(),

  visaNotice: z.string().optional(),

  covidNotice: z.string().optional(),

  refundNotice: z.string().optional(),
});

export type FlyNoticeFormValues = z.infer<typeof FlyNoticeSchema>;
