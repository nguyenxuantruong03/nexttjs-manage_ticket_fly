import { FieldPath } from "react-hook-form";

import { SystemSettingFormSchema } from "../form/schema";

type SystemSettingFieldPath = FieldPath<SystemSettingFormSchema>;

export const systemSettingFieldGroups: Record<
  string,
  readonly SystemSettingFieldPath[]
> = {
  basic: ["key", "value"],
};
