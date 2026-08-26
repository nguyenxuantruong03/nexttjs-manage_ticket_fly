import { DetailPage } from "@/components/detail/detail-page";
import { couponFieldGroups } from "../components/step/field-groups";
import { CouponServerService } from "@/services/commerce/coupon/server";

type Props = {
  params: Promise<{
    couponId: string;
  }>;
};

export default async function CouponDetailPage({ params }: Props) {
  const { couponId } = await params;

  const couponData = await CouponServerService.getOne(couponId);

  return (
    <DetailPage
      groups={couponFieldGroups}
      data={couponData}
      title={`Coupon ${couponData.name}`}
    />
  );
}
