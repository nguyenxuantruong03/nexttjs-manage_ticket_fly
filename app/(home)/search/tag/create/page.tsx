"use client";

import SearchTagForm from "../components/SearchTagForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useSearchTagCreateFormData } from "@/hooks/search/tag/useSearchTagCreateFormData";

export default function SearchTagCreatePage() {
  const { data, isLoading, error } = useSearchTagCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <SearchTagForm bookingTypeData={data.bookingTypeData} />;
}
