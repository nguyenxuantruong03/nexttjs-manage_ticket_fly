// step/extras.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { ExtraType } from "@/types/bookings/hotel/service/extra.type";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import ExtraTypeCreateDialog from "../../../extra-type/components/ExtraTypeCreateDialog";
import { EntityOption } from "@/components/entity-selector";

interface ExtraStepsProps {
  extraTypeData: ExtraType[];
}

export default function ExtrasStep({ extraTypeData }: ExtraStepsProps) {
  const extraTypeOptions: EntityOption<ExtraType>[] = extraTypeData.map(
    (type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }),
  );
  return (
    <>
      {/* ======================================================
          EXTRA INFORMATION
      ====================================================== */}

      <FormSection
        title="Extra Information"
        description="Additional hotel services and charges"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="extras.0.name"
            label="Extra Name"
            placeholder="Airport transfer, Laundry..."
          />

          <FormEntitySelector<HotelSchemaForm, ExtraType>
            name="extras.0.typeId"
            label="Extra Type"
            placeholder="Search extra type..."
            searchPlaceholder="Search extra type..."
            emptyText="No extra type found"
            createText="Create extra type"
            options={extraTypeOptions}
            enableCreate
            renderCreateDialog={(props) => <ExtraTypeCreateDialog {...props} />}
          />
          <FormInput<HotelSchemaForm>
            name="extras.0.description"
            label="Description"
            placeholder="Extra description"
          />
        </div>
      </FormSection>

      {/* ======================================================
          EXTRA RULES
      ====================================================== */}

      <FormSection
        title="Extra Rules"
        description="Availability and quantity rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="extras.0.availableFor"
            label="Available For"
            placeholder="Adult, Child, All"
          />

          <FormInput<HotelSchemaForm>
            name="extras.0.maxQuantity"
            label="Maximum Quantity"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="extras.0.isMandatory"
            label="Mandatory"
            description="Guest must select this extra"
          />

          <FormSwitch<HotelSchemaForm> name="extras.0.active" label="Active" />
        </div>
      </FormSection>

      {/* ======================================================
          EXTRA PRICE
      ====================================================== */}

      <FormSection title="Extra Pricing" description="Price configuration">
        <div className="grid gap-6 md:grid-cols-3">
          <FormInput<HotelSchemaForm>
            name="extras.0.prices.0.name"
            label="Price Name"
            placeholder="Adult price"
          />

          <FormInput<HotelSchemaForm>
            name="extras.0.prices.0.price"
            label="Price"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="extras.0.prices.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
