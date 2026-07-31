import { TicketFly } from "@/types/bookings/ticket-fly/core/fly.types";
import { FlyFormSchema } from "../schema/core/fly.schema";
import { FlyDefaultValues } from "./default-values";

export function initTicketFlyFormValues(ticketFly?: TicketFly): FlyFormSchema {
  if (!ticketFly) {
    return structuredClone(FlyDefaultValues);
  }

  return structuredClone(ticketFly);
}
