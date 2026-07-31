"use client";

import { Suspense } from "react";
import NewVerificationForm from "./new-verification-form";
import LoadingPage from "@/components/ui/loading-page";

export default function NewVerificationPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <NewVerificationForm />
    </Suspense>
  );
}
