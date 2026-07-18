import { WeekDay } from "../../../common/enums";

export interface CarRentalBusinessHour {
  id: string;

  rentalId: string;

  day: WeekDay;

  openTime: string;

  closeTime: string;

  closed: boolean;

  createdAt: string;
}
