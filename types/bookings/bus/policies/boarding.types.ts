
export interface BusBoardingPolicy {
  id: string;

  policiesId: string;

  checkInBeforeMinutes?: number;

  boardingGateCloseMinutes?: number;

  digitalTicketAccepted: boolean;

  printedTicketRequired: boolean;

  createdAt: string;
}