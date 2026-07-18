import { CarRentalVehicle } from "./vehicle.types";

export interface CarRentalVehicleFeatures {
  id: string;

  vehicleId: string;

  vehicle?: CarRentalVehicle;

  airConditioner?: boolean | null;

  bluetooth?: boolean | null;

  gps?: boolean | null;

  usbCharger?: boolean | null;

  wirelessCharging?: boolean | null;

  appleCarPlay?: boolean | null;

  androidAuto?: boolean | null;

  cruiseControl?: boolean | null;

  reverseCamera?: boolean | null;

  parkingSensor?: boolean | null;

  dashCamera?: boolean | null;

  sunroof?: boolean | null;

  leatherSeats?: boolean | null;

  heatedSeats?: boolean | null;

  childSeatAvailable?: boolean | null;

  phoneHolder?: boolean | null;

  helmetIncluded?: boolean | null;

  raincoatIncluded?: boolean | null;

  luggageRack?: boolean | null;

  skiRack?: boolean | null;
}