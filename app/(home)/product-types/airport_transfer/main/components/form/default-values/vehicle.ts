// vehicle.ts
import {
  AirportTransferTransmission,
  AirportTransferVehicleStatus,
} from "@/types/product-types/airport-transfer/enums";

import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferVehicleDefaultValues = {
  vehicle: [
    {
      vehicleTypeId: "",
      name: "",
      manufacturer: "",
      model: "",
      year: new Date().getFullYear(),
      color: "",
      licensePlate: "",
      transmission: AirportTransferTransmission.AUTOMATIC,
      fuelTypeId: "",
      status: AirportTransferVehicleStatus.AVAILABLE,

      capacity: {
        passengerCount: 0,
        luggageCount: 0,
        cabinBaggageCount: 0,
        oversizedLuggage: 0,
      },

      facilities: [],

      specification: {
        engineSizeCc: 0,
        fuelCapacity: 0,
        mileageKm: 0,
        vin: "",
      },

      images: [
        {
          mediaId: "",
          categoryId: "",
          isPrimary: true,
          sortOrder: 0,
          alt: "",
        },
      ],

      availability: [
        {
          startDate: "",
          endDate: "",
          available: true,
          note: "",
        },
      ],

      drivers: [
        {
          vehicleId: "",
          firstName: "",
          lastName: "",
          avatar: "",
          phone: "",
          email: "",
          licenseNumber: "",
          licenseExpiry: "",
          experienceYears: 0,
          languages: [
            {
              languageId: "",
            },
          ],
          active: true,
        },
      ],
    },
  ],
} satisfies Pick<AirportTransferFormSchema, "vehicle">;
