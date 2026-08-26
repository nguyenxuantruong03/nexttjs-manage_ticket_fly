import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

export const TicketFlyServerService = createServerCrudApi<Fly>(API.FLY);
