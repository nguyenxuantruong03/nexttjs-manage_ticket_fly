import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

export const CarRentalInsuranceBenefitTypeServerService =
  createServerCrudApi<InsuranceBenefitType>(
    API.CAR_RENTAL_INSURANCE_BENEFIT_TYPE,
  );