"use client";

import FormSection from "@/components/form/FormSection";
import { FormCombobox, FormInput } from "@/components/form/form-data";

import { WardFormSchema } from "../form/schema";
import { District } from "@/types/bookings/location/district";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import DistrictCreateDialog from "../../../district/components/DistrictCreateDialog";
import { City } from "@/types/bookings/location/city";

interface BasicStepProps {
  districtData: District[];
  cityData: City[]
}

export default function BasicStep({ districtData,cityData }: BasicStepProps) {
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
          renderCreateDialog={(props) => <DistrictCreateDialog cities={cityData} {...props} />}
        />
      </div>
    </FormSection>
  );
}
