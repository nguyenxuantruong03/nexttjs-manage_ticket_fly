import { UnitOption } from "../enums";

export interface CarRentalMileagePolicy {
  id: string;

  unlimited: boolean;

  unit: UnitOption;

  dailyLimitKm?: number;

  extraKmFee?: number;

  policiesId: string;
}