import { SidebarItem } from "@/components/Sidebar/types";

import { policyConfigurationSidebar } from "./configuration";

export const policySidebar: SidebarItem = {
  id: 503,

  title: "Policy Management",

  icon: "scroll_text",

  categories: [
    {
      id: 403,
      name: "Policy",
      link: "/features/policy/main",
    },
  ],

  children: [...policyConfigurationSidebar],
};