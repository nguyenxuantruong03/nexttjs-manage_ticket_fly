"use client";

import { useParams } from "next/navigation";

import CurrencyForm from "../../components/CurrencyForm";
import { useCurrencyUpdateFormData } from "@/hooks/location/currency/useCurrencyUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CurrencyEditPage() {
  const params = useParams();

  const currencyId = params.currencyId as string;

  const { data, isLoading, error } = useCurrencyUpdateFormData(currencyId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <CurrencyForm initialData={data.initialData} />;
}
