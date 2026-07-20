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

/* =========================
   SCHEMA
========================= */
const schema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  description: z.string(),

  gender: z.string(),
  country: z.string(),

  birthday: z.any(),

  active: z.boolean(),
  accept: z.boolean(),

  avatar: z.any().nullable(),
  attachment: z.any().nullable(),

  content: z.string(),
});

type FormValues = z.infer<typeof schema>;

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

interface UserFormPageProps {
  initialData: any;
}

export const UserFormPage = ({ initialData }: UserFormPageProps) => {
  const { form, mode, isUpdate } = useAppForm<FormValues>({
    schema,
    mode: initialData ? "update" : "create",
    defaultValues: initialData ?? {
      fullName: "",
      email: "",
      description: "",
      gender: "",
      country: "",
      birthday: undefined,
      active: true,
      accept: false,
      avatar: null,
      attachment: null,
      content: "",
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
          <FormInput<FormValues>
            name="fullName"
            label="Họ và tên"
            placeholder="Nguyễn Văn A"
          />

          <FormInput<FormValues>
            name="email"
            label="Email"
            type="email"
            placeholder="abc@gmail.com"
          />

          <div className="md:col-span-2">
            <FormTextarea<FormValues>
              name="description"
              label="Mô tả"
              rows={4}
            />
          </div>

          <FormSelect<FormValues>
            name="gender"
            label="Giới tính"
            placeholder="Chọn"
            options={[
              { label: "Nam", value: "male" },
              { label: "Nữ", value: "female" },
              { label: "Khác", value: "other" },
            ]}
          />

          <FormCombobox<FormValues>
            name="country"
            label="Quốc gia"
            options={[
              { label: "Việt Nam", value: "vn" },
              { label: "Nhật Bản", value: "jp" },
              { label: "Singapore", value: "sg" },
              { label: "Hoa Kỳ", value: "us" },
            ]}
          />

          <FormDatePicker<FormValues> name="birthday" label="Ngày sinh" />

          <div className="flex items-center">
            <FormSwitch<FormValues> name="active" label="Kích hoạt tài khoản" />
          </div>

          <div className="md:col-span-2">
            <FormCheckbox<FormValues>
              name="accept"
              label="Tôi đồng ý với điều khoản sử dụng."
            />
          </div>

          <div className="md:col-span-2">
            <FormImageUpload<FormValues> name="avatar" label="Ảnh đại diện" />
          </div>

          <div className="md:col-span-2">
            <FormFileUpload<FormValues>
              name="attachment"
              label="File đính kèm"
            />
          </div>

          <div className="md:col-span-2">
            <FormEditor<FormValues> name="content" label="Nội dung" />
          </div>
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
export default UserFormPage;
