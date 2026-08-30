import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtCrewDefaultValues = {
  // =========================
  // CREW
  // =========================

  crew: [],
} satisfies Pick<YachtFormSchema, "crew">;
