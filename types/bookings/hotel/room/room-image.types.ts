export interface HotelRoomImage {
  id: string;

  roomId: string;

  thumbnail?: string | null;

  cover?: string | null;

  hero?: string | null;

  rooms: string[];

  bedroom: string[];

  bathroom: string[];

  balcony: string[];

  livingRoom: string[];

  kitchen: string[];

  workspace: string[];

  view: string[];

  gallery: string[];
}
