import { z } from "zod";

export const AirportTransferNoticeSchema = z.object({
  title: z.string().min(1),

  description: z.string().optional(),

  color: z.string().optional(),

  icon: z.string().optional(),

  priority: z.number().default(0),

  active: z.boolean().default(true),
});
