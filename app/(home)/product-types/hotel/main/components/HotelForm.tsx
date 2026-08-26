"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";

import { hotelDefaultValues } from "./form/default-values";

import { hotelSteps } from "./step/steps";

import BasicStep from "./step/basic.step";

import BrandStep from "./step/brand.step";

import DetailsStep from "./step/details.step";

import { useCreateHotel, useUpdateHotel } from "@/hooks/product-types/hotel";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormPage } from "@/components/form/form-context";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import { initHotelFormValues } from "./form/init-value";

import { HotelSchema, HotelSchemaForm } from "./schema/core/hotel.schema";

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
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createHotel = useCreateHotel();

  const updateHotel = useUpdateHotel();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<HotelSchemaForm>({
    schema: HotelSchema,

    defaultValues: initialData
      ? initHotelFormValues(initialData)
      : hotelDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.Hotel,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateHotel.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createHotel.mutateAsync(values),

      success: isUpdate ? "Hotel updated" : "Hotel created",

      redirect: "/hotel",
    });

    clearDraft();

    form.reset(hotelDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={hotelSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={hotelSteps} />

        <FormWizardContent>
          {/* ======================================================
      1. BASIC
  ====================================================== */}
          <FormWizardStep index={0}>
            <BasicStep
              bookingTypeData={bookingTypeData}
              serviceTypeData={serviceTypeData}
              bookingItemTypeData={bookingItemTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
      2. BRAND
  ====================================================== */}
          <FormWizardStep index={1}>
            <BrandStep brandData={brandData} />
          </FormWizardStep>

          {/* ======================================================
      3. CHECK-IN POLICY
  ====================================================== */}
          <FormWizardStep index={2}>
            <CheckInCheckOutStep />
          </FormWizardStep>

          {/* ======================================================
      4. DETAILS
  ====================================================== */}
          <FormWizardStep index={3}>
            <DetailsStep
              sustainabilityData={sustainabilityData}
              accessibilityData={accessibilityData}
            />
          </FormWizardStep>

          {/* ======================================================
      5. EXTRAS
  ====================================================== */}
          <FormWizardStep index={4}>
            <ExtrasStep
              extraData={extraData}
              bookingTypeData={bookingTypeData}
              currencyData={currencyData}
              extraTypeData={extraTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
      6. FACILITIES
  ====================================================== */}
          <FormWizardStep index={5}>
            <FacilitiesStep
              facilityData={facilityData}
              facilityCategoryData={facilityCategoryData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
      7. HOTEL POLICY
  ====================================================== */}
          <FormWizardStep index={6}>
            <HotelPolicyMapperStep
              policyData={policyData}
              policyTypeData={policyTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
      8. INFORMATION
  ====================================================== */}
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

          {/* ======================================================
      9. INVENTORIES
  ====================================================== */}
          <FormWizardStep index={8}>
            <InventoryStep roomTypeData={roomTypeData} />
          </FormWizardStep>

          {/* ======================================================
      10. MEAL
  ====================================================== */}
          <FormWizardStep index={9}>
            <MealStep
              diningMealTypeData={diningMealTypeData}
              diningServiceData={diningServiceData}
            />
          </FormWizardStep>

          {/* ======================================================
      11. MEDIA
  ====================================================== */}
          <FormWizardStep index={10}>
            <MediaStep />
          </FormWizardStep>

          {/* ======================================================
      12. PACKAGE
  ====================================================== */}
          <FormWizardStep index={11}>
            <PackagesStep
              bookingTypeData={bookingTypeData}
              packageData={packageData}
              currencyData={currencyData}
            />
          </FormWizardStep>

          {/* ======================================================
      13. PRICING
  ====================================================== */}
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

          {/* ======================================================
      14. RATING
  ====================================================== */}
          <FormWizardStep index={13}>
            <RatingStep starRatingData={starRatingData} />
          </FormWizardStep>

          {/* ======================================================
      15. ROOM
  ====================================================== */}
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

          {/* ======================================================
      16. SEO
  ====================================================== */}
          <FormWizardStep index={15}>
            <SeoStep
              searchTagData={searchTagData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
