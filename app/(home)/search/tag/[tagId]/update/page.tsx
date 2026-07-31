"use client";

import { useParams } from "next/navigation";

import SearchTagForm from "../../components/SearchTagForm";
import { useSearchTagUpdateFormData } from "@/hooks/search/tag/useSearchTagUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function SearchTagEditPage() {
  const params = useParams();

  const tagId = params.tagId as string;

  const { data, isLoading, error } = useSearchTagUpdateFormData(tagId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <SearchTagForm initialData={data.initialData} />;
}
