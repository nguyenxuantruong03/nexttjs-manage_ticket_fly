import { SidebarTopic } from "./types";

import { statisticSidebar } from "./components/statistic";
import { userSidebar } from "./components/user";
import { providerSidebar } from "./components/provider";

import { serviceSidebar } from "./components/service";
import { productTypesSidebar } from "./components/productTypes";

export const SIDEBARCONTENTITEMS: SidebarTopic[] = [
  statisticSidebar,
  userSidebar,
  providerSidebar,
  serviceSidebar,
  productTypesSidebar,
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
