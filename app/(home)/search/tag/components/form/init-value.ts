import { SearchTagFormSchema } from "./schema";
import { searchTagDefaultValues } from "./default-values";
import { SearchTag } from "@/types/searchs/search/tag.types";

export function initSearchTagFormValues(searchTag?: SearchTag): SearchTagFormSchema {
  if (!searchTag) {
    return structuredClone(searchTagDefaultValues);
  }

  return structuredClone(searchTag);
}
