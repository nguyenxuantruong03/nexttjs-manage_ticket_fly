import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtAvailabilityDefaultValues = {
  // =========================
  // AVAILABILITY
  // =========================

  availability: {
    calendar: [],
  },
} satisfies Pick<YachtFormSchema, "availability">;
