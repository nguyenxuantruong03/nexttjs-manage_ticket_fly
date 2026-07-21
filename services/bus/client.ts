import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Bus } from "@/types/bookings/bus/core/bus.types";

export const BusService = createCrudApi<Bus>(clientHttp, API.BUS);
