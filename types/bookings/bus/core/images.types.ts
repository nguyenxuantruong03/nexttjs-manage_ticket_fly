// ======================================================
// Bus Image
// ======================================================

import { BusImageCategory } from "../enums";


export interface BusImage {
  id: string;

  busId: string;

  url: string;

  category: BusImageCategory;

  alt?: string;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: string;

  updatedAt: string;
}
