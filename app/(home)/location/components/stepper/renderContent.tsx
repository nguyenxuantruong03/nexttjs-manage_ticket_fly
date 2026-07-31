"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  AddressForm,
  CityForm,
  CountryForm,
  CurrencyForm,
  DistrictForm,
  FlyAirportForm,
  LanguageForm,
  PlaceForm,
  TimezoneForm,
  WardForm,
} from "./forms";

import { useLocationStepperHooks } from "./hooks";

interface Props {
  mainStep: string;
  subStep: string;

  hooks: ReturnType<typeof useLocationStepperHooks>;
}

export function renderLocationStepperContent({
  mainStep,
  subStep,
  hooks,
}: Props) {
  const {
    country,

    city,
    district,
    ward,

    place,
    address,
    flyairport,
  } = hooks;

  /**
   * ==========================
   * COUNTRY
   * ==========================
   */

  if (mainStep === "country") {
    if (subStep === "currency") {
      return <CurrencyForm redirect={false} />;
    }

    if (subStep === "language") {
      return <LanguageForm redirect={false} />;
    }

    if (subStep === "timezone") {
      return <TimezoneForm redirect={false} />;
    }

    if (country.isLoading) {
      return <LoadingPage />;
    }

    if (country.error) {
      return <ErrorPage />;
    }

    if (country.data && subStep === "country") {
      return (
        <CountryForm
          redirect={false}
          currencyData={country.data.currencyData}
          searchTagData={country.data.searchTagData}
          timezoneData={country.data.timezoneData}
          languageData={country.data.languageData}
        />
      );
    }
  }

  /**
   * ==========================
   * CITY
   * ==========================
   */
  if (mainStep === "city") {
    if (city.isLoading) {
      return <LoadingPage />;
    }

    if (city.error) {
      return <ErrorPage />;
    }

    if (subStep === "district" && district.data) {
      return (
        <DistrictForm
          redirect={false}
          countryData={district.data.countryData}
          cityData={district.data.cityData}
        />
      );
    }

    if (subStep === "ward" && ward.data) {
      return (
        <WardForm
          redirect={false}
          districtData={ward.data.districtData}
          cityData={ward.data.cityData}
        />
      );
    }

    if (subStep === "city" && city.data) {
      return (
        <CityForm
          redirect={false}
          languageData={city.data.languageData}
          currencyData={city.data.currencyData}
          countryData={city.data.countryData}
          searchTagData={city.data.searchTagData}
          timezoneData={city.data.timezoneData}
        />
      );
    }
  }

  /**
   * ==========================
   * ADDRESS
   * ==========================
   */
  if (mainStep === "address") {
    if (subStep === "place" && place.data) {
      return (
        <PlaceForm
          searchTagData={place.data.searchTag}
          redirect={false}
          cities={place.data.cities}
          countries={place.data.countries}
          districts={place.data.districts}
          wards={place.data.wards}
          addresses={place.data.addresses}
        />
      );
    }

    if (subStep === "address" && address.data) {
      return (
        <AddressForm
          redirect={false}
          timezoneData={address.data.timezoneData}
          currencyData={address.data.currencyData}
          searchTags={address.data.searchTagData}
          languageData={address.data.languageData}
          cityData={address.data.cityData}
          districtData={address.data.districtData}
          wardData={address.data.wardData}
          countryData={address.data.countryData}
        />
      );
    }

    if (subStep === "flyairport" && flyairport.data) {
      return (
        <FlyAirportForm
          redirect={false}
          addresses={flyairport.data.addresses}
          cities={flyairport.data.cities}
          districts={flyairport.data.districts}
          wards={flyairport.data.wards}
          countries={flyairport.data.countries}
        />
      );
    }
  }

  return null;
}
