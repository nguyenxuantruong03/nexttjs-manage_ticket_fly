"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateCarRental,
  useUpdateCarRental,
} from "@/hooks/product-types/car-rental";

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

import { CarRentalFormSchema } from "./form/schema/core/car-rental.schema";

import { carRentalFormConfig } from "./config";

import AvailabilityStep from "./step/availability.step";

import BasicStep from "./step/basic.step";

import DriversStep from "./step/driver.step";

import InsuranceStep from "./step/insurance.step";

import MediasStep from "./step/media.step";

import OperationStep from "./step/operation.step";

import PackageStep from "./step/package.step";

import PickupInstructionsStep from "./step/pickup-instructions.step";

import PoliciesStep from "./step/policties.step";

import PricingStep from "./step/pricing.step";

import RequiredDocumentsStep from "./step/required-documents.step";

import TripStep from "./step/trip.step";

import VehiclesStep from "./step/vehicles.step";

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

  redirect?: boolean;
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

  redirect = true,
}: CarRentalFormProps) {
  const createCarRental = useCreateCarRental();

  const updateCarRental = useUpdateCarRental();

  return (
    <EntityFormWizard<CarRentalFormSchema, CarRental>
      initialData={initialData}
      redirect={redirect}
      config={carRentalFormConfig}
      createMutation={createCarRental}
      updateMutation={updateCarRental}
    >
      <FormWizardStep index={0}>
        <AvailabilityStep
          addresses={addresses}
          countries={countries}
          cities={cities}
          districts={districts}
          wards={wards}
        />
      </FormWizardStep>

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

      <FormWizardStep index={2}>
        <DriversStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <InsuranceStep
          insuranceBenefitTypeData={insuranceBenefitTypeData}
          insuranceTypeData={insuranceTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <MediasStep />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <OperationStep />
      </FormWizardStep>

      <FormWizardStep index={6}>
        <PackageStep
          packageData={packageData}
          bookingTypeData={bookingTypeData}
          currencyData={currencyData}
        />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <PickupInstructionsStep />
      </FormWizardStep>

      <FormWizardStep index={8}>
        <PoliciesStep
          policyData={policyData}
          policyTypeData={policyTypeData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={9}>
        <PricingStep
          extraData={extraData}
          currencyData={currencyData}
          extraTypeData={extraTypeData}
          bookingTypeData={bookingTypeData}
          priceRuleTypeData={priceRuleTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={10}>
        <RequiredDocumentsStep documentTypeData={documentTypeData} />
      </FormWizardStep>

      <FormWizardStep index={11}>
        <TripStep
          addresses={addresses}
          countries={countries}
          cities={cities}
          districts={districts}
          wards={wards}
        />
      </FormWizardStep>

      <FormWizardStep index={12}>
        <VehiclesStep
          facilityData={facilityData}
          facilityCategoryData={facilityCategoryData}
          bookingTypeData={bookingTypeData}
          vehicleTypeData={vehicleTypeData}
        />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
