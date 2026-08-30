"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../form/schema/core/fly.schema";
import { Extra } from "@/types/common/commerce/extra/extra.type";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import ExtraCreateDialog from "@/app/(home)/commerce/extra/main/components/ExtraCreateDialog";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import { Currency } from "@/types/location/currency";
import { BookingType } from "@/types/common/commerce/booking-type";

interface ExtrasStepProps {
  extraData: Extra[];
  extraTypeData: ExtraType[];
  currencyData: Currency[];
  bookingTypeData: BookingType[];
}

export default function ExtrasStep({
  extraData,
  extraTypeData,
  currencyData,
  bookingTypeData,
}: ExtrasStepProps) {
  const extraOptions: EntityOption<Extra>[] = extraData.map((extra) => ({
    value: extra.id,
    label: extra.name,
    description: extra.description ?? undefined,
    data: extra,
  }));

  return (
    <FormSection title="Extra Mapper" description="Flight extra mapping">
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<FlyFormSchema, Extra>
          name="flyExtraMapper.0.extraId"
          label="Extra"
          placeholder="Search extra..."
          searchPlaceholder="Search extra..."
          emptyText="No extra found"
          createText="Create extra"
          options={extraOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <ExtraCreateDialog
              currencyData={currencyData}
              extraTypeData={extraTypeData}
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />
        <FormInput<FlyFormSchema>
          name="flyExtraMapper.0.sortOrder"
          label="Sort Order"
          type="number"
        />
        <FormSwitch<FlyFormSchema>
          name="flyExtraMapper.0.active"
          label="Active"
        />
      </div>
    </FormSection>
  );
}
