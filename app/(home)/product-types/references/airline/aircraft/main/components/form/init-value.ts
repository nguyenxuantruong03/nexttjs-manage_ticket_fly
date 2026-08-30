import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

import { flyAircraftDefaultValues } from "./default-values";

import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

export function initFlyAircraftFormValues(
  flyAircraft?: FlyAircraft,
): FlyAircraftFormSchema {
  if (!flyAircraft) {
    return structuredClone(flyAircraftDefaultValues);
  }

  return {
    // ======================================================
    // RELATIONS
    // ======================================================

    airlineId: flyAircraft.airlineId ?? "",

    trips: flyAircraft.trips ?? [],

    // ======================================================
    // BASIC
    // ======================================================

    manufacturer: flyAircraft.manufacturer ?? null,

    model: flyAircraft.model ?? null,

    code: flyAircraft.code ?? null,

    registrationNumber: flyAircraft.registrationNumber ?? null,

    active: flyAircraft.active ?? true,

    // ======================================================
    // SPECIFICATION
    // ======================================================

    specification: flyAircraft.specification
      ? {
          maxRangeKm: flyAircraft.specification.maxRangeKm ?? undefined,

          cruiseSpeed: flyAircraft.specification.cruiseSpeed ?? undefined,

          maxPassengers: flyAircraft.specification.maxPassengers ?? undefined,

          engineType: flyAircraft.specification.engineType ?? undefined,

          engineCount: flyAircraft.specification.engineCount ?? undefined,

          wingspan: flyAircraft.specification.wingspan ?? undefined,

          length: flyAircraft.specification.length ?? undefined,

          height: flyAircraft.specification.height ?? undefined,

          firstFlightYear:
            flyAircraft.specification.firstFlightYear ?? undefined,
        }
      : null,

    // ======================================================
    // FACILITIES
    // ======================================================

    facilities: (flyAircraft.facilities ?? []).map((facility) => ({
      facilityId: facility.facilityId ?? "",

      active: facility.active ?? true,
    })),

    // ======================================================
    // CABIN / SEAT
    // ======================================================

    cabins: (flyAircraft.cabins ?? []).map((cabin) => ({
      aircraftId: cabin.aircraftId ?? undefined,

      cabinClassId: cabin.cabinClassId ?? "",

      name: cabin.name ?? null,

      rows: cabin.rows ?? null,

      totalSeats: cabin.totalSeats ?? 0,

      seats: (cabin.seats ?? []).map((seat) => ({
        cabinId: seat.cabinId ?? undefined,

        typeId: seat.typeId ?? "",

        seatNumber: seat.seatNumber ?? "",

        row: seat.row ?? null,

        column: seat.column ?? null,

        extraLegroom: seat.extraLegroom ?? false,

        emergencyExit: seat.emergencyExit ?? false,

        nearWindow: seat.nearWindow ?? null,

        nearAisle: seat.nearAisle ?? null,

        nearWing: seat.nearWing ?? null,

        available: seat.available ?? true,
      })),
    })),

    // ======================================================
    // IMAGES
    // ======================================================

    images: (flyAircraft.images ?? []).map((image) => ({
      mediaId: image.mediaId ?? "",

      categoryId: image.categoryId ?? null,

      isPrimary: image.isPrimary ?? false,

      sortOrder: image.sortOrder ?? 0,
    })),

    // ======================================================
    // SEAT MAP
    // ======================================================

    seatMap: flyAircraft.seatMap
      ? {
          imageUrl: flyAircraft.seatMap.imageUrl ?? undefined,

          svgUrl: flyAircraft.seatMap.svgUrl ?? undefined,

          jsonLayout: flyAircraft.seatMap.jsonLayout ?? undefined,
        }
      : null,

    // ======================================================
    // SCHEDULE
    // ======================================================

    schedule: (flyAircraft.schedule ?? []).map((schedule) => ({
      aircraftId: schedule.aircraftId ?? undefined,

      trips: schedule.trips ?? [],

      departureTime: schedule.departureTime ?? "",

      arrivalTime: schedule.arrivalTime ?? "",

      startDate: schedule.startDate ?? new Date(),

      endDate: schedule.endDate ?? undefined,

      operatingDays: schedule.operatingDays ?? [],

      active: schedule.active ?? true,
    })),
  };
}
