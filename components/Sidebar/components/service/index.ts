import { SidebarTopic } from "../../types";

import { locationSidebar } from "./location";
import { searchSidebar } from "./search";

export const serviceSidebar: SidebarTopic = {
  id: 4,
  topic: "Service",

  items: [
    locationSidebar,
    searchSidebar,
  ],
};