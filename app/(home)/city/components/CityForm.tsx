"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { CitySchema, CityFormSchema } from "./form/schema";

import { cityDefaultValues } from "./form/default-values";

import { citySteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";
import MediaStep from "./step/media.step";
import SearchStep from "./step/search.step";
import TravelStep from "./step/travel.step";
import SeoStep from "./step/seo.step";
import StatusStep from "./step/status.step";

import { useCreateCity, useUpdateCity } from "@/hooks/location/city";
import { useEffect, useMemo } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { City } from "@/types/bookings/location/city";
import { initCityFormValues } from "./form/init-value";

interface CityFormProps {
  initialData?: City;
}

export default function CityForm({ initialData }: CityFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createCity = useCreateCity();
  const updateCity = useUpdateCity();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<CityFormSchema>({
    schema: CitySchema,
    defaultValues: initialData
      ? initCityFormValues(initialData)
      : cityDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.City,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: CityFormSchema) => {
    submit({
      mutation: initialData
        ? updateCity.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCity.mutateAsync(values),
      success: isUpdate ? "City updated" : "City created",
      redirect: "/city",
    });

    clearDraft();

    form.reset(values);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={citySteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={citySteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <LocationStep />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <MediaStep />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <SearchStep />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <TravelStep />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <SeoStep />
          </FormWizardStep>

          <FormWizardStep index={6}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
