import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

export const TicketFlyService = createCrudApi<Fly>(clientHttp, API.FLY);
