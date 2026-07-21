// schema/policies/meet-and-greet.schema.ts

import { z } from "zod";

export const YachtMeetAndGreetSchema = z.object({

  available: z.boolean(),

  pickupSign: z.boolean().nullable().optional(),

  staffLanguage: z.array(z.string()).default([]),

  meetingPoint: z.string().nullable().optional(),
});

export type YachtMeetAndGreetFormValues = z.infer<
  typeof YachtMeetAndGreetSchema
>;
