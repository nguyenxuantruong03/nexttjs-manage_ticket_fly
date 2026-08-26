import { z } from "zod";


export const FlyMealSchema = z.object({

  airlineId: z.string(),

  name: z.string(),
  description: z.string().nullable(),

  typeId: z.string(),

  image: z.string().nullable(),

  price: z.number().nullable(),

  active: z.boolean(),
});

export type FlyMeal = z.infer<typeof FlyMealSchema>;