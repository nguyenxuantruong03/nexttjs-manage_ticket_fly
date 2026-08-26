import { CarRental } from "../core/car-rental.types";
import { PickupInstructionType } from "../enums";

export interface CarRentalPickupInstruction {
  id: string;

  rentalId: string;
  rental?: CarRental;

  type: PickupInstructionType;

  title: string;

  description?: string;

  location?: string;

  contactPhone?: string;

  createdAt: string;
}
