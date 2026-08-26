import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";

export const CarRentalInsuranceTypeServerService =
  createServerCrudApi<InsuranceType>(
    API.CAR_RENTAL_INSURANCE_TYPE,
  );