"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateBus, useUpdateBus } from "@/hooks/product-types/bus";

import { BusFormSchema } from "./form/schema/core/bus.schema";

import { BusUpdateInput, BusCreateInput, ticketBusFormConfig } from "./config";

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

import BasicStep from "./step/basic.step";

import RoutesStep from "./step/routes.step";

import SeatsStep from "./step/seats.step";

import PricingStep from "./step/pricing.step";

import ScheduleStep from "./step/schedule.step";

import PackagesStep from "./step/package.step";

import ExtrasStep from "./step/extras.step";

import MediaStep from "./step/media.step";

import PoliciesStep from "./step/policies.step";

import VehiclesStep from "./step/vehicles.step";
import { MediaCategory } from "@/types/common/catalog/media-category";
import { MediaAsset } from "@/types/common/catalog/media-asset";

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
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
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
  mediaCategoryData,
  mediaAssetData,
}: TicketBusFormProps) {
  const createBus = useCreateBus();

  const updateBus = useUpdateBus();

  return (
    <EntityFormWizard<BusFormSchema, Bus, BusCreateInput, BusUpdateInput>
      initialData={initialData}
      config={ticketBusFormConfig}
      createMutation={createBus}
      updateMutation={updateBus}
    >
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

      <FormWizardStep index={2}>
        <VehiclesStep
          mediaCategoryData={mediaCategoryData}
          mediaAssetData={mediaAssetData}
          fuelTypeData={fuelTypeData}
          facilityData={facilityData}
          facilityCategoryData={facilityCategoryData}
          vehicleTypeData={vehicleTypeData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <SeatsStep seatTypeData={seatTypeData} />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <PricingStep
          seatTypeData={seatTypeData}
          priceRuleTypeData={priceRuleTypeData}
          extraFeeTypeData={extraFeeTypeData}
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
        <MediaStep
          mediaCategoryData={mediaCategoryData}
          mediaAssetData={mediaAssetData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <ScheduleStep />
      </FormWizardStep>

      <FormWizardStep index={8}>
        <ExtrasStep
          extraData={extraData}
          extraTypeData={extraTypeData}
          currencyData={currencyData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={9}>
        <PackagesStep
          packageData={packageData}
          currencyData={currencyData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
