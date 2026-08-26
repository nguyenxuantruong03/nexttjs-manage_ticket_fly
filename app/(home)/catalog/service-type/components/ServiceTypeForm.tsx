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

import { serviceTypeSteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import BookingTypeStep from "./step/booking-type.step";
import StatusStep from "./step/status.step";

import { initServiceTypeFormValues } from "./form/init-value";
import { serviceTypeDefaultValues } from "./form/default-values";
import { ServiceTypeFormSchema, schema } from "./form/schema";

import { BookingType } from "@/types/common/commerce/booking-type";

import {
  useCreateServiceType,
  useUpdateServiceType,
} from "@/hooks/catalog/service-type";
import { ServiceType } from "@/types/common/catalog/service-type.type";

interface ServiceTypeFormProps {
  initialData?: ServiceType;
  bookingTypeData: BookingType[];
}

export default function ServiceTypeForm({
  initialData,
  bookingTypeData,
}: ServiceTypeFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createServiceType = useCreateServiceType();
  const updateServiceType = useUpdateServiceType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<ServiceTypeFormSchema>({
    schema,

    defaultValues: initialData
      ? initServiceTypeFormValues(initialData)
      : serviceTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.ServiceType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: ServiceTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updateServiceType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createServiceType.mutateAsync(values),

      success: isUpdate
        ? "Service type updated"
        : "Service type created",

      redirect: "/catalog/service-type",
    });

    clearDraft();

    form.reset(serviceTypeDefaultValues);
  };

  return (
    <AppForm
      form={form}
      onSubmit={onSubmit}
      loading={isSubmitting}
    >
      <FormWizard
        form={form}
        steps={serviceTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={serviceTypeSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <BookingTypeStep
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter
          form={form}
          onSubmit={onSubmit}
        />
      </FormWizard>
    </AppForm>
  );
}