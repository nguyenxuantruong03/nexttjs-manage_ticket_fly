import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Ward } from "@/types/bookings/location/ward";

export const WardService = createCrudApi<Ward>(clientHttp, API.WARD);
