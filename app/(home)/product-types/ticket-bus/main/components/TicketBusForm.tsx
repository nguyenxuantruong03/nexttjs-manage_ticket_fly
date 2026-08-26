"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { busDefaultValues } from "./form/default-values";
import { busSteps } from "./step/steps";

import { useCreateBus, useUpdateBus } from "@/hooks/product-types/bus";
import { BusFormSchema, BusSchema } from "./schema/core/bus.schema";
import BasicStep from "./step/basic.step";
import RoutesStep from "./step/routes.step";
import SeatsStep from "./step/seats.step";
import PricingStep from "./step/pricing.step";
import ScheduleStep from "./step/schedule.step";
import { useEffect, useMemo } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { initTicketBusFormValues } from "./form/init-value";
import { Bus } from "@/types/product-types/bus/core/bus.types";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Address } from "@/types/location/address";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";
import PackagesStep from "./step/package.step";
import ExtrasStep from "./step/extras.step";
import MediaStep from "./step/media.step";
import PoliciesStep from "./step/policies.step";
import VehiclesStep from "./step/vehicles.step";
import { Currency } from "@/types/location/currency";
import { Package } from "@/types/common/commerce/package/package.type";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import { Extra } from "@/types/common/commerce/extra/extra.type";
import { PolicyType } from "@/types/common/features/policy/policy-type";
import { Policy } from "@/types/common/features/policy/policy";
import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import { Facility } from "@/types/common/features/facility/facility";
import { FuelType } from "@/types/common/catalog/fuel-type";
import { RouteType } from "@/types/common/catalog/route-type.type";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { ServiceType } from "@/types/common/catalog/service-type.type";

interface TicketBusFormProps {
  initialData?: Bus;
  searchTagData: SearchTag[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  vehicleTypeData: VehicleType[];
  bookingTypeData: BookingType[];
  seatTypeData: BusSeatType[];
  currencyData: Currency[];
  packageData: Package[];
  extraTypeData: ExtraType[];
  extraData: Extra[];
  policyTypeData: PolicyType[];
  policyData: Policy[];
  extraFeeTypeData: ExtraFeeType[];
  priceRuleTypeData: PriceRuleType[];
  facilityCategoryData: FacilityCategory[];
  facilityData: Facility[];
  fuelTypeData: FuelType[];
  routeTypeData: RouteType[];
  providerBookingData: ProviderBooking[];
  bookingItemTypeData: BookingItemType[];
  serviceTypeData: ServiceType[];
}

export default function TicketBusForm({
  initialData,
  searchTagData,
  addresses,
  countries,
  cities,
  districts,
  wards,
  vehicleTypeData,
  bookingTypeData,
  seatTypeData,
  currencyData,
  packageData,
  extraTypeData,
  extraData,
  policyTypeData,
  policyData,
  extraFeeTypeData,
  priceRuleTypeData,
  facilityCategoryData,
  facilityData,
  fuelTypeData,
  routeTypeData,
  providerBookingData,
  bookingItemTypeData,
  serviceTypeData,
}: TicketBusFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createBus = useCreateBus();
  const updateBus = useUpdateBus();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<BusFormSchema>({
    schema: BusSchema,
    defaultValues: initialData
      ? initTicketBusFormValues(initialData)
      : busDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Ticketbus,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateBus.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createBus.mutateAsync(values),
      success: isUpdate ? "Bus updated" : "Bus created",
      redirect: "/bus",
    });

    clearDraft();

    form.reset(busDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={busSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={busSteps} />

        <FormWizardContent>
          {/* 0 - Basic */}
          <FormWizardStep index={0}>
            <BasicStep
              serviceTypeData={serviceTypeData}
              bookingItemTypeData={bookingItemTypeData}
              providerBookingData={providerBookingData}
              bookingTypeData={bookingTypeData}
              addressData={addresses}
              searchTagData={searchTagData}
            />
          </FormWizardStep>

          {/* 1 - Routes */}
          <FormWizardStep index={1}>
            <RoutesStep
              seatTypeData={seatTypeData}
              routeTypeData={routeTypeData}
              bookingTypeData={bookingTypeData}
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          </FormWizardStep>

          {/* 2 - Vehicles */}
          <FormWizardStep index={2}>
            <VehiclesStep
              fuelTypeData={fuelTypeData}
              facilityData={facilityData}
              facilityCategoryData={facilityCategoryData}
              vehicleTypeData={vehicleTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* 3 - Seats */}
          <FormWizardStep index={3}>
            <SeatsStep seatTypeData={seatTypeData} />
          </FormWizardStep>

          {/* 4 - Pricing */}
          <FormWizardStep index={4}>
            <PricingStep
              seatTypeData={seatTypeData}
              priceRuleTypeData={priceRuleTypeData}
              extraFeeTypeData={extraFeeTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* 5 - Policies */}
          <FormWizardStep index={5}>
            <PoliciesStep
              policyData={policyData}
              policyTypeData={policyTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* 6 - Images */}
          <FormWizardStep index={6}>
            <MediaStep />
          </FormWizardStep>

          {/* 7 - Schedule */}
          <FormWizardStep index={7}>
            <ScheduleStep />
          </FormWizardStep>

          {/* 8 - Extras */}
          <FormWizardStep index={8}>
            <ExtrasStep
              extraData={extraData}
              extraTypeData={extraTypeData}
              currencyData={currencyData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* 9 - Packages */}
          <FormWizardStep index={9}>
            <PackagesStep
              packageData={packageData}
              currencyData={currencyData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
