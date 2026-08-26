import { CarRentalServerService } from "@/services/product-types/car-rental/server";
import { carRentalFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    carrentalId: string;
  }>;
};

export default async function CurrencyDetailPage({ params }: Props) {
  const { carrentalId } = await params;

  const carrentalData = await CarRentalServerService.getOne(carrentalId);

  return (
    <DetailPage
      groups={carRentalFieldGroups}
      data={carrentalData}
      title={`Car rental ${carrentalData.name}`}
    />
  );
}
