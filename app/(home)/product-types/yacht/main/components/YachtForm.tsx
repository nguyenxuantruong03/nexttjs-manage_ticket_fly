"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { YachtFormSchema } from "./form/schema/core/yacht.schema";

import { yachtFormConfig } from "./config";

import { useCreateYacht, useUpdateYacht } from "@/hooks/product-types/yacht";

import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import BasicStep from "./step/basic.step";

import VehicleStep from "./step/vehicle.step";

import MarinaStep from "./step/marina.step";

import RoutesStep from "./step/routes.step";

import TripsStep from "./step/trips.step";

import PricingStep from "./step/pricing.step";

import CrewStep from "./step/crew.step";

import ImagesStep from "./step/images.step";

import SettingsStep from "./step/settings.step";

import NoticeStep from "./step/notice.step";

import AvailabilityStep from "./step/availability.step";

import PackagesStep from "./step/packages.step";

import ExtrasStep from "./step/extras.step";

import PoliciesStep from "./step/policies.step";

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
  const createYacht = useCreateYacht();

  const updateYacht = useUpdateYacht();

  return (
    <EntityFormWizard<YachtFormSchema, Yacht>
      initialData={initialData}
      config={yachtFormConfig}
      createMutation={createYacht}
      updateMutation={updateYacht}
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
        <NoticeStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <VehicleStep
          facilityData={facilityData}
          facilityCategoryData={facilityCategoryData}
          fuelTypeData={fuelTypeData}
          bookingTypeData={bookingTypeData}
          conditionData={conditionData}
        />
      </FormWizardStep>

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

      <FormWizardStep index={5}>
        <TripsStep />
      </FormWizardStep>

      <FormWizardStep index={6}>
        <AvailabilityStep />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <PricingStep />
      </FormWizardStep>

      <FormWizardStep index={8}>
        <PackagesStep
          packageData={packageData}
          currencyData={currencyData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={9}>
        <ExtrasStep
          extraData={extraData}
          extraTypeData={extraTypeData}
          bookingTypeData={bookingTypeData}
          currencyData={currencyData}
        />
      </FormWizardStep>

      <FormWizardStep index={10}>
        <CrewStep crewRoleData={crewRoleData} />
      </FormWizardStep>

      <FormWizardStep index={11}>
        <PoliciesStep
          policyData={policyData}
          policyTypeData={policyTypeData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={12}>
        <ImagesStep />
      </FormWizardStep>

      <FormWizardStep index={13}>
        <SettingsStep
          bookingTypeData={bookingTypeData}
          searchTagData={searchTagData}
        />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
