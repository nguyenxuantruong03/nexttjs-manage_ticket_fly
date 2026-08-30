import { BusFormSchema } from "../schema/core/bus.schema";

export const busPackageDefaultValues = {
  busPackageMapper: [
    {
      packageId: "",
    },
  ],
} satisfies Pick<BusFormSchema, "busPackageMapper">;
