"use client";

import { Suspense } from "react";
import NewPasswordForm from "./new-password-form";
import LoadingPage from "@/components/ui/loading-page";

export default function NewPasswordPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <NewPasswordForm />
    </Suspense>
  );
}
