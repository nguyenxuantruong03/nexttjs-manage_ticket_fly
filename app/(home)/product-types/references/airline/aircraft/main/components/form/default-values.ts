import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

export const flyAircraftDefaultValues: FlyAircraftFormSchema = {
  // ======================================================
  // RELATIONS
  // ======================================================

  airlineId: "",

  // ======================================================
  // BASIC
  // ======================================================

  manufacturer: "",

  model: "",

  code: "",

  registrationNumber: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,

  // ======================================================
  // SPECIFICATION
  // ======================================================

  specification: {
    maxRangeKm: undefined,
    cruiseSpeed: undefined,
    maxPassengers: undefined,
    engineType: "",
    engineCount: undefined,
    wingspan: undefined,
    length: undefined,
    height: undefined,
    firstFlightYear: undefined,
  },

  // ======================================================
  // FACILITIES
  // ======================================================

  facilities: [],

  // ======================================================
  // CABIN / SEAT
  // ======================================================

  cabins: [],

  // ======================================================
  // IMAGES
  // ======================================================

  images: [],
  trips: [],

  // ======================================================
  // SEAT MAP
  // ======================================================

  seatMap: {
    imageUrl: "",
    svgUrl: "",
    jsonLayout: undefined,
  },

  // ======================================================
  // SCHEDULE
  // ======================================================

  schedule: [],
};
