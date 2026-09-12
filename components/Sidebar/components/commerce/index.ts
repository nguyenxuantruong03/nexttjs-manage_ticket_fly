import { SidebarTopic } from "@/components/Sidebar/types";

import { commerceCoreSidebar } from "./core";
import { commercePricingSidebar } from "./pricing";
import { commerceExtraSidebar } from "./extra";
import { commercePromotionSidebar } from "./promotion";
import { commerceMarketingSidebar } from "./marketing";
import { complianceLegalSidebar } from "./compliance-legal";
import { featureFlagSidebar } from "./feature-flag";
import { riskFraudSidebar } from "./risk-fraud";

export const commerceSidebar: SidebarTopic = {
  id: 400,
  topic: "Commerce Management",
  items: [
    {
      id: 400,
      title: "Commerce Management",
      icon: "shopping_cart",
      categories: [
        {
          id: 300,
          name: "Commerce",
          link: "/commerce",
        },
      ],
      children: [
        ...commerceCoreSidebar,
        ...commercePricingSidebar,
        commerceExtraSidebar,
        commercePromotionSidebar,
        ...commerceMarketingSidebar,
        complianceLegalSidebar,
        ...featureFlagSidebar,
        riskFraudSidebar,
      ],
    },
  ],
};
