import { Extra } from "../extra/extra.type";
import { Package } from "./package.type";

export interface PackageExtra {
  id: string;

  packageId: string;
  package: Package;

  extraId: string;
  extra: Extra;

  // Extra này có được chọn khi booking Package không
  active: boolean;

  createdAt: Date;
}
