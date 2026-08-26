import { AddressFormSchema } from "@/app/(home)/location/address/components/form/schema";
import { addressDefaultValues } from "./default-values";
import { Address } from "@/types/location/address";

export function initAddressFormValues(address: Address): AddressFormSchema {
  if (!address) {
    return structuredClone(addressDefaultValues);
  }

  return structuredClone(address);
}
