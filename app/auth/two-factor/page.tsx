"use client";

import { Suspense } from "react";
import TwoFactorForm from "./two-factor-form";
import LoadingPage from "@/components/ui/loading-page";

export default function TwoFactorPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <TwoFactorForm />
    </Suspense>
  );
}
