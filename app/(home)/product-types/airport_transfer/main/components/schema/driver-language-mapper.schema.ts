import { z } from "zod";

export const AirportTransferDriverLanguageMapperSchema = z.object({
  languageId: z.string().min(1),
});

export type AirportTransferDriverLanguageMapperSchemaType = z.infer<
  typeof AirportTransferDriverLanguageMapperSchema
>;