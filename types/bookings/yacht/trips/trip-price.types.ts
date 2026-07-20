
export interface YachtTripPrice {
  id: string;

  tripId: string;

  amount: number;

  originalAmount?: number | null;

  tax: number;

  serviceFee: number;

  discount: number;

  finalAmount: number;

  createdAt: Date;
}