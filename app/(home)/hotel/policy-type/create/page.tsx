"use client";

import { useHotelPolicyTypeCreateFormData } from "@/hooks/hotel/hotel-policy-type/useHotelPolicyTypeCreateFormData";
import PolicyTypeForm from "../components/PolicyTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const PolicyTypeCreatePage = () => {
  const { data, isLoading, error } = useHotelPolicyTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <PolicyTypeForm />;
};

export default PolicyTypeCreatePage;
