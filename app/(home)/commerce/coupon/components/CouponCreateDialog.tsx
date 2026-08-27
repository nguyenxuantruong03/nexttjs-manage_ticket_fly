"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { CouponFormSchema, schema as CouponSchema } from "./form/schema";

import { couponDefaultValues } from "./form/default-values";
import { useCreateCoupon } from "@/hooks/commerce/coupon";
import { Coupon } from "@/types/common/commerce/coupon";

import { DiscountType } from "@/types/common/commerce/promotion/promotion";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createCoupon = useCreateCoupon();

  const { form } = useAppForm<CouponFormSchema>({
    schema: CouponSchema,
    defaultValues: couponDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...couponDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: CouponFormSchema) => {
    submit({
      mutation: createCoupon.mutateAsync(values),

      success: "Coupon created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Coupon> = {
          value: response.id,
          label: response.name ?? "Coupon",
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Coupon"
      description="Create a new coupon"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createCoupon.isPending}>
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Basic</h3>

              <p className="text-sm text-muted-foreground">
                Basic coupon information
              </p>
            </div>

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
          </div>

          {/* ======================================================
              DISCOUNT
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Discount</h3>

              <p className="text-sm text-muted-foreground">
                Configure the coupon discount
              </p>
            </div>

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
                renderCreateDialog={(props) => (
                  <BookingTypeCreateDialog {...props} />
                )}
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
          </div>

          {/* ======================================================
              DATE
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Date</h3>

              <p className="text-sm text-muted-foreground">
                Configure the coupon validity period
              </p>
            </div>

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
          </div>

          {/* ======================================================
              USAGE
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Usage</h3>

              <p className="text-sm text-muted-foreground">
                Configure coupon usage limits
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormInput<CouponFormSchema>
                name="usageLimit"
                label="Usage Limit"
                type="number"
                placeholder="Unlimited"
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Status</h3>

              <p className="text-sm text-muted-foreground">
                Coupon configuration
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormSwitch<CouponFormSchema> name="active" label="Active" />
            </div>
          </div>

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createCoupon.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createCoupon.isPending}>
              {createCoupon.isPending ? "Creating..." : "Create Coupon"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
