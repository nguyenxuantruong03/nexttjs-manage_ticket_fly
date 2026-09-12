// import SettingForm from "./settings-form";
import { UserServerService } from "@/services/users/server";
import { Suspense } from "react";
import SettingForm from "./settings-form";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const ClientPage = async () => {
  const user = await UserServerService.getMe();

  if (user.status != "authenticated") {
    return <ErrorPage />;
  }
  return (
    <Suspense fallback={<LoadingPage />}>
      <SettingForm user={user.user} />
    </Suspense>
  );
};

export default ClientPage;
