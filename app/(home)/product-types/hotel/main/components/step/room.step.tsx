// step/rooms.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { HotelSchemaForm } from "../form/schema/core/hotel.schema";
import { EntityOption } from "@/components/form/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import RoomCategoryCreateDialog from "../../../room-category/components/RoomCategoryCreateDialog";
import BathroomTypeCreateDialog from "../../../bathroom-type/components/BathRoomCreateDialog";
import RoomViewCreateDialog from "../../../room-view/components/RoomViewCreateDialog";
import BedTypeCreateDialog from "../../../bed-type/components/BedTypeCreateDialog";
import {
  BathroomType,
  BedType,
  RoomCategory,
  RoomView,
} from "@/types/product-types/hotel/room/room.types";
import { Facility } from "@/types/common/features/facility/facility";
import { MediaCategory } from "@/types/common/catalog/media-category";
import FacilityCreateDialog from "@/app/(home)/features/facility/main/components/FacilityCreateDialog";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import { BookingType } from "@/types/common/commerce/booking-type";
import MediaCategoryCreateDialog from "@/app/(home)/catalog/media-category/components/MediaCategoryCreateDialog";
import { MediaAsset } from "@/types/common/catalog/media-asset";
import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";

interface RoomStepProps {
  roomCategoryData: RoomCategory[];
  bathroomTypeData: BathroomType[];
  hotelRoomViewData: RoomView[];
  bedTypeData: BedType[];
  facilityData: Facility[];
  facilityCategoryData: FacilityCategory[];
  bookingTypeData: BookingType[];
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
}

export default function RoomsStep({
  roomCategoryData,
  bathroomTypeData,
  hotelRoomViewData,
  bedTypeData,
  facilityData,
  facilityCategoryData,
  bookingTypeData,
  mediaCategoryData,
  mediaAssetData,
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

  const facilityOptions: EntityOption<Facility>[] = facilityData.map(
    (facility) => ({
      value: facility.id,
      label: facility.name,
      description: facility.description ?? undefined,
      data: facility,
    }),
  );

  const mediaCategoryOptions: EntityOption<MediaCategory>[] =
    mediaCategoryData.map((mediaCategory) => ({
      value: mediaCategory.id,
      label: mediaCategory.name,
      description: mediaCategory.description ?? undefined,
      data: mediaCategory,
    }));

  const mediaAssetOptions: EntityOption<MediaAsset>[] = mediaAssetData.map(
    (mediaAsset) => ({
      value: mediaAsset.id,
      label: mediaAsset.caption ?? "",
      data: mediaAsset,
    }),
  );

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

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.sortOrder"
            label="Sort Order"
            type="number"
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

      <FormSection
        title="Room Facilities"
        description="Amenities available in this room type"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormEntitySelector<HotelSchemaForm, Facility>
            name="roomTypes.0.facilities.0.facilityId"
            label="Facility"
            placeholder="Search facility..."
            searchPlaceholder="Search facility..."
            emptyText="No facility found"
            createText="Create facility"
            options={facilityOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FacilityCreateDialog
                facilityCategoryData={facilityCategoryData}
                bookingTypeData={bookingTypeData}
                {...props}
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

      {/* ======================================================
          ROOM MEDIA
      ====================================================== */}

      <FormSection title="Room Media" description="Photos for this room type">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, MediaAsset>
            name="roomTypes.0.medias.0.mediaId"
            label="Media Asset"
            placeholder="Search media asset..."
            searchPlaceholder="Search media asset..."
            emptyText="No media asset found"
            createText="Create media asset"
            options={mediaAssetOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <MediaAssetCreateDialog
                folder="hotel/room"
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormEntitySelector<HotelSchemaForm, MediaCategory>
            name="roomTypes.0.medias.0.categoryId"
            label="Media Category"
            placeholder="Search media category..."
            searchPlaceholder="Search media category..."
            emptyText="No media category found"
            createText="Create media category"
            options={mediaCategoryOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <MediaCategoryCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormInput<HotelSchemaForm>
            name="roomTypes.0.medias.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="roomTypes.0.medias.0.isPrimary"
            label="Primary"
            description="Use as the main room image"
          />
        </div>
      </FormSection>
    </>
  );
}
