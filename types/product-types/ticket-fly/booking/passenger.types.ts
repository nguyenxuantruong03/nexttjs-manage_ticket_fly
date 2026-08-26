import { Gender } from "@/types/common/enums";
import { FlyExtraBaggage } from "./baggage.types";
import { FlyFastTrack } from "./fast-track.types";
import { FlyPassengerInsurance } from "./insurance.types";
import { FlyPassengerLounge } from "./lounge.types";
import { FlyPassengerDocument } from "./passenger-document.types";
import { FlyPriorityBoarding } from "./priority-boarding.types";
import { FlySeatAssignment } from "./seat.types";
import { FlyTicket } from "./ticket.types";
import { FlyPassengerWifi } from "./wifi.types";
import { PassengerTitle, PassengerType } from "../enums";
import { FlyBooking } from "./booking.types";
import { FlyMealSelection } from "./meal-selection";
import { FlyPassengerAddon } from "../../references/airline/addon.types";

export interface FlyPassenger {
  id: string;

  bookingId: string;
  booking?: FlyBooking;

  type: PassengerType;

  title?: PassengerTitle;

  firstName: string;

  lastName: string;

  gender?: Gender;

  birthday?: Date;

  nationality?: string;

  document?: FlyPassengerDocument;
  seat?: FlySeatAssignment;
  meal?: FlyMealSelection;
  baggage?: FlyExtraBaggage[];
  tickets?: FlyTicket[];
  wifi?: FlyPassengerWifi[];
  priorityBoarding?: FlyPriorityBoarding[];
  lounge?: FlyPassengerLounge[];
  fastTrack?: FlyFastTrack[];
  passengerInsurance?: FlyPassengerInsurance[];
  passengerAddon?: FlyPassengerAddon[];

  createdAt: Date;
}