export interface HotelRoomPriceBreakdown {
  id: string;

  priceId: string;

  roomRate: number;

  nights: number;

  taxes: number;

  serviceFee: number;

  resortFee: number;

  cleaningFee: number;

  extraFee: number;

  discount: number;

  includedItems: string[];
}
