import { FlyPolicies } from "./policies.types";


export interface FlyCheckInPolicy {
  id: string;

  policiesId: string;

  policies?: FlyPolicies;

  onlineCheckIn: boolean;

  opensBeforeHours?: number;

  closesBeforeMinutes?: number;

  airportCheckIn: boolean;

  mobileBoardingPass: boolean;
}