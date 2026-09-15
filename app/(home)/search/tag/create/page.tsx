"use client";

import SearchTagForm from "../components/SearchTagForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useSearchTagCreateFormData } from "@/hooks/search/tag/useSearchTagCreateFormData";

export default function SearchTagCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useSearchTagCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.searchTag?.message ??
          "Không tải được dữ liệu thẻ tìm kiếm, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <SearchTagForm bookingTypeData={data.bookingTypeData.data} />;
}
