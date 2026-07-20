"use client";

import { z } from "zod";

import {
  AppForm,
  FormInput,
  FormSwitch,
  SubmitButton,
} from "@/components/form/form-data";

import { schema } from "./schema";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppForm } from "@/hooks/useAppForm";
import { useCreateCurrency } from "@/hooks/cities/currencies";

export type FormValues = z.infer<typeof schema>;

interface CurrencyFormProps {
  initialData?: Partial<FormValues>;
}

export default function CurrencyForm({ initialData }: CurrencyFormProps) {
  const [loading, setLoading] = useState(false);
  const { form, mode, isUpdate } = useAppForm<FormValues>({
    schema,
    mode: initialData ? "update" : "create",
    defaultValues: {
      code: "",
      numericCode: "",
      symbol: "",
      symbolNative: "",
      name: "",
      nativeName: "",
      decimalDigits: 2,
      rounding: 0,
      flagEmoji: "",
      locale: "",
      active: true,
      isDefault: false,
      ...initialData,
    },
  });

  const createCurrency = useCreateCurrency();

const onSubmit = async (values: FormValues) => {
  try {
    setLoading(true);

    await createCurrency.mutateAsync(values);

    toast.success("Tạo thành công!");
  } catch (error) {
    toast.error("Có lỗi xảy ra!");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container mx-auto max-w-5xl py-10">
      <h1 className="mb-2 text-3xl font-bold">
        {isUpdate ? "Update Currency" : "Create Currency"}
      </h1>

      <p className="mb-8 text-sm text-muted-foreground">Mode: {mode}</p>

      <AppForm form={form} onSubmit={onSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* ====================================================== */}
          {/* BASIC */}
          {/* ====================================================== */}

          <FormInput name="code" label="Currency Code" placeholder="USD" />

          <FormInput
            name="numericCode"
            label="Numeric Code"
            placeholder="840"
          />

          <FormInput name="symbol" label="Symbol" placeholder="$" />

          <FormInput
            name="symbolNative"
            label="Native Symbol"
            placeholder="$"
          />

          <FormInput
            name="name"
            label="Name"
            placeholder="United States Dollar"
          />

          <FormInput
            name="nativeName"
            label="Native Name"
            placeholder="US Dollar"
          />

          <FormInput
            name="decimalDigits"
            label="Decimal Digits"
            type="number"
          />

          <FormInput name="rounding" label="Rounding" type="number" />

          {/* ====================================================== */}
          {/* DISPLAY */}
          {/* ====================================================== */}

          <FormInput name="flagEmoji" label="Flag Emoji" placeholder="🇺🇸" />

          <FormInput name="locale" label="Locale" placeholder="en-US" />

          {/* ====================================================== */}
          {/* STATUS */}
          {/* ====================================================== */}

          <FormSwitch name="active" label="Active" />

          <FormSwitch name="isDefault" label="Default Currency" />
        </div>

        <div className="mt-8 flex justify-end">
          <SubmitButton>
            {isUpdate ? "Update Currency" : "Create Currency"}
          </SubmitButton>
        </div>
      </AppForm>

      <pre className="mt-10 rounded-lg bg-muted p-4 text-xs">
        {JSON.stringify(form.watch(), null, 2)}
      </pre>
    </div>
  );
}
