"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelRoomType,
  useUpdateHotelRoomType,
} from "@/hooks/product-types/hotel/hotel-room-type";

import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

import {
  BathroomType,
  RoomCategory,
  RoomView,
} from "@/types/product-types/hotel/room/room.types";

import { RoomTypeFormSchema } from "./form/schema";

import { roomTypeFormConfig } from "./config";

import RelationStep from "./step/relation.step";

import CapacityStep from "./step/capacity.step";

import FeaturesStep from "./step/feature.step";

import RoomStep from "./step/room.step";

import BasicStep from "./step/basic.step";

interface RoomTypeFormProps {
  initialData?: HotelRoomType;

  roomCategoryData: RoomCategory[];

  bathroomTypeData: BathroomType[];

  roomViewData: RoomView[];

  redirect?: boolean;
}

export default function RoomTypeForm({
  initialData,

  roomCategoryData,

  bathroomTypeData,

  roomViewData,

  redirect = true,
}: RoomTypeFormProps) {
  const createRoomType = useCreateHotelRoomType();

  const updateRoomType = useUpdateHotelRoomType();

  return (
    <EntityFormWizard<RoomTypeFormSchema, HotelRoomType>
      initialData={initialData}
      redirect={redirect}
      config={roomTypeFormConfig}
      createMutation={createRoomType}
      updateMutation={updateRoomType}
    >
      <FormWizardStep index={0}>
        <RelationStep
          roomViewData={roomViewData}
          bathroomTypeData={bathroomTypeData}
          roomCategoryData={roomCategoryData}
        />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <RoomStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <CapacityStep />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <FeaturesStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
