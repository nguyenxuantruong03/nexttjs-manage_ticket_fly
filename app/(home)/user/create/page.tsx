"use client";

import { useUserCreateFormData } from "@/hooks/user/useUserCreateFormData";
import { UserFormPage } from "../components/form_page";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function UserCreate() {
  const { data, isLoading, error } = useUserCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <UserFormPage initialData={undefined} />;
}
