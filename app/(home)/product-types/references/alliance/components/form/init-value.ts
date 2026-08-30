import { FlyAllianceFormSchema } from "../schema/alliance.schema";

import { flyAllianceDefaultValues } from "./default-values";

import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";

export function initFlyAllianceFormValues(
  flyAlliance?: FlyAlliance,
): FlyAllianceFormSchema {
  if (!flyAlliance) {
    return structuredClone(flyAllianceDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyAlliance.name ?? "",

    code: flyAlliance.code ?? "",

    logo: flyAlliance.logo ?? "",

    description: flyAlliance.description ?? "",

    // ======================================================
    // AIRLINES
    // ======================================================

    airlines:
      flyAlliance.airlines?.map((airline) => ({
        airlineId: airline.airlineId ?? "",
        joinedAt: airline.joinedAt ?? undefined,
      })) ?? [],
  };
}