import { TicketFly } from "../core/fly.types";
import { FlyBaggagePolicy } from "./baggage.types";
import { FlyBoardingPolicy } from "./boarding.types";
import { FlyCancellationPolicy } from "./cancellation.types";
import { FlyChangePolicy } from "./change.types";
import { FlyCheckInPolicy } from "./checkin.types";
import { FlyPassengerPolicy } from "./passenger.types";
import { FlyTransitPolicy } from "./transit.types";
import { FlyVisaPolicy } from "./visa.types";

export interface FlyPolicies {
  id: string;

  flyId: string;

  fly?: TicketFly;

  cancellation?: FlyCancellationPolicy;

  change?: FlyChangePolicy;
  baggage?: FlyBaggagePolicy;
  boarding?: FlyBoardingPolicy;
  passenger?: FlyPassengerPolicy;
  checkIn?: FlyCheckInPolicy;
  transit?: FlyTransitPolicy;
  visa?: FlyVisaPolicy;

  createdAt: Date;

  updatedAt: Date;
}