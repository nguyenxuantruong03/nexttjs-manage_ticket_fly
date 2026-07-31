import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { District } from "@/types/bookings/location/district";

export const DistrictService = createCrudApi<District>(clientHttp, API.DISTRICT);
