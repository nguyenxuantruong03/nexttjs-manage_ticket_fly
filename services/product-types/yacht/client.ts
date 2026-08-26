import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

export const YachtService = createCrudApi<Yacht>(clientHttp, API.YACHT);
