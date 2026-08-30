"use client";

import { useParams } from "next/navigation";

import SearchTagForm from "../../components/SearchTagForm";
import { useSearchTagUpdateFormData } from "@/hooks/search/tag/useSearchTagUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function SearchTagEditPage() {
  const params = useParams();

  const tagId = params.tagId as string;

  const { data, isLoading, isError, errors, refetch } =
    useSearchTagUpdateFormData(tagId);

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

  return (
    <SearchTagForm
      bookingTypeData={data.bookingTypeData}
      initialData={data.initialData}
    />
  );
}
