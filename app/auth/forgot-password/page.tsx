"use client";

import { Suspense } from "react";
import ForgotPasswordForm from "./forgot-password-form";
import LoadingPage from "@/components/ui/loading-page";

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ForgotPasswordForm />
    </Suspense>
  );
}
