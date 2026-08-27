import { FieldPath } from "react-hook-form";
import { FlyAllianceFormSchema } from "../schema/alliance.schema";


type FlyAllianceFieldPath = FieldPath<FlyAllianceFormSchema>;

export const flyAllianceFieldGroups: Record<
  string,
  readonly FlyAllianceFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "code", "logo", "description"],

  // ======================================================
  // MEMBERS
  // ======================================================

  airlines: ["airlines"],
};