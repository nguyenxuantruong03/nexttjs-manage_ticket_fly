"use client";

import { useHotelPolicyCreateFormData } from "@/hooks/hotel/hotel-policy/useHotelPolicyCreateFormData";
import PolicyForm from "../components/PolicyForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const PolicyCreatePage = () => {
  const { data, isLoading, error } = useHotelPolicyCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <PolicyForm policyTypeData={data.policyType}/>;
};

export default PolicyCreatePage;
