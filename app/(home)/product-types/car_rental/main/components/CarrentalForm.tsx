"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { carRentalSteps } from "./step/steps";

import {
  useCreateCarRental,
  useUpdateCarRental,
} from "@/hooks/product-types/car-rental";
import {
  CarRentalFormSchema,
  CarRentalSchema,
} from "./schema/core/car-rental.schema";
import { defaultCarRentalValues } from "./form/default-values";
import BasicStep from "./step/basic.step";
import VehiclesStep from "./step/vehicles.step";
import TripStep from "./step/trip.step";
import PricingStep from "./step/pricing.step";
import InsuranceStep from "./step/insurance.step";
import OperationStep from "./step/operation.step";
import AvailabilityStep from "./step/availability.step";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useSearchParams } from "next/navigation";
import { DraftEntity } from "@/components/daft/draft-config";
import { initCarRentalFormValues } from "./form/init-value";
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { BookingType } from "@/types/common/commerce/booking-type";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import { Address } from "@/types/location/address";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import {
  InsuranceBenefitType,
  InsuranceType,
} from "@/types/product-types/car_rental/insurance-type.type";
import PackageStep from "./step/package.step";
import MediasStep from "./step/media.step";
import PoliciesStep from "./step/policties.step";
import RequiredDocumentsStep from "./step/required-documents.step";
import PickupInstructionsStep from "./step/pickup-instructions.step";
import DriversStep from "./step/driver.step";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { Package } from "@/types/common/commerce/package/package.type";
import { Currency } from "@/types/location/currency";
import { PolicyType } from "@/types/common/features/policy/policy-type";
import { Policy } from "@/types/common/features/policy/policy";
import { Extra } from "@/types/common/commerce/extra/extra.type";
import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";
import { Facility } from "@/types/common/features/facility/facility";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";

interface CarRentalFormProps {
  initialData?: CarRental;
  searchTagData: SearchTag[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  bookingTypeData: BookingType[];
  vehicleTypeData: VehicleType[];
  priceRuleTypeData: PriceRuleType[];
  insuranceBenefitTypeData: InsuranceBenefitType[];
  insuranceTypeData: InsuranceType[];
  extraTypeData: ExtraType[];
  extraData: Extra[];
  providerBookingData: ProviderBooking[];
  serviceTypeData: ServiceType[];
  bookingItemTypeData: BookingItemType[];
  packageData: Package[];
  currencyData: Currency[];
  policyData: Policy[];
  policyTypeData: PolicyType[];
  documentTypeData: CarRentalDocumentType[];
  facilityData: Facility[];
  facilityCategoryData: FacilityCategory[];
}

export default function CarRentalForm({
  initialData,
  searchTagData,
  addresses,
  countries,
  cities,
  districts,
  wards,
  bookingTypeData,
  vehicleTypeData,
  priceRuleTypeData,
  insuranceBenefitTypeData,
  insuranceTypeData,
  extraTypeData,
  providerBookingData,
  serviceTypeData,
  extraData,
  bookingItemTypeData,
  packageData,
  currencyData,
  policyData,
  policyTypeData,
  documentTypeData,
  facilityData,
  facilityCategoryData,
}: CarRentalFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createCarRental = useCreateCarRental();
  const updateCarRental = useUpdateCarRental();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<CarRentalFormSchema>({
    schema: CarRentalSchema,
    defaultValues: initialData
      ? initCarRentalFormValues(initialData)
      : defaultCarRentalValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.CarRental,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateCarRental.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCarRental.mutateAsync(values),
      success: isUpdate ? "Car Rental updated" : "Car Rental created",
      redirect: "/car-rental",
    });

    clearDraft();

    form.reset(defaultCarRentalValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={carRentalSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={carRentalSteps} />

        <FormWizardContent>
          {/* ======================================================
      1. AVAILABILITY
  ====================================================== */}
          <FormWizardStep index={0}>
            <AvailabilityStep
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          </FormWizardStep>

          {/* ======================================================
      2. BASIC
  ====================================================== */}
          <FormWizardStep index={1}>
            <BasicStep
              providerBookingData={providerBookingData}
              bookingTypeData={bookingTypeData}
              addressData={addresses}
              serviceTypeData={serviceTypeData}
              bookingItemTypeData={bookingItemTypeData}
              searchTagData={searchTagData}
            />
          </FormWizardStep>

          {/* ======================================================
      3. DRIVER
  ====================================================== */}
          <FormWizardStep index={2}>
            <DriversStep />
          </FormWizardStep>

          {/* ======================================================
      4. INSURANCE
  ====================================================== */}
          <FormWizardStep index={3}>
            <InsuranceStep
              insuranceBenefitTypeData={insuranceBenefitTypeData}
              insuranceTypeData={insuranceTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
      5. MEDIA
  ====================================================== */}
          <FormWizardStep index={4}>
            <MediasStep />
          </FormWizardStep>

          {/* ======================================================
      6. OPERATION
  ====================================================== */}
          <FormWizardStep index={5}>
            <OperationStep />
          </FormWizardStep>

          {/* ======================================================
      7. PACKAGE
  ====================================================== */}
          <FormWizardStep index={6}>
            <PackageStep
              packageData={packageData}
              bookingTypeData={bookingTypeData}
              currencyData={currencyData}
            />
          </FormWizardStep>

          {/* ======================================================
      8. PICKUP INSTRUCTIONS
  ====================================================== */}
          <FormWizardStep index={7}>
            <PickupInstructionsStep />
          </FormWizardStep>

          {/* ======================================================
      9. POLICIES
  ====================================================== */}
          <FormWizardStep index={8}>
            <PoliciesStep
              policyData={policyData}
              policyTypeData={policyTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
      10. PRICING
  ====================================================== */}
          <FormWizardStep index={9}>
            <PricingStep
              extraData={extraData}
              currencyData={currencyData}
              extraTypeData={extraTypeData}
              bookingTypeData={bookingTypeData}
              priceRuleTypeData={priceRuleTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
      11. REQUIRED DOCUMENTS
  ====================================================== */}
          <FormWizardStep index={10}>
            <RequiredDocumentsStep documentTypeData={documentTypeData} />
          </FormWizardStep>

          {/* ======================================================
      12. TRIP
  ====================================================== */}
          <FormWizardStep index={11}>
            <TripStep
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          </FormWizardStep>

          {/* ======================================================
      13. VEHICLES
  ====================================================== */}
          <FormWizardStep index={12}>
            <VehiclesStep
              facilityData={facilityData}
              facilityCategoryData={facilityCategoryData}
              bookingTypeData={bookingTypeData}
              vehicleTypeData={vehicleTypeData}
            />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
