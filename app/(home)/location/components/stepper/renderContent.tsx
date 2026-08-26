"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  AddressForm,
  CityForm,
  ContinentForm,
  CountryForm,
  CurrencyForm,
  DistrictForm,
  FlyAirportForm,
  LanguageForm,
  PlaceForm,
  PlaceTypeForm,
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
    placeType,
    address,
    flyairport,
  } = hooks;

  /**
   * ==========================
   * COUNTRY
   * ==========================
   */

  if (mainStep === "country") {
    if (subStep === "continent") {
      return <ContinentForm redirect={false} />;
    }

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
          bookingTypeData={country.data.bookingTypeData}
          continentData={country.data.continentData}
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
          timezones={district.data.timezones}
          bookingTypeData={district.data.bookingTypeData}
          searchTagData={district.data.searchTagData}
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
          bookingTypeData={ward.data.bookingTypeData}
          searchTagData={ward.data.searchTagData}
          districtData={ward.data.districtData}
          cityData={ward.data.cityData}
        />
      );
    }

    if (subStep === "city" && city.data) {
      return (
        <CityForm
          redirect={false}
          bookingTypeData={city.data.bookingTypeData}
          continentData={city.data.continentData}
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
    if (subStep === "place-type") {
      return <PlaceTypeForm redirect={false} />;
    }

    if (subStep === "place" && place.data) {
      return (
        <PlaceForm
          bookingTypeData={place.data.bookingTypeData}
          searchTagData={place.data.searchTag}
          redirect={false}
          cities={place.data.cities}
          countries={place.data.countries}
          districts={place.data.districts}
          wards={place.data.wards}
          addresses={place.data.addresses}
          placeTypeData={place.data.placeTypeData}
        />
      );
    }

    if (subStep === "address" && address.data) {
      return (
        <AddressForm
          redirect={false}
          bookingTypeData={address.data.bookingTypeData}
          continentsData={address.data.continentsData}
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
