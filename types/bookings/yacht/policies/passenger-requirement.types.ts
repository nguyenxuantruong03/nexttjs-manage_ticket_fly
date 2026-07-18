
export interface YachtPassengerRequirement {
  id: string;

  policiesId: string;

  minimumAge?: number | null;

  passportRequired: boolean;

  identityRequired: boolean;

  nationalityRestriction: string[];

  childAllowed: boolean;

  infantAllowed: boolean;

  pregnantPassengerAllowed?: boolean | null;
}