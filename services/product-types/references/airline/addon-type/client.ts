import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";

export const FlyAddonTypeService = createCrudApi<FlyAddonType>(
  clientHttp,
  API.FLY_ADDON_TYPE,
);
