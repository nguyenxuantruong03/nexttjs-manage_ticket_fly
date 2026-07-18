
export interface CarRentalRules {
  id: string;

  minimumAge?: number;

  maximumAge?: number;

  requiresDriverLicense?: boolean;

  requiresInternationalLicense?: boolean;

  minimumDrivingExperienceYears?: number;

  smokingAllowed?: boolean;

  petsAllowed?: boolean;

  offRoadAllowed?: boolean;

  crossBorderAllowed?: boolean;

  additionalDriverAllowed?: boolean;

  lateReturnFeePerHour?: number;

  policiesId: string;
}