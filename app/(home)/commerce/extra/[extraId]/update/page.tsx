"use client";

import { useParams } from "next/navigation";

import ExtraForm from "../../components/ExtraForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useExtraUpdateFormData } from "@/hooks/commerce/extra/useExtraUpdateFormData";

export default function ExtraEditPage() {
  const params = useParams();

  const extraId = params.extraId as string;

  const { data, isLoading, error } = useExtraUpdateFormData(extraId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <ExtraForm
      initialData={data.extraData}
      bookingTypeData={data.bookingTypeData}
      extraTypeData={data.extraTypeData}
      currencyData={data.currencyData}
    />
  );
}
