"use client";

import {
  FormDatePicker,
  FormInput,
  FormSelect,
} from "@/components/form/form-data";

import FormSection from "@/components/form/FormSection";
import { Role } from "@/types/users/auth/users";
import { UserFormSchema } from "../form/schema";

export default function AccountSection() {
  return (
    <FormSection title="Account" description="Role and account status">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<UserFormSchema>
          name="role"
          label="Vai trò"
          placeholder="Chọn vai trò"
          options={[
            { label: "Người dùng", value: Role.USER },
            { label: "Quản trị viên", value: Role.ADMIN },
            { label: "Biên tập viên", value: Role.EDITOR },
          ]}
        />

        <FormInput<UserFormSchema>
          name="reSendemail"
          label="Số lần gửi lại email"
          type="number"
        />

        <FormDatePicker<UserFormSchema>
          name="banUntil"
          label="Cấm tài khoản đến ngày"
        />

        <div className="flex items-center">
          <FormDatePicker<UserFormSchema>
            name="emailVerified"
            label="Xác thực email vào ngày"
          />
        </div>
      </div>
    </FormSection>
  );
}
