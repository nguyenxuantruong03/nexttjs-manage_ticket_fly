import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

export const CarRentalDocumentTypeService = createCrudApi<CarRentalDocumentType>(
  clientHttp,
  API.CAR_RENTAL_DOCUMENT_TYPE,
);
