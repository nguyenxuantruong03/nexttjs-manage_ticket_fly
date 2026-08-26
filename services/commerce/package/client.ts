import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";

import { Package } from "@/types/common/commerce/package/package.type";

export const PackageService = createCrudApi<Package>(
  clientHttp,
  API.PACKAGE,
);