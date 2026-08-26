import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

export const CarRentalDocumentTypeServerService =
  createServerCrudApi<CarRentalDocumentType>(API.CAR_RENTAL_DOCUMENT_TYPE);
