import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtImageDefaultValues = {
  // =========================
  // IMAGES
  // =========================

  image: [],
} satisfies Pick<YachtFormSchema, "image">;
