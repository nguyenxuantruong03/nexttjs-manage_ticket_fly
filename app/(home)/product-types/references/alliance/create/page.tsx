"use client";

import { useFlyAllianceCreateFormData } from "@/hooks/product-types/references/alliance/useFlyAllianceCreateFormData";

import FlyAllianceForm from "../components/FlyAllianceForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyAllianceCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyAllianceCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.alliance?.message ??
          "Không tải được dữ liệu liên minh hàng không, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyAllianceForm />;
};

export default FlyAllianceCreatePage;
