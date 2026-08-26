"use client";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { airportTransferSteps } from "./step/steps";

import { AppForm } from "@/components/form/form-data";

import { useAppForm } from "@/hooks/useAppForm";
import { airportTransferDefaultValues } from "./form/default-values";

import { useSubmit } from "@/hooks/useSubmit";
import {
  useCreateAirportTransfer,
  useUpdateAirportTransfer,
} from "@/hooks/product-types/airport-transfer";
import BasicStep from "./step/basic.step";
import RouteStep from "./step/route.step";
import VehicleStep from "./step/vehicle.step";
import ServiceStep from "./step/service.step";
import PricingStep from "./step/pricing.step";
import TripStep from "./step/trip.step";
import {
  AirportTransferFormSchema,
  AirportTransferSchema,
} from "./schema/core/schema";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useSearchParams } from "next/navigation";
import { DraftEntity } from "@/components/daft/draft-config";
import { initAirportTransferFormValues } from "./form/init-value";
import ExtrasStep from "./step/extras.step";
import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { Ward } from "@/types/location/ward";
import { District } from "@/types/location/district";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Address } from "@/types/location/address";
import { FuelType } from "@/types/common/catalog/fuel-type";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { RouteType } from "@/types/common/catalog/route-type.type";
import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import AvailabilityStep from "./step/availability.step";
import CapacityStep from "./step/capacity.step";
import PackageStep from "./step/package.step";
import PoliciesStep from "./step/policies.step";
import SeoStep from "./step/seo.step";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { Extra } from "@/types/common/commerce/extra/extra.type";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import { Currency } from "@/types/location/currency";
import { Package } from "@/types/common/commerce/package/package.type";
import { PolicyType } from "@/types/common/features/policy/policy-type";
import { Policy } from "@/types/common/features/policy/policy";
import { Language } from "@/types/location/language";

interface AirportTransferFormProps {
  initialData?: AirportTransfer;
  searchTagData: SearchTag[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  vehicleTypeData: VehicleType[];
  bookingTypeData: BookingType[];
  fuelTypeData: FuelType[];
  serviceTypeData: ServiceType[];
  routeTypeData: RouteType[];
  extraFeeTypeData: ExtraFeeType[];
  priceRuleTypeData: PriceRuleType[];
  providerBookingData: ProviderBooking[];
  bookingItemTypeData: BookingItemType[];
  extraData: Extra[];
  extraTypeData: ExtraType[];
  currencyData: Currency[];
  packageData: Package[];
  policyData: Policy[];
  policyTypeData: PolicyType[];
  languageData: Language[];
}

export default function AirportTransferForm({
  initialData,
  searchTagData,
  addresses,
  countries,
  cities,
  districts,
  wards,
  vehicleTypeData,
  bookingTypeData,
  fuelTypeData,
  serviceTypeData,
  routeTypeData,
  extraFeeTypeData,
  priceRuleTypeData,
  providerBookingData,
  bookingItemTypeData,
  extraData,
  extraTypeData,
  currencyData,
  packageData,
  policyData,
  policyTypeData,
  languageData,
}: AirportTransferFormProps) {
  const submit = useSubmit();

  const createAirportTransfer = useCreateAirportTransfer();
  const updateAirportTransfer = useUpdateAirportTransfer();
  const { setDirty } = useFormPage();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<AirportTransferFormSchema>({
    schema: AirportTransferSchema,

    defaultValues: initialData
      ? initAirportTransferFormValues(initialData)
      : airportTransferDefaultValues,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.AirportTransfer,
    draftId: currentDraftId,
  });

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateAirportTransfer.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createAirportTransfer.mutateAsync(values),
      success: isUpdate
        ? "Airport Transfer updated"
        : "Airport Transfer created",
      redirect: "/airport-transfer",
    });

    clearDraft();

    form.reset(airportTransferDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={airportTransferSteps}
        loading={isSubmitting}
        // unlockAll={!!initialData}
        unlockAll={true}
      >
        <FormWizardHeader steps={airportTransferSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep
              providerBookingData={providerBookingData}
              addressData={addresses}
              bookingItemTypeData={bookingItemTypeData}
              serviceTypeData={serviceTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <AvailabilityStep />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <CapacityStep />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <ExtrasStep
              extraData={extraData}
              extraTypeData={extraTypeData}
              currencyData={currencyData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <PackageStep
              packageData={packageData}
              currencyData={currencyData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <PoliciesStep
              policyData={policyData}
              policyTypeData={policyTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          <FormWizardStep index={6}>
            <PricingStep
              priceRuleTypeData={priceRuleTypeData}
              extraFeeTypeData={extraFeeTypeData}
              vehicleTypeData={vehicleTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          <FormWizardStep index={7}>
            <RouteStep
              routeTypeData={routeTypeData}
              bookingTypeData={bookingTypeData}
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          </FormWizardStep>

          <FormWizardStep index={8}>
            <SeoStep
              bookingTypeData={bookingTypeData}
              searchTagData={searchTagData}
            />
          </FormWizardStep>

          <FormWizardStep index={9}>
            <ServiceStep />
          </FormWizardStep>

          <FormWizardStep index={10}>
            <TripStep />
          </FormWizardStep>

          <FormWizardStep index={11}>
            <VehicleStep
              languageData={languageData}
              fuelTypeData={fuelTypeData}
              vehicleTypeData={vehicleTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
