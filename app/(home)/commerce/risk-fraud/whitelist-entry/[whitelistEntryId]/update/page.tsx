"use client";

import { useParams } from "next/navigation";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useWhitelistEntryUpdateFormData } from "@/hooks/commerce/risk-fraud/whitelist-entry/useWhitelistEntryUpdateFormData";
import WhitelistEntryForm from "../../components/WhitelistEntryForm";

export default function WhitelistEntryEditPage() {
  const params = useParams();

  const whitelistEntryId = params.whitelistEntryId as string;

  const { data, isLoading, isError, errors, refetch } =
    useWhitelistEntryUpdateFormData(whitelistEntryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.whitelistEntry?.message ??
          "Không tải được dữ liệu whitelist entry, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <WhitelistEntryForm initialData={data.whitelistEntryData} />;
}
