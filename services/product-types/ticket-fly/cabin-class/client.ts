import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

export const FlyCabinClassService = createCrudApi<FlyCabinClass>(
  clientHttp,
  API.FLY_CABIN_CLASS,
);