import { RentalVehicleImagePosition } from "@/types/product-types/car_rental/enums";
import { z } from "zod";


export const CarRentalVehicleMediaSchema = z.object({

  // ======================================================
  // RELATION
  // ======================================================

  mediaId: z.string(),


  categoryId: z.string().nullable(),


  // ======================================================
  // MEDIA
  // ======================================================

  position: z.nativeEnum(RentalVehicleImagePosition).nullable(),

  isPrimary: z.boolean(),

  sortOrder: z.number(),

});

export type CarRentalVehicleMediaSchemaType = z.infer<
  typeof CarRentalVehicleMediaSchema
>;
