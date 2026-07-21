// notice.schema.ts

import { z } from "zod";

export const YachtNoticeSchema = z.object({

  important: z.string().nullable().optional(),

  beforeBooking: z.string().nullable().optional(),

  afterBooking: z.string().nullable().optional(),

  safetyNotice: z.string().nullable().optional(),
});

export type YachtNoticeFormValues = z.infer<typeof YachtNoticeSchema>;
