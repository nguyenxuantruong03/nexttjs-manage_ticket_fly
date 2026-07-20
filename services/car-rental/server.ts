import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { CarRental } from "@/types/bookings/car_rental/core/car-rental.types";

export const CarRentalServerService = createServerCrudApi<CarRental>(
  API.CAR_RENTAL,
);
