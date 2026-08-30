import { FlyFormSchema } from "../schema/core/fly.schema";

export const flyPolicyDefaultValues = {
  // =========================
  // POLICIES
  // =========================

  policies: [],
} satisfies Pick<FlyFormSchema, "policies">;
