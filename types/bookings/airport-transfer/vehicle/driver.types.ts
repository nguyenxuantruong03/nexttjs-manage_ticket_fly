import { AirportTransferDriverLanguage } from "../enums";
import { AirportTransferVehicleAssignment } from "../trip/assignment.types";

export interface AirportTransferDriver {
  id: string;

  vehicleId: string;

  firstName: string;

  lastName: string;

  avatar?: string;

  phone?: string;

  email?: string;

  licenseNumber?: string;

  licenseExpiry?: string;

  experienceYears?: number;

  rating?: number;

  totalTrips: number;

  languages: AirportTransferDriverLanguage[];

  assignments: AirportTransferVehicleAssignment[];

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
