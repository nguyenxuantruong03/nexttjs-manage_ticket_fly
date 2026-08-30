"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateLanguage,
  useUpdateLanguage,
} from "@/hooks/location/language";

import { Language } from "@/types/location/language";

import { LanguageFormSchema } from "./form/schema";

import { languageFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import LocationStep from "./step/status.step";

interface LanguageFormProps {
  initialData?: Language;

  redirect?: boolean;
}

export default function LanguageForm({
  initialData,

  redirect = true,
}: LanguageFormProps) {
  const createLanguage = useCreateLanguage();

  const updateLanguage = useUpdateLanguage();

  return (
    <EntityFormWizard<LanguageFormSchema, Language>
      initialData={initialData}
      redirect={redirect}
      config={languageFormConfig}
      createMutation={createLanguage}
      updateMutation={updateLanguage}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <LocationStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
