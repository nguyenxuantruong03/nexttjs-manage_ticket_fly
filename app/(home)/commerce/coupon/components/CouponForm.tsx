"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";
import { useFormPage } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormDraft } from "@/hooks/useFormDraft";

import { couponSteps } from "./step/steps";
import DiscountStep from "./step/discount.step";
import DateStep from "./step/date.step";
import UsageStep from "./step/usage.step";
import StatusStep from "./step/status.step";

import { initCouponFormValues } from "./form/init-value";
import { couponDefaultValues } from "./form/default-values";
import { CouponFormSchema, schema } from "./form/schema";

import { useCreateCoupon, useUpdateCoupon } from "@/hooks/commerce/coupon";

import { Coupon } from "@/types/common/commerce/coupon";
import { BookingType } from "@/types/common/commerce/booking-type";

interface CouponFormProps {
  initialData?: Coupon;
  bookingTypeData: BookingType[];
}

export default function CouponForm({
  initialData,
  bookingTypeData,
}: CouponFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createCoupon = useCreateCoupon();
  const updateCoupon = useUpdateCoupon();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<CouponFormSchema>({
    schema,
    defaultValues: initialData
      ? initCouponFormValues(initialData)
      : couponDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Coupon,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: CouponFormSchema) => {
    await submit({
      mutation: initialData
        ? updateCoupon.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCoupon.mutateAsync(values),

      success: isUpdate ? "Coupon updated" : "Coupon created",

      redirect: "/commerce/coupon",
    });

    clearDraft();

    form.reset(couponDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={couponSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={couponSteps} />

        <FormWizardContent>
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
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
