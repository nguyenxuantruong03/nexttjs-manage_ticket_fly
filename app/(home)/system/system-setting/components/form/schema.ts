import { JsonValue } from "@/types/system/system-governance.type";
import { z } from "zod";

const jsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(jsonValueSchema),
    z.record(z.string(), jsonValueSchema),
  ]),
);

export const schema = z.object({
  // ======================
  // BASIC
  // ======================

  key: z.string().min(1, "Key is required"),

  value: jsonValueSchema,
});

export type SystemSettingFormSchema = z.infer<typeof schema>;
