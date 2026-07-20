
export interface BusBookingPriceSnapshot {
  id: string;

  bookingId: string;

  subtotal: number;

  taxes: number;

  serviceFee: number;

  discount: number;

  total: number;

}
