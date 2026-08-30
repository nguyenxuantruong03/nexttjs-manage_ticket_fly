"use client";

import { useFlyAddonTypeCreateFormData } from "@/hooks/product-types/references/airline/addon-type/useFlyAddonTypeCreateFormData";
import { useFlyAircraftTypeCreateFormData } from "@/hooks/product-types/references/airline/aircraft/aircraft-type/useFlyAircraftTypeCreateFormData";
import { useFlyAircraftCreateFormData } from "@/hooks/product-types/references/airline/aircraft/useFlyAircraftCreateFormData";
import { useFlyCrewDutyCreateFormData } from "@/hooks/product-types/references/airline/crew/crew-duty/useFlyCrewDutyCreateFormData";
import { useFlyCrewRoleCreateFormData } from "@/hooks/product-types/references/airline/crew/crew-role/useFlyCrewRoleCreateFormData";
import { useFlyCrewCreateFormData } from "@/hooks/product-types/references/airline/crew/useFlyCrewCreateFormData";
import { useFlyAirlineCreateFormData } from "@/hooks/product-types/references/airline/useFlyAirlineCreateFormData";
import { useFlyAirportCreateFormData } from "@/hooks/product-types/references/airport/useFlyAirportCreateFormData";
import { useFlyAllianceCreateFormData } from "@/hooks/product-types/references/alliance/useFlyAllianceCreateFormData";

export function useReferencesStepperHooks(subStep: string) {
  /**
   * ==========================
   * AIRLINE
   * ==========================
   */

  const airlineMain = useFlyAirlineCreateFormData(subStep === "airline-main");

  const aircraftType = useFlyAircraftTypeCreateFormData(
    subStep === "aircraft-type",
  );

  const aircraftMain = useFlyAircraftCreateFormData(
    subStep === "aircraft-main",
  );

  const crewDuty = useFlyCrewDutyCreateFormData(subStep === "crew-duty");

  const crewRole = useFlyCrewRoleCreateFormData(subStep === "crew-role");

  const crewMain = useFlyCrewCreateFormData(subStep === "crew-main");

  const addonType = useFlyAddonTypeCreateFormData(subStep === "addon-type");

  /**
   * ==========================
   * AIRPORT / ALLIANCE
   * ==========================
   */

  const airport = useFlyAirportCreateFormData(subStep === "airport");

  const alliance = useFlyAllianceCreateFormData(subStep === "alliance");

  return {
    airlineMain,
    aircraftType,
    aircraftMain,
    crewDuty,
    crewRole,
    crewMain,
    addonType,
    airport,
    alliance,
  };
}
