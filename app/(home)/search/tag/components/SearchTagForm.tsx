"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { SearchTagFormSchema } from "./form/schema";

import { searchTagFormConfig } from "./config";

import { useCreateSearchTag, useUpdateSearchTag } from "@/hooks/search/tag";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { BookingType } from "@/types/common/commerce/booking-type";

interface SearchTagsProps {
  initialData?: SearchTag;

  bookingTypeData: BookingType[];
}

export default function SearchTagForm({
  initialData,

  bookingTypeData,
}: SearchTagsProps) {
  const createSearchTag = useCreateSearchTag();

  const updateSearchTag = useUpdateSearchTag();

  return (
    <EntityFormWizard<SearchTagFormSchema, SearchTag>
      initialData={initialData}
      config={searchTagFormConfig}
      createMutation={createSearchTag}
      updateMutation={updateSearchTag}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
