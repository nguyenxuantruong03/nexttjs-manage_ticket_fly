export interface HotelHouseRules {
  policiesId: string;

  quietHoursStart?: string | null;

  quietHoursEnd?: string | null;

  partiesAllowed?: boolean | null;

  visitorsAllowed?: boolean | null;

  alcoholAllowed?: boolean | null;
}
