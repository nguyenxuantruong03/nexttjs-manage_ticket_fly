// ======================================================
// Car Rental Image
// ======================================================

import { CarRentalImageCategory } from "../enums";


export interface CarRentalImage {
  id: string;

  rentalId: string;

  url: string;

  category: CarRentalImageCategory;

  alt?: string;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: string;

  updatedAt: string;
}