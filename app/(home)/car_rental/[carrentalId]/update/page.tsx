import CarRentalForm from "../../components/CarrentalForm";
import { CarRentalServerService } from "@/services/car-rental/server";

type Props = {
  params: Promise<{
    carrentalId: string;
  }>;
};

export default async function CarrentalEditPage({ params }: Props) {
  const { carrentalId } = await params;
  const carRentalData = await CarRentalServerService.getOne(carrentalId);

  return <CarRentalForm initialData={carRentalData} />;
}
