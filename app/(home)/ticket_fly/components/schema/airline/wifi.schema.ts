import { z } from "zod";

export const FlyWifiPackageSchema = z.object({
  name: z.string().min(1),

  dataLimitMb: z.number().optional(),

  durationMinutes: z.number().optional(),

  amount: z.number(),
});

export type FlyWifiPackageFormValues = z.infer<typeof FlyWifiPackageSchema>;
