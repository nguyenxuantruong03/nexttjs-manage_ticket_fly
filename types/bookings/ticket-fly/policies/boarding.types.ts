import { FlyPolicies } from "./policies.types";


export interface FlyBoardingPolicy {
  id: string;

  policiesId: string;

  policies?: FlyPolicies;

  boardingBeforeMinutes?: number;

  gateCloseMinutes?: number;

  onlineBoardingPass?: boolean;

  printedBoardingPass?: boolean;
}
