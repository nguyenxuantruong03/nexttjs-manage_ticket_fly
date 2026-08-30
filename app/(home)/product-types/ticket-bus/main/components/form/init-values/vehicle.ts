import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initBusVehicleValues(
  ticketBus: Bus,
): Pick<BusFormSchema, "vehicle"> {
  return {
    vehicle:
      ticketBus.vehicle?.map((vehicle) => ({
        vehicleTypeId: vehicle.vehicleTypeId ?? "",
        status: vehicle.status,
        name: vehicle.name ?? "",
        manufacturer: vehicle.manufacturer ?? "",
        model: vehicle.model ?? "",
        year: vehicle.year ?? new Date().getFullYear(),
        active: vehicle.active ?? true,

        capacity: vehicle.capacity
          ? {
              totalSeats: vehicle.capacity.totalSeats ?? 40,
              sleeperBeds: vehicle.capacity.sleeperBeds ?? 0,
              cabinRooms: vehicle.capacity.cabinRooms ?? 0,
              luggageCapacityKg: vehicle.capacity.luggageCapacityKg ?? 0,
            }
          : null,

        facilities:
          vehicle.facilities?.map((facility) => ({
            facilityId: facility.facilityId ?? "",
            active: facility.active ?? true,
          })) ?? [],

        specification: vehicle.specification
          ? {
              engineType: vehicle.specification.engineType ?? "",
              transmission: vehicle.specification.transmission ?? "",
              fuelTypeId: vehicle.specification.fuelTypeId ?? "",
              suspension: vehicle.specification.suspension ?? "",
              airConditioning: vehicle.specification.airConditioning ?? true,
              wifiAvailable: vehicle.specification.wifiAvailable ?? false,
              toiletAvailable: vehicle.specification.toiletAvailable ?? false,
            }
          : null,

        images:
          vehicle.images?.map((image) => ({
            mediaId: image.mediaId ?? "",
            categoryId: image.categoryId ?? "",
            alt: image.alt ?? "",
            sortOrder: image.sortOrder ?? 0,
            isPrimary: image.isPrimary ?? false,
          })) ?? [],

        seatLayout:
          vehicle.seatLayout?.map((layout) => ({
            name: layout.name ?? "Default",
            seatRows: layout.seatRows ?? 10,
            seatColumns: layout.seatColumns ?? 4,
          })) ?? [],

        seatMap: vehicle.seatMap
          ? {
              imageUrl: vehicle.seatMap.imageUrl ?? "",
              svgUrl: vehicle.seatMap.svgUrl ?? "",
              jsonLayout: vehicle.seatMap.jsonLayout ?? undefined,
            }
          : null,

        seats:
          vehicle.seats?.map((seat) => ({
            seatNumber: seat.seatNumber ?? "",
            typeId: seat.typeId ?? "",
            floor: seat.floor ?? null,
            row: seat.row ?? null,
            column: seat.column ?? null,
          })) ?? [],
      })) ?? [],
  };
}
