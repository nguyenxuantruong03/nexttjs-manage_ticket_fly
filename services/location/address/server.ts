import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Address } from "@/types/location/address";

export const AddressServerService = createServerCrudApi<Address>(API.ADDRESS);
