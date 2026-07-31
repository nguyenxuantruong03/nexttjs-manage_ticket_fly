import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { SearchTag } from "@/types/bookings/search/tag.types";

export const SearchTagService = createCrudApi<SearchTag>(
  clientHttp,
  API.TAG,
);
