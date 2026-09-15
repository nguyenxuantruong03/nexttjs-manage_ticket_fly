import { SidebarTopic } from "@/components/Sidebar/types";
import { auditLogSidebar } from "./audit-log";
import { systemSettingSidebar } from "./system-setting";
import { metricsSidebar } from "./metrics";

export const systemSidebar: SidebarTopic = {
  id: 600,
  topic: "System Management",
  items: [
    {
      id: 601,
      title: "System Management",
      icon: "settings",

      children: [systemSettingSidebar, auditLogSidebar, metricsSidebar],
    },
  ],
};
