import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import { Bus } from "../core/bus.types";
import { BusVehicleStatus } from "../enums";
import { BusSeatInventoryLock } from "../routes/inventory-lock.types";
import { BusTrip } from "../routes/trip.types";

import { BusVehicleCapacity } from "./capacity.types";
import { BusVehicleFacilityMapper } from "./facility-mapper";
import { BusVehicleImage } from "./image.types";
import { BusSeatLayout } from "./seat-layout.types";
import { BusSeatMap } from "./seat-map.types";
import { BusSeat } from "./seat.types";
import { BusVehicleSpecification } from "./specification.types";

export interface BusVehicle {
  id: string;

  busId: string;

  bus: Bus;

  trips: BusTrip[];

  vehicleTypeId: string | null;

  vehicleType: VehicleType | null;

  active: boolean;

  name: string | null;

  manufacturer: string | null;

  model: string | null;

  year: number | null;

  status: BusVehicleStatus | null;

  capacity: BusVehicleCapacity | null;

  facilities: BusVehicleFacilityMapper[];

  seats: BusSeat[];

  locks: BusSeatInventoryLock[];

  specification: BusVehicleSpecification | null;

  seatLayout: BusSeatLayout[];

  images: BusVehicleImage[];

  seatMap: BusSeatMap | null;

  createdAt: string;

  updatedAt: string;
}
