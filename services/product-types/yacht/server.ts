import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

export const YachtServerService = createServerCrudApi<Yacht>(API.YACHT);
