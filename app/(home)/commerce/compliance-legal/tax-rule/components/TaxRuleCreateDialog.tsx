"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import { TaxRuleFormSchema, schema as TaxRuleSchema } from "./form/schema";

import { taxRuleDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateTaxRule } from "@/hooks/commerce/compliance-legal/tax-rule";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { FormDatePicker } from "@/components/form/form-data";
import { TaxRule } from "@/types/common/commerce/compliance-legal.type";

// ======================================================
// PROPS
// ======================================================

interface TaxRuleCreateDialogProps extends EntityCreateDialogProps<TaxRule> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function TaxRuleCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: TaxRuleCreateDialogProps) {
  const createTaxRule = useCreateTaxRule();

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<TaxRuleFormSchema, Partial<TaxRule>, TaxRule>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createTaxRule}
      config={{
        schema: TaxRuleSchema,
        defaultValues: taxRuleDefaultValues,
        title: "Create Tax Rule",
        description: "Create a new tax rule",
        success: "Tax rule created",
        submitText: "Create Tax Rule",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<TaxRule> => ({
          value: response.id,
          label: "Tax Rule",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          COUNTRY
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<TaxRuleFormSchema>
          name="countryId"
          label="Country IDs"
          placeholder="VN, ID, TH..."
        />
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<TaxRuleFormSchema, BookingType>
          name="bookingTypeIds"
          label="Booking Types"
          placeholder="Search booking types..."
          searchPlaceholder="Search booking types..."
          emptyText="No booking types found"
          createText="Create booking type"
          options={bookingTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
        />
      </div>

      {/* ======================================================
          TAX
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<TaxRuleFormSchema>
          name="taxPercent"
          label="Tax Percent"
          type="number"
          placeholder="10.00"
        />
      </div>

      {/* ======================================================
          EFFECTIVE PERIOD
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormDatePicker<TaxRuleFormSchema>
          name="effectiveFrom"
          label="Effective From"
        />

        <FormDatePicker<TaxRuleFormSchema>
          name="effectiveTo"
          label="Effective To"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<TaxRuleFormSchema> name="isActive" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
