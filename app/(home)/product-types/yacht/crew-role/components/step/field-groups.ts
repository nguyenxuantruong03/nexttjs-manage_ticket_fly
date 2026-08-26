import { FieldPath } from "react-hook-form";

import { YachtCrewRoleFormSchema } from "../form/schema";

type YachtCrewRoleFieldPath = FieldPath<YachtCrewRoleFormSchema>;

export const yachtCrewRoleFieldGroups: Record<
  string,
  readonly YachtCrewRoleFieldPath[]
> = {
  basic: ["name", "description", "icon"],
  status: ["sortOrder", "active"],
};