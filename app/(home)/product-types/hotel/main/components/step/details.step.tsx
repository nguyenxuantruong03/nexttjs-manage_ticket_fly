"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import SustainabilityCreateDialog from "../../../sustainability/components/SustainabilityCreateDialog";
import AccessibilityCreateDialog from "../../../accessibility/components/AccessibilityCreateDialog";
import {
  Accessibility,
  Sustainability,
} from "@/types/product-types/hotel/hotel-detail";

interface DetailsStepProps {
  sustainabilityData: Sustainability[];
  accessibilityData: Accessibility[];
}

export default function DetailsStep({
  sustainabilityData,
  accessibilityData,
}: DetailsStepProps) {
  const sustainabilityOptions: EntityOption<Sustainability>[] =
    sustainabilityData.map((item) => ({
      value: item.id,
      label: item.name,
      description: item.description ?? undefined,
      data: item,
    }));

  const accessibilityOptions: EntityOption<Accessibility>[] =
    accessibilityData.map((item) => ({
      value: item.id,
      label: item.name,
      description: item.description ?? undefined,
      data: item,
    }));

  // const mediaOptions: EntityOption<Media>[] = mediaData.map((media) => ({
  //   value: media.id,
  //   label: media.name,
  //   data: media,
  // }));

  return (
    <>
      {/* ======================================================
          DESCRIPTIONS
      ====================================================== */}

      <FormSection
        title="Descriptions"
        description="Hotel content and descriptions"
      >
        <div className="grid gap-6">
          <FormInput<HotelSchemaForm>
            name="descriptions.0.title"
            label="Title"
            placeholder="Luxury hotel near city center"
          />

          <FormTextarea<HotelSchemaForm>
            name="descriptions.0.content"
            label="Description"
            placeholder="Describe the hotel..."
          />
        </div>
      </FormSection>

      {/* ======================================================
          CONTACT
      ====================================================== */}

      <FormSection
        title="Contact Information"
        description="Hotel contact details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="contacts.phone"
            label="Phone"
            placeholder="+84..."
          />

          <FormInput<HotelSchemaForm>
            name="contacts.email"
            label="Email"
            placeholder="hotel@example.com"
          />

          <FormInput<HotelSchemaForm>
            name="contacts.website"
            label="Website"
            placeholder="https://..."
          />
        </div>
      </FormSection>

      {/* ======================================================
          OPENING HOURS
      ====================================================== */}

      <FormSection title="Opening Hours" description="Hotel service schedules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="openingHours.0.service"
            label="Service"
            placeholder="Reception"
          />

          <FormInput<HotelSchemaForm>
            name="openingHours.0.day"
            label="Day"
            placeholder="Monday - Sunday"
          />

          <FormInput<HotelSchemaForm>
            name="openingHours.0.openTime"
            label="Open Time"
            placeholder="08:00"
          />

          <FormInput<HotelSchemaForm>
            name="openingHours.0.closeTime"
            label="Close Time"
            placeholder="22:00"
          />
        </div>
      </FormSection>

      {/* ======================================================
          ACCESSIBILITY
      ====================================================== */}

      <FormSection title="Accessibility" description="Accessibility options">
        <FormEntitySelector<HotelSchemaForm, Accessibility>
          name="accessibilities.0.accessibilityId"
          label="Accessibility"
          placeholder="Search accessibility..."
          searchPlaceholder="Search accessibility..."
          emptyText="No accessibility found"
          createText="Create accessibility"
          options={accessibilityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <AccessibilityCreateDialog {...props} />
          )}
        />
      </FormSection>

      {/* ======================================================
          AWARDS
      ====================================================== */}

      <FormSection title="Awards" description="Hotel awards and recognition">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="awards.0.name"
            label="Award Name"
            placeholder="World Travel Award"
          />

          <FormInput<HotelSchemaForm>
            name="awards.0.issuer"
            label="Issuer"
            placeholder="Organization name"
          />

          <FormInput<HotelSchemaForm>
            name="awards.0.awardDate"
            label="Award Date"
            type="date"
          />

          <FormInput<HotelSchemaForm>
            name="awards.0.year"
            label="Year"
            type="number"
          />

          <FormTextarea<HotelSchemaForm>
            name="awards.0.description"
            label="Description"
            placeholder="Award description"
          />

          <FormInput<HotelSchemaForm>
            name="awards.0.awardUrl"
            label="Award URL"
            placeholder="https://..."
          />

          <FormSwitch<HotelSchemaForm> name="awards.0.active" label="Active" />
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <FormInput<HotelSchemaForm>
            name="awards.0.medias.0.mediaId"
            label="Award Media"
            placeholder="Search media..."
          />

          <FormInput<HotelSchemaForm>
            name="awards.0.medias.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="awards.0.medias.0.isPrimary"
            label="Primary"
          />
        </div>
      </FormSection>

      {/* ======================================================
          SUSTAINABILITY
      ====================================================== */}

      <FormSection
        title="Sustainability"
        description="Environmental certifications"
      >
        <FormEntitySelector<HotelSchemaForm, Sustainability>
          name="sustainabilities.0.sustainabilityId"
          label="Sustainability"
          placeholder="Search sustainability..."
          searchPlaceholder="Search sustainability..."
          emptyText="No sustainability found"
          createText="Create sustainability"
          options={sustainabilityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <SustainabilityCreateDialog {...props} />
          )}
        />
      </FormSection>
    </>
  );
}
