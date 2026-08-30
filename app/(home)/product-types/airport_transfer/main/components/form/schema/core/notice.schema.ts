import { z } from "zod";

export const AirportTransferNoticeSchema = z.object({
  title: z.string().min(1),

  description: z.string().nullable(),

  color: z.string().nullable(),

  icon: z.string().nullable(),

  priority: z.number().default(0),

  active: z.boolean().default(true),
});
