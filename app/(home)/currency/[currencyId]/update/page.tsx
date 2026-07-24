import { CurrencyServerService } from "@/services/location/currency/server";
import CurrencyForm from "../../components/CurrencyForm";

type Props = {
  params: Promise<{
    currencyId: string;
  }>;
};

export default async function CurrencyEditPage({ params }: Props) {
  const { currencyId } = await params;
  const currency = await CurrencyServerService.getOne(currencyId)

  return <CurrencyForm initialData={currency}/>;
}
