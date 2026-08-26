import { CarRental } from "../core/car-rental.types";

export interface CarRentalDocumentType {
  id: string;

  name: string;
  slug?: string;
  description: string | null;

  icon: string | null;

  active: boolean;

  sortOrder: number;

  carRentals: CarRentalRequiredDocumentType[];

  createdAt: string;
  updatedAt: string;
}

export interface CarRentalRequiredDocumentType {
  id: string;

  rentalId: string;
  rental: CarRental;

  documentTypeId: string;
  documentType: CarRentalDocumentType;

  mandatory: boolean;
  note: string | null;

  createdAt: string;
}
