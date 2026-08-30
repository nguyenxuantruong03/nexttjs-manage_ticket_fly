"use client";

import { useFlyAddonTypeCreateFormData } from "@/hooks/product-types/references/airline/addon-type/useFlyAddonTypeCreateFormData";

import FlyAddonTypeForm from "../components/FlyAddonTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyAddonTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyAddonTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.addonType?.message ??
          "Không tải được dữ liệu loại dịch vụ bổ sung, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyAddonTypeForm />;
};

export default FlyAddonTypeCreatePage;
