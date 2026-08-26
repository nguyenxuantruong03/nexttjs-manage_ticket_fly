import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

export const CarRentalInsuranceBenefitTypeService =
  createCrudApi<InsuranceBenefitType>(
    clientHttp,
    API.CAR_RENTAL_INSURANCE_BENEFIT_TYPE,
  );