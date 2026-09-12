"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { useCreateLanguage } from "@/hooks/location/language";

import { LanguageFormSchema, LanguageSchema } from "./form/schema";

import { languageDefaultValues } from "./form/default-values";

import { Language } from "@/types/location/language";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface LanguageCreateDialogProps extends EntityCreateDialogProps<Language> {}

// ======================================================
// COMPONENT
// ======================================================

export default function LanguageCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: LanguageCreateDialogProps) {
  const createLanguage = useCreateLanguage();

  return (
    <EntityCreateFormDialog<LanguageFormSchema, Partial<Language>, Language>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createLanguage}
      config={{
        schema: LanguageSchema,
        defaultValues: languageDefaultValues,
        title: "Create Language",
        description: "Create a new language",
        success: "Language created",
        submitText: "Create Language",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Language> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      {/* ====================================================== */}
      {/* BASIC */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<LanguageFormSchema>
          name="name"
          label="Language Name"
          placeholder="Language name"
        />

        <FormInput<LanguageFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Native name"
        />

        <FormInput<LanguageFormSchema>
          name="code"
          label="Code"
          placeholder="en"
        />

        <FormInput<LanguageFormSchema>
          name="iso3"
          label="ISO3"
          placeholder="eng"
        />

        <FormInput<LanguageFormSchema>
          name="locale"
          label="Locale"
          placeholder="en-US"
        />

        <FormInput<LanguageFormSchema>
          name="flagEmoji"
          label="Flag Emoji"
          placeholder="🇺🇸"
        />
      </div>

      {/* ====================================================== */}
      {/* STATUS */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-3">
        <FormSwitch<LanguageFormSchema>
          name="rtl"
          label="Right To Left (RTL)"
        />

        <FormSwitch<LanguageFormSchema> name="active" label="Active" />

        <FormSwitch<LanguageFormSchema>
          name="default"
          label="Default Language"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
