import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { TicketFly } from "@/types/bookings/ticket-fly/core/fly.types";

export const TicketFlyService = createCrudApi<TicketFly>(clientHttp, API.FLY);
