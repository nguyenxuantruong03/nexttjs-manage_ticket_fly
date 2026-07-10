"use client";

import * as React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

export interface AppFormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function AppForm<TFieldValues extends FieldValues>({
  form,
  onSubmit,
  children,
  id,
  className,
}: AppFormProps<TFieldValues>) {
  return (
    <FormProvider {...form}>
      <form
        id={id}
        className={className}
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default AppForm;
