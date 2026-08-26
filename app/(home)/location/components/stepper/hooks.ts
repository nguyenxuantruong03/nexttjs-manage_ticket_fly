"use client";

import { useAddressCreateFormData } from "@/hooks/location/address/useAddressCreateFormData";
import { useCityCreateFormData } from "@/hooks/location/city/useCityCreateFormData";
import { useContinentCreateFormData } from "@/hooks/location/country/continent/useContinentCreateFormData";
import { useCountryCreateFormData } from "@/hooks/location/country/useCountryCreateFormData";
import { useDistrictCreateFormData } from "@/hooks/location/district/useDistrictCreateFormData";
import { usePlaceTypeCreateFormData } from "@/hooks/location/place/place-type/usePlaceCreateFormData";
import { usePlaceCreateFormData } from "@/hooks/location/place/usePlaceCreateFormData";
import { useWardCreateFormData } from "@/hooks/location/ward/useWardCreateFormData";
import { useFlyAirportCreateFormData } from "@/hooks/product-types/references/airport/useFlyAirportCreateFormData";

export function useLocationStepperHooks(mainStep: string, subStep: string) {
  /**
   * ==========================
   * COUNTRY
   * ==========================
   */

  const continent = useContinentCreateFormData(
    mainStep === "country" && subStep === "continent",
  );

  const country = useCountryCreateFormData(mainStep === "country");

  /**
   * ==========================
   * CITY
   * ==========================
   */

  const city = useCityCreateFormData(mainStep === "city");

  const district = useDistrictCreateFormData(subStep === "district");

  const ward = useWardCreateFormData(subStep === "ward");

  /**
   * ==========================
   * ADDRESS
   * ==========================
   */

  const placeType = usePlaceTypeCreateFormData(
    mainStep === "address" && subStep === "place-type",
  );

  const place = usePlaceCreateFormData(subStep === "place");

  const address = useAddressCreateFormData(mainStep === "address");

  const flyairport = useFlyAirportCreateFormData(subStep === "flyairport");

  return {
    continent,
    country,
    city,
    district,
    ward,
    placeType,
    place,
    address,
    flyairport,
  };
}
