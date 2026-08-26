import { MediaAsset } from "../../catalog/media-asset";
import { Extra } from "./extra.type";

export interface ExtraImage {
  id: string;

  extraId: string;
  extra: Extra;

  mediaId: string;
  media: MediaAsset;

  isPrimary: boolean;
  sortOrder: number;

  createdAt: Date;
}
