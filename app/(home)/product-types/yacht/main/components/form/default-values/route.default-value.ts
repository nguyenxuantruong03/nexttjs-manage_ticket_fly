import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtRouteDefaultValues = {
  // =========================
  // ROUTES
  // =========================

  routes: [],
} satisfies Pick<YachtFormSchema, "routes">;
