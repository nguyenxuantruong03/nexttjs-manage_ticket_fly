import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";
import { FlyFormSchema } from "../schema/core/fly.schema";
import { FlyDefaultValues } from "./default-values";

export function initTicketFlyFormValues(ticketFly?: Fly): FlyFormSchema {
  if (!ticketFly) {
    return structuredClone(FlyDefaultValues);
  }

  return structuredClone(ticketFly);
}
