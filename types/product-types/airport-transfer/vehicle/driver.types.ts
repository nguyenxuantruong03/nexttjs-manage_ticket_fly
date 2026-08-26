import { AirportTransferVehicle } from "../vehicle/vehicle.types";
import { AirportTransferVehicleAssignment } from "../trip/assignment.types";
import { AirportTransferDriverLanguageMapper } from "../airport-transfer-driver-language-mapper";

export interface AirportTransferDriver {
  id: string;

  vehicleId: string;
  vehicle: AirportTransferVehicle;

  firstName: string;

  lastName: string;

  avatar: string | null;

  phone: string | null;

  email: string | null;

  licenseNumber: string | null;

  licenseExpiry: string | null;

  experienceYears: number | null;

  rating: number | null;

  totalTrips: number;

  languages: AirportTransferDriverLanguageMapper[];
  assignments: AirportTransferVehicleAssignment[];
  active: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface AirportTransferDriverLanguage {
  id: string;

  name: string;

  slug: string;

  icon: string | null;

  sortOrder: number;

  active: boolean;

  drivers: AirportTransferDriverLanguageMapper[];

  createdAt: string;

  updatedAt: string;
}