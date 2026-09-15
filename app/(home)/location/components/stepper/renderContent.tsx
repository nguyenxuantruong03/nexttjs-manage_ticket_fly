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

    if (country.isError) {
      return <ErrorPage />;
    }

    if (country.data && subStep === "country") {
      return (
        <CountryForm
          redirect={false}
          currencyData={country.data.currencyData.data}
          searchTagData={country.data.searchTagData.data}
          timezoneData={country.data.timezoneData.data}
          languageData={country.data.languageData.data}
          bookingTypeData={country.data.bookingTypeData.data}
          continentData={country.data.continentData.data}
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

    if (city.isError) {
      return <ErrorPage />;
    }

    if (subStep === "district" && district.data) {
      return (
        <DistrictForm
          timezones={district.data.timezones.data}
          bookingTypeData={district.data.bookingTypeData.data}
          searchTagData={district.data.searchTagData.data}
          redirect={false}
          countryData={district.data.countryData.data}
          cityData={district.data.cityData.data}
        />
      );
    }

    if (subStep === "ward" && ward.data) {
      return (
        <WardForm
          redirect={false}
          bookingTypeData={ward.data.bookingTypeData.data}
          searchTagData={ward.data.searchTagData.data}
          districtData={ward.data.districtData.data}
          cityData={ward.data.cityData.data}
        />
      );
    }

    if (subStep === "city" && city.data) {
      return (
        <CityForm
          redirect={false}
          bookingTypeData={city.data.bookingTypeData.data}
          continentData={city.data.continentData.data}
          languageData={city.data.languageData.data}
          currencyData={city.data.currencyData.data}
          countryData={city.data.countryData.data}
          searchTagData={city.data.searchTagData.data}
          timezoneData={city.data.timezoneData.data}
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
          bookingTypeData={place.data.bookingTypeData.data}
          searchTagData={place.data.searchTag.data}
          redirect={false}
          cities={place.data.cities.data}
          countries={place.data.countries.data}
          districts={place.data.districts.data}
          wards={place.data.wards.data}
          addresses={place.data.addresses.data}
          placeTypeData={place.data.placeTypeData.data}
        />
      );
    }

    if (subStep === "address" && address.data) {
      return (
        <AddressForm
          redirect={false}
          bookingTypeData={address.data.bookingTypeData.data}
          continentsData={address.data.continentsData.data}
          timezoneData={address.data.timezoneData.data}
          currencyData={address.data.currencyData.data}
          searchTags={address.data.searchTagData.data}
          languageData={address.data.languageData.data}
          cityData={address.data.cityData.data}
          districtData={address.data.districtData.data}
          wardData={address.data.wardData.data}
          countryData={address.data.countryData.data}
        />
      );
    }

    if (subStep === "flyairport" && flyairport.data) {
      return (
        <FlyAirportForm
          redirect={false}
          airportData={flyairport.data.airportData.data}
          addresses={flyairport.data.addresses.data}
          cities={flyairport.data.cities.data}
          districts={flyairport.data.districts.data}
          wards={flyairport.data.wards.data}
          countries={flyairport.data.countries.data}
        />
      );
    }
  }

  return null;
}
