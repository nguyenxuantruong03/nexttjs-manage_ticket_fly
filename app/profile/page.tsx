import { UserInfo } from "@/components/auth/user-info";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";
import { UserServerService } from "@/services/users/server";
import { Suspense } from "react";

const ProfilePage = async () => {
  const result = await UserServerService.getMe();

  if (result.status !== "authenticated") {
    return <ErrorPage />;
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <UserInfo label="Profile Component" user={result.user} />
    </Suspense>
  );
};

export default ProfilePage;