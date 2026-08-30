"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateHotel, useUpdateHotel } from "@/hooks/product-types/hotel";

import { hotelFormConfig } from "./config";

import { HotelSchemaForm } from "./form/schema/core/hotel.schema";

import BasicStep from "./step/basic.step";

import BrandStep from "./step/brand.step";

import DetailsStep from "./step/details.step";

import RoomsStep from "./step/room.step";

import MealStep from "./step/meal.step";

import PricingStep from "./step/pricing.step";

import InformationStep from "./step/infomation.step";

import RatingStep from "./step/rating.step";

import InventoryStep from "./step/inventories.step";

import CheckInCheckOutStep from "./step/check-in-policy.step";

import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { ProviderBooking } from "@/types/users/provider-bookings";

import { Address } from "@/types/location/address";

import { Country } from "@/types/location/country/country";

import { City } from "@/types/location/city";

import { Ward } from "@/types/location/ward";

import { District } from "@/types/location/district";

import {
  BathroomType,
  BedType,
  RoomCategory,
  RoomView,
} from "@/types/product-types/hotel/room/room.types";

import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

import {
  DiningMealType,
  DiningServiceType,
} from "@/types/product-types/hotel/service/dinner-option.type";

import {
  HotelRatePlanType,
  MealPlan,
} from "@/types/product-types/hotel/pricing/rate-plan.types";

import {
  Accessibility,
  HotelBrand,
  HotelStarRating,
  Sustainability,
} from "@/types/product-types/hotel/hotel-detail";

import { BookingType } from "@/types/common/commerce/booking-type";

import SeoStep from "./step/seo.step";

import PackagesStep from "./step/package.step";

import MediaStep from "./step/media.step";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

import { Facility } from "@/types/common/features/facility/facility";

import { Package } from "@/types/common/commerce/package/package.type";

import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

import { Currency } from "@/types/location/currency";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import { Policy } from "@/types/common/features/policy/policy";

import ExtrasStep from "./step/extras.step";

import FacilitiesStep from "./step/facilities.step";

import HotelPolicyMapperStep from "./step/hotel-policy.step";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import { Extra } from "@/types/common/commerce/extra/extra.type";

import { ServiceType } from "@/types/common/catalog/service-type.type";

import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

interface HotelFormProps {
  initialData?: Hotel;

  searchTagData: SearchTag[];

  providerBooking: ProviderBooking[];

  addresses: Address[];

  countries: Country[];

  cities: City[];

  districts: District[];

  wards: Ward[];

  roomCategoryData: RoomCategory[];

  bathroomTypeData: BathroomType[];

  hotelRoomViewData: RoomView[];

  bedTypeData: BedType[];

  roomTypeData: HotelRoomType[];

  diningMealTypeData: DiningMealType[];

  diningServiceData: DiningServiceType[];

  ratePlanTypeData: HotelRatePlanType[];

  mealPlanData: MealPlan[];

  sustainabilityData: Sustainability[];

  accessibilityData: Accessibility[];

  brandData: HotelBrand[];

  starRatingData: HotelStarRating[];

  bookingTypeData: BookingType[];

  facilityData: Facility[];

  facilityCategoryData: FacilityCategory[];

  packageData: Package[];

  priceRuleTypeData: PriceRuleType[];

  policyData: Policy[];

  policyTypeData: PolicyType[];

  currencyData: Currency[];

  extraTypeData: ExtraType[];

  extraData: Extra[];

  serviceTypeData: ServiceType[];

  bookingItemTypeData: BookingItemType[];
}

export default function HotelForm({
  initialData,
  searchTagData,
  providerBooking,
  addresses,
  countries,
  cities,
  districts,
  wards,
  roomCategoryData,
  bathroomTypeData,
  hotelRoomViewData,
  bedTypeData,
  roomTypeData,
  diningMealTypeData,
  diningServiceData,
  ratePlanTypeData,
  mealPlanData,
  sustainabilityData,
  accessibilityData,
  brandData,
  starRatingData,
  bookingTypeData,
  facilityData,
  facilityCategoryData,
  packageData,
  priceRuleTypeData,
  policyTypeData,
  policyData,
  currencyData,
  extraTypeData,
  extraData,
  serviceTypeData,
  bookingItemTypeData,
}: HotelFormProps) {
  const createHotel = useCreateHotel();

  const updateHotel = useUpdateHotel();

  return (
    <EntityFormWizard<HotelSchemaForm, Hotel>
      initialData={initialData}
      config={hotelFormConfig}
      createMutation={createHotel}
      updateMutation={updateHotel}
    >
      <FormWizardStep index={0}>
        <BasicStep
          bookingTypeData={bookingTypeData}
          serviceTypeData={serviceTypeData}
          bookingItemTypeData={bookingItemTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BrandStep brandData={brandData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <CheckInCheckOutStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <DetailsStep
          sustainabilityData={sustainabilityData}
          accessibilityData={accessibilityData}
        />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <ExtrasStep
          extraData={extraData}
          bookingTypeData={bookingTypeData}
          currencyData={currencyData}
          extraTypeData={extraTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <FacilitiesStep
          facilityData={facilityData}
          facilityCategoryData={facilityCategoryData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={6}>
        <HotelPolicyMapperStep
          policyData={policyData}
          policyTypeData={policyTypeData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <InformationStep
          providerBookingData={providerBooking}
          addressData={addresses}
          countryData={countries}
          cityData={cities}
          districtData={districts}
          wardData={wards}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={8}>
        <InventoryStep roomTypeData={roomTypeData} />
      </FormWizardStep>

      <FormWizardStep index={9}>
        <MealStep
          diningMealTypeData={diningMealTypeData}
          diningServiceData={diningServiceData}
        />
      </FormWizardStep>

      <FormWizardStep index={10}>
        <MediaStep />
      </FormWizardStep>

      <FormWizardStep index={11}>
        <PackagesStep
          bookingTypeData={bookingTypeData}
          packageData={packageData}
          currencyData={currencyData}
        />
      </FormWizardStep>

      <FormWizardStep index={12}>
        <PricingStep
          policyData={policyData}
          policyTypeData={policyTypeData}
          priceRuleTypeData={priceRuleTypeData}
          bookingTypeData={bookingTypeData}
          ratePlanTypeData={ratePlanTypeData}
          mealPlanData={mealPlanData}
        />
      </FormWizardStep>

      <FormWizardStep index={13}>
        <RatingStep starRatingData={starRatingData} />
      </FormWizardStep>

      <FormWizardStep index={14}>
        <RoomsStep
          bedTypeData={bedTypeData}
          hotelRoomViewData={hotelRoomViewData}
          bathroomTypeData={bathroomTypeData}
          roomCategoryData={roomCategoryData}
          facilityData={facilityData}
          facilityCategoryData={facilityCategoryData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={15}>
        <SeoStep
          searchTagData={searchTagData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
