import { DetailPage } from "@/components/detail/detail-page";

import { carRentalDocumentTypeFieldGroups } from "../components/step/field-groups";

import { CarRentalDocumentTypeServerService } from "@/services/product-types/car-rental/document-type/server";

type Props = {
  params: Promise<{
    documentTypeId: string;
  }>;
};

export default async function CarRentalDocumentTypeDetailPage({
  params,
}: Props) {
  const { documentTypeId } = await params;

  const documentTypeData =
    await CarRentalDocumentTypeServerService.getOne(documentTypeId);

  return (
    <DetailPage
      groups={carRentalDocumentTypeFieldGroups}
      data={documentTypeData}
      title={`Car Rental Document Type ${documentTypeData.name}`}
    />
  );
}