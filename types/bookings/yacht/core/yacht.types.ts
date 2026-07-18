import { YachtBooking } from "../booking/booking.types";
import { YachtCrew } from "../crew/crew.types";
import { YachtExtra } from "../extra/extra.types";
import { YachtFavorite } from "../favorite/favorite.types";
import { YachtPolicies } from "../policies/policies.types";
import { YachtPackage } from "../pricing/package.types";
import { YachtPrice } from "../pricing/price.types";
import { YachtRatingSummary } from "../reviews/rating-summary.types";
import { YachtReview } from "../reviews/review.types";
import { YachtRoute } from "../routes/route.types";
import { YachtAvailability } from "../trips/availability.types";
import { YachtInventoryLock } from "../trips/inventory-lock.types";
import { YachtTrip } from "../trips/trip.types";
import { YachtVehicle } from "../vehicles/vehicle.types";
import { YachtImage } from "./image.types";
import { YachtNotice } from "./notice.tyoes";


export interface Yacht {
  id: string;

  providerBookingId: string;

  marinaId?: string | null;

  vehicle?: YachtVehicle | null;
  routes: YachtRoute[];
  trips: YachtTrip[];
  availability?: YachtAvailability  | null;
  price?: YachtPrice | null;
  packages: YachtPackage[];
  extras: YachtExtra[];
  policies?: YachtPolicies | null;
  notice?: YachtNotice | null;
  bookings: YachtBooking[];
  locks: YachtInventoryLock[];
  reviews: YachtReview[];
  image: YachtImage[];
  favorites: YachtFavorite[];
  ratingSummary?: YachtRatingSummary | null;
  crew: YachtCrew[];

  active: boolean;

  name: string;

  slug: string;

  aliases: string[];

  keywords: string[];

  tags: string[];

  searchText?: string | null;

  featured: boolean;

  searchable: boolean;

  searchPriority: number;

  createdAt: Date;

  updatedAt: Date;
}
