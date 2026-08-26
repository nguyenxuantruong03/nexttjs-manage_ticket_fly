import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

export const FlyCabinClassServerService =
  createServerCrudApi<FlyCabinClass>(
    API.FLY_CABIN_CLASS,
  );