import { SIDEBARCONTENTICONS } from "./items";

export type IconName = keyof typeof SIDEBARCONTENTICONS;

export interface SidebarCategory {
  id: number;
  name: string;
  link: string;
}

export interface SidebarItem {
  id: number;
  title: string;
  icon: IconName;

  // cuối cùng mới có category
  categories?: SidebarCategory[];
}

export interface SidebarTopic {
  id: number;
  topic: string;
  items: SidebarItem[];
}
