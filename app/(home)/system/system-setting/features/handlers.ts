import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { SystemSettingRoutes } from "./routes";

interface Props {
  router: AppRouterInstance;
}

export function createSystemSettingHandlers({ router }: Props) {
  return {
    view(id: string) {
      router.push(SystemSettingRoutes.detail(id));
    },

    update(id: string) {
      router.push(SystemSettingRoutes.update(id));
    },
  };
}
