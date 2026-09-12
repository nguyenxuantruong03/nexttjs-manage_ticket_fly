// vehicle.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalVehicleValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "vehicle"> {
  return {
    vehicle:
      rental.vehicle?.map((vehicle) => ({
        active: vehicle.active ?? true,
        vehicleTypeId: vehicle.vehicleTypeId ?? null,
        status: vehicle.status,
        brand: vehicle.brand ?? "",
        model: vehicle.model ?? "",
        year: vehicle.year ?? 0,
        color: vehicle.color ?? "",
        licensePlate: vehicle.licensePlate ?? "",
        transmission: vehicle.transmission ?? null,
        fuelType: vehicle.fuelType ?? null,
        fuelCapacityLiters: vehicle.fuelCapacityLiters ?? 0,
        mileageKm: vehicle.mileageKm ?? 0,
        mileageLimitPerDay: vehicle.mileageLimitPerDay ?? 0,
        unlimitedMileage: vehicle.unlimitedMileage ?? false,

        capacity: {
          vehicleId: vehicle.capacity?.vehicleId ?? "",
          seatCount: vehicle.capacity?.seatCount ?? undefined,
          luggageCount: vehicle.capacity?.luggageCount ?? undefined,
          doorCount: vehicle.capacity?.doorCount ?? undefined,
        },

        specification: {
          condition: vehicle.specification?.condition ?? null,
          vin: vehicle.specification?.vin ?? "",
          engineSizeCc: vehicle.specification?.engineSizeCc ?? undefined,
          horsePower: vehicle.specification?.horsePower ?? undefined,
          batteryCapacityKwh:
            vehicle.specification?.batteryCapacityKwh ?? undefined,
          rangeKm: vehicle.specification?.rangeKm ?? undefined,
          previousOwners: vehicle.specification?.previousOwners ?? undefined,
        },

        facilities:
          vehicle.facilities?.map((facility) => ({
            facilityId: facility.facilityId ?? "",
            quantity: facility.quantity ?? 1,
            note: facility.note ?? "",
          })) ?? [],

        locationCurrent: {
          addressId: vehicle.locationCurrent?.addressId ?? "",
        },

        medias:
          vehicle.medias?.map((media) => ({
            mediaId: media.mediaId ?? "",
            categoryId: media.categoryId ?? "",
            position: media.position ?? null,
            isPrimary: media.isPrimary ?? false,
            sortOrder: media.sortOrder ?? 0,
          })) ?? [],

        maintenance:
          vehicle.maintenance?.map((item) => ({
            type: item.type ?? "",
            description: item.description ?? "",
            mileageKm: item.mileageKm ?? undefined,
            serviceDate: item.serviceDate ?? null,
            cost: item.cost ?? 0,
          })) ?? [],

        document:
          vehicle.document?.map((doc) => ({
            type: doc.type,
            url: doc.url ?? "",
            expiryDate: doc.expiryDate ?? null,
          })) ?? [],

        price:
          vehicle.price?.map((price) => ({
            vehicleId: price.vehicleId ?? "",
            pricingType: price.pricingType,
            effectiveFrom: price.effectiveFrom ?? new Date(),
            effectiveTo: price.effectiveTo ?? new Date,
            pricePerHour: price.pricePerHour ?? 0,
            pricePerDay: price.pricePerDay ?? 0,
            pricePerWeek: price.pricePerWeek ?? 0,
            pricePerMonth: price.pricePerMonth ?? 0,

            originalPricePerHour: price.pricePerHour ?? 0,
            originalPricePerDay: price.pricePerDay ?? 0,
            originalPricePerWeek: price.pricePerWeek ?? 0,
            originalPricePerMonth: price.pricePerMonth ?? 0,

            minimumDays: price.minimumDays ?? 1,
            maximumDays: price.maximumDays ?? 0,

            breakdown: price.breakdown
              ? {
                  rentalRate: price.breakdown.rentalRate ?? 0,
                  duration: price.breakdown.duration ?? 1,
                  durationType: price.breakdown.durationType,
                  taxes: price.breakdown.taxes ?? 0,
                  serviceFee: price.breakdown.serviceFee ?? 0,
                  insuranceFee: price.breakdown.insuranceFee ?? 0,
                  deliveryFee: price.breakdown.deliveryFee ?? 0,
                  extraDriverFee: price.breakdown.extraDriverFee ?? 0,
                  childSeatFee: price.breakdown.childSeatFee ?? 0,
                  gpsFee: price.breakdown.gpsFee ?? 0,
                  helmetFee: price.breakdown.helmetFee ?? 0,
                  discount: price.breakdown.discount ?? 0,
                  includedItems: price.breakdown.includedItems ?? [],
                }
              : null,

            priceRules:
              price.priceRules?.map((rule) => ({
                priceRuleTypeId: rule.priceRuleTypeId ?? "",
                percentage: rule.percentage ?? 0,
                amount: rule.amount ?? 0,
                startDate: rule.startDate ?? "",
                endDate: rule.endDate ?? "",
              })) ?? [],
          })) ?? [],
      })) ?? [],
  };
}
