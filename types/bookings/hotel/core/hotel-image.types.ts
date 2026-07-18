import { HotelImageCategory } from "../enum/enums";

export interface HotelImage {
  id: string;

  hotelId: string;

  url: string;

  category: HotelImageCategory;

  sortOrder: number;

  isPrimary: boolean;

  createdAt: Date;
}
