"use client";

import { useFlyCrewDutyCreateFormData } from "@/hooks/product-types/references/airline/crew/crew-duty/useFlyCrewDutyCreateFormData";

import FlyCrewDutyForm from "../components/FlyCrewDutyForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyCrewDutyCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyCrewDutyCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.crewDuty?.message ??
          "Không tải được dữ liệu nhiệm vụ tổ bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyCrewDutyForm />;
};

export default FlyCrewDutyCreatePage;
