import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { MediaAsset } from "@/types/bookings/hotel/media.type";

export const HotelMediaAssetService = createCrudApi<MediaAsset>(
  clientHttp,
  API.HOTEL_MEDIA_ASSET,
);
