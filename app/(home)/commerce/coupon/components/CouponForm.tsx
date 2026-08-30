"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateCoupon, useUpdateCoupon } from "@/hooks/commerce/coupon";

import { Coupon } from "@/types/common/commerce/coupon";

import { BookingType } from "@/types/common/commerce/booking-type";

import { CouponFormSchema } from "./form/schema";

import { couponFormConfig } from "./config";

import DiscountStep from "./step/discount.step";

import DateStep from "./step/date.step";

import UsageStep from "./step/usage.step";

import StatusStep from "./step/status.step";

interface CouponFormProps {
  initialData?: Coupon;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function CouponForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: CouponFormProps) {
  const createCoupon = useCreateCoupon();

  const updateCoupon = useUpdateCoupon();

  return (
    <EntityFormWizard<CouponFormSchema, Coupon>
      initialData={initialData}
      redirect={redirect}
      config={couponFormConfig}
      createMutation={createCoupon}
      updateMutation={updateCoupon}
    >
      <FormWizardStep index={0}>
        <DiscountStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <DateStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <UsageStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
