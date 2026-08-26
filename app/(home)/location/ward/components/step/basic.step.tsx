"use client";

import FormSection from "@/components/form/FormSection";
import { FormCombobox, FormInput } from "@/components/form/form-data";

import { WardFormSchema } from "../form/schema";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import DistrictCreateDialog from "../../../district/components/DistrictCreateDialog";
import { District } from "@/types/location/district";
import { City } from "@/types/location/city";
import { BookingType } from "@/types/common/commerce/booking-type";
import { SearchTag } from "@/types/searchs/search/tag.types";

interface BasicStepProps {
  districtData: District[];
  cityData: City[];
  bookingTypeData: BookingType[];
  searchTagData: SearchTag[]
}

export default function BasicStep({
  districtData,
  cityData,
  bookingTypeData,
  searchTagData
}: BasicStepProps) {
  const districtOptions: EntityOption<District>[] =
    districtData?.map((district) => ({
      value: district.id,
      label: district.name,
      description: district.city?.name ?? undefined,
      data: district,
    })) ?? [];
  return (
    <FormSection title="Ward" description="Basic ward information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<WardFormSchema>
          name="code"
          label="Code"
          placeholder="26734"
        />

        <FormInput<WardFormSchema>
          name="name"
          label="Ward Name"
          placeholder="Ward 2"
        />

        <FormInput<WardFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Phường 2"
        />

        <FormEntitySelector<WardFormSchema, District>
          name="districtId"
          label="District"
          placeholder="Search district..."
          searchPlaceholder="Search district..."
          emptyText="No district found"
          createText="Create district"
          options={districtOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <DistrictCreateDialog
              bookingTypeData={bookingTypeData}
              searchTagData={searchTagData}
              cities={cityData}
              {...props}
            />
          )}
        />
      </div>
    </FormSection>
  );
}
