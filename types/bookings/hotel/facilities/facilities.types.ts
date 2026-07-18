import { HotelAccessibility } from "./accessibility.types";
import { HotelGym } from "./gym.types";
import { HotelParking } from "./parking.types";
import { HotelPool } from "./pool.types";
import { HotelRestaurant } from "./restaurant.types";
import { HotelSafety } from "./safety.type";
import { HotelSpa } from "./spa.types";
import { HotelTransportation } from "./transportation.type";
import { HotelWifi } from "./wifi.types";

export interface HotelFacilities {
  id: string;

  hotelId: string;

  wifi?: HotelWifi | null;
  parking?: HotelParking | null;
  swimmingPool?: HotelPool | null;
  gym?: HotelGym | null;
  spa?: HotelSpa | null;

  restaurants: HotelRestaurant[];

  bar?: boolean | null;
  roomService?: boolean | null;
  laundry?: boolean | null;
  meetingRoom?: boolean | null;
  businessCenter?: boolean | null;
  familyRoom?: boolean | null;
  kidsClub?: boolean | null;
  playground?: boolean | null;
  atm?: boolean | null;
  giftShop?: boolean | null;
  currencyExchange?: boolean | null;
  concierge?: boolean | null;
  luggageStorage?: boolean | null;
  sharedKitchen?: boolean | null;
  vendingMachine?: boolean | null;
  library?: boolean | null;
  casino?: boolean | null;
  nightClub?: boolean | null;
  beachAccess?: boolean | null;
  privateBeach?: boolean | null;
  waterPark?: boolean | null;
  golfCourse?: boolean | null;
  tennisCourt?: boolean | null;

  transportation?: HotelTransportation | null;
  accessibility?: HotelAccessibility | null;
  safety?: HotelSafety | null;
}
