"use client";

import { z } from "zod";

import {
  AppForm,
  FormCheckbox,
  FormCombobox,
  FormDatePicker,
  FormEditor,
  FormFileUpload,
  FormImageUpload,
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextarea,
  SubmitButton,
} from "@/components/form/form-data";

import FormCheckboxGroup from "@/components/form/form-data/FormCheckbokGroup";
import { schema } from "./schema";
import {
  ProviderOperatingStatus,
  ProviderStatus,
  typeServiceBooking,
} from "@/types/bookings/provider-bookings";
import { useAppForm } from "@/hooks/useAppForm";

export type FormValues = z.infer<typeof schema>;

/* =========================
   MOCK DATA (UPDATE)
========================= */
// const initialData: FormValues = {
//   fullName: "Nguyễn Văn A",
//   email: "a@gmail.com",
//   description: "Developer",
//   gender: "male",
//   country: "vn",
//   birthday: undefined,
//   active: true,
//   accept: true,
//   avatar: null,
//   attachment: null,
//   content: "<p>Hello</p>",
// };

/* =========================
   COMPONENT
========================= */

interface ProviderBookingFormProps {
  initialData?: any;
}

export const ProviderBookingForm = ({
  initialData,
}: ProviderBookingFormProps) => {
  const { form, mode, isUpdate } = useAppForm<FormValues>({
    schema,
    mode: initialData ? "update" : "create",
    defaultValues: {
      officialName: "",
      displayName: "",
      shortName: "",

      subtitle: "",
      description: "",

      logo: "",
      banner: "",

      companyType: "",

      registrationNumber: "",
      taxCode: "",
      licenseNumber: "",

      foundedYear: undefined,
      employeeCount: undefined,

      email: "",
      phone: "",
      hotline: "",
      website: "",

      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",

      latitude: undefined,
      longitude: undefined,

      facebook: "",
      instagram: "",
      youtube: "",
      linkedin: "",

      verified: false,

      status: ProviderStatus.PENDING,

      operatingStatus: ProviderOperatingStatus.OPEN,

      userId: "",

      service: [],
    },
  });

  const onSubmit = (values: FormValues) => {
    if (isUpdate) {
      console.log("UPDATE API", values);
      alert("UPDATE:\n" + JSON.stringify(values, null, 2));
    } else {
      console.log("CREATE API", values);
      alert("CREATE:\n" + JSON.stringify(values, null, 2));
    }
  };

  return (
    <div className="container mx-auto max-w-5xl py-10">
      <h1 className="mb-2 text-3xl font-bold">
        {isUpdate ? "Update Form" : "Create Form"}
      </h1>

      <p className="mb-8 text-sm text-muted-foreground">Mode: {mode}</p>

      <AppForm form={form} onSubmit={onSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput name="displayName" label="Display Name" />

          <FormInput name="officialName" label="Official Name" />

          <FormInput name="shortName" label="Short Name" />

          <FormTextarea name="subtitle" label="Subtitle" />

          <FormTextarea name="description" label="Description" />

          <FormImageUpload name="logo" label="Logo" />

          <FormImageUpload name="banner" label="Banner" />

          <FormInput name="companyType" label="Company Type" />

          <FormInput name="registrationNumber" label="Registration Number" />

          <FormInput name="taxCode" label="Tax Code" />

          <FormInput name="licenseNumber" label="License Number" />

          <FormInput name="foundedYear" type="number" label="Founded Year" />

          <FormInput
            name="employeeCount"
            type="number"
            label="Employee Count"
          />

          <FormInput name="email" label="Email" />

          <FormInput name="phone" label="Phone" />

          <FormInput name="hotline" label="Hotline" />

          <FormInput name="website" label="Website" />

          <FormInput name="address" label="Address" />

          <FormInput name="city" label="City" />

          <FormInput name="state" label="State" />

          <FormInput name="country" label="Country" />

          <FormInput name="postalCode" label="Postal Code" />

          <FormInput name="latitude" type="number" label="Latitude" />

          <FormInput name="longitude" type="number" label="Longitude" />

          <FormInput name="facebook" label="Facebook" />

          <FormInput name="instagram" label="Instagram" />

          <FormInput name="youtube" label="Youtube" />

          <FormInput name="linkedin" label="LinkedIn" />

          <FormCheckboxGroup
            name="service"
            label="Services"
            options={[
              {
                label: "Hotel",
                value: typeServiceBooking.HOTEL,
              },
              {
                label: "Car Rental",
                value: typeServiceBooking.CARRENTAL,
              },
              {
                label: "Airport Transfer",
                value: typeServiceBooking.AIRPORTTRANSFER,
              },
              {
                label: "Flight",
                value: typeServiceBooking.TICKETFLY,
              },
              {
                label: "Bus",
                value: typeServiceBooking.TICKETBUS,
              },
              {
                label: "Yacht",
                value: typeServiceBooking.YACHT,
              },
            ]}
          />

          <FormSelect
            name="status"
            label="Status"
            options={[
              {
                label: "Pending",
                value: ProviderStatus.PENDING,
              },
              {
                label: "Active",
                value: ProviderStatus.ACTIVE,
              },
              {
                label: "Inactive",
                value: ProviderStatus.INACTIVE,
              },
              {
                label: "Blocked",
                value: ProviderStatus.BLOCKED,
              },
            ]}
          />

          <FormSelect
            name="operatingStatus"
            label="Operating Status"
            options={[
              {
                label: "Open",
                value: ProviderOperatingStatus.OPEN,
              },
              {
                label: "Temporarily Closed",
                value: ProviderOperatingStatus.TEMPORARILY_CLOSED,
              },
              {
                label: "Closed",
                value: ProviderOperatingStatus.CLOSED,
              },
              {
                label: "Maintenance",
                value: ProviderOperatingStatus.MAINTENANCE,
              },
              {
                label: "Holiday",
                value: ProviderOperatingStatus.HOLIDAY,
              },
              {
                label: "Sold Out",
                value: ProviderOperatingStatus.SOLD_OUT,
              },
            ]}
          />

          <FormSwitch name="verified" label="Verified" />
        </div>
        <div className="mt-8 flex justify-end gap-3">
          <SubmitButton>{isUpdate ? "Cập nhật" : "Lưu dữ liệu"}</SubmitButton>
        </div>
      </AppForm>

      <pre className="mt-10 rounded-lg bg-muted p-4 text-xs">
        {JSON.stringify(form.watch(), null, 2)}
      </pre>
    </div>
  );
};
export default ProviderBookingForm;
