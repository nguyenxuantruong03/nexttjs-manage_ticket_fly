"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { Language } from "@/types/bookings/location/language";

import { useCreateLanguage } from "@/hooks/location/language";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { LanguageFormSchema, LanguageSchema } from "./form/schema";

import { languageDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createLanguage = useCreateLanguage();

  const { form } = useAppForm<LanguageFormSchema>({
    schema: LanguageSchema,
    defaultValues: languageDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...languageDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: LanguageFormSchema) => {
    submit({
      mutation: createLanguage.mutateAsync(values),

      success: "Language created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Language> = {
          value: response.id,
          label: response.name,
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Language"
      description="Create a new language"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createLanguage.isPending}
      >
        <div className="space-y-6">
          {/* ====================================================== */}
          {/* BASIC */}
          {/* ====================================================== */}

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
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
          <div
            className="
            grid
            gap-4
            md:grid-cols-3
            "
          >
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

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

          <div
            className="
            flex
            justify-end
            gap-3
            "
          >
            <Button
              type="button"
              variant="outline"
              disabled={createLanguage.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createLanguage.isPending}>
              {createLanguage.isPending ? "Creating..." : "Create Language"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
