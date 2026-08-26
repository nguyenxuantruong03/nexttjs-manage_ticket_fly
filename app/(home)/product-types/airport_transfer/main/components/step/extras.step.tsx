// step/extras.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { AirportTransferFormSchema } from "../schema/core/schema";
import { EntityOption } from "@/components/entity-selector";
import { Extra } from "@/types/common/commerce/extra/extra.type";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import ExtraCreateDialog from "@/app/(home)/commerce/extra/components/ExtraCreateDialog";
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
    <>
      {/* ======================================================
          EXTRA MAPPING
      ====================================================== */}

      <FormSection
        title="Extras"
        description="Additional airport transfer extras"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormEntitySelector<AirportTransferFormSchema, Extra>
            name="airportTransferExtraMapper.0.extraId"
            label="Extra"
            placeholder="Search extra..."
            searchPlaceholder="Search extra..."
            emptyText="No extra found"
            createText="Create extra"
            options={extraOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <ExtraCreateDialog
                extraTypeData={extraTypeData}
                currencyData={currencyData}
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormInput<AirportTransferFormSchema>
            name="airportTransferExtraMapper.0.sortOrder"
            label="Sort Order"
            type="number"
            placeholder="Enter sort order"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="airportTransferExtraMapper.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
