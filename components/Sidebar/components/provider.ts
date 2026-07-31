import { SidebarTopic } from "../types";

export const providerSidebar = {
  id: 3,
  topic: "Provider-Booking",
  items: [
    {
      id: 59,
      title: "Provider",
      icon: "user_cog",
      categories: [
        {
          id: 1,
          name: "Provider",
          link: "/provider_booking",
        },
      ],
    },
  ],
} satisfies SidebarTopic;
