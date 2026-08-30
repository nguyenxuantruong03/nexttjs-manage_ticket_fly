"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelRoomView,
  useUpdateHotelRoomView,
} from "@/hooks/product-types/hotel/hotel-room-view";

import { RoomView } from "@/types/product-types/hotel/room/room.types";

import { RoomViewFormSchema } from "./form/schema";

import { roomViewFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import SettingsStep from "./step/settings.step";

interface RoomViewFormProps {
  initialData?: RoomView;

  redirect?: boolean;
}

export default function RoomViewForm({
  initialData,

  redirect = true,
}: RoomViewFormProps) {
  const createRoomView = useCreateHotelRoomView();

  const updateRoomView = useUpdateHotelRoomView();

  return (
    <EntityFormWizard<RoomViewFormSchema, RoomView>
      initialData={initialData}
      redirect={redirect}
      config={roomViewFormConfig}
      createMutation={createRoomView}
      updateMutation={updateRoomView}
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