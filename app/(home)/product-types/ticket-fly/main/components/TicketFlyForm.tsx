"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateTicketFly,
  useUpdateTicketFly,
} from "@/hooks/product-types/ticket-fly";

import { FlyFormSchema } from "./form/schema/core/fly.schema"

import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { Country } from "@/types/location/country/country";

import { City } from "@/types/location/city";

import { District } from "@/types/location/district";

import { Ward } from "@/types/location/ward";

import { Address } from "@/types/location/address";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

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

import { ticketFlyFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import AirlineStep from "./step/airline.step";

import RouteStep from "./step/routes.step";

import TripsStep from "./step/trips.step";

import PricingStep from "./step/pricing.step";

import ExtrasStep from "./step/extras.step";

import PackagesStep from "./step/packages.step";

import PoliciesStep from "./step/policies.step";

import NoticeStep from "./step/notice.step";

import ImagesStep from "./step/images.step";

import ScheduleStep from "./step/schedule.step";

import SeoStep from "./step/seo.step";

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
  const createTicket = useCreateTicketFly();

  const updateTicket = useUpdateTicketFly();

  return (
    <EntityFormWizard<FlyFormSchema, Fly>
      initialData={initialData}
      config={ticketFlyFormConfig}
      createMutation={createTicket}
      updateMutation={updateTicket}
    >
      <FormWizardStep index={0}>
        <BasicStep
          providerBookingData={providerBookingData}
          serviceTypeData={serviceTypeData}
          bookingItemTypeData={bookingItemTypeData}
          bookingTypeData={bookingTypeData}
          addressData={addresses}
        />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <AirlineStep airlineData={airlineData} />
      </FormWizardStep>

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

      <FormWizardStep index={3}>
        <TripsStep aircraftData={aircraftData} />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <PricingStep
          priceRuleTypeData={priceRuleTypeData}
          cabinClassData={cabinClassData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <ExtrasStep
          extraData={extraData}
          currencyData={currencyData}
          bookingTypeData={bookingTypeData}
          extraTypeData={extraTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={6}>
        <PackagesStep
          packageData={packageData}
          bookingTypeData={bookingTypeData}
          currencyData={currencyData}
        />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <PoliciesStep
          policyData={policyData}
          policyTypeData={policyTypeData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={8}>
        <NoticeStep />
      </FormWizardStep>

      <FormWizardStep index={9}>
        <ImagesStep />
      </FormWizardStep>

      <FormWizardStep index={10}>
        <ScheduleStep aircraftData={aircraftData} />
      </FormWizardStep>

      <FormWizardStep index={11}>
        <SeoStep
          bookingTypeData={bookingTypeData}
          searchTagData={searchTagData}
        />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
