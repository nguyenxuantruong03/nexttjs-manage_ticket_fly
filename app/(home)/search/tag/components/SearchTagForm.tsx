"use client";

import { useEffect, useMemo } from "react";

import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormPage } from "@/components/form/form-context";
import { useFormDraft } from "@/hooks/useFormDraft";

import { DraftEntity } from "@/components/daft/draft-config";

import { useCreateSearchTag, useUpdateSearchTag } from "@/hooks/search/tag";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { initSearchTagFormValues } from "./form/init-value";
import { searchTagDefaultValues } from "./form/default-values";
import { SearchTagFormSchema, schema } from "./form/schema";

import { searchTagSteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import BookingTypeStep from "./step/booking-type.step";
import StatusStep from "./step/status.step";
import { BookingType } from "@/types/common/commerce/booking-type";

interface SearchTagsProps {
  initialData?: SearchTag;
  bookingTypeData: BookingType[];
}

export default function SearchTagForm({
  initialData,
  bookingTypeData,
}: SearchTagsProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createSearchTag = useCreateSearchTag();

  const updateSearchTag = useUpdateSearchTag();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<SearchTagFormSchema>({
    schema,

    defaultValues: initialData
      ? initSearchTagFormValues(initialData)
      : searchTagDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.SearchTag,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: SearchTagFormSchema) => {
    await submit({
      mutation: initialData
        ? updateSearchTag.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createSearchTag.mutateAsync(values),

      success: isUpdate ? "Tag updated" : "Tag created",

      redirect: "/search/tag",
    });

    clearDraft();

    form.reset(searchTagDefaultValues);
  };

  return (
    <>
      <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
        <FormWizard
          form={form}
          steps={searchTagSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
        >
          <FormWizardHeader steps={searchTagSteps} />

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
    </>
  );
}
