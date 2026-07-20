
export interface HotelBookingExtra {
  id: string;

  bookingId: string;

  extraId?: string | null;

  name: string;

  quantity: number;

  price: number;

  total: number;


  createdAt: Date;
}