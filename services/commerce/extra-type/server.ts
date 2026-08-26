import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

export const ExtraTypeServerService = createServerCrudApi<ExtraType>(
  API.EXTRA_TYPE,
);
