"use client";

import { useParams } from "next/navigation";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useBlacklistEntryUpdateFormData } from "@/hooks/commerce/risk-fraud/blacklist-entry/useBlacklistEntryUpdateFormData";
import BlacklistEntryForm from "../../components/BlacklistEntryForm";

export default function BlacklistEntryEditPage() {
  const params = useParams();

  const blacklistEntryId = params.blacklistEntryId as string;

  const { data, isLoading, isError, errors, refetch } =
    useBlacklistEntryUpdateFormData(blacklistEntryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.blacklistEntry?.message ??
          "Không tải được dữ liệu blacklist entry, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BlacklistEntryForm initialData={data.blacklistEntryData} />;
}
