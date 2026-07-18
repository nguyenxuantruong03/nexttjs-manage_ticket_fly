import { Currency } from "@/types/common/enums";
import { FlyPassengerWifi } from "../booking/wifi.types";
import { FlyAirline } from "./airline.types";


export interface FlyWifiPackage {
  id: string;

  airlineId: string;

  airline?: FlyAirline;

  name: string;

  dataLimitMb?: number;

  durationMinutes?: number;

  amount: number;

  passengers?: FlyPassengerWifi[];

  currency: Currency;
}