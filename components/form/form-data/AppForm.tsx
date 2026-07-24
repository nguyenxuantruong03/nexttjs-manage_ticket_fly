"use client";

import * as React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface AppFormContextType {
  loading: boolean;
}

const AppFormContext = React.createContext<AppFormContextType>({
  loading: false,
});

export const useAppFormContext = () => React.useContext(AppFormContext);

export interface AppFormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  children: React.ReactNode;
  id?: string;
  className?: string;
  loading?: boolean;
}

export function AppForm<TFieldValues extends FieldValues>({
  form,
  onSubmit,
  children,
  id,
  className,
  loading = false,
}: AppFormProps<TFieldValues>) {
  return (
    <AppFormContext.Provider value={{ loading }}>
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
    </AppFormContext.Provider>
  );
}

export default AppForm;
