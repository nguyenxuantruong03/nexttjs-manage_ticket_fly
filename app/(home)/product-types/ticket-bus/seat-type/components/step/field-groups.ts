import { FieldPath } from "react-hook-form";

import { BusSeatTypeFormSchema } from "../form/schema";

type BusSeatTypeFieldPath = FieldPath<BusSeatTypeFormSchema>;

export const busSeatTypeFieldGroups: Record<
  string,
  readonly BusSeatTypeFieldPath[]
> = {
  basic: ["name", "description", "icon"],
  status: ["sortOrder", "active"],
};