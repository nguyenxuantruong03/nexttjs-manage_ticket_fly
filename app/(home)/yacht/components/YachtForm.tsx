"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { yachtSteps } from "./step/steps";

import { YachtFormSchema, YachtSchema } from "./schema/core/yacht.schema";
import { defaultYachtValues } from "./form/default-values";
import { useCreateYacht, useUpdateYacht } from "@/hooks/yacht";

// STEPS
import BasicStep from "./step/basic.step";
import VehicleStep from "./step/vehicle.step";
import MarinaStep from "./step/marina.step";
import RoutesStep from "./step/routes.step";
import TripsStep from "./step/trips.step";
import PricingStep from "./step/pricing.step";
import PackagesStep from "./step/packages.step";
import ExtrasStep from "./step/extras.step";
import PoliciesStep from "./step/policies.step";
import CrewStep from "./step/crew.step";
import ImagesStep from "./step/images.step";
import SettingsStep from "./step/settings.step";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { Yacht } from "@/types/bookings/yacht/core/yacht.types";
import { initYachtFormValues } from "./form/init-value";
import { SearchTag } from "@/types/bookings/search/tag.types";
import { Address } from "@/types/bookings/location/address";
import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";

interface YachtFormProps {
  initialData?: Yacht;
  searchTagData: SearchTag[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

export default function YachtForm({
  initialData,
  searchTagData,
  addresses,
  countries,
  cities,
  districts,
  wards,
}: YachtFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createYacht = useCreateYacht();
  const updateYacht = useUpdateYacht();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<YachtFormSchema>({
    schema: YachtSchema,
    defaultValues: initialData
      ? initYachtFormValues(initialData)
      : defaultYachtValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Yacht,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateYacht.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createYacht.mutateAsync(values),
      success: isUpdate ? "Yacht updated" : "Yacht created",
      redirect: "/yacht",
    });

    clearDraft();

    form.reset(defaultYachtValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={yachtSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={yachtSteps} />

        <FormWizardContent>
          {/* BASIC */}
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* VEHICLE */}
          <FormWizardStep index={1}>
            <VehicleStep />
          </FormWizardStep>

          {/* MARINA */}
          <FormWizardStep index={2}>
            <MarinaStep
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          </FormWizardStep>

          {/* ROUTES */}
          <FormWizardStep index={3}>
            <RoutesStep
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          </FormWizardStep>

          {/* TRIPS */}
          <FormWizardStep index={4}>
            <TripsStep />
          </FormWizardStep>

          {/* PRICING */}
          <FormWizardStep index={5}>
            <PricingStep />
          </FormWizardStep>

          {/* PACKAGES */}
          <FormWizardStep index={6}>
            <PackagesStep />
          </FormWizardStep>

          {/* EXTRAS */}
          <FormWizardStep index={7}>
            <ExtrasStep />
          </FormWizardStep>

          {/* POLICIES */}
          <FormWizardStep index={8}>
            <PoliciesStep />
          </FormWizardStep>

          {/* CREW */}
          <FormWizardStep index={9}>
            <CrewStep />
          </FormWizardStep>

          {/* IMAGES */}
          <FormWizardStep index={10}>
            <ImagesStep />
          </FormWizardStep>

          {/* SETTINGS */}
          <FormWizardStep index={11}>
            <SettingsStep searchTagData={searchTagData} />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
