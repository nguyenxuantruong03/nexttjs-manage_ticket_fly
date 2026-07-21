import { z } from "zod";

export const FlyWaitlistSchema = z.object({
  position: z.number(),
});

export type FlyWaitlistFormValues = z.infer<typeof FlyWaitlistSchema>;
