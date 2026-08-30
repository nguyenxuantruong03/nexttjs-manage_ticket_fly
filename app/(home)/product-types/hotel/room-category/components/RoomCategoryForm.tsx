"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelRoomCategory,
  useUpdateHotelRoomCategory,
} from "@/hooks/product-types/hotel/hotel-room-category";

import { RoomCategory } from "@/types/product-types/hotel/room/room.types";

import { RoomCategoryFormSchema } from "./form/schema";

import { roomCategoryFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import SettingsStep from "./step/settings.step";

interface RoomCategoryFormProps {
  initialData?: RoomCategory;

  redirect?: boolean;
}

export default function RoomCategoryForm({
  initialData,

  redirect = true,
}: RoomCategoryFormProps) {
  const createRoomCategory = useCreateHotelRoomCategory();

  const updateRoomCategory = useUpdateHotelRoomCategory();

  return (
    <EntityFormWizard<RoomCategoryFormSchema, RoomCategory>
      initialData={initialData}
      redirect={redirect}
      config={roomCategoryFormConfig}
      createMutation={createRoomCategory}
      updateMutation={updateRoomCategory}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <SettingsStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}