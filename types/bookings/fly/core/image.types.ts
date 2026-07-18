import { FlyImageCategory } from "../enums";
import { Fly } from "./fly.types";


export interface FlyImage {
  id: string;

  flyId: string;

  fly?: Fly;

  url: string;

  category: FlyImageCategory;

  alt?: string;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;

  updatedAt: Date;
}
