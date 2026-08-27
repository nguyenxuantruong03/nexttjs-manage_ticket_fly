"use client";

import PolicyTypeForm from "../components/PolicyTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { usePolicyTypeCreateFormData } from "@/hooks/features/policy-type/usePolicyTypeCreateFormData";

const PolicyTypeCreatePage = () => {
  const { data, isLoading, error } = usePolicyTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <PolicyTypeForm bookingTypeData={data.bookingTypeData} />;
};

export default PolicyTypeCreatePage;