import { YachtImageCategory } from "../enums";

export interface YachtImage {
  id: string;

  yachtId: string;

  url: string;

  category: YachtImageCategory;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;
}
