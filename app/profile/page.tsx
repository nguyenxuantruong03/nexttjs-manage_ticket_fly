import { UserInfo } from "@/components/auth/user-info";
import LoadingPage from "@/components/ui/loading-page";
import { UserServerService } from "@/services/users/server";
import { Suspense } from "react";

const ProfilePage = async () => {
  const user = await UserServerService.getMe();
  return (
    <Suspense fallback={<LoadingPage />}>
      <UserInfo label="Profile Component" user={user} />
    </Suspense>
  );
};

export default ProfilePage;
