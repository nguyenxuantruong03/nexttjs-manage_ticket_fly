import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Bus } from "@/types/bookings/bus/core/bus.types";

export const TicketBusServerService = createServerCrudApi<Bus>(API.BUS);
