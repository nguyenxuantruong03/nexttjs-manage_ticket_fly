"use client";

import { useParams } from "next/navigation";

import ExtraTypeForm from "../../components/ExtraTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useExtraTypeUpdateFormData } from "@/hooks/commerce/extra-type/useExtraTypeUpdateFormData";

export default function ExtraTypeEditPage() {
  const params = useParams();

  const extraTypeId = params.extraTypeId as string;

  const { data, isLoading, error } = useExtraTypeUpdateFormData(extraTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <ExtraTypeForm
      initialData={data.extraTypeData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
