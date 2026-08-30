"use client";

import { useYachtCrewRoleUpdateFormData } from "@/hooks/product-types/yacht/crew-role/useYachtCrewRoleUpdateFormData";
import { useParams } from "next/navigation";

import YachtCrewRoleForm from "../../components/YachtCrewRoleForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function YachtCrewRoleEditPage() {
  const params = useParams();

  const crewRoleId = params.crewRoleId as string;

  const { data, isLoading, isError, errors, refetch } =
    useYachtCrewRoleUpdateFormData(crewRoleId);

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

  return <YachtCrewRoleForm initialData={data.initialData} />;
}