import { DetailPage } from "@/components/detail/detail-page";
import { diningMealTypeFieldGroups } from "../components/step/field-groups";
import { HotelDiningMealTypeServerService } from "@/services/product-types/hotel/hotel-dining-meal-type/server";

type Props = {
  params: Promise<{
    diningMealTypeId: string;
  }>;
};

export default async function DiningMealTypeDetailPage({ params }: Props) {
  const { diningMealTypeId } = await params;
  const diningMealTypeData =
    await HotelDiningMealTypeServerService.getOne(diningMealTypeId);
  return (
    <DetailPage
      groups={diningMealTypeFieldGroups}
      data={diningMealTypeData}
      title={`DiningMealType ${diningMealTypeData.name}`}
    />
  );
}
