"use client";

import {
  FormInput,
  FormTextarea,
  FormSelect,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import { PromotionFormSchema, schema as PromotionSchema } from "./form/schema";

import { promotionDefaultValues } from "./form/default-values";

import { useCreatePromotion } from "@/hooks/commerce/promotion";

import {
  Promotion,
  PromotionStatus,
} from "@/types/common/commerce/promotion/promotion";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface PromotionCreateDialogProps extends EntityCreateDialogProps<Promotion> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PromotionCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: PromotionCreateDialogProps) {
  const createPromotion = useCreatePromotion();

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
    <EntityCreateFormDialog<PromotionFormSchema, Partial<Promotion>, Promotion>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createPromotion}
      config={{
        schema: PromotionSchema,
        defaultValues: promotionDefaultValues,
        title: "Create Promotion",
        description: "Create a new promotion",
        success: "Promotion created",
        submitText: "Create Promotion",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Promotion> => ({
          value: response.id,
          label: response.name ?? "Promotion",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PromotionFormSchema>
          name="code"
          label="Code"
          placeholder="SUMMER2026"
        />

        <FormInput<PromotionFormSchema>
          name="name"
          label="Name"
          placeholder="Summer Promotion"
        />

        <div className="md:col-span-2">
          <FormTextarea<PromotionFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the promotion..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<PromotionFormSchema, BookingType>
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
          DATE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PromotionFormSchema>
          name="startDate"
          label="Start Date"
          type="datetime-local"
        />

        <FormInput<PromotionFormSchema>
          name="endDate"
          label="End Date"
          type="datetime-local"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSelect<PromotionFormSchema>
          name="status"
          label="Status"
          options={[
            {
              label: "Draft",
              value: PromotionStatus.draft,
            },
            {
              label: "Active",
              value: PromotionStatus.active,
            },
            {
              label: "Paused",
              value: PromotionStatus.paused,
            },
            {
              label: "Expired",
              value: PromotionStatus.expired,
            },
          ]}
        />
      </div>

      {/* ======================================================
          USAGE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PromotionFormSchema>
          name="usageLimit"
          label="Usage Limit"
          type="number"
          placeholder="Unlimited"
        />

        <FormInput<PromotionFormSchema>
          name="usedCount"
          label="Used Count"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
