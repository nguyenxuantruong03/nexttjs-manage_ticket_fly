import { FlyAllianceFormSchema } from "../schema/alliance.schema";

export const flyAllianceDefaultValues: FlyAllianceFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  code: "",

  logo: "",

  description: "",

  // ======================================================
  // MEMBERS
  // ======================================================

  airlines: [],
};
