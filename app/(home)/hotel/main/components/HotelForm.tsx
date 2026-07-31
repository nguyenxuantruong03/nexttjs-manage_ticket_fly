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

import ExtrasStep from "./step/extras.step";

import PriceStep from "./step/price.step";

import DetailsStep from "./step/details.step";

import { useCreateHotel, useUpdateHotel } from "@/hooks/hotel";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormPage } from "@/components/form/form-context";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import { Hotel } from "@/types/bookings/hotel/core/hotel.types";

import { initHotelFormValues } from "./form/init-value";

import { SearchTag } from "@/types/bookings/search/tag.types";
import { ProviderBooking } from "@/types/bookings/provider-bookings";

import { Address } from "@/types/bookings/location/address";
import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";
import { HotelSchema, HotelSchemaForm } from "./schema/core/hotel.schema";

import RoomsStep from "./step/room.step";
import FacilitiesStep from "./step/facilities.step";
import MealStep from "./step/meal.step";
import PricingStep from "./step/pricing.step";
import PoliciesStep from "./step/policies.step";
import InformationStep from "./step/infomation.step";
import MediasStep from "./step/medias.step";
import RatingStep from "./step/rating.step";
import InventoryStep from "./step/inventories.step";
import { HotelType } from "@/types/bookings/hotel/core/hotel-information.types";
import {
  HotelMedia,
  HotelMediaCategory,
} from "@/types/bookings/hotel/core/hotel-media.types";
import {
  BathroomType,
  BedType,
  RoomCategory,
  RoomView,
} from "@/types/bookings/hotel/room/room.types";
import {
  FacilityCategory,
  HotelFacility,
} from "@/types/bookings/hotel/facilities.types";
import { MediaAsset } from "@/types/bookings/hotel/media.type";
import { HotelRoomType } from "@/types/bookings/hotel/room/room-type.types";
import {
  DiningMealType,
  DiningServiceType,
} from "@/types/bookings/hotel/service/dinner-option.type";
import { ExtraType } from "@/types/bookings/hotel/service/extra.type";
import {
  HotelRatePlanType,
  MealPlan,
} from "@/types/bookings/hotel/pricing/rate-plan.types";
import {
  HotelPolicy,
  HotelPolicyType,
} from "@/types/bookings/hotel/policy.type";
import {
  Accessibility,
  HotelBrand,
  HotelStarRating,
  Sustainability,
} from "@/types/bookings/hotel/hotel-detail.type";

interface HotelFormProps {
  initialData?: Hotel;
  searchTagData: SearchTag[];
  providerBooking: ProviderBooking[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];

  hotelTypeData: HotelType[];
  mediaCategoryData: HotelMediaCategory[];
  roomCategoryData: RoomCategory[];
  bathroomTypeData: BathroomType[];
  hotelRoomViewData: RoomView[];
  bedTypeData: BedType[];
  hotelFacilityData: HotelFacility[];
  facilityCategoryData: FacilityCategory[];
  mediaAssestData: MediaAsset[];
  roomTypeData: HotelRoomType[];
  diningMealTypeData: DiningMealType[];
  diningServiceData: DiningServiceType[];
  extraTypeData: ExtraType[];
  ratePlanTypeData: HotelRatePlanType[];
  mealPlanData: MealPlan[];
  policyData: HotelPolicy[];
  policyTypeData: HotelPolicyType[];
  sustainabilityData: Sustainability[];
  accessibilityData: Accessibility[];
  brandData: HotelBrand[];
  starRatingData: HotelStarRating[];
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
  hotelTypeData,
  mediaCategoryData,
  roomCategoryData,
  bathroomTypeData,
  hotelRoomViewData,
  bedTypeData,
  hotelFacilityData,
  facilityCategoryData,
  mediaAssestData,
  roomTypeData,
  diningMealTypeData,
  diningServiceData,
  extraTypeData,
  ratePlanTypeData,
  mealPlanData,
  policyData,
  policyTypeData,
  sustainabilityData,
  accessibilityData,
  brandData,
  starRatingData,
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
          <FormWizardStep index={0}>
            <BasicStep searchTagData={searchTagData} />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <InformationStep
              providerBookingData={providerBooking}
              addressData={addresses}
              countryData={countries}
              cityData={cities}
              districtData={districts}
              wardData={wards}
              hotelTypeData={hotelTypeData}
            />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <MediasStep
              mediaAssestData={mediaAssestData}
              mediaCategoryData={mediaCategoryData}
            />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <RoomsStep
              facilityCategories={facilityCategoryData}
              hotelFacilityData={hotelFacilityData}
              bedTypeData={bedTypeData}
              hotelRoomViewData={hotelRoomViewData}
              bathroomTypeData={bathroomTypeData}
              roomCategoryData={roomCategoryData}
            />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <InventoryStep roomTypeData={roomTypeData} />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <FacilitiesStep
              facilityData={hotelFacilityData}
              facilityCategoryData={facilityCategoryData}
            />
          </FormWizardStep>

          <FormWizardStep index={6}>
            <MealStep
              diningMealTypeData={diningMealTypeData}
              diningServiceData={diningServiceData}
            />
          </FormWizardStep>

          <FormWizardStep index={7}>
            <ExtrasStep extraTypeData={extraTypeData} />
          </FormWizardStep>

          <FormWizardStep index={8}>
            <PricingStep
              roomTypeData={roomTypeData}
              ratePlanTypeData={ratePlanTypeData}
              mealPlanData={mealPlanData}
            />
          </FormWizardStep>

          <FormWizardStep index={9}>
            <PriceStep />
          </FormWizardStep>

          <FormWizardStep index={10}>
            <PoliciesStep
              policyData={policyData}
              policyTypeData={policyTypeData}
            />
          </FormWizardStep>

          <FormWizardStep index={11}>
            <DetailsStep
              sustainabilityData={sustainabilityData}
              accessibilityData={accessibilityData}
            />
          </FormWizardStep>

          <FormWizardStep index={12}>
            <BrandStep brandData={brandData} starRatingData={starRatingData} />
          </FormWizardStep>

          <FormWizardStep index={13}>
            <RatingStep starRatingData={starRatingData} />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
