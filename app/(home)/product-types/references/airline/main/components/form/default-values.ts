import { FlyAirlineFormSchema } from "./schema";

export const flyAirlineDefaultValues: FlyAirlineFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",
  legalName: "",
  iataCode: "",
  icaoCode: "",
  callsign: "",
  country: "",
  website: "",
  hotline: "",
  email: "",
  logo: "",
  banner: "",
  description: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
};
