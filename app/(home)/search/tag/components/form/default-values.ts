import { TagType } from "@/types/bookings/search/tag.types";
import { SearchTagFormSchema } from "./schema";

export const searchTagDefaultValues: SearchTagFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  type: TagType.CITY,

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
};
