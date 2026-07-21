import { FlyImageCategory } from "../enums";
import { TicketFly } from "./fly.types";


export interface FlyImage {
  id: string;

  flyId: string;

  fly?: TicketFly;

  url: string;

  category: FlyImageCategory;

  alt?: string;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;

  updatedAt: Date;
}
