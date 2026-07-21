import { z } from "zod";

export const HotelInformationSchema = z.object({
  id: z.string().cuid(),

  hotelId: z.string().cuid(),

  addressId: z.string().cuid(),

  providerBookingId: z.string().cuid(),
});

export type HotelInformationInput = z.infer<typeof HotelInformationSchema>;
