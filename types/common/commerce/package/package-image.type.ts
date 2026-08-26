import { MediaAsset } from "../../catalog/media-asset";
import { Package } from "./package.type";

export interface PackageImage {
  id: string;

  packageId: string;
  package: Package;

  mediaId: string;
  media: MediaAsset;

  sortOrder: number;

  createdAt: Date;
}
