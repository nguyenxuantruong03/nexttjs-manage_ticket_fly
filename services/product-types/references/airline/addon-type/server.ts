import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";

export const FlyAddonTypeServerService = createServerCrudApi<FlyAddonType>(
  API.FLY_ADDON_TYPE,
);
