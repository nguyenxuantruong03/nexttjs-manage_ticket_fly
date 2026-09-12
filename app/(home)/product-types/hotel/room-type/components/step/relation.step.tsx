"use client";

import FormSection from "@/components/form/FormSection";

import { RoomTypeFormSchema } from "../form/schema";
import { EntityOption } from "@/components/form/entity-selector";
import RoomCategoryCreateDialog from "../../../room-category/components/RoomCategoryCreateDialog";
import BathroomTypeCreateDialog from "../../../bathroom-type/components/BathRoomCreateDialog";
import RoomViewCreateDialog from "../../../room-view/components/RoomViewCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { BathroomType, RoomCategory, RoomView } from "@/types/product-types/hotel/room/room.types";

interface RelationStepProps {
  roomCategoryData: RoomCategory[];
  bathroomTypeData: BathroomType[];
  roomViewData: RoomView[];
}

export default function RelationStep({
  roomCategoryData,
  bathroomTypeData,
  roomViewData,
}: RelationStepProps) {
  const categoryEntityOptions: EntityOption<RoomCategory>[] =
    roomCategoryData.map((category) => ({
      value: category.id,
      label: category.name,
      description: category.description ?? undefined,
      data: category,
    }));

  const bathroomTypeEntityOptions: EntityOption<BathroomType>[] =
    bathroomTypeData.map((bathroomType) => ({
      value: bathroomType.id,
      label: bathroomType.name,
      description: bathroomType.description ?? undefined,
      data: bathroomType,
    }));

  const roomViewEntityOptions: EntityOption<RoomView>[] = roomViewData.map(
    (view) => ({
      value: view.id,
      label: view.name,
      description: view.description ?? undefined,
      data: view,
    }),
  );
  return (
    <FormSection
      title="Relations"
      description="Select hotel and room relations"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<RoomTypeFormSchema, RoomCategory>
          name="categoryId"
          label="Room Category"
          placeholder="Search room category..."
          searchPlaceholder="Search room category..."
          emptyText="No room category found"
          createText="Create room category"
          options={categoryEntityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <RoomCategoryCreateDialog {...props} />
          )}
        />

        <FormEntitySelector<RoomTypeFormSchema, BathroomType>
          name="bathroomTypeId"
          label="Bathroom Type"
          placeholder="Search bathroom type..."
          searchPlaceholder="Search bathroom type..."
          emptyText="No bathroom type found"
          createText="Create bathroom type"
          options={bathroomTypeEntityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <BathroomTypeCreateDialog {...props} />
          )}
        />

        <FormEntitySelector<RoomTypeFormSchema, RoomView>
          name="viewId"
          label="Room View"
          placeholder="Search room view..."
          searchPlaceholder="Search room view..."
          emptyText="No room view found"
          createText="Create room view"
          options={roomViewEntityOptions}
          enableCreate
          renderCreateDialog={(props) => <RoomViewCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
