import { RentalDocument } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalRequiredDocumentsSchema = z.object({
  policiesId: z.string(),

  documents: z.array(z.nativeEnum(RentalDocument)).default([]),
});
