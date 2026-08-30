import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtCrewValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "crew"> {
  return {
    crew:
      yacht.crew?.map((member) => ({
        name: member.name ?? "",
        roleId: member.roleId ?? "",
        avatar: member.avatar ?? null,
        experienceYears: member.experienceYears ?? null,
        languages: member.languages ?? [],
      })) ?? [],
  };
}
