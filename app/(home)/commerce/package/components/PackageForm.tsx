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

import { packageSteps } from "./step/steps";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import DurationStep from "./step/duration.step";

import CapacityStep from "./step/capacity.step";

import ContentStep from "./step/content.step";

import StatusStep from "./step/status.step";

import { initPackageFormValues } from "./form/init-value";

import { packageDefaultValues } from "./form/default-values";

import { PackageFormSchema, schema } from "./form/schema";

import { useCreatePackage, useUpdatePackage } from "@/hooks/commerce/package";

import { BookingType } from "@/types/common/commerce/booking-type";

import { Package } from "@/types/common/commerce/package/package.type";

import { Currency } from "@/types/location/currency";
import BasePriceStep from "./step/basePrice.step";

// ======================================================
// PROPS
// ======================================================

interface PackageFormProps {
  initialData?: Package;

  bookingTypeData: BookingType[];

  currencyData: Currency[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PackageForm({
  initialData,
  bookingTypeData,
  currencyData,
}: PackageFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createPackage = useCreatePackage();

  const updatePackage = useUpdatePackage();

  const searchParams = useSearchParams();

  // ======================================================
  // DRAFT
  // ======================================================

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  // ======================================================
  // FORM
  // ======================================================

  const { form, isUpdate } = useAppForm<PackageFormSchema>({
    schema,

    defaultValues: initialData
      ? initPackageFormValues(initialData)
      : packageDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  // ======================================================
  // DRAFT
  // ======================================================

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.Package,

    draftId: currentDraftId,
  });

  // ======================================================
  // DIRTY STATE
  // ======================================================

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = async (values: PackageFormSchema) => {
    await submit({
      mutation: initialData
        ? updatePackage.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPackage.mutateAsync(values),

      success: isUpdate ? "Package updated" : "Package created",

      redirect: "/commerce/package",
    });

    clearDraft();

    form.reset(packageDefaultValues);
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={packageSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={packageSteps} />

        <FormWizardContent>
          {/* ======================================================
              STEP 1 - BASIC
          ====================================================== */}

          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* ======================================================
              STEP 2 - BOOKING TYPE
          ====================================================== */}

          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          {/* ======================================================
              STEP 3 - DURATION
          ====================================================== */}

          <FormWizardStep index={2}>
            <DurationStep />
          </FormWizardStep>

          {/* ======================================================
              STEP 4 - CAPACITY
          ====================================================== */}

          <FormWizardStep index={3}>
            <CapacityStep />
          </FormWizardStep>

          {/* ======================================================
              STEP 5 - BASE PRICE
          ====================================================== */}

          <FormWizardStep index={4}>
            <BasePriceStep currencyData={currencyData} />
          </FormWizardStep>

          {/* ======================================================
              STEP 6 - CONTENT
          ====================================================== */}

          <FormWizardStep index={5}>
            <ContentStep />
          </FormWizardStep>

          {/* ======================================================
              STEP 7 - STATUS
          ====================================================== */}

          <FormWizardStep index={6}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
