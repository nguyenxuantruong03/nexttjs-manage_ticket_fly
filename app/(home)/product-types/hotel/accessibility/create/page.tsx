"use client";

import { useHotelAccessibilityCreateFormData } from "@/hooks/product-types/hotel/hotel-accessibility/useHotelAccessibilityCreateFormData";
import AccessibilityForm from "../components/AccessibilityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const AccessibilityCreatePage = () => {
  const { data, isLoading, error } = useHotelAccessibilityCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <AccessibilityForm />;
};

export default AccessibilityCreatePage;
