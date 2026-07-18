
export interface CarRentalDamagePolicy {
  id: string;

  policiesId: string;

  insuranceIncluded?: boolean;

  excessAmount?: number;

  depositRequired?: boolean;
}