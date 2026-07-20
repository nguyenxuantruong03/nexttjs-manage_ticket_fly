
export interface HotelBookingMeal {
  id: string;

  bookingId: string;

  mealId?: string | null;

  name: string;

  quantity: number;

  price: number;

  total: number;


  createdAt: Date;
}
