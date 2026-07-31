"use client";

import { useAddressCreateFormData } from "@/hooks/location/address/useAddressCreateFormData";
import { useCityCreateFormData } from "@/hooks/location/city/useCityCreateFormData";
import { useCountryCreateFormData } from "@/hooks/location/country/useCountryCreateFormData";
import { useDistrictCreateFormData } from "@/hooks/location/district/useDistrictCreateFormData";
import { usePlaceCreateFormData } from "@/hooks/location/place/usePlaceCreateFormData";
import { useWardCreateFormData } from "@/hooks/location/ward/useWardCreateFormData";
import { useFlyAirportCreateFormData } from "@/hooks/ticket-fly/fly-airport/useFlyAirportCreateFormData";

export function useLocationStepperHooks(mainStep: string, subStep: string) {
  /**
   * ==========================
   * COUNTRY
   * ==========================
   */

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

  const place = usePlaceCreateFormData(subStep === "place");

  const address = useAddressCreateFormData(mainStep === "address");

  const flyairport = useFlyAirportCreateFormData(subStep === "flyairport");

  return {
    country,

    city,
    district,
    ward,

    place,
    address,
    flyairport,
  };
}
