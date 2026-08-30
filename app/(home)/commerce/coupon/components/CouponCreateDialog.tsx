"use client";

import {
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import { CouponFormSchema, schema as CouponSchema } from "./form/schema";

import { couponDefaultValues } from "./form/default-values";

import { useCreateCoupon } from "@/hooks/commerce/coupon";

import { Coupon } from "@/types/common/commerce/coupon";

import { DiscountType } from "@/types/common/commerce/promotion/promotion";

import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";

import { BookingType } from "@/types/common/commerce/booking-type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface CouponCreateDialogProps extends EntityCreateDialogProps<Coupon> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function CouponCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: CouponCreateDialogProps) {
  const createCoupon = useCreateCoupon();

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<CouponFormSchema, Coupon>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createCoupon}
      config={{
        schema: CouponSchema,
        defaultValues: couponDefaultValues,
        title: "Create Coupon",
        description: "Create a new coupon",
        success: "Coupon created",
        submitText: "Create Coupon",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Coupon> => ({
          value: response.id,
          label: response.name ?? "Coupon",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<CouponFormSchema>
          name="code"
          label="Code"
          placeholder="Enter coupon code"
        />

        <FormInput<CouponFormSchema>
          name="name"
          label="Coupon Name"
          placeholder="Enter coupon name"
        />

        <div className="md:col-span-2">
          <FormTextarea<CouponFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the coupon..."
          />
        </div>
      </div>

      {/* ======================================================
          DISCOUNT
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSelect<CouponFormSchema>
          name="discountType"
          label="Discount Type"
          options={[
            {
              label: "Percentage",
              value: DiscountType.percentage,
            },
            {
              label: "Fixed Amount",
              value: DiscountType.fixed_amount,
            },
          ]}
        />

        <FormEntityMultiSelector<CouponFormSchema, BookingType>
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

        <FormInput<CouponFormSchema>
          name="value"
          label="Value"
          type="number"
          placeholder="0"
        />

        <FormInput<CouponFormSchema>
          name="maxDiscount"
          label="Max Discount"
          type="number"
          placeholder="0"
        />

        <FormInput<CouponFormSchema>
          name="minimumAmount"
          label="Minimum Amount"
          type="number"
          placeholder="0"
        />
      </div>

      {/* ======================================================
          DATE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<CouponFormSchema>
          name="startDate"
          label="Start Date"
          type="datetime-local"
        />

        <FormInput<CouponFormSchema>
          name="endDate"
          label="End Date"
          type="datetime-local"
        />
      </div>

      {/* ======================================================
          USAGE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<CouponFormSchema>
          name="usageLimit"
          label="Usage Limit"
          type="number"
          placeholder="Unlimited"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<CouponFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
