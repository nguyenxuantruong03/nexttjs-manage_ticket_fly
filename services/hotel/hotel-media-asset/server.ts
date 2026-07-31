import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { MediaAsset } from "@/types/bookings/hotel/media.type";

export const HotelMediaAssetServerService = createServerCrudApi<MediaAsset>(
  API.HOTEL_MEDIA_ASSET,
);
