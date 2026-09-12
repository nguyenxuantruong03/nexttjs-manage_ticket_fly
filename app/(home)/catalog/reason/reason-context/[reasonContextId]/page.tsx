import { DetailPage } from "@/components/detail/detail-page";
import { reasonContextFieldGroups } from "../components/step/field-groups";
import { ReasonContextServerService } from "@/services/catalog/reason/reason-context/server";

type Props = {
  params: Promise<{
    reasonContextId: string;
  }>;
};

export default async function ReasonContextDetailPage({ params }: Props) {
  const { reasonContextId } = await params;

  const reasonContextData =
    await ReasonContextServerService.getOne(reasonContextId);

  return (
    <DetailPage
      groups={reasonContextFieldGroups}
      data={reasonContextData}
      title={`Reason Context ${reasonContextData.name}`}
    />
  );
}
