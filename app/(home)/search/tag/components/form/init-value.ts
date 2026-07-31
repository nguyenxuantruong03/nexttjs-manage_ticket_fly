import { SearchTag } from "@/types/bookings/search/tag.types";
import { SearchTagFormSchema } from "./schema";
import { searchTagDefaultValues } from "./default-values";

export function initSearchTagFormValues(searchTag?: SearchTag): SearchTagFormSchema {
  if (!searchTag) {
    return structuredClone(searchTagDefaultValues);
  }

  return structuredClone(searchTag);
}
