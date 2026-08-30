"use client";

import * as React from "react";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

// ======================================================
// CONTEXT
// ======================================================

interface AppFormContextType {
  loading: boolean;
}

const AppFormContext = React.createContext<AppFormContextType>({
  loading: false,
});

export const useAppFormContext = () => React.useContext(AppFormContext);

// ======================================================
// PROPS
// ======================================================

export interface AppFormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  children: React.ReactNode;
  id?: string;
  className?: string;
  loading?: boolean;

  /**
   * Prevent submit event from bubbling to parent form.
   *
   * Useful when AppForm is used inside a Dialog/CreateDialog
   * rendered from another parent form.
   */
  stopSubmitPropagation?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export function AppForm<TFieldValues extends FieldValues>({
  form,
  onSubmit,
  children,
  id,
  className,
  loading = false,
  stopSubmitPropagation = true,
}: AppFormProps<TFieldValues>) {
  // ======================================================
  // SUBMIT
  // ======================================================

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (stopSubmitPropagation) {
      event.stopPropagation();
    }

    void form.handleSubmit(onSubmit)(event);
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <AppFormContext.Provider value={{ loading }}>
      <FormProvider {...form}>
        <form id={id} className={className} onSubmit={handleSubmit} noValidate>
          {children}
        </form>
      </FormProvider>
    </AppFormContext.Provider>
  );
}

export default AppForm;
