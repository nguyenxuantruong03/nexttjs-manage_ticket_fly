import { FlyFormSchema } from "../schema/core/fly.schema";

export const flyImageDefaultValues = {
  // =========================
  // IMAGES
  // =========================

  images: [],
} satisfies Pick<FlyFormSchema, "images">;
