import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

// vehicle.ts
export function initAirportTransferVehicleValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "vehicle"> {
  return {
    vehicle:
      airportTransfer.vehicle?.map((vehicle) => ({
        vehicleTypeId: vehicle.vehicleTypeId ?? "",
        name: vehicle.name ?? "",
        manufacturer: vehicle.manufacturer ?? "",
        model: vehicle.model ?? "",
        year: vehicle.year ?? new Date().getFullYear(),
        color: vehicle.color ?? "",
        licensePlate: vehicle.licensePlate ?? "",
        transmission: vehicle.transmission,
        fuelTypeId: vehicle.fuelTypeId ?? "",
        status: vehicle.status,
        capacity: {
          passengerCount: vehicle.capacity?.passengerCount ?? 0,
          luggageCount: vehicle.capacity?.luggageCount ?? 0,
          cabinBaggageCount: vehicle.capacity?.cabinBaggageCount ?? 0,
          oversizedLuggage: vehicle.capacity?.oversizedLuggage ?? 0,
        },
        facilities:
          vehicle.facilities?.map((facility) => ({
            facilityId: facility.facilityId ?? "",
            active: facility.active ?? true,
          })) ?? [],
        specification: {
          engineSizeCc: vehicle.specification?.engineSizeCc ?? 0,
          fuelCapacity: vehicle.specification?.fuelCapacity ?? 0,
          mileageKm: vehicle.specification?.mileageKm ?? 0,
          vin: vehicle.specification?.vin ?? "",
        },
        images:
          vehicle.images?.map((image) => ({
            mediaId: image.mediaId ?? "",
            categoryId: image.categoryId ?? "",
            isPrimary: image.isPrimary ?? false,
            sortOrder: image.sortOrder ?? 0,
            alt: image.alt ?? "",
          })) ?? [],
        availability:
          vehicle.availability?.map((item) => ({
            startDate: item.startDate ?? "",
            endDate: item.endDate ?? "",
            available: item.available ?? true,
            note: item.note ?? "",
          })) ?? [],
        drivers:
          vehicle.drivers?.map((driver) => ({
            vehicleId: driver.vehicleId ?? "",
            firstName: driver.firstName ?? "",
            lastName: driver.lastName ?? "",
            avatar: driver.avatar ?? "",
            phone: driver.phone ?? "",
            email: driver.email ?? "",
            licenseNumber: driver.licenseNumber ?? "",
            licenseExpiry: driver.licenseExpiry ?? "",
            experienceYears: driver.experienceYears ?? 0,
            languages:
              driver.languages?.map((language) => ({
                languageId: language.languageId ?? "",
              })) ?? [],
            active: driver.active ?? true,
          })) ?? [],
      })) ?? [],
  };
}
