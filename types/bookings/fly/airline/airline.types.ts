import { User } from "@/types/bookings/auth/users";
import { FlyInsurance } from "../booking/insurance.types";
import { FlyOverbookingRule } from "../trip/overbooking.types";
import { FlyAircraft } from "../aircraft/aircraft.types";
import { FlyWifiPackage } from "./wifi.types";
import { FlyAddon } from "./addon.types";
import { FlyInterline } from "../alliance/interline.types";
import { FlyMeal } from "../booking/meal.types";
import { FlyCodeshare } from "../alliance/codeshare.types";
import { FlyCrew } from "../crew/crew.types";
import { FlyAllianceMember } from "../alliance/alliance.types";
import { FlyAirlineImage } from "./image.types";
import { Fly } from "../core/fly.types";

export interface FlyAirline {
  id: string;

  name: string;

  legalName?: string;

  iataCode?: string;

  icaoCode?: string;

  callsign?: string;

  country?: string;

  website?: string;

  hotline?: string;

  email?: string;

  logo?: string;

  banner?: string;

  description?: string;

  active: boolean;

  flights?: Fly[];

  images?: FlyAirlineImage[];

  rating?: FlyAirlineRating[];

  alliances?: FlyAllianceMember[];

  marketingCodeshares?: FlyCodeshare[];

  crew?: FlyCrew[];

  operatingCodeshares?: FlyCodeshare[];

  meal?: FlyMeal[];

  interline?: FlyInterline[];

  addon?: FlyAddon[];

  wifiPackage?: FlyWifiPackage[];

  aircraft?: FlyAircraft[];

  overbookingRule?: FlyOverbookingRule[];

  insurance?: FlyInsurance[];

  createdAt: Date;

  updatedAt: Date;
}

export interface FlyAirlineRating {
  id: string;

  airlineId: string;

  airline?: FlyAirline;

  userId: string;

  user?: User;

  overall?: number;

  service?: number;

  comfort?: number;

  food?: number;

  entertainment?: number;

  punctuality?: number;

  createdAt: Date;

  updatedAt: Date;
}
