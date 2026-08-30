import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelInventoryValues(
  hotel: Hotel,
): Pick<HotelSchemaForm, "inventories"> {
  return {
    inventories:
      hotel.inventories?.map((inventory) => ({
        hotelId: inventory.hotelId ?? "",

        roomTypeId: inventory.roomTypeId ?? "",

        ratePlans:
          inventory.ratePlans?.map((ratePlan) => ({
            inventoryId: ratePlan.inventoryId ?? "",

            name: ratePlan.name ?? "",

            code: ratePlan.code ?? "",

            description: ratePlan.description ?? "",

            typeId: ratePlan.typeId ?? null,

            mealPlanId: ratePlan.mealPlanId ?? null,

            policies:
              ratePlan.policies?.map((policy) => ({
                policyId: policy.policyId ?? "",
              })) ?? [],

            refundable: ratePlan.refundable ?? true,

            cancellationPolicy: ratePlan.cancellationPolicy
              ? {
                  freeCancellation:
                    ratePlan.cancellationPolicy.freeCancellation ?? false,

                  beforeHours: ratePlan.cancellationPolicy.beforeHours ?? null,

                  cancellationFee:
                    ratePlan.cancellationPolicy.cancellationFee ?? null,
                }
              : null,

            price: ratePlan.price
              ? {
                  ratePlanId: ratePlan.price.ratePlanId ?? "",

                  originalPrice: ratePlan.price.originalPrice ?? null,

                  averageNightlyPrice:
                    ratePlan.price.averageNightlyPrice ?? null,

                  taxesIncluded: ratePlan.price.taxesIncluded ?? false,

                  payAtHotel: ratePlan.price.payAtHotel ?? false,

                  breakdown: ratePlan.price.breakdown
                    ? {
                        priceId: ratePlan.price.breakdown.priceId ?? "",

                        roomRate: ratePlan.price.breakdown.roomRate ?? 0,

                        nights: ratePlan.price.breakdown.nights ?? 1,

                        taxes: ratePlan.price.breakdown.taxes ?? 0,

                        serviceFee: ratePlan.price.breakdown.serviceFee ?? 0,

                        resortFee: ratePlan.price.breakdown.resortFee ?? 0,

                        cleaningFee: ratePlan.price.breakdown.cleaningFee ?? 0,

                        discount: ratePlan.price.breakdown.discount ?? 0,

                        includedItems:
                          ratePlan.price.breakdown.includedItems ?? [],
                      }
                    : null,

                  rules:
                    ratePlan.price.rules?.map((rule) => ({
                      priceId: rule.priceId ?? "",

                      name: rule.name ?? "",

                      priceRuleTypeId: rule.priceRuleTypeId ?? "",

                      adjustmentType: rule.adjustmentType,

                      value: rule.value ?? 0,

                      minimumNights: rule.minimumNights ?? null,

                      maximumNights: rule.maximumNights ?? null,

                      validFrom: rule.validFrom ?? null,

                      validTo: rule.validTo ?? null,

                      daysOfWeek: rule.daysOfWeek ?? [],

                      priority: rule.priority ?? 0,

                      combinable: rule.combinable ?? false,

                      active: rule.active ?? true,
                    })) ?? [],
                }
              : null,

            active: ratePlan.active ?? true,
          })) ?? [],

        availability: inventory.availability
          ? {
              inventoryId: inventory.availability.inventoryId ?? "",

              availableRooms: inventory.availability.availableRooms ?? 0,

              lastUpdated: inventory.availability.lastUpdated ?? null,

              calendar:
                inventory.availability.calendar?.map((cal) => ({
                  availabilityId: cal.availabilityId ?? "",

                  date: cal.date,

                  totalRooms: cal.totalRooms ?? null,

                  remainingRooms: cal.remainingRooms ?? 0,

                  available: cal.available ?? true,

                  priceOverride: cal.priceOverride ?? null,

                  stopSell: cal.stopSell ?? false,

                  closed: cal.closed ?? false,

                  minimumStay: cal.minimumStay ?? null,

                  closedToArrival: cal.closedToArrival ?? false,

                  closedToDeparture: cal.closedToDeparture ?? false,

                  note: cal.note ?? "",
                })) ?? [],
            }
          : null,
      })) ?? [],
  } satisfies Pick<HotelSchemaForm, "inventories">;
}
