import { DetailPage } from "@/components/detail/detail-page";
import { CurrencyServerService } from "@/services/location/currency/server";
import { currencyFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    currencyId: string;
  }>;
};

export default async function CurrencyDetailPage({ params }: Props) {
  const { currencyId } = await params;

  const currency = await CurrencyServerService.getOne(currencyId);

  return <DetailPage groups={currencyFieldGroups} data={currency} title={`Currency ${currency.code}`} />;
}
