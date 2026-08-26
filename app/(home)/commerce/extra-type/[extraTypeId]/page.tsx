import { DetailPage } from "@/components/detail/detail-page";
import { extraTypeFieldGroups } from "../components/step/field-groups";
import { ExtraTypeServerService } from "@/services/commerce/extra-type/server";

type Props = {
  params: Promise<{
    extraTypeId: string;
  }>;
};

export default async function ExtraTypeDetailPage({ params }: Props) {
  const { extraTypeId } = await params;

  const extraTypeData = await ExtraTypeServerService.getOne(extraTypeId);

  return (
    <DetailPage
      groups={extraTypeFieldGroups}
      data={extraTypeData}
      title={`Extra Type ${extraTypeData.name}`}
    />
  );
}
