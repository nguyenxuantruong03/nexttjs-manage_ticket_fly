// import SettingForm from "./settings-form";
import { UserServerService } from "@/services/users/server";
import { Suspense } from "react";
import SettingForm from "./settings-form";

const ClientPage = async () => {
  const user = await UserServerService.getMe();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SettingForm user={user} />
    </Suspense>
  );
};

export default ClientPage;
