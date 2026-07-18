
export interface YachtWaitingPolicy {
  id: string;

  policiesId: string;

  freeWaitingMinutes?: number | null;

  extraWaitingFeePerHour?: number | null;

  maximumWaitingHours?: number | null;
}