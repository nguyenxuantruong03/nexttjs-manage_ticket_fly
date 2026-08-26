import { FlyWifiPackage } from "../../references/airline/wifi.types";
import { FlyPassenger } from "./passenger.types";

export interface FlyPassengerWifi {
  id: string;

  passengerId: string;
  passenger?: FlyPassenger;

  packageId: string;
  package?: FlyWifiPackage;
}