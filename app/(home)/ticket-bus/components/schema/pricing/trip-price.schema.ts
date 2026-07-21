import { z } from "zod";

import { BusSeatPriceSchema } from "./seat-price.schema";

export const BusTripPriceSchema = z.object({
  seatPrices: z.array(BusSeatPriceSchema),
});

export type BusTripPriceFormValues = z.infer<typeof BusTripPriceSchema>;
