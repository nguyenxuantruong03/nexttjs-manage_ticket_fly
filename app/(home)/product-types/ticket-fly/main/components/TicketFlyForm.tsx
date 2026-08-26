"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { flySteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import AirlineStep from "./step/airline.step";
import RouteStep from "./step/routes.step";
import NoticeStep from "./step/notice.step";
import SeoStep from "./step/seo.step";
import TripsStep from "./step/trips.step";
import PricingStep from "./step/pricing.step";
import ImagesStep from "./step/images.step";
import ScheduleStep from "./step/schedule.step";
import {
  useCreateTicketFly,
  useUpdateTicketFly,
} from "@/hooks/product-types/ticket-fly";
import { FlyFormSchema, TicketFlySchema } from "./schema/core/fly.schema";
import { FlyDefaultValues } from "./form/default-values";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { initTicketFlyFormValues } from "./form/init-value";
import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { Address } from "@/types/location/address";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import ExtrasStep from "./step/extras.step";
import PackagesStep from "./step/packages.step";
import PoliciesStep from "./step/policies.step";
import { FlyAirport } from "@/types/product-types/references/airport/airport.types";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";
import { FlyAirline } from "@/types/product-types/references/airline/airline.types";
import { RouteType } from "@/types/common/catalog/route-type.type";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";
import { Extra } from "@/types/common/commerce/extra/extra.type";
import { Currency } from "@/types/location/currency";
import { Package } from "@/types/common/commerce/package/package.type";
import { PolicyType } from "@/types/common/features/policy/policy-type";
import { Policy } from "@/types/common/features/policy/policy";

interface TicketFlyFormProps {
  initialData?: Fly;
  searchTagData: SearchTag[];
  addresses: Address[];
  airports: FlyAirport[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  extraTypeData: ExtraType[];
  providerBookingData: ProviderBooking[];
  serviceTypeData: ServiceType[];
  bookingItemTypeData: BookingItemType[];
  bookingTypeData: BookingType[];
  airlineData: FlyAirline[];
  routeTypeData: RouteType[];
  aircraftData: FlyAircraft[];
  priceRuleTypeData: PriceRuleType[];
  cabinClassData: FlyCabinClass[];
  extraData: Extra[];
  currencyData: Currency[];
  packageData: Package[];
  policyData: Policy[];
  policyTypeData: PolicyType[];
}

export default function TicketFlyForm({
  initialData,
  searchTagData,
  addresses,
  countries,
  cities,
  districts,
  wards,
  airports,
  extraTypeData,
  providerBookingData,
  serviceTypeData,
  bookingItemTypeData,
  bookingTypeData,
  airlineData,
  routeTypeData,
  aircraftData,
  priceRuleTypeData,
  cabinClassData,
  extraData,
  currencyData,
  packageData,
  policyData,
  policyTypeData,
}: TicketFlyFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createTicket = useCreateTicketFly();
  const updateTicket = useUpdateTicketFly();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyFormSchema>({
    schema: TicketFlySchema,
    defaultValues: initialData
      ? initTicketFlyFormValues(initialData)
      : FlyDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Ticketflight,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateTicket.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createTicket.mutateAsync(values),
      success: isUpdate ? "Ticket updated" : "Ticket created",
      redirect: "/ticket",
    });

    clearDraft();

    form.reset(FlyDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={flySteps}
        loading={isSubmitting}
        // unlockAll={!!initialData}
        unlockAll={true}
      >
        <FormWizardHeader steps={flySteps} />

        <FormWizardContent>
          {/* ====================================================== */}
          {/* 0. BASIC */}
          {/* ====================================================== */}

          <FormWizardStep index={0}>
            <BasicStep
              providerBookingData={providerBookingData}
              serviceTypeData={serviceTypeData}
              bookingItemTypeData={bookingItemTypeData}
              bookingTypeData={bookingTypeData}
              addressData={addresses}
            />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 1. AIRLINE */}
          {/* ====================================================== */}

          <FormWizardStep index={1}>
            <AirlineStep airlineData={airlineData} />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 2. ROUTES */}
          {/* ====================================================== */}

          <FormWizardStep index={2}>
            <RouteStep
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
              airports={airports}
              bookingTypeData={bookingTypeData}
              routeTypeData={routeTypeData}
            />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 3. TRIPS */}
          {/* ====================================================== */}

          <FormWizardStep index={3}>
            <TripsStep aircraftData={aircraftData} />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 4. PRICING */}
          {/* ====================================================== */}

          <FormWizardStep index={4}>
            <PricingStep
              priceRuleTypeData={priceRuleTypeData}
              cabinClassData={cabinClassData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 5. EXTRAS */}
          {/* ====================================================== */}

          <FormWizardStep index={5}>
            <ExtrasStep
              extraData={extraData}
              currencyData={currencyData}
              bookingTypeData={bookingTypeData}
              extraTypeData={extraTypeData}
            />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 6. PACKAGES */}
          {/* ====================================================== */}

          <FormWizardStep index={6}>
            <PackagesStep
              packageData={packageData}
              bookingTypeData={bookingTypeData}
              currencyData={currencyData}
            />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 7. POLICIES */}
          {/* ====================================================== */}

          <FormWizardStep index={7}>
            <PoliciesStep
              policyData={policyData}
              policyTypeData={policyTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 8. NOTICE */}
          {/* ====================================================== */}

          <FormWizardStep index={8}>
            <NoticeStep />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 9. IMAGES */}
          {/* ====================================================== */}

          <FormWizardStep index={9}>
            <ImagesStep />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 10. SCHEDULE */}
          {/* ====================================================== */}

          <FormWizardStep index={10}>
            <ScheduleStep aircraftData={aircraftData} />
          </FormWizardStep>

          {/* ====================================================== */}
          {/* 11. SEO */}
          {/* ====================================================== */}

          <FormWizardStep index={11}>
            <SeoStep
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
