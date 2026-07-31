import { SIDEBARCONTENTICONS } from "./icon";

export type IconName = keyof typeof SIDEBARCONTENTICONS;

export interface SidebarCategory {
  id: number;
  name: string;
  link: string;
}

export interface SidebarItem {
  id: number;
  title: string;
  icon: keyof typeof SIDEBARCONTENTICONS;

  categories?: SidebarCategory[];

  children?: SidebarItem[];
}

export interface SidebarTopic {
  id: number;
  topic: string;
  items: SidebarItem[];
}
