import { BusFormSchema } from "../schema/core/bus.schema";

export const busExtraDefaultValues = {
  busExtraMapper: [
    {
      extraId: "",
      active: true,
      sortOrder: 0,
    },
  ],
} satisfies Pick<BusFormSchema, "busExtraMapper">;
