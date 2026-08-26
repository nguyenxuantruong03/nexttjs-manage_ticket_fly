import { z } from "zod";
import { YachtRouteSchema } from "../routes/route.schema";
import { YachtMarinaFacilityMapperSchema } from "../facilities/yacht-facilities.schema";

export const YachtMarinaSchema = z.object({
  name: z.string().min(1),

  addressId: z.string().min(1),

  latitude: z.number().nullable().optional(),

  longitude: z.number().nullable().optional(),

  contactPhone: z.string().nullable().optional(),

  operatingHours: z.string().nullable().optional(),

  departureRoutes: z.array(YachtRouteSchema).optional(),

  destinationRoutes: z.array(YachtRouteSchema).optional(),

  marinaFacilities: z.array(YachtMarinaFacilityMapperSchema).optional(),
});

export type YachtMarinaFormValues = z.infer<typeof YachtMarinaSchema>;
