// hotel-area-guide.types.ts

import { Hotel } from "../core/hotel.types";


export interface HotelAreaGuide {
  id: string;

  hotelId: string;

  hotel?: Hotel;

  title: string;

  description: string;

  images: string[];

  createdAt: Date;
}
