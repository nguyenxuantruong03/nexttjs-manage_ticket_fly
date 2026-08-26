import { DetailPage } from "@/components/detail/detail-page";
import { brandFieldGroups } from "../components/step/field-groups";
import { HotelBrandServerService } from "@/services/product-types/hotel/hotel-brand/server";

type Props = {
  params: Promise<{
    brandId: string;
  }>;
};

export default async function BrandDetailPage({ params }: Props) {
  const { brandId } = await params;
  const brandData =
    await HotelBrandServerService.getOne(brandId);
  return (
    <DetailPage
      groups={brandFieldGroups}
      data={brandData}
      title={`Brand ${brandData.name}`}
    />
  );
}
