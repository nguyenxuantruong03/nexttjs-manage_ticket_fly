"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicSection from "./steps/BasicSection";

import CompanySection from "./steps/CompanySection";

import ContactSection from "./steps/ContactSection";

import SocialSection from "./steps/SocialSection";

import BookingTypeStep from "./steps/booking-type.step";

import { ProviderBookingFormSchema } from "./form/schema";

import { providerBookingFormConfig } from "./config";

import {
  useCreateProviderBooking,
  useUpdateProviderBooking,
} from "@/hooks/provider-booking";

import { ProviderBooking } from "@/types/users/provider-bookings";

import { User } from "@/types/users/auth/users";

import { Address } from "@/types/location/address";

import { Country } from "@/types/location/country/country";

import { City } from "@/types/location/city";

import { District } from "@/types/location/district";

import { Ward } from "@/types/location/ward";

import { BookingType } from "@/types/common/commerce/booking-type";

interface ProviderBookingFormProps {
  initialData?: ProviderBooking;

  userDatas: User[];

  addresses: Address[];

  countries: Country[];

  cities: City[];

  districts: District[];

  wards: Ward[];

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function ProviderBookingForm({
  initialData,
  userDatas,
  addresses,
  countries,
  cities,
  districts,
  wards,
  bookingTypeData,
  redirect = true,
}: ProviderBookingFormProps) {
  const createProviderBooking = useCreateProviderBooking();

  const updateProviderBooking = useUpdateProviderBooking();

  return (
    <EntityFormWizard<ProviderBookingFormSchema, ProviderBooking>
      initialData={initialData}
      redirect={redirect}
      config={providerBookingFormConfig}
      createMutation={createProviderBooking}
      updateMutation={updateProviderBooking}
    >
      <FormWizardStep index={0}>
        <BasicSection
          userDatas={userDatas}
          addresses={addresses}
          countries={countries}
          cities={cities}
          districts={districts}
          wards={wards}
        />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <CompanySection />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <ContactSection />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <SocialSection />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
