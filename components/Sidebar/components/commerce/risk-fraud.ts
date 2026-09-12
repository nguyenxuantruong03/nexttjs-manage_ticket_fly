import { SidebarItem } from "@/components/Sidebar/types";

export const riskFraudSidebar: SidebarItem = {
  id: 415,

  title: "Risk & Fraud",

  icon: "shield_alert",

  children: [
    {
      id: 411,
      title: "Blacklist Entry",
      icon: "shield_off",
      categories: [
        {
          id: 311,
          name: "Blacklist Entry",
          link: "/commerce/risk-fraud/blacklist-entry",
        },
      ],
    },
    {
      id: 412,
      title: "Whitelist Entry",
      icon: "shield_check",
      categories: [
        {
          id: 312,
          name: "Whitelist Entry",
          link: "/commerce/risk-fraud/whitelist-entry",
        },
      ],
    },
  ],
};
