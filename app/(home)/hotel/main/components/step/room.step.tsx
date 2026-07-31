// step/rooms.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
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
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import RoomCategoryCreateDialog from "../../../room-category/components/RoomCategoryCreateDialog";
import BathroomTypeCreateDialog from "../../../bathroom-type/components/BathRoomCreateDialog";
import RoomViewCreateDialog from "../../../room-view/components/RoomViewCreateDialog";
import BedTypeCreateDialog from "../../../bed-type/components/BedTypeCreateDialog";
import FacilityCreateDialog from "../../../facility/components/FacilityCreateDialog";

interface RoomStepProps {
  roomCategoryData: RoomCategory[];
  bathroomTypeData: BathroomType[];
  hotelRoomViewData: RoomView[];
  bedTypeData: BedType[];
  hotelFacilityData: HotelFacility[];
  facilityCategories: FacilityCategory[];
}

export default function RoomsStep({
  roomCategoryData,
  bathroomTypeData,
  hotelRoomViewData,
  bedTypeData,
  hotelFacilityData,
  facilityCategories,
}: RoomStepProps) {
  const roomCategoryEntityOptions: EntityOption<RoomCategory>[] =
    roomCategoryData.map((category) => ({
      value: category.id,
      label: category.name,
      description: category.description ?? undefined,
      data: category,
    }));

  const bathroomTypeEntityOptions: EntityOption<BathroomType>[] =
    bathroomTypeData.map((type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }));

  const roomViewEntityOptions: EntityOption<RoomView>[] = hotelRoomViewData.map(
    (view) => ({
      value: view.id,
      label: view.name,
      description: view.description ?? undefined,
      data: view,
    }),
  );

  const bedTypeEntityOptions: EntityOption<BedType>[] = bedTypeData.map(
    (bedType) => ({
      value: bedType.id,
      label: bedType.name,
      description: bedType.description ?? undefined,
      data: bedType,
    }),
  );

  const facilityEntityOptions: EntityOption<HotelFacility>[] =
    hotelFacilityData.map((facility) => ({
      value: facility.id,
      label: facility.name,
      description: facility.description ?? undefined,
      data: facility,
    }));
  return (
    <>
      {/* ======================================================
          ROOM BASIC
      ====================================================== */}

      <FormSection
        title="Room Information"
        description="Room type configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="roomTypes.0.name"
            label="Room Name"
            placeholder="Deluxe Ocean View"
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.code"
            label="Room Code"
            placeholder="DLX-001"
          />

          <FormEntitySelector<HotelSchemaForm, RoomCategory>
            name="roomTypes.0.categoryId"
            label="Room Category"
            placeholder="Search room category..."
            searchPlaceholder="Search room category..."
            emptyText="No room category found"
            createText="Create room category"
            options={roomCategoryEntityOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <RoomCategoryCreateDialog {...props} />
            )}
          />

          <FormEntitySelector<HotelSchemaForm, BathroomType>
            name="roomTypes.0.bathroomTypeId"
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

          <FormEntitySelector<HotelSchemaForm, RoomView>
            name="roomTypes.0.viewId"
            label="Room View"
            placeholder="Search room view..."
            searchPlaceholder="Search room view..."
            emptyText="No room view found"
            createText="Create room view"
            options={roomViewEntityOptions}
            enableCreate
            renderCreateDialog={(props) => <RoomViewCreateDialog {...props} />}
          />
          <FormInput<HotelSchemaForm>
            name="roomTypes.0.description"
            label="Description"
          />
        </div>
      </FormSection>

      {/* ======================================================
          ROOM CAPACITY
      ====================================================== */}

      <FormSection title="Capacity" description="Room size and guest limits">
        <div className="grid gap-6 md:grid-cols-3">
          <FormInput<HotelSchemaForm>
            name="roomTypes.0.roomSize"
            label="Room Size"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.maxGuests"
            label="Max Guests"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.maxAdults"
            label="Max Adults"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.maxChildren"
            label="Max Children"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.bedCount"
            label="Bed Count"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.bathroomCount"
            label="Bathroom Count"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.floor"
            label="Floor"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          ROOM FEATURES
      ====================================================== */}

      <FormSection title="Room Features" description="Room options">
        <div className="grid gap-6 md:grid-cols-4">
          <FormSwitch<HotelSchemaForm>
            name="roomTypes.0.smokingAllowed"
            label="Smoking"
          />

          <FormSwitch<HotelSchemaForm>
            name="roomTypes.0.balcony"
            label="Balcony"
          />

          <FormSwitch<HotelSchemaForm>
            name="roomTypes.0.kitchen"
            label="Kitchen"
          />

          <FormSwitch<HotelSchemaForm>
            name="roomTypes.0.accessible"
            label="Accessible"
          />

          <FormSwitch<HotelSchemaForm>
            name="roomTypes.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      {/* ======================================================
          BED TYPES
      ====================================================== */}

      <FormSection title="Beds" description="Room bed configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, BedType>
            name="roomTypes.0.bedTypes.0.bedTypeId"
            label="Bed Type"
            placeholder="Search bed type..."
            searchPlaceholder="Search bed type..."
            emptyText="No bed type found"
            createText="Create bed type"
            options={bedTypeEntityOptions}
            enableCreate
            renderCreateDialog={(props) => <BedTypeCreateDialog {...props} />}
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.bedTypes.0.quantity"
            label="Quantity"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          ROOM FACILITIES
      ====================================================== */}

      <FormSection title="Room Facilities" description="Amenities inside room">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, HotelFacility>
            name="roomTypes.0.facilities.0.facilityId"
            label="Facility"
            placeholder="Search facility..."
            searchPlaceholder="Search facility..."
            emptyText="No facility found"
            createText="Create facility"
            options={facilityEntityOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FacilityCreateDialog
                {...props}
                categories={facilityCategories}
              />
            )}
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.facilities.0.quantity"
            label="Quantity"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.facilities.0.note"
            label="Note"
          />
        </div>
      </FormSection>
    </>
  );
}
