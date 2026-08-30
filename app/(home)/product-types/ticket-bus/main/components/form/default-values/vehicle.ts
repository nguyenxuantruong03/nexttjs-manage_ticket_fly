import { BusVehicleStatus } from "@/types/product-types/bus/enums";

import { BusFormSchema } from "../schema/core/bus.schema";

export const busVehicleDefaultValues = {
  vehicle: [
    {
      vehicleTypeId: "",
      status: BusVehicleStatus.ACTIVE,
      name: "",
      manufacturer: "",
      model: "",
      year: new Date().getFullYear(),
      active: true,

      capacity: {
        totalSeats: 40,
        sleeperBeds: 0,
        cabinRooms: 0,
        luggageCapacityKg: 0,
      },

      facilities: [
        {
          facilityId: "",
          active: true,
        },
      ],

      specification: {
        engineType: "",
        transmission: "",
        fuelTypeId: "",
        suspension: "",
        airConditioning: true,
        wifiAvailable: false,
        toiletAvailable: false,
      },

      images: [
        {
          mediaId: "",
          categoryId: "",
          alt: "",
          sortOrder: 0,
          isPrimary: true,
        },
      ],

      seatLayout: [
        {
          name: "Default",
          seatRows: 10,
          seatColumns: 4,
        },
      ],

      seatMap: {
        imageUrl: "",
        svgUrl: "",
        jsonLayout: undefined,
      },

      seats: [
        {
          seatNumber: "A1",
          typeId: "",
          floor: 1,
          row: 1,
          column: 1,
        },
      ],
    },
  ],
} satisfies Pick<BusFormSchema, "vehicle">;
