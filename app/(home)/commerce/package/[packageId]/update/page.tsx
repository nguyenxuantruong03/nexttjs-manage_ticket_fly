"use client";

import { useParams } from "next/navigation";

import PackageForm from "../../components/PackageForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { usePackageUpdateFormData } from "@/hooks/commerce/package/usePackageUpdateFormData";

export default function PackageEditPage() {
  const params = useParams();

  const packageId = params.packageId as string;

  const { data, isLoading, error } = usePackageUpdateFormData(packageId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PackageForm
      initialData={data.packageData}
      bookingTypeData={data.bookingTypeData}
      currencyData={data.currencyData}
    />
  );
}
