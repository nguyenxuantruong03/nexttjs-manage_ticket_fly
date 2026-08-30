"use client";

import { useFlyCrewRoleCreateFormData } from "@/hooks/product-types/references/airline/crew/crew-role/useFlyCrewRoleCreateFormData";

import FlyCrewRoleForm from "../components/FlyCrewRoleForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const FlyCrewRoleCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyCrewRoleCreateFormData();

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

  return <FlyCrewRoleForm />;
};

export default FlyCrewRoleCreatePage;
