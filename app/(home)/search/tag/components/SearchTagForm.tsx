"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { searchtTagSteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import StatusStep from "./step/status.step";

import { useSubmit } from "@/hooks/useSubmit";
import { useFormPage } from "@/components/form/form-context";
import { useEffect } from "react";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { DraftEntity } from "@/components/daft/draft-config";
import { SearchTag } from "@/types/bookings/search/tag.types";
import { useCreateSearchTag, useUpdateSearchTag } from "@/hooks/search/tag";
import { initSearchTagFormValues } from "./form/init-value";
import { searchTagDefaultValues } from "./form/default-values";
import { SearchTagFormSchema, schema } from "./form/schema";
interface SearchTagsProps {
  initialData?: SearchTag;
}
export default function SearchTagForm({ initialData }: SearchTagsProps) {
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
  }, [form.formState.isDirty]);

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
          steps={searchtTagSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
        >
          <FormWizardHeader steps={searchtTagSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
