import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { TicketFly } from "@/types/bookings/ticket-fly/core/fly.types";

export const TicketFlyServerService = createServerCrudApi<TicketFly>(API.FLY);
