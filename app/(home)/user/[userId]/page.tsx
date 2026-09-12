

import { DetailPage } from "@/components/detail/detail-page";
import { userFieldGroups } from "../components/steps/field-groups";
import { UserServerService } from "@/services/users/server";

type Props = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function UserDetailPage({ params }: Props) {
  const { userId } = await params;

  const userData = await UserServerService.getOne(userId);

  return (
    <DetailPage
      groups={userFieldGroups}
      data={userData}
      title={`User ${userData.name}`}
    />
  );
}