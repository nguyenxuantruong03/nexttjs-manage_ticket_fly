import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Address } from "@/types/bookings/location/address";

export const AddressService = createCrudApi<Address>(clientHttp, API.ADDRESS);
