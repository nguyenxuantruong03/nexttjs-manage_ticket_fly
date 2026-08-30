import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { EntityOption } from "@/components/entity-selector";

import { Extra } from "@/types/common/commerce/extra/extra.type";

import { YachtFormSchema } from "../form/schema/core/yacht.schema";
import ExtraCreateDialog from "@/app/(home)/commerce/extra/main/components/ExtraCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import { Currency } from "@/types/location/currency";

interface ExtrasStepProps {
  extraData: Extra[];
  extraTypeData: ExtraType[];
  bookingTypeData: BookingType[];
  currencyData: Currency[];
}

export default function ExtrasStep({
  extraData,
  extraTypeData,
  bookingTypeData,
  currencyData,
}: ExtrasStepProps) {
  const extraOptions: EntityOption<Extra>[] = extraData.map((extra) => ({
    value: extra.id,
    label: extra.name,
    description: extra.description ?? undefined,
    data: extra,
  }));

  return (
    <>
      <FormSection title="Extras" description="Additional yacht services">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<YachtFormSchema, Extra>
            name="yachtExtraMapper.0.extraId"
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
                bookingTypeData={bookingTypeData}
                extraTypeData={extraTypeData}
                {...props}
              />
            )}
          />

          <FormSwitch<YachtFormSchema>
            name="yachtExtraMapper.0.active"
            label="Active"
          />

          <FormInput<YachtFormSchema>
            name="yachtExtraMapper.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
