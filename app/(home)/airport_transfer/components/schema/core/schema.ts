import { z } from "zod";
import { AirportTransferAvailabilitySchema } from "../trip/availability.schema";
import { AirportTransferCapacitySchema } from "../trip/capacity.schema";
import { AirportTransferRouteSchema } from "../routes/route.schema";
import { AirportTransferTripSchema } from "../trip/trip.schema";
import { AirportTransferVehicleSchema } from "../vehicle/vehicle.schema";
import { AirportTransferFlightSupportSchema } from "../flight/flight-support.schema";
import { AirportTransferMeetAndGreetSchema } from "../flight/meet-and-greet.schema";
import { AirportTransferWaitingPolicySchema } from "../flight/waiting-policy.schema";
import { AirportTransferLuggagePolicySchema } from "../flight/luggage-policy.schema";
import { AirportTransferPassengerRequirementSchema } from "../flight/passenger-requirement.schema";
import { AirportTransferContactInformationSchema } from "../flight/contact-information.schema";
import { AirportTransferSpecialRequestSchema } from "../flight/special-request.schema";
import { AirportTransferPriceSchema } from "../pricing/price.schema";
import { AirportTransferNoticeSchema } from "./notice.schema";
import { AirportTransferScheduleSchema } from "../routes/schedule.schema";
import { AirportTransferServiceType } from "@/types/bookings/airport-transfer/enums";

export const AirportTransferSchema = z.object({
  providerBookingId: z.string(),

  availability: AirportTransferAvailabilitySchema.optional(),

  capacity: AirportTransferCapacitySchema.optional(),

  routes: z.array(AirportTransferRouteSchema),

  trips: z.array(AirportTransferTripSchema),

  vehicle: z.array(AirportTransferVehicleSchema),

  flightSupport: AirportTransferFlightSupportSchema.optional(),

  meetAndGreet: AirportTransferMeetAndGreetSchema.optional(),

  waitingPolicy: AirportTransferWaitingPolicySchema.optional(),

  luggagePolicy: AirportTransferLuggagePolicySchema.optional(),

  passengerRequirement: AirportTransferPassengerRequirementSchema.optional(),

  contactInformation: AirportTransferContactInformationSchema.optional(),

  specialRequest: AirportTransferSpecialRequestSchema.optional(),

  price: AirportTransferPriceSchema.optional(),

  notice: AirportTransferNoticeSchema.optional(),

  schedules: z.array(AirportTransferScheduleSchema),

  active: z.boolean(),

  serviceType: z.nativeEnum(AirportTransferServiceType),

  instantConfirmation: z.boolean(),

  name: z.string().min(1),

  slug: z.string().min(1),

  aliases: z.array(z.string()),

  keywords: z.array(z.string()),

  tags: z.array(z.string()),

  searchText: z.string().optional(),

  featured: z.boolean(),

  searchable: z.boolean(),

  searchPriority: z.number(),
});

export type AirportTransferFormValues = z.infer<typeof AirportTransferSchema>;
