import { BusFormSchema } from "../schema/core/bus.schema";

export const busMediaDefaultValues = {
  images: [
    {
      mediaId: "",
      categoryId: "",
      alt: "",
      isPrimary: true,
      sortOrder: 0,
    },
  ],
} satisfies Pick<BusFormSchema, "images">;
