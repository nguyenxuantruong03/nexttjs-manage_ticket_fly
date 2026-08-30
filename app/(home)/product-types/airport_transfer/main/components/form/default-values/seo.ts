import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferSeoDefaultValues = {
  tagIds: [],

  searchable: true,

  featured: false,

  searchPriority: 0,
} satisfies Pick<
  AirportTransferFormSchema,
  "tagIds" | "searchable" | "featured" | "searchPriority"
>;
