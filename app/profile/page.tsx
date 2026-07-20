import { UserInfo } from "@/components/auth/user-info";
import { UserServerService } from "@/services/users/server";
import { Suspense } from "react";

const ProfilePage = async () => {
  const user = await UserServerService.getMe();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserInfo label="Profile Component" user={user} />
    </Suspense>
  );
};

export default ProfilePage;
