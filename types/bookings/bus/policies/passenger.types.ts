
export interface BusPassengerPolicy {
  id: string;

  policiesId: string;

  petsAllowed: boolean;

  smokingAllowed: boolean;

  foodAllowed: boolean;

  alcoholAllowed: boolean;

  wheelchairAccessible: boolean;

  specialAssistanceAvailable: boolean;

  createdAt: string;
}