"use client";

import UserForm from "../components/UserForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useUserCreateFormData } from "@/hooks/user/useUserCreateFormData";

export default function UserCreatePage() {
  const { data, isLoading, isError, errors, refetch } = useUserCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.user?.message ?? "Không tải được dữ liệu, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <UserForm />;
}
