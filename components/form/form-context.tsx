"use client";

import { createContext, useContext, useState } from "react";

interface FormPageContextType {
  dirty: boolean;

  setDirty: (value: boolean) => void;
}

const FormPageContext = createContext<FormPageContextType | null>(null);

export function FormPageProvider({ children }: { children: React.ReactNode }) {
  const [dirty, setDirty] = useState(false);

  return (
    <FormPageContext.Provider
      value={{
        dirty,
        setDirty,
      }}
    >
      {children}
    </FormPageContext.Provider>
  );
}

export function useFormPage() {
  const context = useContext(FormPageContext);

  if (!context) {
    throw new Error("useFormPage must be used inside FormPageProvider");
  }

  return context;
}
