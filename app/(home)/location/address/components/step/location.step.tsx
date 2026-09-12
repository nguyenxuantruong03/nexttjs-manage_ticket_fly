"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSelect,
} from "@/components/form/form-data";

import { AddressFormSchema } from "../form/schema";

import { EntityOption } from "@/components/form/entity-selector";
import CityCreateDialog from "../../../city/components/CityCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import CountryCreateDialog from "../../../country/components/CountryCreateDialog";
import { City } from "@/types/location/city";
import { Country } from "@/types/location/country/country";
import { Timezone } from "@/types/location/timezone";
import { Currency } from "@/types/location/currency";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Language } from "@/types/location/language";
import { AddressPrecision } from "@/types/location/address";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Continent } from "@/types/location/country/continent.type";

interface LocationStepProps {
  cityData?: City[];
  countryData: Country[];
  timezoneData: Timezone[];
  currencyData: Currency[];
  searchTags: SearchTag[];
  languageData: Language[];
  bookingTypeData: BookingType[];
  continentsData: Continent[];
}

export default function LocationStep({
  cityData,
  countryData,
  currencyData,
  timezoneData,
  searchTags,
  languageData,
  continentsData,
  bookingTypeData,
}: LocationStepProps) {
  const countryOptions: EntityOption<Country>[] =
    countryData?.map((country) => ({
      value: country.id,
      label: country.name,
      description: country.officialName ?? undefined,
      data: country,
    })) ?? [];

  const cityOptions: EntityOption<City>[] =
    cityData?.map((city) => ({
      value: city.id,
      label: city.name,
      description: city.country?.name ?? undefined,
      data: city,
    })) ?? [];
  return (
    <FormSection title="Location" description="Address geographic information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<AddressFormSchema, Country>
          name="countryId"
          label="Country"
          placeholder="Search country..."
          searchPlaceholder="Search country..."
          emptyText="No country found"
          createText="Create country"
          options={countryOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <CountryCreateDialog
              continents={continentsData}
              bookingTypeData={bookingTypeData}
              currencies={currencyData}
              languages={languageData}
              timezones={timezoneData}
              tags={searchTags}
              {...props}
            />
          )}
        />

        <FormEntitySelector<AddressFormSchema, City>
          name="cityId"
          label="City"
          placeholder="Search city..."
          searchPlaceholder="Search city..."
          emptyText="No city found"
          createText="Create city"
          options={cityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <CityCreateDialog
              {...props}
              timezones={timezoneData}
              searchTagData={searchTags}
              bookingTypeData={bookingTypeData}
              countries={countryData ?? []}
            />
          )}
        />

        <FormInput<AddressFormSchema>
          name="latitude"
          label="Latitude"
          type="number"
          placeholder="10.8231"
        />

        <FormInput<AddressFormSchema>
          name="longitude"
          label="Longitude"
          type="number"
          placeholder="106.6297"
        />

        <FormInput<AddressFormSchema>
          name="plusCode"
          label="Plus Code"
          placeholder="7Q28+5X Ho Chi Minh City"
        />

        <FormSelect<AddressFormSchema>
          name="precision"
          label="Address Precision"
          options={Object.values(AddressPrecision).map((value) => ({
            label: value.replace("_", " "),
            value,
          }))}
        />
      </div>
    </FormSection>
  );
}
