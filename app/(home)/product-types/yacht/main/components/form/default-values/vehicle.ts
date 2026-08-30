import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtVehicleDefaultValues = {
  // =========================
  // VEHICLE
  // =========================

  vehicle: {
    name: "",
    manufacturer: "",
    model: "",
    year: null,
    registrationNumber: null,
    lengthMeter: null,
    widthMeter: null,
    speedKnots: null,
    fuelTypeId: "",
    conditionId: "",

    capacity: {
      vehicleId: "",
      guestCapacity: 0,
      overnightCapacity: null,
      cabinCount: null,
      bathroomCount: null,
      crewCapacity: null,
    },

    facilities: [],

    specification: {
      vehicleId: "",
      enginePowerHp: null,
      cruisingSpeedKnots: null,
      maxSpeedKnots: null,
      fuelCapacityLiter: null,
      rangeNm: null,
    },

    images: [],
  },
} satisfies Pick<YachtFormSchema, "vehicle">;
