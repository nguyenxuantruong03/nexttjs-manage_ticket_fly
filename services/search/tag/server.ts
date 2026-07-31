import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { SearchTag } from "@/types/bookings/search/tag.types";

export const SearchTagServerService = createServerCrudApi<SearchTag>(API.TAG);
