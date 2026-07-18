import { RentalDurationType } from "../enums";

export interface CarRentalPriceBreakdown {
  id: string;

  priceId: string;

  // Giá thuê thực tế
  rentalRate: number;

  // Số giờ/ngày thuê thực tế
  duration: number;

  durationType: RentalDurationType;

  // Phí bắt buộc
  taxes: number;

  serviceFee: number;

  // Bảo hiểm
  insuranceFee: number;

  // Dịch vụ thêm
  deliveryFee: number;

  extraDriverFee: number;

  childSeatFee: number;

  gpsFee: number;

  helmetFee: number;

  // Giảm giá
  discount: number;

  includedItems: string[];
}
