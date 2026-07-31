import { FieldPath } from "react-hook-form";

import { StarRatingFormSchema } from "../form/schema";

type StarRatingFieldPath = FieldPath<StarRatingFormSchema>;

export const starRatingFieldGroups: Record<
  string,
  readonly StarRatingFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "star", "description"],
};
