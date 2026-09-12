import { DetailPage } from "@/components/detail/detail-page";

import { legalDocumentFieldGroups } from "../components/step/field-groups";
import { LegalDocumentServerService } from "@/services/commerce/compliance-legal/legal-document/server";


type Props = {
  params: Promise<{
    legalDocumentId: string;
  }>;
};

export default async function LegalDocumentDetailPage({
  params,
}: Props) {
  const { legalDocumentId } = await params;

  const legalDocumentData =
    await LegalDocumentServerService.getOne(legalDocumentId);

  return (
    <DetailPage
      groups={legalDocumentFieldGroups}
      data={legalDocumentData}
      title={`Legal Document ${legalDocumentData.title}`}
    />
  );
}
