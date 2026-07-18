
export interface BusChildPolicy {
  id: string;

  policiesId: string;

  freeAgeUnder?: number;

  childTicketAgeFrom?: number;

  childTicketAgeTo?: number;

  childDiscountPercent?: number;

  createdAt: string;
}