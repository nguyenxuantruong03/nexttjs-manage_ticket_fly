import { AirportTransferRoute } from "@/types/product-types/airport-transfer/routes/route.types";
import { BusRoute } from "@/types/product-types/bus/routes/route.types";
import { FlyRoute } from "@/types/product-types/ticket-fly/routes/route.types";
import { YachtRoute } from "@/types/product-types/yacht/routes/route.types";
import { BookingType } from "../commerce/booking-type";

export interface RouteType {
  id: string;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];
  
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  sortOrder: number;
  active: boolean;

  airportTransferRoutes: AirportTransferRoute[];
  busRoutes: BusRoute[];
  flyRoutes: FlyRoute[];
  yachtRoutes: YachtRoute[];

  createdAt: Date;
  updatedAt: Date;
}
