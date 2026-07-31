"use client";

import { useParams } from "next/navigation";
import AccessibilityForm from "../../components/AccessibilityForm";
import { useHotelAccessibilityUpdateFormData } from "@/hooks/hotel/hotel-accessibility/useHotelAccessibilityUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function AccessibilityEditPage() {
  const params = useParams();

  const accessibilityId = params.accessibilityId as string;

  const { data, isLoading, error } =
    useHotelAccessibilityUpdateFormData(accessibilityId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <AccessibilityForm initialData={data.initialData} />;
}
