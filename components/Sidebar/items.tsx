import { SidebarTopic } from "./types";

import { providerSidebar } from "./components/service/provider";

import { serviceSidebar } from "./components/service";
import { productTypesSidebar } from "./components/productTypes";
import { commerceSidebar } from "./components/commerce";
import { statisticSidebar } from "./components/service/statistic";
import { featuresSidebar } from "./components/features";
import { userSidebar } from "./components/service/user";
import { catalogSidebar } from "./components/catalog";
import { dashboardSidebar } from "./components/service/dashboard";
import { systemSidebar } from "./components/system";

export const SIDEBARCONTENTITEMS: SidebarTopic[] = [
  dashboardSidebar,
  statisticSidebar,
  userSidebar,
  providerSidebar,
  serviceSidebar,
  productTypesSidebar,
  catalogSidebar,
  commerceSidebar,
  featuresSidebar,
  systemSidebar,
];

const findOpenParent = (items: any[], pathname: string): string | undefined => {
  for (const item of items) {
    if (item.categories?.some((category: any) => category.link === pathname)) {
      return String(item.id);
    }

    if (item.children) {
      const child = findOpenParent(item.children, pathname);

      if (child) {
        return String(item.id);
      }
    }
  }

  return undefined;
};

export const getDefaultOpenItem = (pathname: string) => {
  for (const group of SIDEBARCONTENTITEMS) {
    const result = findOpenParent(group.items, pathname);

    if (result) {
      return result;
    }
  }

  return undefined;
};
