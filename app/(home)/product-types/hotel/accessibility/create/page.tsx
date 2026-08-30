"use client";

import { useHotelAccessibilityCreateFormData } from "@/hooks/product-types/hotel/hotel-accessibility/useHotelAccessibilityCreateFormData";
import AccessibilityForm from "../components/AccessibilityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const AccessibilityCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelAccessibilityCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.accessibility?.message ??
          "Không tải được dữ liệu accessibility, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <AccessibilityForm />;
};

export default AccessibilityCreatePage;
