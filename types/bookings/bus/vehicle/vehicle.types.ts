import { BusVehicleStatus, BusVehicleType } from "../enums";
import { BusSeatInventoryLock } from "../routes/inventory-lock.types";
import { BusTrip } from "../routes/trip.types";
import { BusVehicleCapacity } from "./capacity.types";
import { BusVehicleFeatures } from "./features.types";
import { BusVehicleImage } from "./image.types";
import { BusSeatLayout } from "./seat-layout.types";
import { BusSeatMap } from "./seat-map.types";
import { BusSeat } from "./seat.types";
import { BusVehicleSpecification } from "./specification.types";

export interface BusVehicle {
  id: string;

  busId: string;
  trips: BusTrip[];
  type: BusVehicleType;

  active: boolean;

  name?: string;

  manufacturer?: string;

  model?: string;

  year?: number;

  status?: BusVehicleStatus;

  capacity?: BusVehicleCapacity;

  features?: BusVehicleFeatures;

  seats: BusSeat[];

  locks: BusSeatInventoryLock[];

  specification?: BusVehicleSpecification;

  seatLayout: BusSeatLayout[];

  images: BusVehicleImage[];

  seatMap?: BusSeatMap;

  createdAt: string;

  updatedAt: string;
}
