"use client";

import { Suspense } from "react";
import LoginForm from "./login-form";
import LoadingPage from "@/components/ui/loading-page";

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <LoginForm />
    </Suspense>
  );
}
