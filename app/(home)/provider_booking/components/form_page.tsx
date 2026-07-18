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

import { useAppForm } from "@/hooks/useAppForm";
import { User } from "@/types/bookings/auth/users";
import FormCheckboxGroup from "@/components/form/form-data/FormCheckbokGroup";

/* =========================
   SCHEMA
========================= */
export const schema = z.object({
  // =====================
  // BASIC INFORMATION
  // =====================
  officialName: z.string().optional(),
  displayName: z.string().min(1, "Display name is required"),
  shortName: z.string().optional(),

  logo: z.string().url().optional().or(z.literal("")),
  banner: z.string().url().optional().or(z.literal("")),

  subtitle: z.string().optional(),
  description: z.string().optional(),

  // =====================
  // COMPANY
  // =====================
  companyType: z.string().optional(),

  registrationNumber: z.string().optional(),
  taxCode: z.string().optional(),

  foundedYear: z.coerce.number().optional(),
  employeeCount: z.coerce.number().optional(),

  // =====================
  // CONTACT
  // =====================
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  hotline: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),

  // =====================
  // ADDRESS
  // =====================
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  postalCode: z.string().optional(),

  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),

  // =====================
  // SOCIAL
  // =====================
  facebook: z.string().url().optional().or(z.literal("")),
  instagram: z.string().url().optional().or(z.literal("")),
  youtube: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),

  // =====================
  // TRUST
  // =====================
  verified: z.boolean(),

  licenseNumber: z.string().optional(),

  // =====================
  // OWNER
  // =====================
  userId: z.string().min(1),

  // =====================
  // SERVICE
  // =====================
  service: z
    .array(
      z.enum([
        "HOTEL",
        "CARRENTAL",
        "AIRPORTTRANSFER",
        "TICKETFLY",
        "TICKETBUS",
        "YACHT",
      ]),
    )
    .default([]),
});

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
  users: User[];
}

export const ProviderBookingForm = ({
  initialData,
  users,
}: ProviderBookingFormProps) => {
  const userOptions = users.map((user) => ({
    label: `${user.name} (${user.email})`,
    value: user.id,
  }));

  const { form, mode, isUpdate } = useAppForm<FormValues>({
    schema,
    mode: initialData ? "update" : "create",
    defaultValues: initialData ?? {
      officialName: "",
      displayName: "",
      shortName: "",

      logo: "",
      banner: "",

      subtitle: "",
      description: "",

      companyType: "",

      registrationNumber: "",
      taxCode: "",

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

      licenseNumber: "",

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
          <FormInput<FormValues> name="displayName" label="Tên hiển thị" />

          <FormInput<FormValues> name="officialName" label="Tên pháp lý" />

          <FormInput<FormValues> name="shortName" label="Tên viết tắt" />

          <FormTextarea<FormValues> name="subtitle" label="Tiêu đề" />

          <FormTextarea<FormValues> name="description" label="Mô tả" />

          <FormImageUpload<FormValues> name="logo" label="Logo" />

          <FormImageUpload<FormValues> name="banner" label="Banner" />
          <FormInput<FormValues> name="companyType" label="Loại công ty" />

          <FormInput<FormValues>
            name="registrationNumber"
            label="Mã đăng ký doanh nghiệp"
          />

          <FormInput<FormValues> name="taxCode" label="Mã số thuế" />

          <FormInput<FormValues> name="licenseNumber" label="Giấy phép" />

          <FormInput<FormValues>
            name="foundedYear"
            type="number"
            label="Năm thành lập"
          />

          <FormInput<FormValues>
            name="employeeCount"
            type="number"
            label="Số nhân viên"
          />

          <FormInput<FormValues> name="email" label="Email" />

          <FormInput<FormValues> name="phone" label="Số điện thoại" />

          <FormInput<FormValues> name="hotline" label="Hotline" />

          <FormInput<FormValues> name="website" label="Website" />

          <FormInput<FormValues> name="address" label="Địa chỉ" />

          <FormInput<FormValues> name="city" label="Thành phố" />

          <FormInput<FormValues> name="state" label="Tỉnh" />

          <FormInput<FormValues> name="country" label="Quốc gia" />

          <FormInput<FormValues> name="postalCode" label="Postal Code" />

          <FormInput<FormValues>
            name="latitude"
            type="number"
            label="Latitude"
          />

          <FormInput<FormValues>
            name="longitude"
            type="number"
            label="Longitude"
          />

          <FormInput<FormValues> name="facebook" label="Facebook" />

          <FormInput<FormValues> name="instagram" label="Instagram" />

          <FormInput<FormValues> name="youtube" label="Youtube" />

          <FormInput<FormValues> name="linkedin" label="LinkedIn" />

          <FormCombobox<FormValues>
            name="userId"
            label="Owner"
            options={userOptions}
          />

          <FormCheckboxGroup<FormValues>
            name="service"
            label="Services"
            options={[
              {
                label: "Hotel",
                value: "HOTEL",
              },
              {
                label: "Car Rental",
                value: "CARRENTAL",
              },
              {
                label: "Airport Transfer",
                value: "AIRPORTTRANSFER",
              },
              {
                label: "Flight",
                value: "TICKETFLY",
              },
              {
                label: "Bus",
                value: "TICKETBUS",
              },
              {
                label: "Yacht",
                value: "YACHT",
              },
            ]}
          />

          <FormSwitch<FormValues> name="verified" label="Verified" />
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
