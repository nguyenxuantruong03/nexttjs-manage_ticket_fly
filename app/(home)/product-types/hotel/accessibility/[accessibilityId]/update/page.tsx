"use client";

import { useParams } from "next/navigation";
import AccessibilityForm from "../../components/AccessibilityForm";
import { useHotelAccessibilityUpdateFormData } from "@/hooks/product-types/hotel/hotel-accessibility/useHotelAccessibilityUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function AccessibilityEditPage() {
  const params = useParams();

  const accessibilityId = params.accessibilityId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelAccessibilityUpdateFormData(accessibilityId);

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

  return <AccessibilityForm initialData={data.initialData} />;
}
