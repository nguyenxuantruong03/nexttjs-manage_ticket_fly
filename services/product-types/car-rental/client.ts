import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

export const CarRentalService = createCrudApi<CarRental>(
  clientHttp,
  API.CAR_RENTAL,
);
