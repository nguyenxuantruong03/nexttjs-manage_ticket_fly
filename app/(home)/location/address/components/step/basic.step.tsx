"use client";

import FormSection from "@/components/form/FormSection";
import { FormCombobox, FormInput } from "@/components/form/form-data";

import { AddressFormSchema } from "../form/schema";
import { EntityOption } from "@/components/form/entity-selector";
import DistrictCreateDialog from "../../../district/components/DistrictCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import WardCreateDialog from "../../../ward/components/WardCreateDialog";
import { Ward } from "@/types/location/ward";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { BookingType } from "@/types/common/commerce/booking-type";
import { SearchTag } from "@/types/searchs/search/tag.types";

interface BasicStepProps {
  districtData: District[];
  wardData: Ward[];
  cityData: City[];
  bookingTypeData: BookingType[];
  searchTagData: SearchTag[];
}

export default function BasicStep({
  districtData,
  wardData,
  cityData,
  bookingTypeData,
  searchTagData,
}: BasicStepProps) {
  const wardOptions: EntityOption<Ward>[] =
    wardData?.map((ward) => ({
      value: ward.id,
      label: ward.name,
      description: ward.district?.name ?? undefined,
      data: ward,
    })) ?? [];

  const districtOptions: EntityOption<District>[] =
    districtData?.map((district) => ({
      value: district.id,
      label: district.name,
      description: district.city?.name ?? undefined,
      data: district,
    })) ?? [];
  return (
    <FormSection title="Address" description="Basic address information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<AddressFormSchema>
          name="name"
          label="Address Name"
          placeholder="Tan Son Nhat Airport"
        />

        <FormInput<AddressFormSchema>
          name="houseNumber"
          label="House Number"
          placeholder="1"
        />

        <FormInput<AddressFormSchema>
          name="street"
          label="Street"
          placeholder="Truong Son Street"
        />

        <FormEntitySelector<AddressFormSchema, Ward>
          name="wardId"
          label="Ward"
          placeholder="Search ward..."
          searchPlaceholder="Search ward..."
          emptyText="No ward found"
          createText="Create ward"
          options={wardOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <WardCreateDialog
              {...props}
              searchTagData={searchTagData}
              bookingTypeData={bookingTypeData}
              districts={districtData ?? []}
            />
          )}
        />

        <FormEntitySelector<AddressFormSchema, District>
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
              {...props}
              searchTagData={searchTagData}
              bookingTypeData={bookingTypeData}
              cities={cityData ?? []}
            />
          )}
        />

        <FormInput<AddressFormSchema>
          name="postcode"
          label="Postcode"
          placeholder="700000"
        />
      </div>
    </FormSection>
  );
}
