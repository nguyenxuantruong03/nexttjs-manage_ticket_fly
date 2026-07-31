"use client";

import FormSection from "@/components/form/FormSection";
import { FormCombobox, FormInput } from "@/components/form/form-data";

import { DistrictFormSchema } from "../form/schema";
import { City } from "@/types/bookings/location/city";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import CityCreateDialog from "../../../city/components/CityCreateDialog";
import { Country } from "@/types/bookings/location/country";

interface BasicStepProps {
  cityData: City[];
  countryData: Country[];
}

export default function BasicStep({ cityData, countryData }: BasicStepProps) {
  const cityOptions: EntityOption<City>[] =
    cityData?.map((city) => ({
      value: city.id,
      label: city.name,
      description: city.country?.name ?? undefined,
      data: city,
    })) ?? [];
  return (
    <FormSection title="District" description="Basic district information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<DistrictFormSchema>
          name="code"
          label="Code"
          placeholder="760"
        />

        <FormInput<DistrictFormSchema>
          name="name"
          label="District Name"
          placeholder="Tan Binh District"
        />

        <FormInput<DistrictFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Quận Tân Bình"
        />

        <FormEntitySelector<DistrictFormSchema, City>
          name="cityId"
          label="City"
          placeholder="Search city..."
          searchPlaceholder="Search city..."
          emptyText="No city found"
          createText="Create city"
          options={cityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <CityCreateDialog countries={countryData} {...props} />
          )}
        />
      </div>
    </FormSection>
  );
}
