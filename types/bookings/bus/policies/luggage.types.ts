import { BusLuggageUnit } from "../enums";

export interface BusLuggagePolicy {
  id: string;

  policiesId: string;

  includedLuggage?: number;

  unit: BusLuggageUnit;

  extraLuggageAllowed: boolean;

  extraLuggageFee?: number;

  createdAt: string;
}