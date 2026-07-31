import { DetailPage } from "@/components/detail/detail-page";
import { starRatingFieldGroups } from "../components/step/field-groups";
import { HotelStarRatingServerService } from "@/services/hotel/hotel-star-rating/server";

type Props = {
  params: Promise<{
    starRatingId: string;
  }>;
};

export default async function StarRatingDetailPage({ params }: Props) {
  const { starRatingId } = await params;
  const starRatingData =
    await HotelStarRatingServerService.getOne(starRatingId);
  return (
    <DetailPage
      groups={starRatingFieldGroups}
      data={starRatingData}
      title={`StarRating ${starRatingData.name}`}
    />
  );
}
