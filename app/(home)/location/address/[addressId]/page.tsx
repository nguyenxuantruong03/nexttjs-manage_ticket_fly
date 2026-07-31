import { AddressServerService } from "@/services/location/address/server";
import { addressFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    addressId: string;
  }>;
};

export default async function AddressDetailPage({ params }: Props) {
  const { addressId } = await params;
  const addressData = await AddressServerService.getOne(addressId);
    return (
      <DetailPage
        groups={addressFieldGroups}
        data={addressData}
        title={`Address ${addressData.name}`}
      />
    )
}
