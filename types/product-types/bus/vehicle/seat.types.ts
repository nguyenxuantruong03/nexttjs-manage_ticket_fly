import { BusBookingSeat } from "../booking/booking-seat.types";
import { BusSeatType } from "../bus-seat-type";
import { BusSeatAvailability } from "../routes/seat-availability.types";
import { BusVehicle } from "../vehicle/vehicle.types";

export interface BusSeat {
  id: string;

  vehicleId: string;
  vehicle: BusVehicle;

  seatNumber: string;

  typeId: string;
  type: BusSeatType;

  floor: number | null;

  row: number | null;

  column: number | null;

  availability: BusSeatAvailability[];

  bookingSeat: BusBookingSeat[];

  createdAt: string;
}