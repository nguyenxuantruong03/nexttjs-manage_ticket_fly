"use client";

import YachtCrewRoleForm from "../components/YachtCrewRoleForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useYachtCrewRoleCreateFormData } from "@/hooks/product-types/yacht/crew-role/useYachtCrewRoleCreateFormData";

const YachtCrewRoleCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useYachtCrewRoleCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.crewRole?.message ??
          "Không tải được dữ liệu vai trò thuyền viên, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <YachtCrewRoleForm />;
};

export default YachtCrewRoleCreatePage;