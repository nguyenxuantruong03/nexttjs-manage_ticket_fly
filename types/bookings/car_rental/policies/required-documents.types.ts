import { RentalDocument } from "../enums";

export interface CarRentalRequiredDocuments {
  id: string;

  documents: RentalDocument[];

  policiesId: string;
}