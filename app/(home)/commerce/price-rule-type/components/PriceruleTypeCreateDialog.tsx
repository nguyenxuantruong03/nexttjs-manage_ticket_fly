"use client";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import {
  PriceRuleTypeFormSchema,
  schema as PriceRuleTypeSchema,
} from "./form/schema";

import { priceRuleTypeDefaultValues } from "./form/default-values";

import { useCreatePriceRuleType } from "@/hooks/commerce/price-rule-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";

import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface PriceRuleTypeCreateDialogProps extends EntityCreateDialogProps<PriceRuleType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PriceRuleTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: PriceRuleTypeCreateDialogProps) {
  const createPriceRuleType = useCreatePriceRuleType();

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<
      PriceRuleTypeFormSchema,
      Partial<PriceRuleType>,
      PriceRuleType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createPriceRuleType}
      config={{
        schema: PriceRuleTypeSchema,
        defaultValues: priceRuleTypeDefaultValues,
        title: "Create Price Rule Type",
        description: "Create a new price rule type",
        success: "Price rule type created",
        submitText: "Create Price Rule Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<PriceRuleType> => ({
          value: response.id,
          label: response.name ?? "Price Rule Type",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PriceRuleTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Enter price rule type name"
        />

        <FormIcon<PriceRuleTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Enter price rule type icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<PriceRuleTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the price rule type..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<PriceRuleTypeFormSchema, BookingType>
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
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<PriceRuleTypeFormSchema> name="active" label="Active" />

        <FormInput<PriceRuleTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
