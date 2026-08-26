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
import { useCreateYacht, useUpdateYacht } from "@/hooks/product-types/yacht";

// STEPS
import BasicStep from "./step/basic.step";
import VehicleStep from "./step/vehicle.step";
import MarinaStep from "./step/marina.step";
import RoutesStep from "./step/routes.step";
import TripsStep from "./step/trips.step";
import PricingStep from "./step/pricing.step";
import CrewStep from "./step/crew.step";
import ImagesStep from "./step/images.step";
import SettingsStep from "./step/settings.step";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { initYachtFormValues } from "./form/init-value";
import { Yacht } from "@/types/product-types/yacht/core/yacht.types";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { Address } from "@/types/location/address";
import { BookingType } from "@/types/common/commerce/booking-type";
import { FuelType } from "@/types/common/catalog/fuel-type";
import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";
import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";
import NoticeStep from "./step/notice.step";
import AvailabilityStep from "./step/availability.step";
import PackagesStep from "./step/packages.step";
import ExtrasStep from "./step/extras.step";
import PoliciesStep from "./step/policies.step";
import { Facility } from "@/types/common/features/facility/facility";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { RouteType } from "@/types/common/catalog/route-type.type";
import { Package } from "@/types/common/commerce/package/package.type";
import { Currency } from "@/types/location/currency";
import { Policy } from "@/types/common/features/policy/policy";
import { PolicyType } from "@/types/common/features/policy/policy-type";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import { Extra } from "@/types/common/commerce/extra/extra.type";

interface YachtFormProps {
  initialData?: Yacht;
  searchTagData: SearchTag[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  bookingTypeData: BookingType[];
  fuelTypeData: FuelType[];
  conditionData: YachtCondition[];
  extraFeeTypeData: ExtraFeeType[];
  crewRoleData: YachtCrewRole[];
  facilityData: Facility[];
  facilityCategoryData: FacilityCategory[];
  providerBookingData: ProviderBooking[];
  serviceTypeData: ServiceType[];
  bookingItemTypeData: BookingItemType[];
  routeTypeData: RouteType[];
  packageData: Package[];
  currencyData: Currency[];
  policyData: Policy[];
  policyTypeData: PolicyType[];
  extraData: Extra[];
  extraTypeData: ExtraType[];
}

export default function YachtForm({
  initialData,
  searchTagData,
  addresses,
  countries,
  cities,
  districts,
  wards,
  bookingTypeData,
  fuelTypeData,
  conditionData,
  extraFeeTypeData,
  crewRoleData,
  facilityData,
  facilityCategoryData,
  providerBookingData,
  serviceTypeData,
  bookingItemTypeData,
  routeTypeData,
  packageData,
  currencyData,
  policyData,
  policyTypeData,
  extraData,
  extraTypeData,
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
            <BasicStep
              providerBookingData={providerBookingData}
              serviceTypeData={serviceTypeData}
              bookingItemTypeData={bookingItemTypeData}
              bookingTypeData={bookingTypeData}
              addressData={addresses}
            />
          </FormWizardStep>

          {/* NOTICE */}
          <FormWizardStep index={1}>
            <NoticeStep />
          </FormWizardStep>

          {/* VEHICLE */}
          <FormWizardStep index={2}>
            <VehicleStep
              facilityData={facilityData}
              facilityCategoryData={facilityCategoryData}
              fuelTypeData={fuelTypeData}
              bookingTypeData={bookingTypeData}
              conditionData={conditionData}
            />
          </FormWizardStep>

          {/* MARINA */}
          <FormWizardStep index={3}>
            <MarinaStep
              facilityData={facilityData}
              facilityCategoryData={facilityCategoryData}
              bookingTypeData={bookingTypeData}
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          </FormWizardStep>

          {/* ROUTES */}
          <FormWizardStep index={4}>
            <RoutesStep
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
              routeTypeData={routeTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* TRIPS */}
          <FormWizardStep index={5}>
            <TripsStep />
          </FormWizardStep>

          {/* AVAILABILITY */}
          <FormWizardStep index={6}>
            <AvailabilityStep />
          </FormWizardStep>

          {/* PRICING */}
          <FormWizardStep index={7}>
            <PricingStep />
          </FormWizardStep>

          {/* PACKAGES */}
          <FormWizardStep index={8}>
            <PackagesStep
              packageData={packageData}
              currencyData={currencyData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* EXTRAS */}
          <FormWizardStep index={9}>
            <ExtrasStep
              extraData={extraData}
              extraTypeData={extraTypeData}
              bookingTypeData={bookingTypeData}
              currencyData={currencyData}
            />
          </FormWizardStep>

          {/* CREW */}
          <FormWizardStep index={10}>
            <CrewStep crewRoleData={crewRoleData} />
          </FormWizardStep>

          {/* POLICIES */}
          <FormWizardStep index={11}>
            <PoliciesStep
              policyData={policyData}
              policyTypeData={policyTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* IMAGES */}
          <FormWizardStep index={12}>
            <ImagesStep />
          </FormWizardStep>

          {/* SETTINGS */}
          <FormWizardStep index={13}>
            <SettingsStep
              bookingTypeData={bookingTypeData}
              searchTagData={searchTagData}
            />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
