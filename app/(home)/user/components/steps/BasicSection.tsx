"use client";

import { FormImageUpload, FormInput } from "@/components/form/form-data";

import FormSection from "@/components/form/FormSection";
import { UserFormSchema } from "../form/schema";

export default function BasicSection() {
  return (
    <FormSection title="Basic Information" description="Basic user details">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <FormImageUpload<UserFormSchema> name="image" label="Ảnh đại diện" />
        </div>

        <FormInput<UserFormSchema>
          name="name"
          label="Họ và tên"
          placeholder="Nguyễn Văn A"
        />

        <FormInput<UserFormSchema>
          name="email"
          label="Email"
          type="email"
          placeholder="abc@gmail.com"
        />
      </div>
    </FormSection>
  );
}
