"use client";

import { useParams } from "next/navigation";

import UserForm from "../../components/UserForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useUserUpdateFormData } from "@/hooks/user/useUserUpdateFormData";

export default function UserEditPage() {
  const params = useParams();

  const userId = params.userId as string;

  const { data, isLoading, isError, errors, refetch } =
    useUserUpdateFormData(userId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.user?.message ??
          "Không tải được dữ liệu người dùng, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <UserForm initialData={data.initialData} />;
}
