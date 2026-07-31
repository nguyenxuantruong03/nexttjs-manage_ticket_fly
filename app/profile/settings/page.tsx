// import SettingForm from "./settings-form";
import { UserServerService } from "@/services/users/server";
import { Suspense } from "react";
import SettingForm from "./settings-form";
import LoadingPage from "@/components/ui/loading-page";

const ClientPage = async () => {
  const user = await UserServerService.getMe();
  return (
    <Suspense fallback={<LoadingPage />}>
      <SettingForm user={user} />
    </Suspense>
  );
};

export default ClientPage;
