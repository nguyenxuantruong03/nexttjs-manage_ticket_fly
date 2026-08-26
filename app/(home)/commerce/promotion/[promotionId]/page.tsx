import { DetailPage } from "@/components/detail/detail-page";
import { promotionFieldGroups } from "../components/step/field-groups";
import { PromotionServerService } from "@/services/commerce/promotion/server";

type Props = {
  params: Promise<{
    promotionId: string;
  }>;
};

export default async function PromotionDetailPage({ params }: Props) {
  const { promotionId } = await params;

  const promotionData = await PromotionServerService.getOne(promotionId);

  return (
    <DetailPage
      groups={promotionFieldGroups}
      data={promotionData}
      title={`Promotion ${promotionData.name}`}
    />
  );
}
