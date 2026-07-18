
export interface YachtBookingExtra {
  id: string;

  bookingId: string;

  extraId?: string | null;

  quantity: number;

  price: number;

  total: number;
}