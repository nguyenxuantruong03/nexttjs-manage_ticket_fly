"use client";

import { Suspense } from "react";
import RegisterForm from "./register-form";
import LoadingPage from "@/components/ui/loading-page";

export default function RegisterPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RegisterForm />
    </Suspense>
  );
}
