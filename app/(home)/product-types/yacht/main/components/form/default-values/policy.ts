import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtPolicyDefaultValues = {
  // =========================
  // POLICIES
  // =========================

  policies: [],
} satisfies Pick<YachtFormSchema, "policies">;
