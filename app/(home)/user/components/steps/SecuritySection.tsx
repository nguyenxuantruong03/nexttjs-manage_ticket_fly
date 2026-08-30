"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import FormSection from "@/components/form/FormSection";
import { UserFormSchema } from "../form/schema";

interface SecuritySectionProps {
  isUpdate: boolean;
}

export default function SecuritySection({ isUpdate }: SecuritySectionProps) {
  return (
    <FormSection
      title="Security"
      description="Password and two-factor authentication"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<UserFormSchema>
          name="password"
          label={
            isUpdate ? "Mật khẩu mới (để trống nếu không đổi)" : "Mật khẩu"
          }
          type="password"
        />

        <FormInput<UserFormSchema>
          name="confirmPassword"
          label="Xác nhận mật khẩu"
          type="password"
        />

        <div className="flex items-center">
          <FormSwitch<UserFormSchema>
            name="isTwoFactorEnabled"
            label="Bật xác thực 2 lớp"
          />
        </div>
      </div>
    </FormSection>
  );
}
