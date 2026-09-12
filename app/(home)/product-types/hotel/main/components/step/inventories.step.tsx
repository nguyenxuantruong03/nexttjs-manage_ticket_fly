"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { HotelSchemaForm } from "../form/schema/core/hotel.schema";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import RoomTypeCreateDialog from "../../../room-type/components/RoomTypeCreateDialog";
import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

interface InventoryStepProps {
  roomTypeData: HotelRoomType[];
}

export default function InventoryStep({ roomTypeData }: InventoryStepProps) {
  const roomTypeOptions: EntityOption<HotelRoomType>[] = roomTypeData.map(
    (roomType) => ({
      value: roomType.id,
      label: roomType.name,
      description: roomType.description ?? undefined,
      data: roomType,
    }),
  );
  return (
    <>
      <FormSection title="Inventory" description="Room inventory management">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, HotelRoomType>
            name="inventories.0.roomTypeId"
            label="Room Type"
            placeholder="Search room type..."
            searchPlaceholder="Search room type..."
            emptyText="No room type found"
            createText="Create room type"
            options={roomTypeOptions}
            enableCreate
            renderCreateDialog={(props) => <RoomTypeCreateDialog {...props} />}
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.availability.availableRooms"
            label="Available Rooms"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.availability.lastUpdated"
            label="Last Updated"
          />
        </div>
      </FormSection>

      <FormSection
        title="Availability Calendar"
        description="Daily room availability"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput
            name="inventories.0.availability.calendar.0.date"
            label="Date"
          />

          <FormInput
            name="inventories.0.availability.calendar.0.totalRooms"
            label="Total Rooms"
            type="number"
          />

          <FormInput
            name="inventories.0.availability.calendar.0.remainingRooms"
            label="Remaining Rooms"
            type="number"
          />

          <FormInput
            name="inventories.0.availability.calendar.0.priceOverride"
            label="Price Override"
            type="number"
          />

          <FormInput
            name="inventories.0.availability.calendar.0.minimumStay"
            label="Minimum Stay"
            type="number"
          />

          <FormSwitch
            name="inventories.0.availability.calendar.0.available"
            label="Available"
          />

          <FormSwitch
            name="inventories.0.availability.calendar.0.stopSell"
            label="Stop Sell"
          />

          <FormSwitch
            name="inventories.0.availability.calendar.0.closed"
            label="Closed"
          />

          <FormSwitch
            name="inventories.0.availability.calendar.0.closedToArrival"
            label="Closed To Arrival"
          />

          <FormSwitch
            name="inventories.0.availability.calendar.0.closedToDeparture"
            label="Closed To Departure"
          />

          <FormInput
            name="inventories.0.availability.calendar.0.note"
            label="Note"
          />
        </div>
      </FormSection>
    </>
  );
}
