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

import { routeTypeSteps } from "./step/steps";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { initRouteTypeFormValues } from "./form/init-value";

import { routeTypeDefaultValues } from "./form/default-values";

import { RouteTypeFormSchema, schema } from "./form/schema";

import { BookingType } from "@/types/common/commerce/booking-type";

import {
  useCreateRouteType,
  useUpdateRouteType,
} from "@/hooks/catalog/route-type";
import { RouteType } from "@/types/common/catalog/route-type.type";

interface RouteTypeFormProps {
  initialData?: RouteType;

  bookingTypeData: BookingType[];
}

export default function RouteTypeForm({
  initialData,
  bookingTypeData,
}: RouteTypeFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createRouteType = useCreateRouteType();

  const updateRouteType = useUpdateRouteType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<RouteTypeFormSchema>({
    schema,

    defaultValues: initialData
      ? initRouteTypeFormValues(initialData)
      : routeTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.RouteType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: RouteTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updateRouteType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createRouteType.mutateAsync(values),

      success: isUpdate ? "Route type updated" : "Route type created",

      redirect: "/catalog/route-type",
    });

    clearDraft();

    form.reset(routeTypeDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={routeTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={routeTypeSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
