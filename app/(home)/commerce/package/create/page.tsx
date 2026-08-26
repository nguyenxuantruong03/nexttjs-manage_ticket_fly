"use client";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import PackageForm from "../components/PackageForm";

import { usePackageCreateFormData } from "@/hooks/commerce/package/usePackageCreateFormData";

export default function PackageCreatePage() {
  const { data, isLoading, error } = usePackageCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PackageForm
      bookingTypeData={data.bookingTypeData}
      currencyData={data.currencyData}
    />
  );
}
