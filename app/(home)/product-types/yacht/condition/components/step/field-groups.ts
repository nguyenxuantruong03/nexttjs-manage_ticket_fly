import { FieldPath } from "react-hook-form";

import { YachtConditionFormSchema } from "../form/schema";

type YachtConditionFieldPath = FieldPath<YachtConditionFormSchema>;

export const yachtConditionFieldGroups: Record<
  string,
  readonly YachtConditionFieldPath[]
> = {
  basic: ["name", "description"],
  status: ["sortOrder", "active"],
};