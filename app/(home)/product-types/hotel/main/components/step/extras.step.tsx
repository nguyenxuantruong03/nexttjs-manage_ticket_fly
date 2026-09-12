// step/extras.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { HotelSchemaForm } from "../form/schema/core/hotel.schema";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { Extra } from "@/types/common/commerce/extra/extra.type";
import ExtraCreateDialog from "@/app/(home)/commerce/extra/main/components/ExtraCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Currency } from "@/types/location/currency";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

interface ExtrasStepProps {
  extraData: Extra[];
  bookingTypeData: BookingType[];
  currencyData: Currency[];
  extraTypeData: ExtraType[];
}

export default function ExtrasStep({
  extraData,
  bookingTypeData,
  currencyData,
  extraTypeData,
}: ExtrasStepProps) {
  const extraOptions: EntityOption<Extra>[] = extraData.map((extra) => ({
    value: extra.id,
    label: extra.name,
    description: extra.description ?? undefined,
    data: extra,
  }));

  return (
    <>
      {/* ======================================================
          EXTRAS
      ====================================================== */}

      <FormSection title="Extras" description="Additional services & fees">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, Extra>
            name="hotelExtraMapper.0.extraId"
            label="Extra"
            placeholder="Search extra..."
            searchPlaceholder="Search extra..."
            emptyText="No extra found"
            createText="Create extra"
            options={extraOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <ExtraCreateDialog
                bookingTypeData={bookingTypeData}
                extraTypeData={extraTypeData}
                currencyData={currencyData}
                {...props}
              />
            )}
          />

          <FormInput<HotelSchemaForm>
            name="hotelExtraMapper.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="hotelExtraMapper.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
