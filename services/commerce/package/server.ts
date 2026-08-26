import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";

import { Package } from "@/types/common/commerce/package/package.type";

export const PackageServerService = createServerCrudApi<Package>(API.PACKAGE);
