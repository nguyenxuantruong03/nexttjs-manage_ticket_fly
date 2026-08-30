"use client";

import { useFlyCrewRoleUpdateFormData } from "@/hooks/product-types/references/airline/crew/crew-role/useFlyCrewRoleUpdateFormData";

import { useParams } from "next/navigation";

import FlyCrewRoleForm from "../../components/FlyCrewRoleForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

export default function FlyCrewRoleEditPage() {
  const params = useParams();

  const crewRoleId = params.crewRoleId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyCrewRoleUpdateFormData(crewRoleId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.crewRole?.message ??
          "Không tải được dữ liệu vai trò tổ bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyCrewRoleForm initialData={data.initialData} />;
}
